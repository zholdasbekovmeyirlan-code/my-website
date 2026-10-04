import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/addons/postprocessing/OutputPass.js";
import { buildWolf } from "./wolf.js";

const BG = 0x0b0b0d;

function textRingTexture() {
  const c = document.createElement("canvas");
  c.width = 4096;
  c.height = 128;
  const ctx = c.getContext("2d");
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const draw = () => {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#fff";
    ctx.font = "600 76px Oswald, Impact, sans-serif";
    if ("letterSpacing" in ctx) ctx.letterSpacing = "8px";
    ctx.textBaseline = "middle";
    const phrase = "TOKTAR FIGHT CLUB  ✦  BOXING  ✦  MMA  ✦  DISCIPLINE  ✦  ";
    const pw = ctx.measureText(phrase).width;
    const reps = Math.max(1, Math.round(c.width / pw));
    ctx.save();
    ctx.scale(c.width / (pw * reps), 1);
    for (let i = 0; i < reps; i++) ctx.fillText(phrase, i * pw, 68);
    ctx.restore();
    tex.needsUpdate = true;
  };
  draw();
  if (document.fonts) document.fonts.ready.then(draw);
  return tex;
}

// Dark studio with warm/fire panels: controlled reflections at any viewing angle
function fireEnvironment(renderer) {
  const env = new THREE.Scene();
  env.background = new THREE.Color(0x050506);
  const panel = (color, intensity, w, h, pos) => {
    const m = new THREE.Mesh(
      new THREE.PlaneGeometry(w, h),
      new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(intensity), side: THREE.DoubleSide })
    );
    m.position.set(...pos);
    m.lookAt(0, 0, 0);
    env.add(m);
  };
  panel(0xffffff, 1.8, 6, 2, [-5, 6, 4]);
  panel(0xff6a2b, 2.6, 8, 3, [6, -3, 3]);
  panel(0xff8a40, 1.6, 10, 2, [0, 2, -8]);
  panel(0xff5a20, 1.2, 3, 8, [-7, -1, -2]);
  panel(0x8a96a8, 0.35, 12, 12, [0, 0, 9]);
  const pmrem = new THREE.PMREMGenerator(renderer);
  const tex = pmrem.fromScene(env, 0.02).texture;
  pmrem.dispose();
  return tex;
}

function glowTexture() {
  const c = document.createElement("canvas");
  c.width = c.height = 256;
  const g = c.getContext("2d");
  const grd = g.createRadialGradient(128, 128, 0, 128, 128, 128);
  grd.addColorStop(0, "rgba(255,120,50,0.85)");
  grd.addColorStop(0.35, "rgba(255,90,30,0.3)");
  grd.addColorStop(1, "rgba(255,80,20,0)");
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 256);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function makeEmbers(n, pixelRatio) {
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(n * 3), speed = new Float32Array(n), off = new Float32Array(n), scale = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 14;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 9;
    pos[i * 3 + 2] = 2.5 - Math.random() * 7;
    speed[i] = 0.15 + Math.random() * 0.45;
    off[i] = Math.random() * 100;
    scale[i] = 0.3 + Math.random() * Math.random() * 1.4;
  }
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  geo.setAttribute("aSpeed", new THREE.BufferAttribute(speed, 1));
  geo.setAttribute("aOffset", new THREE.BufferAttribute(off, 1));
  geo.setAttribute("aScale", new THREE.BufferAttribute(scale, 1));
  const mat = new THREE.ShaderMaterial({
    uniforms: { uTime: { value: 0 }, uPR: { value: pixelRatio }, uSize: { value: 70 } },
    vertexShader: /* glsl */ `
      uniform float uTime; uniform float uPR; uniform float uSize;
      attribute float aSpeed; attribute float aOffset; attribute float aScale;
      varying float vAlpha; varying float vHeat;
      void main() {
        vec3 p = position;
        p.y = mod(p.y + uTime * aSpeed + 4.5, 9.0) - 4.5;
        p.x += sin(uTime * 0.6 + aOffset) * 0.35 + sin(uTime * 1.7 + aOffset * 3.0) * 0.08;
        p.z += cos(uTime * 0.5 + aOffset) * 0.2;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = uSize * aScale * uPR / -mv.z;
        float life = (p.y + 4.5) / 9.0;
        vAlpha = smoothstep(0.0, 0.15, life) * (1.0 - smoothstep(0.6, 1.0, life)) * (0.6 + 0.4 * sin(uTime * 6.0 + aOffset * 10.0));
        vHeat = aScale;
      }`,
    fragmentShader: /* glsl */ `
      varying float vAlpha; varying float vHeat;
      void main() {
        float d = length(gl_PointCoord - 0.5);
        float a = smoothstep(0.5, 0.0, d);
        vec3 c = mix(vec3(1.0, 0.33, 0.07), vec3(1.0, 0.78, 0.4), clamp(vHeat * 0.6, 0.0, 1.0));
        gl_FragColor = vec4(c * 1.8, a * vAlpha);
      }`,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });
  const pts = new THREE.Points(geo, mat);
  pts.frustumCulled = false;
  return pts;
}

export function initHero(canvas) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  } catch (e) {
    return null;
  }
  const small = innerWidth < 800;
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.5 : 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BG);
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 60);
  camera.position.set(0, 0, 8);

  scene.environment = fireEnvironment(renderer);

  const rig = new THREE.Group();
  scene.add(rig);
  const { group: wolf, eyeMat } = buildWolf();
  rig.add(wolf);

  // lights follow the emblem's position but not its scale (keeps brightness equal on every screen)
  const lights = new THREE.Group();
  scene.add(lights);
  lights.add(new THREE.AmbientLight(0x30303a, 0.6));
  const key = new THREE.DirectionalLight(0xffffff, 0.9);
  key.position.set(-4.6, 5.8, 6.9);
  lights.add(key, key.target);
  const fireA = new THREE.PointLight(0xff6a2b, 40, 0, 2);
  fireA.position.set(3.7, -1.6, 2.8);
  const fireB = new THREE.PointLight(0xff9a3c, 22, 0, 2);
  fireB.position.set(-3, -2.3, 1.8);
  const rim = new THREE.PointLight(0xff4d1a, 60, 0, 2);
  rim.position.set(0, 1.8, -2.5);
  lights.add(fireA, fireB, rim);

  // rotating text ring
  const ringTex = textRingTexture();
  const ringGeo = new THREE.CylinderGeometry(1.75, 1.75, 0.2, 160, 1, true);
  const ringTilt = new THREE.Group();
  ringTilt.rotation.set(0.32, 0, -0.18);
  const ringSpin = new THREE.Group();
  ringSpin.add(
    new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ map: ringTex, transparent: true, depthWrite: false, color: 0xffd8c0, opacity: 0.95 })),
    new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ map: ringTex, transparent: true, depthWrite: false, side: THREE.BackSide, color: 0xff8a50, opacity: 0.22 }))
  );
  ringTilt.add(ringSpin);
  rig.add(ringTilt);

  const glow = new THREE.Mesh(
    new THREE.PlaneGeometry(7, 7),
    new THREE.MeshBasicMaterial({ map: glowTexture(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.32 })
  );
  scene.add(glow);

  const embers = makeEmbers(small ? 260 : 650, renderer.getPixelRatio());
  scene.add(embers);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.55, 0.5, 0.82);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  let base = { x: 0, y: 0, s: 1 };
  function layout() {
    const w = innerWidth, h = innerHeight;
    renderer.setSize(w, h, false);
    composer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    const halfH = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    const halfW = halfH * camera.aspect;
    if (camera.aspect > 1.05) base = { x: Math.min(halfW * 0.56, 4), y: 0, s: Math.min(1.15, halfH * 0.46) };
    else base = { x: 0, y: halfH * 0.5, s: Math.min(halfW * 0.54, 0.9) };
  }
  layout();
  addEventListener("resize", layout);

  let tx = 0, ty = 0, mx = 0, my = 0, scrollP = 0, active = true, introT = -1;
  addEventListener("pointermove", e => {
    tx = (e.clientX / innerWidth) * 2 - 1;
    ty = (e.clientY / innerHeight) * 2 - 1;
  }, { passive: true });

  const timer = new THREE.Timer();
  function frame(now) {
    requestAnimationFrame(frame);
    timer.update(now);
    if (!active || document.hidden) return;
    const t = timer.getElapsed();
    mx += (tx - mx) * 0.05;
    my += (ty - my) * 0.05;
    const ip = introT < 0 ? 0 : Math.min(1, (t - introT) / 2.2);
    const e = 1 - Math.pow(1 - ip, 4);

    rig.position.set(base.x, base.y + Math.sin(t * 0.9) * 0.07 + scrollP * 1.4, -scrollP * 2.5 - (1 - e) * 6);
    rig.scale.setScalar(base.s * (0.6 + 0.4 * e));
    wolf.rotation.y = mx * 0.5 + Math.sin(t * 0.45) * 0.14 + scrollP * Math.PI + (1 - e) * Math.PI * 1.5;
    wolf.rotation.x = my * 0.25 + Math.sin(t * 0.6) * 0.03;
    ringSpin.rotation.y = t * 0.22;
    eyeMat.emissiveIntensity = 3.5 + Math.sin(t * 3) * 0.8;

    lights.position.copy(rig.position);
    glow.position.set(rig.position.x, rig.position.y, rig.position.z - 1.4);
    glow.scale.setScalar(rig.scale.x * (1 + Math.sin(t * 1.3) * 0.04));
    embers.material.uniforms.uTime.value = t;

    camera.position.x = mx * 0.25;
    camera.position.y = -my * 0.15;
    camera.lookAt(0, 0, 0);
    composer.render();
  }
  requestAnimationFrame(frame);

  return {
    intro() { introT = timer.getElapsed(); },
    setScroll(p) { scrollP = p; },
    setActive(v) { active = v; }
  };
}
