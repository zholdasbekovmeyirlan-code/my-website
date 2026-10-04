import * as THREE from "three";

// Low-poly wolf head (club mark), y-up, roughly x∈[-1,1], y∈[-1.14,1.18].
// Right half outline from top-center down to the chin; the left half is mirrored.
const R_OUT = [
  [0, 0.5], [0.26, 0.58], [0.64, 1.18], [0.74, 0.42], [0.84, 0.08],
  [1.0, -0.2], [0.66, -0.36], [0.62, -0.62], [0.26, -0.86], [0, -1.14]
];
export const OUTLINE = [...R_OUT, ...R_OUT.slice(1, -1).reverse().map(([x, y]) => [-x, y])];

export const T_SHAPE = [
  [-0.42, 0.36], [0.42, 0.36], [0.42, 0.2], [0.11, 0.2], [0.11, -0.62],
  [0, -0.74], [-0.11, -0.62], [-0.11, 0.2], [-0.42, 0.2]
];
export const EYE_R = [[0.18, 0.08], [0.48, 0.14], [0.26, -0.03]];
export const EYE_L = EYE_R.map(([x, y]) => [-x, y]);

const RIM = 0.08;
const BACK = -0.14;
const V = {
  O0: [0, 0.5, RIM], O1: [0.26, 0.58, RIM], O2: [0.64, 1.18, RIM], O3: [0.74, 0.42, RIM],
  O4: [0.84, 0.08, RIM], O5: [1.0, -0.2, RIM], O6: [0.66, -0.36, RIM], O7: [0.62, -0.62, RIM],
  O8: [0.26, -0.86, RIM], O9: [0, -1.14, RIM],
  I0: [0, 0.22, 0.42], I1: [0.34, 0.2, 0.38], I2: [0.55, 0.78, 0.18], I3: [0.62, -0.08, 0.3],
  I4: [0.3, 0, 0.3], I5: [0, -0.4, 0.55], I6: [0.24, -0.52, 0.42], I7: [0, -0.86, 0.5]
};
const TRIS = [
  ["O0", "O1", "I0"], ["O1", "I1", "I0"], ["O1", "O2", "I2"], ["O1", "I2", "I1"],
  ["O2", "O3", "I2"], ["O3", "I1", "I2"], ["O3", "I3", "I1"], ["O3", "O4", "I3"],
  ["O4", "O5", "I3"], ["O5", "O6", "I3"], ["I1", "I3", "I4"], ["I0", "I1", "I4"],
  ["I0", "I4", "I5"], ["I4", "I3", "I6"], ["I4", "I6", "I5"], ["I3", "O6", "I6"],
  ["O6", "O7", "I6"], ["O7", "O8", "I6"], ["I6", "O8", "I7"], ["I5", "I6", "I7"],
  ["O8", "O9", "I7"]
];

const _a = new THREE.Vector3(), _b = new THREE.Vector3(), _c = new THREE.Vector3();
function pushTri(out, a, b, c, wantNormal) {
  _a.fromArray(a); _b.fromArray(b); _c.fromArray(c);
  const n = _b.clone().sub(_a).cross(_c.clone().sub(_a));
  if (n.dot(wantNormal) < 0) { out.push(...a, ...c, ...b); } else { out.push(...a, ...b, ...c); }
}

function faceGeometry() {
  const pos = [];
  const front = new THREE.Vector3(0, 0, 1);
  for (const side of [1, -1]) {
    for (const [p, q, r] of TRIS) {
      const m = k => [V[k][0] * side, V[k][1], V[k][2]];
      pushTri(pos, m(p), m(q), m(r), front);
    }
  }
  // back plate
  const contour = OUTLINE.map(([x, y]) => new THREE.Vector2(x, y));
  for (const [i, j, k] of THREE.ShapeUtils.triangulateShape(contour, [])) {
    const p = OUTLINE[i], q = OUTLINE[j], r = OUTLINE[k];
    pushTri(pos, [p[0], p[1], BACK], [q[0], q[1], BACK], [r[0], r[1], BACK], new THREE.Vector3(0, 0, -1));
  }
  // side walls
  const ccw = THREE.ShapeUtils.isClockWise(contour) ? -1 : 1;
  for (let i = 0; i < OUTLINE.length; i++) {
    const a = OUTLINE[i], b = OUTLINE[(i + 1) % OUTLINE.length];
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const out = new THREE.Vector3(dy * ccw, -dx * ccw, 0);
    const fa = [a[0], a[1], RIM], fb = [b[0], b[1], RIM], ba = [a[0], a[1], BACK], bb = [b[0], b[1], BACK];
    pushTri(pos, fa, fb, bb, out);
    pushTri(pos, fa, bb, ba, out);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
  g.computeVertexNormals();
  return g;
}

function shapeFrom(points) {
  const s = new THREE.Shape();
  points.forEach(([x, y], i) => (i ? s.lineTo(x, y) : s.moveTo(x, y)));
  s.closePath();
  return s;
}

export function buildWolf() {
  const group = new THREE.Group();
  const steel = new THREE.MeshStandardMaterial({ color: 0x3a3a42, metalness: 0.9, roughness: 0.32, envMapIntensity: 1 });
  const chrome = new THREE.MeshStandardMaterial({ color: 0xe4e4ea, metalness: 1, roughness: 0.18, envMapIntensity: 1 });
  const eyeMat = new THREE.MeshStandardMaterial({ color: 0xff5a1a, emissive: 0xff5a1a, emissiveIntensity: 4 });

  const face = faceGeometry();
  group.add(new THREE.Mesh(face, steel));

  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(face, 12),
    new THREE.LineBasicMaterial({ color: 0xff7a3c, transparent: true, opacity: 0.28 })
  );
  group.add(edges);

  const tGeo = new THREE.ExtrudeGeometry(shapeFrom(T_SHAPE), {
    depth: 0.08, bevelEnabled: true, bevelThickness: 0.025, bevelSize: 0.02, bevelSegments: 2
  });
  const tMesh = new THREE.Mesh(tGeo, chrome);
  tMesh.position.z = 0.47;
  group.add(tMesh);

  for (const eye of [EYE_R, EYE_L]) {
    const g = new THREE.ExtrudeGeometry(shapeFrom(eye), { depth: 0.03, bevelEnabled: false });
    const m = new THREE.Mesh(g, eyeMat);
    m.position.z = 0.37;
    group.add(m);
  }
  return { group, eyeMat };
}

// 2D path for canvas drawing (used for textures); maps unit coords to a box
export function wolfPath2D(points, cx, cy, scale) {
  const p = new Path2D();
  points.forEach(([x, y], i) => (i ? p.lineTo(cx + x * scale, cy - y * scale) : p.moveTo(cx + x * scale, cy - y * scale)));
  p.closePath();
  return p;
}
