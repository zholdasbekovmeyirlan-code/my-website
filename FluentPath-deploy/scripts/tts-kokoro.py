"""Records clips for scripts/build-audio.mjs with the Kokoro TTS model (Apache-2.0).

Usage: python tts-kokoro.py jobs.json audio_dir   (model files from KOKORO_MODEL / KOKORO_VOICES or the current folder)
"""
import json
import os
import subprocess
import sys
import tempfile
import time

import soundfile as sf
from kokoro_onnx import Kokoro


def main():
    jobs = json.load(open(sys.argv[1], encoding="utf8"))
    out_dir = sys.argv[2]
    kokoro = Kokoro(os.environ.get("KOKORO_MODEL", "kokoro-v1.0.onnx"), os.environ.get("KOKORO_VOICES", "voices-v1.0.bin"))
    tmp = tempfile.mkdtemp()
    start = time.time()
    for n, job in enumerate(jobs, 1):
        text = job["text"]
        # A lone word or short phrase gets a full stop, so it is read with a natural falling tone.
        if text[-1] not in ".!?,;:":
            text += "."
        lang = "en-gb" if job["kokoro"].startswith("b") else "en-us"
        samples, rate = kokoro.create(text, voice=job["kokoro"], speed=1.0, lang=lang)
        wav = os.path.join(tmp, "clip.wav")
        sf.write(wav, samples, rate)
        dest = os.path.join(out_dir, job["voice"], job["id"] + ".mp3")
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        # Trim silence at both ends, keep a short tail, small mono MP3 that every browser plays.
        trim = "silenceremove=start_periods=1:start_threshold=-50dB"
        subprocess.run(
            ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", wav,
             "-af", f"{trim},areverse,{trim},areverse,apad=pad_dur=0.12",
             "-ac", "1", "-ar", "24000", "-b:a", "40k", "-map_metadata", "-1", dest],
            check=True,
        )
        if n % 50 == 0 or n == len(jobs):
            print(f"  {n}/{len(jobs)} recorded ({time.time() - start:.0f}s)", flush=True)


if __name__ == "__main__":
    main()
