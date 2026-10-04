import * as THREE from "three";
import { SVGLoader } from "three/addons/loaders/SVGLoader.js";
import { MARK } from "./logoData.js";

// Brushed / weathered metal like the club's logo artwork (procedural, no image files)
export function metalTextures(size = 512) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d");
  g.fillStyle = "#bdb7ac";
  g.fillRect(0, 0, size, size);
  // soft patches
  for (let i = 0; i < 70; i++) {
    const x = Math.random() * size, y = Math.random() * size, r = 20 + Math.random() * 90;
    const grd = g.createRadialGradient(x, y, 0, x, y, r);
    const v = Math.random() > 0.5 ? 255 : 0;
    grd.addColorStop(0, `rgba(${v},${v},${v},${0.05 + Math.random() * 0.08})`);
    grd.addColorStop(1, `rgba(${v},${v},${v},0)`);
    g.fillStyle = grd;
    g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  // brushed streaks
  for (let i = 0; i < 2600; i++) {
    const y = Math.random() * size, x = Math.random() * size, w = 20 + Math.random() * 160;
    const v = Math.random() > 0.5 ? 255 : 0;
    g.fillStyle = `rgba(${v},${v},${v},${0.03 + Math.random() * 0.06})`;
    g.fillRect(x, y, w, 1);
  }
  // pits
  for (let i = 0; i < 1400; i++) {
    g.fillStyle = `rgba(0,0,0,${0.1 + Math.random() * 0.25})`;
    g.fillRect(Math.random() * size, Math.random() * size, 1 + Math.random() * 2, 1 + Math.random() * 2);
  }
  const map = new THREE.CanvasTexture(c);
  map.colorSpace = THREE.SRGBColorSpace;
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 8;
  const rough = new THREE.CanvasTexture(c);
  rough.wrapS = rough.wrapT = THREE.RepeatWrapping;
  return { map, rough };
}

export function buildEmblem({ height = 2.3, depth = 70 } = {}) {
  const [, , vw, vh] = MARK.viewBox;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg">${MARK.paths.map(d => `<path d="${d}"/>`).join("")}</svg>`;
  const shapes = new SVGLoader().parse(svg).paths.flatMap(p => p.toShapes(true));
  const geo = new THREE.ExtrudeGeometry(shapes, {
    depth, curveSegments: 6, bevelEnabled: true, bevelThickness: 14, bevelSize: 7, bevelSegments: 3
  });
  geo.translate(-vw / 2, -vh / 2, -depth / 2);
  // UVs of ExtrudeGeometry are in SVG units; bring them to ~0..1
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 700, uv.getY(i) / 700);

  const { map, rough } = metalTextures();
  const mat = new THREE.MeshPhysicalMaterial({
    color: 0xece6da, map, roughnessMap: rough, metalness: 1, roughness: 0.42,
    clearcoat: 0.25, clearcoatRoughness: 0.35, envMapIntensity: 1.1
  });
  const mesh = new THREE.Mesh(geo, mat);
  const s = height / vh;
  mesh.scale.set(s, -s, s); // SVG y-down -> three y-up
  const group = new THREE.Group();
  group.add(mesh);
  return { group, mesh, material: mat };
}
