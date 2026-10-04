import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { OUTLINE, T_SHAPE, EYE_R, EYE_L, wolfPath2D } from "./wolf.js";

const BG = 0x111114;
const BAG_R = 0.62;
const BAG_H = 3.0;

function bagTextures() {
  const W = 1536;
  const H = Math.round((W * BAG_H) / (2 * Math.PI * BAG_R));
  const base = document.createElement("canvas");
  const glow = document.createElement("canvas");
  base.width = glow.width = W;
  base.height = glow.height = H;
  const b = base.getContext("2d");
  const g = glow.getContext("2d");
  const map = new THREE.CanvasTexture(base);
  const emap = new THREE.CanvasTexture(glow);
  map.colorSpace = emap.colorSpace = THREE.SRGBColorSpace;
  map.anisotropy = 8;

  const draw = () => {
    // leather
    b.fillStyle = "#141416";
    b.fillRect(0, 0, W, H);
    for (let i = 0; i < 9000; i++) {
      b.fillStyle = Math.random() > 0.5 ? "rgba(255,255,255,0.025)" : "rgba(0,0,0,0.12)";
      b.fillRect(Math.random() * W, Math.random() * H, 2 + Math.random() * 3, 2 + Math.random() * 3);
    }
    // panel seams + stitches
    for (let k = 0; k < 4; k++) {
      const x = (k / 4) * W + W / 8;
      b.fillStyle = "rgba(0,0,0,0.55)";
      b.fillRect(x - 3, 0, 6, H);
      b.fillStyle = "rgba(255,140,80,0.35)";
      for (let y = 10; y < H; y += 26) { b.fillRect(x - 10, y, 3, 12); b.fillRect(x + 7, y + 13, 3, 12); }
    }
    // orange bands
    const band = (y, h) => {
      const grd = b.createLinearGradient(0, y, 0, y + h);
      grd.addColorStop(0, "#c94a17"); grd.addColorStop(0.5, "#ff6a2b"); grd.addColorStop(1, "#c94a17");
      b.fillStyle = grd;
      b.fillRect(0, y, W, h);
      b.fillStyle = "rgba(0,0,0,0.35)";
      b.fillRect(0, y, W, 3); b.fillRect(0, y + h - 3, W, 3);
    };
    band(H * 0.07, H * 0.05);
    band(H * 0.86, H * 0.05);

    // front logo (u = 0.5 faces the camera)
    g.fillStyle = "#000";
    g.fillRect(0, 0, W, H);
    const cx = W / 2, logoY = H * 0.36, s = H * 0.13;
    for (const ctx of [b, g]) {
      ctx.save();
      ctx.lineJoin = "round";
      ctx.strokeStyle = "#ff6a2b";
      ctx.lineWidth = 7;
      ctx.stroke(wolfPath2D(OUTLINE, cx, logoY, s));
      ctx.fillStyle = "#e8e8ec";
      ctx.fill(wolfPath2D(T_SHAPE, cx, logoY, s));
      ctx.fillStyle = "#ff6a2b";
      ctx.fill(wolfPath2D(EYE_R, cx, logoY, s));
      ctx.fill(wolfPath2D(EYE_L, cx, logoY, s));
      ctx.fillStyle = "#ff6a2b";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `700 ${Math.round(H * 0.12)}px Oswald, Impact, sans-serif`;
      if ("letterSpacing" in ctx) ctx.letterSpacing = "10px";
      ctx.fillText("TOKTAR", cx, H * 0.6);
      ctx.fillStyle = "#cfcfd6";
      ctx.font = `600 ${Math.round(H * 0.04)}px Oswald, Impact, sans-serif`;
      if ("letterSpacing" in ctx) ctx.letterSpacing = "18px";
      ctx.fillText("FIGHT CLUB", cx, H * 0.69);
      ctx.restore();
    }
    // keep only orange parts glowing
    g.globalCompositeOperation = "multiply";
    g.fillStyle = "#ff8040";
    g.fillRect(0, 0, W, H);
    g.globalCompositeOperation = "source-over";
    map.needsUpdate = emap.needsUpdate = true;
  };
  draw();
  if (document.fonts) document.fonts.ready.then(draw);
  return { map, emap };
}

function bagGeometry() {
  // profile from bottom to top so lathe normals face outwards
  const pts = [];
  const rb = 0.18, rt = 0.12;
  pts.push(new THREE.Vector2(0.0001, 0));
  for (let i = 0; i <= 8; i++) {
    const a = -Math.PI / 2 + (i / 8) * (Math.PI / 2);
    pts.push(new THREE.Vector2(BAG_R - rb + rb * Math.cos(a), rb + rb * Math.sin(a)));
  }
  for (let i = 1; i < 20; i++) pts.push(new THREE.Vector2(BAG_R, rb + (i / 20) * (BAG_H - rb - rt)));
  for (let i = 0; i <= 6; i++) {
    const a = (i / 6) * (Math.PI / 2);
    pts.push(new THREE.Vector2(BAG_R - rt + rt * Math.cos(a), BAG_H - rt + rt * Math.sin(a)));
  }
  pts.push(new THREE.Vector2(0.0001, BAG_H));
  return new THREE.LatheGeometry(pts, 72);
}

function cylinderBetween(a, b, radius, mat) {
  const dir = b.clone().sub(a);
  const m = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, dir.length(), 8), mat);
  m.position.copy(a).add(b).multiplyScalar(0.5);
  m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
  m.castShadow = true;
  return m;
}

export function initBag(canvas, ui) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  } catch (e) {
    return null;
  }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(BG);
  scene.fog = new THREE.Fog(BG, 10, 20);
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
  const camBase = new THREE.Vector3(0, 0.3, 8.6);
  const lookAt = new THREE.Vector3(0, -0.15, 0);
  camera.position.copy(camBase);

  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  // floor + ring marking
  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(14, 64),
    new THREE.MeshStandardMaterial({ color: 0x0f0f12, roughness: 0.92, metalness: 0, envMapIntensity: 0.1 })
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -2.75;
  floor.receiveShadow = true;
  scene.add(floor);
  const mark = new THREE.Mesh(
    new THREE.RingGeometry(1.5, 1.55, 96),
    new THREE.MeshBasicMaterial({ color: 0xff6a2b, transparent: true, opacity: 0.55 })
  );
  mark.rotation.x = -Math.PI / 2;
  mark.position.y = -2.74;
  scene.add(mark);

  // lights
  scene.add(new THREE.HemisphereLight(0x3a3a48, 0x0b0b0d, 0.6));
  const spot = new THREE.SpotLight(0xfff0e0, 170, 30, 0.42, 0.55, 1.6);
  spot.position.set(1.2, 7, 3);
  spot.target.position.set(0, -0.5, 0);
  spot.castShadow = true;
  spot.shadow.mapSize.set(1024, 1024);
  spot.shadow.bias = -0.0005;
  scene.add(spot, spot.target);
  const fireL = new THREE.PointLight(0xff6a2b, 40, 0, 2);
  fireL.position.set(-3.2, 0.5, 1.5);
  const fireR = new THREE.PointLight(0xff9a3c, 18, 0, 2);
  fireR.position.set(3.5, -1, 2);
  const rimL = new THREE.PointLight(0xff5020, 50, 0, 2);
  rimL.position.set(0, 1, -3);
  scene.add(fireL, fireR, rimL);

  const metal = new THREE.MeshStandardMaterial({ color: 0x8a8a92, metalness: 1, roughness: 0.3 });

  // static chain to the ceiling
  const PIVOT_Y = 2.35;
  const linkGeo = new THREE.TorusGeometry(0.075, 0.022, 8, 16);
  for (let i = 0; i < 9; i++) {
    const l = new THREE.Mesh(linkGeo, metal);
    l.position.set(0, PIVOT_Y + 0.1 + i * 0.13, 0);
    l.rotation.y = i % 2 ? Math.PI / 2 : 0;
    l.scale.y = 1.3;
    scene.add(l);
  }

  // swinging part
  const pivot = new THREE.Group();
  pivot.position.y = PIVOT_Y;
  scene.add(pivot);
  const swivel = new THREE.Mesh(new THREE.SphereGeometry(0.07, 16, 12), metal);
  pivot.add(swivel);
  const TOP = -0.66;
  for (let k = 0; k < 4; k++) {
    const a = (k / 4) * Math.PI * 2 + Math.PI / 4;
    pivot.add(cylinderBetween(new THREE.Vector3(0, 0, 0), new THREE.Vector3(Math.cos(a) * 0.45, TOP + 0.02, Math.sin(a) * 0.45), 0.014, metal));
  }
  const topRing = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.035, 10, 48), metal);
  topRing.rotation.x = Math.PI / 2;
  topRing.position.y = TOP;
  pivot.add(topRing);

  const { map, emap } = bagTextures();
  const bagMat = new THREE.MeshPhysicalMaterial({
    map, emissiveMap: emap, emissive: 0xffffff, emissiveIntensity: 0.55,
    roughness: 0.62, metalness: 0.05, clearcoat: 0.15, clearcoatRoughness: 0.5, envMapIntensity: 0.45
  });
  const bagHolder = new THREE.Group();
  bagHolder.position.y = TOP - BAG_H;
  pivot.add(bagHolder);
  const bag = new THREE.Mesh(bagGeometry(), bagMat);
  bag.rotation.y = Math.PI; // texture u = 0.5 faces the camera
  bag.castShadow = true;
  bagHolder.add(bag);

  // sparks
  const SPARKS = 90;
  const sGeo = new THREE.BufferGeometry();
  const sPos = new Float32Array(SPARKS * 3), sCol = new Float32Array(SPARKS * 3);
  const sVel = Array.from({ length: SPARKS }, () => new THREE.Vector3());
  const sLife = new Float32Array(SPARKS), sMax = new Float32Array(SPARKS);
  sGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
  sGeo.setAttribute("color", new THREE.BufferAttribute(sCol, 3));
  const sparks = new THREE.Points(sGeo, new THREE.PointsMaterial({
    size: 0.07, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  }));
  sparks.frustumCulled = false;
  scene.add(sparks);
  let sNext = 0;
  function burst(point, power) {
    const n = Math.round(12 + power * 30);
    for (let i = 0; i < n; i++) {
      const k = sNext++ % SPARKS;
      sPos[k * 3] = point.x; sPos[k * 3 + 1] = point.y; sPos[k * 3 + 2] = point.z;
      sVel[k].set((Math.random() - 0.5) * 3.5, Math.random() * 2.8, 0.5 + Math.random() * 2.5).multiplyScalar(0.6 + power);
      sMax[k] = sLife[k] = 0.4 + Math.random() * 0.5;
    }
  }

  const timer = new THREE.Timer();
  // pendulum state
  let rx = 0, rz = 0, ry = 0, vx = 0, vz = 0, vry = 0, squash = 0, squashV = 0, shake = 0, lastHit = -10;

  function size() {
    const r = canvas.parentElement.getBoundingClientRect();
    const w = Math.max(1, r.width), h = Math.max(1, r.height);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camBase.z = camera.aspect < 0.8 ? 10.4 : 8.6;
    camera.updateProjectionMatrix();
  }
  size();
  new ResizeObserver(size).observe(canvas.parentElement);

  // input
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const trail = [];
  function pick(e) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    return ray.intersectObject(bag, false)[0] || null;
  }
  let hovering = false;
  canvas.addEventListener("pointermove", e => {
    trail.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    if (trail.length > 8) trail.shift();
    if (e.pointerType === "mouse") {
      const h = !!pick(e);
      if (h !== hovering) { hovering = h; ui.onHover && ui.onHover(h); }
    }
  });
  canvas.addEventListener("pointerleave", () => { if (hovering) { hovering = false; ui.onHover && ui.onHover(false); } });

  function punch(point, power, silent) {
    const local = pivot.worldToLocal(point.clone());
    vx += 2.4 * power;
    vz -= local.x * 1.6 * power;
    vry += local.x * 4 * power;
    squashV += power * 3;
    if (power > 0.6) shake = Math.max(shake, power * 0.12);
    burst(point, power);
    lastHit = timer.getElapsed();
    if (!silent && ui.onHit) ui.onHit(power);
  }

  canvas.addEventListener("pointerdown", e => {
    const hit = pick(e);
    if (!hit) return;
    let power;
    const now = performance.now();
    const recent = trail.filter(p => now - p.t < 120);
    if (e.pointerType === "mouse" && recent.length > 1) {
      const a = recent[0], b = recent[recent.length - 1];
      const speed = Math.hypot(b.x - a.x, b.y - a.y) / Math.max(16, b.t - a.t);
      power = Math.min(1, 0.25 + speed / 2.2);
    } else {
      power = 0.55 + Math.random() * 0.45;
    }
    power = Math.min(1, power * (0.92 + Math.random() * 0.12));
    punch(hit.point, power);
  });

  let active = false, demoDone = false;
  new IntersectionObserver(([en]) => {
    active = en.isIntersecting;
    if (active && !demoDone) {
      demoDone = true;
      setTimeout(() => punch(new THREE.Vector3(0.15, 0.4, BAG_R), 0.55, true), 700);
    }
  }, { threshold: 0.15 }).observe(canvas);

  const col = new THREE.Color();
  function frame(now) {
    requestAnimationFrame(frame);
    timer.update(now);
    const dt = Math.min(timer.getDelta(), 0.05);
    if (!active || document.hidden) return;
    const t = timer.getElapsed();

    const idle = t - lastHit > 3 ? 0.05 : 0;
    vx += (-3.2 * Math.sin(rx) - 0.4 * vx + Math.sin(t * 1.3) * idle) * dt;
    vz += (-3.2 * Math.sin(rz) - 0.4 * vz + Math.cos(t * 0.9) * idle * 0.6) * dt;
    vry += (-2.2 * ry - 0.9 * vry) * dt;
    squashV += (-60 * squash - 7 * squashV) * dt;
    rx += vx * dt; rz += vz * dt; ry += vry * dt; squash += squashV * dt;
    rx = THREE.MathUtils.clamp(rx, -0.9, 0.9);
    rz = THREE.MathUtils.clamp(rz, -0.9, 0.9);
    pivot.rotation.set(rx, ry, rz);
    const sq = THREE.MathUtils.clamp(squash * 0.04, -0.08, 0.08);
    bag.scale.set(1 - sq, 1 + sq * 0.5, 1 - sq);

    for (let k = 0; k < SPARKS; k++) {
      if (sLife[k] <= 0) { sCol[k * 3] = sCol[k * 3 + 1] = sCol[k * 3 + 2] = 0; continue; }
      sLife[k] -= dt;
      sVel[k].y -= 6 * dt;
      sPos[k * 3] += sVel[k].x * dt; sPos[k * 3 + 1] += sVel[k].y * dt; sPos[k * 3 + 2] += sVel[k].z * dt;
      const f = Math.max(0, sLife[k] / sMax[k]);
      col.setRGB(1, 0.45 + f * 0.4, 0.15).multiplyScalar(f * 1.6);
      sCol[k * 3] = col.r; sCol[k * 3 + 1] = col.g; sCol[k * 3 + 2] = col.b;
    }
    sGeo.attributes.position.needsUpdate = true;
    sGeo.attributes.color.needsUpdate = true;

    shake *= 0.88;
    camera.position.set(
      camBase.x + (Math.random() - 0.5) * shake,
      camBase.y + (Math.random() - 0.5) * shake,
      camBase.z
    );
    camera.lookAt(lookAt);
    renderer.render(scene, camera);
  }
  requestAnimationFrame(frame);
  return { punch };
}
