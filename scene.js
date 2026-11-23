
import * as THREE from './vendor/three/three.module.js';
import { RoundedBoxGeometry } from './vendor/three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from './vendor/three/addons/environments/RoomEnvironment.js';
await document.fonts.load("800 16px Manrope");

/* iPhone 17 Pro Max laranja-cósmico, proporções reais (163,4 × 78 × 8,75 mm) */
const introEl = document.getElementById('inicio');
const canvas = document.getElementById('ph3d');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fail = () => introEl.classList.add('no3d');

try {
  if (reduce) throw 0;
  init();
} catch (e) { if (e !== 0) fail(); }

function init() {
  const W = 0.78, H = 1.634, D = 0.0875, R = 0.125;
  const SW = W - 0.064, SH = H - 0.064, SR = 0.094;
  const CW = 600, CH = Math.round(CW * SH / SW);       // coordenadas de desenho
  const PW = lowPowerTex() ? 400 : 480, PK = PW / CW, PXH = Math.round(CH * PK); // pixels reais da textura
  const OR = '#F4510B';

  function lowPowerTex() { return (navigator.hardwareConcurrency || 8) <= 4 || matchMedia('(max-width:700px)').matches; }
  const lowPower = (navigator.hardwareConcurrency || 8) <= 4 || matchMedia('(max-width:700px)').matches;
  const dpr = Math.min(devicePixelRatio || 1, lowPower ? 1.1 : 1.5);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: dpr < 1.5, powerPreference: lowPower ? 'default' : 'high-performance' });
  renderer.setPixelRatio(dpr);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = pm.fromScene(room, 0.04).texture;
  room.dispose();
  pm.dispose();
  const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(2, 3, 4); scene.add(key);
  const rim = new THREE.DirectionalLight(0xff8a50, 1.2); rim.position.set(-3, 1, -2); scene.add(rim);

  const camera = new THREE.PerspectiveCamera(30, 1, 0.02, 50);
  const T = Math.tan(THREE.MathUtils.degToRad(15));

  /* ---------- formas ---------- */
  function rr(w, h, r) {
    const s = new THREE.Shape(), x = -w / 2, y = -h / 2;
    s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r);
    s.lineTo(x + w, y + h - r); s.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
    s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y);
    return s;
  }
  function flat(w, h, r, seg = 20) {
    const g = new THREE.ShapeGeometry(rr(w, h, r), seg);
    const pos = g.attributes.position, uv = g.attributes.uv;
    for (let i = 0; i < pos.count; i++) uv.setXY(i, (pos.getX(i) + w / 2) / w, (pos.getY(i) + h / 2) / h);
    return g;
  }
  function slab(w, h, r, depth, bev) {
    const g = new THREE.ExtrudeGeometry(rr(w - 2 * bev, h - 2 * bev, Math.max(0.01, r - bev)), {
      depth: Math.max(0.0005, depth - 2 * bev), bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelSegments: 4, curveSegments: 20,
    });
    g.translate(0, 0, -(depth - 2 * bev) / 2);
    g.computeVertexNormals();
    return g;
  }

  /* ---------- materiais ---------- */
  const alu = new THREE.MeshPhysicalMaterial({ color: 0xE0662A, metalness: 0.62, roughness: 0.34, clearcoat: 0.25, clearcoatRoughness: 0.4 });
  const aluDark = new THREE.MeshPhysicalMaterial({ color: 0xB9501D, metalness: 0.7, roughness: 0.3 });
  const backGlass = new THREE.MeshPhysicalMaterial({ color: 0xE77A42, metalness: 0.15, roughness: 0.55, clearcoat: 0.6, clearcoatRoughness: 0.5 });
  const blackGlass = new THREE.MeshPhysicalMaterial({ color: 0x050505, metalness: 0.1, roughness: 0.08, clearcoat: 1, clearcoatRoughness: 0.05 });
  const lensGlass = new THREE.MeshPhysicalMaterial({ color: 0x0a0d14, metalness: 0.3, roughness: 0.05, clearcoat: 1, clearcoatRoughness: 0.02 });
  const lensInner = new THREE.MeshStandardMaterial({ color: 0x1b2540, metalness: 0.6, roughness: 0.15 });

  const phone = new THREE.Group();
  const tilt = new THREE.Group(); tilt.add(phone); scene.add(tilt);

  phone.add(new THREE.Mesh(slab(W, H, R, D, 0.026), alu));

  // frente: vidro preto + tela
  const front = new THREE.Mesh(flat(W - 0.044, H - 0.044, R - 0.022, 24), blackGlass);
  front.position.z = D / 2 + 0.0006; phone.add(front);
  const scr = document.createElement('canvas'); scr.width = PW; scr.height = PXH;
  const sx = scr.getContext('2d'); sx.setTransform(PK, 0, 0, PK, 0, 0);
  const tex = new THREE.CanvasTexture(scr);
  tex.colorSpace = THREE.SRGBColorSpace; tex.anisotropy = 4; tex.generateMipmaps = false; tex.minFilter = THREE.LinearFilter;
  const screenMat = new THREE.MeshBasicMaterial({ map: tex, toneMapped: false });
  const screen = new THREE.Mesh(flat(SW, SH, SR, 24), screenMat);
  screen.position.z = D / 2 + 0.0012; phone.add(screen);

  // verso: vidro fosco + platô de alumínio de ponta a ponta com as câmeras
  const back = new THREE.Mesh(flat(W - 0.05, H - 0.05, R - 0.025, 24), backGlass);
  back.rotation.y = Math.PI; back.position.z = -D / 2 - 0.0006; phone.add(back);
  const PH = 0.4, PY = H / 2 - 0.026 - PH / 2;
  const plateau = new THREE.Mesh(slab(W - 0.034, PH, 0.11, 0.03, 0.012), alu);
  plateau.position.set(0, PY, -D / 2 - 0.006); phone.add(plateau);
  const pz = -D / 2 - 0.021;
  function lens(x, y) {
    const g = new THREE.Group();
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.078, 0.08, 0.022, 48), aluDark);
    ring.rotation.x = Math.PI / 2; g.add(ring);
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(0.064, 0.064, 0.024, 48), lensGlass);
    glass.rotation.x = Math.PI / 2; g.add(glass);
    const eye = new THREE.Mesh(new THREE.CircleGeometry(0.03, 32), lensInner);
    eye.rotation.y = Math.PI; eye.position.z = -0.0125; g.add(eye);
    g.position.set(x, y, pz - 0.01); phone.add(g);
  }
  // visto por trás, as lentes ficam à esquerda (lado +x do modelo)
  lens(0.235, PY + 0.09); lens(0.235, PY - 0.09); lens(0.085, PY);
  const small = (x, y, r, m) => { const c = new THREE.Mesh(new THREE.CylinderGeometry(r, r, 0.006, 32), m); c.rotation.x = Math.PI / 2; c.position.set(x, y, pz - 0.002); phone.add(c); };
  small(-0.04, PY + 0.09, 0.03, new THREE.MeshStandardMaterial({ color: 0xf3ead8, roughness: 0.3, emissive: 0x221a10 }));
  small(-0.04, PY - 0.09, 0.026, lensGlass);
  small(-0.13, PY + 0.09, 0.009, lensGlass);

  // botões laterais
  const btn = (x, y, h) => { const b = new THREE.Mesh(new RoundedBoxGeometry(0.012, h, 0.04, 3, 0.005), alu); b.position.set(x, y, 0); phone.add(b); };
  btn(-W / 2 - 0.002, H / 2 - 0.3, 0.07);   // ação
  btn(-W / 2 - 0.002, H / 2 - 0.43, 0.12);  // volume +
  btn(-W / 2 - 0.002, H / 2 - 0.58, 0.12);  // volume −
  btn(W / 2 + 0.002, H / 2 - 0.46, 0.2);    // lateral
  const cc = new THREE.Mesh(new RoundedBoxGeometry(0.01, 0.15, 0.036, 3, 0.004), blackGlass); // Controle da Câmera
  cc.position.set(W / 2 + 0.002, -0.2, 0); phone.add(cc);

  /* ---------- telas (pré-desenhadas uma vez) ---------- */
  const mk = () => { const c = document.createElement('canvas'); c.width = PW; c.height = PXH; const x = c.getContext('2d'); x.setTransform(PK, 0, 0, PK, 0, 0); return [c, x]; };
  // hora e data reais do aparelho de quem visita
  const now = () => new Date();
  const hhmm = d => d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const longDate = d => { const t = d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' }); return t.charAt(0).toUpperCase() + t.slice(1); };
  const wk = d => d.toLocaleDateString('pt-BR', { weekday: 'short' }).replace('.', '').slice(0, 3).toUpperCase();
  const FONT = '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif';
  const rrect = (c, x, y, w, h, r) => { c.beginPath(); c.roundRect ? c.roundRect(x, y, w, h, r) : c.rect(x, y, w, h); };
  function wallpaper(c) {
    c.fillStyle = '#0d0d0d'; c.fillRect(0, 0, CW, CH);
    let g = c.createRadialGradient(CW * 0.2, CH * 0.78, 10, CW * 0.2, CH * 0.78, CW * 1.1);
    g.addColorStop(0, '#F4510B'); g.addColorStop(0.45, 'rgba(160,45,5,.65)'); g.addColorStop(1, 'rgba(13,13,13,0)');
    c.fillStyle = g; c.fillRect(0, 0, CW, CH);
    g = c.createRadialGradient(CW * 0.95, CH * 0.2, 10, CW * 0.95, CH * 0.2, CW * 0.8);
    g.addColorStop(0, 'rgba(255,140,70,.55)'); g.addColorStop(1, 'rgba(13,13,13,0)');
    c.fillStyle = g; c.fillRect(0, 0, CW, CH);
  }
  function status(c, dark = false) {
    c.fillStyle = dark ? '#111' : '#fff';
    c.font = `600 30px ${FONT}`; c.textBaseline = 'middle'; c.textAlign = 'left';
    c.fillText(hhmm(now()), 64, 62);
    // sinal, wi-fi, bateria (genéricos)
    for (let i = 0; i < 4; i++) c.fillRect(CW - 190 + i * 11, 70 - i * 6, 7, 8 + i * 6);
    c.beginPath(); c.arc(CW - 128, 74, 18, -Math.PI * 0.78, -Math.PI * 0.22); c.lineTo(CW - 128, 74); c.fill();
    c.lineWidth = 2.5; c.strokeStyle = c.fillStyle; rrect(c, CW - 98, 52, 46, 22, 7); c.stroke();
    rrect(c, CW - 94, 56, 34, 14, 4); c.fill();
  }
  function island(c) { c.fillStyle = '#000'; rrect(c, CW / 2 - 92, 26, 184, 56, 28); c.fill(); }
  function homeBar(c, dark = false) { c.fillStyle = dark ? 'rgba(0,0,0,.75)' : 'rgba(255,255,255,.85)'; rrect(c, CW / 2 - 100, CH - 30, 200, 9, 5); c.fill(); }

  const APPS = [['Telefone', '#34C759'], ['Mensagens', '#30D158'], ['Câmera', '#3a3a3c'], ['Fotos', '#ffffff'],
    ['Chrome', '#ffffff'], ['Mapas', '#5AC8FA'], ['Clima', '#0A84FF'], ['Relógio', '#1c1c1e'],
    ['Notas', '#FFD60A'], ['Música', '#FF375F'], ['Ajustes', '#8e8e93'], ['Calendário', '#ffffff']];
  // ícones próprios no estilo do sistema (fundo em degradê + símbolo em linha), sem copiar ícones de marca
  const ICO = {
    Telefone: ['#4BE08A', '#169A4F'], Mensagens: ['#5CE38F', '#1B9E5A'], 'Câmera': ['#6B6F78', '#2B2D33'], Fotos: ['#FFB36B', '#F4510B'],
    Chrome: ['#6FB7FF', '#1F5FD6'], Mapas: ['#8EE3C8', '#2C9F8A'], Clima: ['#63B3FF', '#1D4FBF'], 'Relógio': ['#2E2F34', '#0E0E10'],
    Notas: ['#FFE27A', '#F2B705'], 'Música': ['#FF7A8E', '#E0244A'], Ajustes: ['#B4B7BF', '#6C7079'], 'Calendário': ['#FFFFFF', '#ECECEF'],
  };
  // ícones fornecidos pelo cliente (180 px, WebP); enquanto carregam, vale o desenho próprio
  const ICON_SRC = {"Telefone": "assets/icones/telefone.webp", "Mensagens": "assets/icones/mensagens.webp", "Câmera": "assets/icones/camera.webp", "Fotos": "assets/icones/fotos.webp", "Chrome": "assets/icones/chrome.webp", "Mapas": "assets/icones/mapas.webp", "Clima": "assets/icones/clima.webp", "Relógio": "assets/icones/relogio.webp", "Notas": "assets/icones/notas.webp", "Música": "assets/icones/musica.webp", "Ajustes": "assets/icones/ajustes.webp", "Calendário": "assets/icones/calendario.webp"};
  const IMG = {};
  let iconsLeft = Object.keys(ICON_SRC).length;
  Object.entries(ICON_SRC).forEach(([n, src]) => { const im = new Image(); im.decoding = 'async';
    im.onload = () => { IMG[n] = im; if (--iconsLeft === 0 && typeof buildScreens === 'function') { buildScreens(); lastQ = -1; } };
    im.onerror = () => { --iconsLeft; }; im.src = src; });
  const mon = d => d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '').slice(0, 3).toUpperCase();
  function icon(c, x, y, s, name) {
    const im = IMG[name];
    if (im) {
      c.save(); rrect(c, x, y, s, s, s * 0.235); c.clip(); c.drawImage(im, x, y, s, s);
      if (name === 'Relógio') { // ponteiros na hora real
        const d = now(), sec = d.getSeconds(), mi = d.getMinutes() + sec / 60, hr = (d.getHours() % 12) + mi / 60;
        const cx = x + s / 2, cy = y + s / 2;
        c.fillStyle = '#F2F2F2'; c.font = `500 ${s * 0.135}px ${FONT}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText('6', cx, y + s * 0.775);
        const hand = (ang, len, wid, col, tail = 0) => { c.save(); c.translate(cx, cy); c.rotate(ang); c.strokeStyle = col; c.lineCap = 'round'; c.lineWidth = wid * s;
          c.shadowColor = 'rgba(0,0,0,.45)'; c.shadowBlur = s * 0.03; c.beginPath(); c.moveTo(0, tail * s); c.lineTo(0, -len * s); c.stroke(); c.restore(); };
        hand(hr / 12 * Math.PI * 2, 0.06, 0.016, '#fff'); hand(hr / 12 * Math.PI * 2, 0.25, 0.042, '#fff');
        hand(mi / 60 * Math.PI * 2, 0.06, 0.016, '#fff'); hand(mi / 60 * Math.PI * 2, 0.38, 0.042, '#fff');
        hand(sec / 60 * Math.PI * 2, 0.41, 0.012, '#F39A1E', 0.08);
        c.fillStyle = '#fff'; c.beginPath(); c.arc(cx, cy, s * 0.03, 0, 7); c.fill();
        c.fillStyle = '#F39A1E'; c.beginPath(); c.arc(cx, cy, s * 0.018, 0, 7); c.fill();
        c.fillStyle = '#222'; c.beginPath(); c.arc(cx, cy, s * 0.007, 0, 7); c.fill();
      }
      if (name === 'Calendário') { // data real por cima da arte
        c.fillStyle = '#F2594F'; c.fillRect(x, y, s, s * 0.3);
        c.fillStyle = '#F6F6F4'; c.fillRect(x, y + s * 0.3, s, s * 0.66);
        c.textAlign = 'center'; c.textBaseline = 'middle';
        c.fillStyle = '#fff'; c.font = `700 ${s * 0.2}px ${FONT}`; c.fillText(mon(now()), x + s / 2, y + s * 0.165);
        c.fillStyle = '#222'; c.font = `300 ${s * 0.5}px ${FONT}`; c.fillText(String(now().getDate()), x + s / 2, y + s * 0.63);
      }
      c.restore(); return;
    }
    const [a, b] = ICO[name] || ['#888', '#444'];
    c.save();
    const g = c.createLinearGradient(x, y, x, y + s); g.addColorStop(0, a); g.addColorStop(1, b);
    c.fillStyle = g; rrect(c, x, y, s, s, s * 0.235); c.fill();
    const hl = c.createLinearGradient(x, y, x, y + s * 0.5); hl.addColorStop(0, 'rgba(255,255,255,.22)'); hl.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = hl; rrect(c, x, y, s, s * 0.5, s * 0.235); c.fill();
    c.translate(x + s / 2, y + s / 2);
    c.strokeStyle = '#fff'; c.fillStyle = '#fff'; c.lineWidth = s * 0.075; c.lineCap = 'round'; c.lineJoin = 'round';
    const L = (...p) => { c.beginPath(); c.moveTo(p[0] * s, p[1] * s); for (let i = 2; i < p.length; i += 2) c.lineTo(p[i] * s, p[i + 1] * s); c.stroke(); };
    switch (name) {
      case 'Telefone':
        c.beginPath(); c.moveTo(-0.22 * s, -0.24 * s); c.quadraticCurveTo(-0.3 * s, 0.05 * s, -0.05 * s, 0.2 * s); c.quadraticCurveTo(0.12 * s, 0.3 * s, 0.24 * s, 0.2 * s); c.stroke();
        L(-0.22, -0.24, -0.12, -0.27, -0.06, -0.12, -0.14, -0.06); L(0.24, 0.2, 0.27, 0.1, 0.13, 0.03, 0.07, 0.11); break;
      case 'Mensagens':
        c.lineWidth = s * 0.07; rrect(c, -0.28 * s, -0.22 * s, 0.56 * s, 0.38 * s, 0.14 * s); c.stroke(); L(-0.12, 0.16, -0.2, 0.28, 0.02, 0.16);
        c.beginPath(); [-0.12, 0, 0.12].forEach(k => c.arc(k * s, -0.03 * s, s * 0.035, 0, 7)); c.fill(); break;
      case 'Câmera':
        c.lineWidth = s * 0.065; rrect(c, -0.3 * s, -0.17 * s, 0.6 * s, 0.4 * s, 0.08 * s); c.stroke(); L(-0.1, -0.17, -0.06, -0.25, 0.06, -0.25, 0.1, -0.17);
        c.beginPath(); c.arc(0, 0.03 * s, 0.11 * s, 0, 7); c.stroke(); break;
      case 'Fotos':
        c.lineWidth = s * 0.065; rrect(c, -0.28 * s, -0.22 * s, 0.56 * s, 0.44 * s, 0.07 * s); c.stroke();
        L(-0.24, 0.16, -0.06, -0.02, 0.06, 0.08, 0.13, 0.02, 0.24, 0.14); c.beginPath(); c.arc(0.12 * s, -0.1 * s, 0.045 * s, 0, 7); c.fill(); break;
      case 'Chrome':
        c.lineWidth = s * 0.06; c.beginPath(); c.arc(0, 0, 0.28 * s, 0, 7); c.stroke();
        c.beginPath(); c.ellipse(0, 0, 0.12 * s, 0.28 * s, 0, 0, 7); c.stroke(); L(-0.28, 0, 0.28, 0); L(-0.24, -0.13, 0.24, -0.13); L(-0.24, 0.13, 0.24, 0.13); break;
      case 'Mapas':
        c.beginPath(); c.moveTo(0, 0.28 * s); c.bezierCurveTo(-0.3 * s, -0.02 * s, -0.2 * s, -0.3 * s, 0, -0.3 * s); c.bezierCurveTo(0.2 * s, -0.3 * s, 0.3 * s, -0.02 * s, 0, 0.28 * s); c.fill();
        c.fillStyle = b; c.beginPath(); c.arc(0, -0.08 * s, 0.08 * s, 0, 7); c.fill(); break;
      case 'Clima':
        c.fillStyle = '#FFD45A'; c.beginPath(); c.arc(-0.08 * s, -0.08 * s, 0.14 * s, 0, 7); c.fill();
        c.fillStyle = '#fff'; c.beginPath(); c.arc(0.02 * s, 0.1 * s, 0.12 * s, 0, 7); c.arc(0.15 * s, 0.06 * s, 0.1 * s, 0, 7); c.arc(-0.12 * s, 0.14 * s, 0.08 * s, 0, 7); c.fill();
        c.fillRect(-0.12 * s, 0.12 * s, 0.36 * s, 0.1 * s); break;
      case 'Relógio': {
        c.lineWidth = s * 0.05; c.beginPath(); c.arc(0, 0, 0.3 * s, 0, 7); c.stroke();
        const d = now(), hA = ((d.getHours() % 12) + d.getMinutes() / 60) / 12 * Math.PI * 2, mA = d.getMinutes() / 60 * Math.PI * 2;
        L(0, 0, Math.sin(hA) * 0.15, -Math.cos(hA) * 0.15); c.strokeStyle = '#F4510B'; c.lineWidth = s * 0.04; L(0, 0, Math.sin(mA) * 0.23, -Math.cos(mA) * 0.23); break; }
      case 'Notas':
        c.strokeStyle = 'rgba(120,80,0,.75)'; c.lineWidth = s * 0.055; [-0.12, 0.02, 0.16].forEach((k, i) => L(-0.22, k, i === 2 ? 0.06 : 0.22, k));
        c.save(); rrect(c, -0.5 * s, -0.5 * s, s, s, s * 0.235); c.clip(); c.fillStyle = 'rgba(255,255,255,.55)'; c.fillRect(-0.5 * s, -0.5 * s, s, 0.2 * s); c.restore(); break;
      case 'Música':
        c.beginPath(); c.arc(-0.1 * s, 0.16 * s, 0.09 * s, 0, 7); c.arc(0.17 * s, 0.1 * s, 0.09 * s, 0, 7); c.fill();
        L(-0.02, 0.16, -0.02, -0.22, 0.25, -0.28, 0.25, 0.1); break;
      case 'Ajustes':
        c.lineWidth = s * 0.06; c.beginPath(); c.arc(0, 0, 0.17 * s, 0, 7); c.stroke(); c.beginPath(); c.arc(0, 0, 0.06 * s, 0, 7); c.fill();
        for (let i = 0; i < 8; i++) { const an = i * Math.PI / 4; L(Math.cos(an) * 0.21, Math.sin(an) * 0.21, Math.cos(an) * 0.3, Math.sin(an) * 0.3); } break;
      case 'Calendário':
        c.fillStyle = '#F4510B'; c.font = `700 ${s * 0.15}px ${FONT}`; c.textAlign = 'center'; c.textBaseline = 'middle'; c.fillText(wk(now()), 0, -s * 0.25);
        c.fillStyle = '#111'; c.font = `400 ${s * 0.44}px ${FONT}`; c.fillText(String(now().getDate()), 0, s * 0.1); break;
    }
    c.restore();
  }
  const [lock, lx] = mk(), [home, hx] = mk(), [photos, px] = mk(), [msgs, mx] = mk(), [web, wx] = mk();
  function buildHome() {
  hx.setTransform(PK, 0, 0, PK, 0, 0); hx.clearRect(0, 0, CW, CH);
  wallpaper(hx); status(hx); island(hx);
  const IS = 104, gx = (CW - IS * 4) / 5;
  APPS.forEach(([n, col], i) => {
    const x = gx + (i % 4) * (IS + gx), y = 150 + Math.floor(i / 4) * (IS + 66);
    icon(hx, x, y, IS, n, col);
    hx.fillStyle = '#fff'; hx.font = `500 20px ${FONT}`; hx.textAlign = 'center'; hx.textBaseline = 'alphabetic';
    hx.fillText(n, x + IS / 2, y + IS + 30);
  });
  hx.fillStyle = 'rgba(255,255,255,.2)'; rrect(hx, 26, CH - 190, CW - 52, 150, 50); hx.fill();
  [['Telefone', '#34C759'], ['Chrome', '#ffffff'], ['Mensagens', '#30D158'], ['Câmera', '#3a3a3c']].forEach(([n, col], i) => icon(hx, gx + i * (IS + gx), CH - 165, IS, n, col));
  homeBar(hx);
  }
  function buildScreens() {
  let g;
  
  wallpaper(lx); status(lx); island(lx);
  lx.textAlign = 'center'; lx.fillStyle = 'rgba(255,255,255,.85)'; lx.font = `600 30px ${FONT}`;
  lx.fillText(longDate(now()), CW / 2, 200);
  lx.fillStyle = '#fff'; lx.font = `700 170px ${FONT}`; lx.fillText(hhmm(now()), CW / 2, 330);
  lx.fillStyle = 'rgba(255,255,255,.14)'; rrect(lx, 60, CH - 420, CW - 120, 130, 30); lx.fill();
  lx.fillStyle = '#fff'; lx.textAlign = 'left'; lx.font = `700 26px ${FONT}`; lx.fillText('TECHSMART', 96, CH - 376);
  lx.font = `500 25px ${FONT}`; lx.fillStyle = 'rgba(255,255,255,.85)'; lx.fillText('Seu aparelho em boas mãos.', 96, CH - 336);
  lx.fillStyle = 'rgba(255,255,255,.18)';
  lx.beginPath(); lx.arc(110, CH - 150, 46, 0, 7); lx.fill(); lx.beginPath(); lx.arc(CW - 110, CH - 150, 46, 0, 7); lx.fill();
  homeBar(lx);

  
  buildHome();

  
  px.fillStyle = '#fff'; px.fillRect(0, 0, CW, CH); status(px, true);
  px.fillStyle = '#111'; px.font = `700 52px ${FONT}`; px.textAlign = 'left'; px.textBaseline = 'alphabetic'; px.fillText('Fotos', 36, 190);
  for (let i = 0; i < 24; i++) {
    const x = (i % 3) * 200, y = 230 + Math.floor(i / 3) * 200, h = (i * 47) % 360;
    const g = px.createLinearGradient(x, y, x + 198, y + 198);
    g.addColorStop(0, `hsl(${h},55%,62%)`); g.addColorStop(1, `hsl(${(h + 40) % 360},45%,32%)`);
    px.fillStyle = g; px.fillRect(x + 1, y + 1, 198, 198);
  }
  homeBar(px, true);

  
  mx.fillStyle = '#fff'; mx.fillRect(0, 0, CW, CH); status(mx, true);
  mx.fillStyle = '#111'; mx.font = `700 52px ${FONT}`; mx.textAlign = 'left'; mx.fillText('Mensagens', 36, 190);
  for (let i = 0; i < 9; i++) {
    const y = 250 + i * 118;
    mx.fillStyle = `hsl(${i * 40},40%,70%)`; mx.beginPath(); mx.arc(80, y + 44, 40, 0, 7); mx.fill();
    mx.fillStyle = '#222'; mx.fillRect(140, y + 22, 200 + (i * 37) % 120, 18);
    mx.fillStyle = '#bbb'; mx.fillRect(140, y + 54, 300 + (i * 53) % 100, 14);
  }
  homeBar(mx, true);

  // navegador com o site da TECHSMART (mesmo herói que aparece depois do zoom)
  
  wx.fillStyle = '#0D0D0D'; wx.fillRect(0, 0, CW, CH);
  g = wx.createRadialGradient(CW / 2, CH * 0.47, 10, CW / 2, CH * 0.47, CW * 0.9);
  g.addColorStop(0, 'rgba(244,81,11,.28)'); g.addColorStop(1, 'rgba(13,13,13,0)');
  wx.fillStyle = g; wx.fillRect(0, 0, CW, CH);
  wx.fillStyle = '#1b1b1b'; wx.fillRect(0, 0, CW, 190);
  status(wx); island(wx);
  wx.fillStyle = '#2c2c2e'; rrect(wx, 24, 112, CW - 48, 62, 31); wx.fill();
  wx.fillStyle = '#c7c7cc'; wx.font = `500 26px ${FONT}`; wx.textAlign = 'center'; wx.textBaseline = 'middle';
  wx.fillText('🔒 techsmart.com.br', CW / 2, 144);
  wx.textAlign = 'left'; wx.font = `800 30px ${FONT}`; wx.fillStyle = '#F5F5F3'; wx.fillText('TECH', 36, 236);
  const tw = wx.measureText('TECH').width; wx.fillStyle = OR; wx.fillText('SMART', 36 + tw, 236);
  wx.fillStyle = '#F5F5F3'; for (let i = 0; i < 3; i++) wx.fillRect(CW - 76, 222 + i * 12, 40, 3);
  wx.textAlign = 'center';
  wx.fillStyle = 'rgba(245,245,243,.6)'; wx.font = `600 22px ${FONT}`; wx.fillText('ASSISTÊNCIA TÉCNICA DE CELULARES', CW / 2, CH * 0.36);
  wx.font = `800 64px ${FONT}`;
  [['Seu celular nas', '#F5F5F3'], ['mãos de quem', '#F5F5F3'], ['entende do', OR], ['assunto.', OR]].forEach(([t, col], i) => { wx.fillStyle = col; wx.fillText(t, CW / 2, CH * 0.43 + i * 70); });
  wx.fillStyle = 'rgba(245,245,243,.62)'; wx.font = `400 24px ${FONT}`;
  ['Samsung, Apple, Motorola e Xiaomi.', 'Avaliação antes de qualquer serviço.'].forEach((t, i) => wx.fillText(t, CW / 2, CH * 0.43 + 300 + i * 34));
  wx.fillStyle = '#25D366'; rrect(wx, CW / 2 - 140, CH * 0.43 + 390, 280, 72, 36); wx.fill();
  wx.fillStyle = '#fff'; wx.font = `700 26px ${FONT}`; wx.fillText('Fale conosco', CW / 2, CH * 0.43 + 426);
  homeBar(wx);

  }
  buildScreens();
  let lastMin = now().getMinutes(), lastClock = -1, nextClockCheck = 0;
  /* ---------- composição da tela por progresso ---------- */
  const cl = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
  const sm = (a, b, x) => { const t = cl((x - a) / (b - a)); return t * t * (3 - 2 * t); };
  const lerp = (a, b, t) => a + (b - a) * t;
  const CARDS = [[photos, 'Fotos', '#ffffff'], [web, 'Chrome', '#ffffff'], [msgs, 'Mensagens', '#30D158']];
  function card(img, cx, cy, sc, rad, alpha, label) {
    const w = CW * sc, h = CH * sc;
    sx.save(); sx.globalAlpha = alpha;
        sx.fillStyle = '#000'; rrect(sx, cx - w / 2, cy - h / 2, w, h, rad); sx.fill();
    rrect(sx, cx - w / 2, cy - h / 2, w, h, rad); sx.clip();
    sx.drawImage(img, cx - w / 2, cy - h / 2, w, h);
    sx.restore();
    if (label && alpha > 0.01) {
      sx.save(); sx.globalAlpha = alpha * label.a;
      icon(sx, cx - w / 2 + 4, cy - h / 2 - 66, 48, label.n, label.c);
      sx.fillStyle = '#fff'; sx.font = `600 26px ${FONT}`; sx.textAlign = 'left'; sx.textBaseline = 'middle';
      sx.fillText(label.n, cx - w / 2 + 64, cy - h / 2 - 42);
      sx.restore();
    }
  }
  function paint(p) {
    sx.globalAlpha = 1; sx.fillStyle = '#000'; sx.fillRect(0, 0, CW, CH);
    const on = sm(0.1, 0.2, p);
    if (on <= 0.001) return;
    const u = sm(0.28, 0.38, p), s = sm(0.44, 0.56, p), f = sm(0.57, 0.68, p), e = sm(0.71, 0.8, p);
    if (e >= 1) { // já no site: o conteúdo some no fundo para o herói real entrar sem sobreposição
      sx.drawImage(web, 0, 0, CW, CH);
      const k = sm(0.83, 0.89, p);
      if (k > 0) { sx.globalAlpha = k; sx.fillStyle = '#0D0D0D'; sx.fillRect(0, 0, CW, CH); sx.globalAlpha = 1; }
      return;
    }
    if (s < 1) { // tela inicial (e bloqueio por cima)
      const hs = lerp(1.06 - 0.06 * u, 0.58, s);
      sx.save(); sx.globalAlpha = on * u * (1 - s * 0.85);
      if (s > 0) card(home, CW / 2, CH / 2 - s * 40, hs, 60 * s, 1, null); else sx.drawImage(home, CW / 2 - CW * hs / 2, CH / 2 - CH * hs / 2, CW * hs, CH * hs);
      sx.restore();
      if (u < 1) { sx.save(); sx.globalAlpha = on * (1 - u); sx.drawImage(lock, 0, -u * CH * 0.6, CW, CH); sx.restore(); }
    }
    if (s > 0) { // seletor de apps
      sx.save(); sx.globalAlpha = s; sx.fillStyle = 'rgba(10,10,10,.82)'; sx.fillRect(0, 0, CW, CH); sx.restore();
      const SC = lerp(0.62, 1, e), spacing = CW * 0.7, focus = f;
      CARDS.forEach(([img, n, c], i) => {
        if (i === 1) return;
        const cx = CW / 2 + (i - focus) * spacing * (1 + e * 1.2) + (1 - s) * CW * 0.5;
        card(img, cx, CH / 2 + 30 * (1 - e), 0.62, 44, s * (1 - e), { n, c, a: 1 });
      });
      const cx = lerp(CW / 2 + (1 - focus) * spacing + (1 - s) * CW * 0.5, CW / 2, e);
      card(web, cx, lerp(CH / 2 + 30, CH / 2, e), SC, lerp(44, 0, e), s, { n: 'Chrome', c: '#ffffff', a: 1 - e });
      sx.save(); sx.globalAlpha = s * (1 - e); homeBar(sx); sx.restore();
    }
    if (on < 1) { sx.globalAlpha = 1 - on; sx.fillStyle = '#000'; sx.fillRect(0, 0, CW, CH); sx.globalAlpha = 1; }
  }

  /* ---------- câmera e movimento ---------- */
  let vw = 1, vh = 1, aspect = 1;
  function resize() {
    const width = canvas.clientWidth || innerWidth, height = canvas.clientHeight || innerHeight;
    if (width === vw && height === vh) return;
    vw = width; vh = height; aspect = vw / vh;
    renderer.setSize(vw, vh, false); camera.aspect = aspect; camera.updateProjectionMatrix();
    dirty = true;
  }
  const zBase = () => Math.max(H / (0.6 * 2 * T), W / (0.62 * 2 * T * aspect));
  const zNear = () => Math.max(H / (0.92 * 2 * T), W / (0.9 * 2 * T * aspect));
  const zEnd = () => Math.min(SW / (2 * T * aspect), SH / (2 * T)) * 0.94;
  const ease = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  let mxT = 0, myT = 0, mxS = 0, myS = 0, lastP = -1, lastQ = -1, dirty = true, visible = true;
  addEventListener('pointermove', e => { if (e.pointerType !== 'mouse') return; mxT = e.clientX / innerWidth * 2 - 1; myT = e.clientY / innerHeight * 2 - 1; }, { passive: true });
  new ResizeObserver(() => { resize(); window.techsmartWake(); }).observe(canvas);
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; window.techsmartWake(); }).observe(introEl);
  resize();

  const t0 = performance.now();
  function frame(time) {
    const p = window.__ip || 0;
    if (!visible || p >= 0.985) { if (canvas.style.visibility !== 'hidden' && p >= 0.985) canvas.style.visibility = 'hidden'; return; }
    if (canvas.style.visibility === 'hidden') canvas.style.visibility = '';
    if (time >= nextClockCheck) {
      nextClockCheck = time + 250;
      const date = now(), minute = date.getMinutes(), second = date.getSeconds();
      if (minute !== lastMin) { lastMin = minute; buildScreens(); lastQ = -1; }
      else if (second !== lastClock && p > .26 && p < .57 && IMG['Relógio']) { buildHome(); lastQ = -1; }
      lastClock = second;
    }
    const t = (time - t0) / 1000;
    mxS += (mxT - mxS) * 0.06; myS += (myT - myS) * 0.06;

    const r = ease(sm(0, 0.24, p));                 // vira do verso para a frente
    const zIn = ease(sm(0.24, 0.42, p));            // aproxima
    const zOut = sm(0.8, 0.96, p);                  // mergulha na tela
    const calm = 1 - Math.max(zIn * 0.6, sm(0.78, 0.86, p)); // quanto o aparelho ainda flutua

    phone.rotation.y = lerp(Math.PI - 0.5, 0, r);
    phone.rotation.x = lerp(0.18, 0, r);
    phone.rotation.z = lerp(-0.06, 0, r);
    tilt.rotation.y = (mxS * 0.22 + Math.sin(t * 0.6) * 0.04) * calm;
    tilt.rotation.x = (myS * 0.14 + Math.sin(t * 0.8) * 0.025) * calm;
    tilt.position.y = Math.sin(t * 1.1) * 0.03 * calm;

    const zb = zBase(), zn = zNear(), ze = zEnd();
    let z = lerp(zb, zn, zIn);
    z = z * Math.pow(ze / zn, ease(zOut));
    camera.position.set(0, 0, z); camera.lookAt(0, 0, 0);

    const q = Math.round(p * (lowPower ? 800 : 1200));
    if (q !== lastQ) { lastQ = q; paint(p); tex.needsUpdate = true; }
    renderer.render(scene, camera);
    lastP = p; dirty = false;
  }
  let contextLost = false;
  canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); contextLost = true; fail(); });
  canvas.addEventListener('webglcontextrestored', () => {
    contextLost = false; introEl.classList.remove('no3d'); lastQ = -1; window.techsmartWake();
  });
  window.techsmartFrame(frame, () => !contextLost && visible && ((window.__ip || 0) < .985 || canvas.style.visibility !== 'hidden'));
  window.__introOK = true;
}

/* Notebook e galeria */
(function laptopSpace() {
  const sec = document.getElementById('nosso-espaco');
  const canvas = document.getElementById('lap3d');
  if (!sec || !canvas || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  sec.classList.add('lap');
  const prepare = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return;
    prepare.disconnect();
    try { buildLaptop(); } catch (e) { sec.classList.remove('lap'); }
  }, {rootMargin:'700px 0px'});
  prepare.observe(sec);

  function buildLaptop() {
    const W = 3.0, D = 2.06, BASE_H = 0.085, LID_T = 0.05, OPEN = THREE.MathUtils.degToRad(-106);
    const cl = v => Math.min(1, Math.max(0, v));
    const sm = (a, b, v) => { const t = cl((v - a) / (b - a)); return t * t * (3 - 2 * t); };
    const lowPower = (navigator.hardwareConcurrency || 8) <= 4 || matchMedia('(max-width:700px)').matches;
    const FONT = '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif';
    const rr = (g, x, y, w, h, r) => { g.beginPath(); g.roundRect ? g.roundRect(x, y, w, h, r) : g.rect(x, y, w, h); };
    const cv = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: !lowPower && devicePixelRatio < 1.5, powerPreference: lowPower ? 'default' : 'high-performance' });
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, lowPower ? 1.1 : 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
    const scene = new THREE.Scene();
    const pm = new THREE.PMREMGenerator(renderer);
    const room = new RoomEnvironment();
    scene.environment = pm.fromScene(room, 0.04).texture;
    room.dispose(); pm.dispose();
    const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(2.5, 6, 4); scene.add(key);
    const rim = new THREE.DirectionalLight(0xF4510B, 1.1); rim.position.set(-4, 2.5, -4); scene.add(rim);
    scene.add(new THREE.AmbientLight(0xffffff, 0.18));
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);

    const alu = new THREE.MeshStandardMaterial({ color: 0x2b2b2d, metalness: 0.8, roughness: 0.34 });
    const aluDark = new THREE.MeshStandardMaterial({ color: 0x0c0c0d, metalness: 0.4, roughness: 0.6 });
    const laptop = new THREE.Group(), lid = new THREE.Group();

    const base = new THREE.Mesh(new RoundedBoxGeometry(W, BASE_H, D, lowPower ? 3 : 5, 0.04), alu); base.position.y = BASE_H / 2; laptop.add(base);

    // teclado e trackpad
    const kc = cv(1536, Math.round(1536 * (D * 0.92) / (W * 0.94))), kg = kc.getContext('2d');
    { const cw = kc.width, ch = kc.height, kx = cw * 0.1, ky = ch * 0.07, kw = cw * 0.8, kh = ch * 0.5, gap = 8, keyH = (kh - gap * 6) / 6;
      kg.fillStyle = '#18181a'; rr(kg, kx - 12, ky - 12, kw + 24, kh + 24, 18); kg.fill();
      for (let i = 0; i < 14; i++) { const w = (kw - gap * 13) / 14; kg.fillStyle = '#0e0e0f'; rr(kg, kx + i * (w + gap), ky, w, keyH * 0.6, 7); kg.fill(); }
      let y = ky + keyH * 0.6 + gap;
      [14, 14, 13, 12].forEach(n => { const u = (kw - gap * (n - 1)) / n; for (let i = 0; i < n; i++) { kg.fillStyle = '#0e0e0f'; rr(kg, kx + i * (u + gap), y, u, keyH, 8); kg.fill(); } y += keyH + gap; });
      const sb = kw * 0.42; kg.fillStyle = '#0e0e0f'; rr(kg, kx + (kw - sb) / 2, y, sb, keyH * 0.95, 8); kg.fill();
      const tw = cw * 0.38, th = ch * 0.3; kg.fillStyle = 'rgba(0,0,0,.28)'; rr(kg, (cw - tw) / 2, ch * 0.64, tw, th, 22); kg.fill();
      kg.strokeStyle = 'rgba(255,255,255,.08)'; kg.lineWidth = 3; kg.stroke(); }
    const kt = new THREE.CanvasTexture(kc); kt.colorSpace = THREE.SRGBColorSpace; kt.anisotropy = 8;
    const kb = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.94, D * 0.92), new THREE.MeshStandardMaterial({ map: kt, metalness: 0.5, roughness: 0.55, transparent: true }));
    kb.rotation.x = -Math.PI / 2; kb.position.set(0, BASE_H + 0.0015, 0.02); laptop.add(kb);

    // tampa articulada na dobradiça
    lid.position.set(0, BASE_H, -D / 2 + 0.02);
    const lidMesh = new THREE.Mesh(new RoundedBoxGeometry(W, LID_T, D - 0.02, lowPower ? 3 : 5, 0.03), alu);
    lidMesh.position.set(0, LID_T / 2, (D - 0.02) / 2); lid.add(lidMesh);
    const bezel = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.985, D * 0.97), aluDark);
    bezel.rotation.x = Math.PI / 2; bezel.position.set(0, -0.0015, (D - 0.02) / 2); lid.add(bezel);

    // tela: faixa com as fotos lado a lado; a rolagem desliza da direita para a esquerda
    const G = (window.TS_GALLERY || []).length ? window.TS_GALLERY : [{ t: 'Nosso espaço' }];
    const N = G.length, SWp = lowPower ? 768 : Math.min(1280, Math.floor(renderer.capabilities.maxTextureSize / N)), SHp = Math.round(SWp / 1.6);
    const strip = cv(SWp * N, SHp), sg = strip.getContext('2d');
    function slide(i, img) {
      const x = i * SWp, g = G[i];
      sg.save(); sg.beginPath(); sg.rect(x, 0, SWp, SHp); sg.clip();
      if (img) {
        sg.imageSmoothingQuality = 'high';
        sg.drawImage(img, x, 0, SWp, SHp);
      } else {
        sg.fillStyle = '#161616'; sg.fillRect(x, 0, SWp, SHp);
        const gr = sg.createRadialGradient(x + SWp * (0.3 + 0.13 * i), SHp * 0.35, 10, x + SWp * 0.5, SHp * 0.5, SWp * 0.7);
        gr.addColorStop(0, 'rgba(244,81,11,.35)'); gr.addColorStop(1, 'rgba(22,22,22,0)');
        sg.fillStyle = gr; sg.fillRect(x, 0, SWp, SHp);
        sg.strokeStyle = 'rgba(255,255,255,.04)'; sg.lineWidth = 2;
        for (let k = -SHp; k < SWp; k += 28) { sg.beginPath(); sg.moveTo(x + k, SHp); sg.lineTo(x + k + SHp, 0); sg.stroke(); }
      }
      sg.restore();
    }
    G.forEach((g, i) => { slide(i, null); if (g.src) { const im = new Image(); im.onload = () => { slide(i, im); stex.needsUpdate = true; dirty = true; window.techsmartWake(); }; im.src = g.src; } });
    const stex = new THREE.CanvasTexture(strip); stex.colorSpace = THREE.SRGBColorSpace; stex.anisotropy = 8;
    stex.repeat.set(1 / N, 1);
    const screenMat = new THREE.MeshBasicMaterial({ map: stex, color: 0x000000, toneMapped: false });
    const scrW = W * 0.92, scrH = scrW / 1.6;
    const scr = new THREE.Mesh(new THREE.PlaneGeometry(scrW, scrH), screenMat);
    scr.rotation.x = Math.PI / 2; scr.position.set(0, -0.003, (D - 0.02) - scrH / 2 - 0.07); lid.add(scr);

    // brilho da tela no teclado e sombra de contato
    const radial = shadow => { const c = cv(256, 256), g = c.getContext('2d'), gr = g.createRadialGradient(128, 128, 0, 128, 128, 128);
      gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(shadow ? 0.55 : 0.35, shadow ? 'rgba(255,255,255,.55)' : 'rgba(255,255,255,.25)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = gr; g.fillRect(0, 0, 256, 256); return new THREE.CanvasTexture(c); };
    const glow = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.2, D * 0.9), new THREE.MeshBasicMaterial({ map: radial(false), color: 0xff9a60, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }));
    glow.rotation.x = -Math.PI / 2; glow.position.set(0, BASE_H + 0.004, -0.1); laptop.add(glow);
    const sh = new THREE.Mesh(new THREE.PlaneGeometry(W * 1.7, D * 1.9), new THREE.MeshBasicMaterial({ map: radial(true), color: 0x000000, transparent: true, opacity: 0.75, depthWrite: false }));
    sh.rotation.x = -Math.PI / 2; sh.position.y = -0.002; laptop.add(sh);
    laptop.add(lid); scene.add(laptop);

    /* ---------- progresso pela rolagem ---------- */
    let narrow = false, dirty = true, visible = false, lastP = -1;
    const ptr = { tx: 0, ty: 0, x: 0, y: 0 };
    const dir = new THREE.Vector3(0, .3, 1).normalize();
    const target = new THREE.Vector3(), closedTarget = new THREE.Vector3(0,.2,0), openTarget = new THREE.Vector3(0,.78,-.1);
    const openCamera = new THREE.Vector3();
    function apply(p) {
      const open = sm(0.02, 0.28, p), push = open;
      lid.rotation.x = OPEN * open;
      const on = sm(0.14, 0.3, p);
      screenMat.color.setScalar(on); glow.material.opacity = on * 0.2;
      // fotos: cada uma para um instante no centro e a próxima entra pela direita
      const tt = cl((p - 0.32) / 0.62) * (N - 1), i = Math.floor(tt), f = tt - i;
      const e = f < 0.5 ? 4 * f * f * f : 1 - Math.pow(-2 * f + 2, 3) / 2;
      stex.offset.x = (Math.min(N - 1, i + e)) / N;
      // enquadramento final: notebook aberto inteiro e centralizado na área disponível
      const t = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
      const fitW = 1.75 / (t * camera.aspect), fitH = 1.32 / t;
      const dist = Math.max(fitW, fitH) * 1.12 + 1.3;
      openCamera.copy(openTarget).addScaledVector(dir, dist);
      camera.position.set(0, dist * .95, dist * .55).lerp(openCamera, open);
      camera.lookAt(target.copy(closedTarget).lerp(openTarget, open));
      const k = 1 - push;
      laptop.rotation.y = THREE.MathUtils.lerp(-0.2, 0, open) + ptr.x * 0.14 * k;
      laptop.rotation.x = ptr.y * 0.06 * k;
    }
    function resize() {
      const w = canvas.clientWidth, h = canvas.clientHeight; if (!w || !h) return;
      narrow = w / h < 0.9;
      renderer.setSize(w, h, false); camera.aspect = w / h; camera.fov = narrow ? 38 : 30; camera.updateProjectionMatrix(); dirty = true;
    }
    new ResizeObserver(() => { resize(); window.techsmartWake(); }).observe(canvas);
    addEventListener('pointermove', e => { if (e.pointerType !== 'mouse') return; ptr.tx = e.clientX / innerWidth * 2 - 1; ptr.ty = e.clientY / innerHeight * 2 - 1; window.techsmartWake(); }, { passive: true });
    new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) dirty = true; window.techsmartWake(); }).observe(sec);
    sec.classList.add('lap');
    resize();
    let lastScroll = NaN, contextLost = false;
    canvas.addEventListener('webglcontextlost', event => { event.preventDefault(); contextLost = true; sec.classList.remove('lap'); });
    canvas.addEventListener('webglcontextrestored', () => {
      contextLost = false; sec.classList.add('lap'); dirty = true; window.techsmartWake();
    });
    window.techsmartFrame(() => {
      lastScroll = scrollY;
      const r = sec.getBoundingClientRect(), span = sec.offsetHeight - innerHeight;
      const p = cl(-r.top / Math.max(1, span));
      ptr.x += (ptr.tx - ptr.x) * 0.06; ptr.y += (ptr.ty - ptr.y) * 0.06;
      const moving = Math.abs(ptr.tx - ptr.x) + Math.abs(ptr.ty - ptr.y) > 0.002;
      if (!dirty && !moving && Math.abs(p - lastP) < 1e-5) return; // nada mudou: não redesenha
      lastP = p; apply(p); renderer.render(scene, camera); dirty = false;
    }, () => !contextLost && visible && (dirty || scrollY !== lastScroll || (lastP < .28 && Math.abs(ptr.tx - ptr.x) + Math.abs(ptr.ty - ptr.y) > .002)));
  }
})();

