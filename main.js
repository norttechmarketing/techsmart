{
/* ========== CONTEÚDO EDITÁVEL (confirmar com o cliente) ========== */
const CONFIG = {
  name: 'TECHSMART', year: 2026,
  whatsapp: '',            // DDI+DDD+número, só dígitos. Vazio = botões levam ao "O que busca?" (sem link falso)
  email: '',               // aparece no copyright e no contato quando preenchido
  phone: '', address: '', hours: '', instagram: '',
  waDefault: 'Olá! Vim pelo site da TECHSMART e gostaria de solicitar um atendimento.',
  waBrand: b => `Olá! Gostaria de informações sobre atendimento para um aparelho ${b}.`,
  nav: [['inicio','Início'],['servicos','Serviços'],['nosso-espaco','Nosso espaço'],['resultados','Resultados'],['o-que-busca','O que busca?'],['processo','Processo'],['depoimentos','Depoimentos'],['duvidas','Dúvidas']],
  // CONFIRMAR: lista oficial de serviços da TECHSMART
  services: [
    {ic:'screen',t:'Tela e display',d:'Avaliação de telas trincadas, manchas, toque falhando ou imagem apagada.',b:'Diagnóstico antes da troca'},
    {ic:'battery',t:'Bateria',d:'Celular descarregando rápido, desligando sozinho ou bateria estufada.',b:'Teste da saúde da bateria'},
    {ic:'plug',t:'Conector de carga',d:'Aparelho que não carrega, carrega devagar ou só funciona em uma posição do cabo.',b:'Limpeza e avaliação do conector'},
    {ic:'cam',t:'Câmeras',d:'Fotos borradas, câmera tremendo, lente quebrada ou aplicativo de câmera travando.',b:'Verificação de lentes e módulos'},
    {ic:'drop',t:'Contato com líquidos',d:'Celular que caiu na água ou teve contato com algum líquido.',b:'Orientação sobre os primeiros cuidados'},
    {ic:'chip',t:'Software e desempenho',d:'Lentidão, travamentos, atualizações com erro ou aparelho reiniciando.',b:'Análise do sistema'}
  ],
  gallery: [
  {
    "src": "assets/fotos/fachada.webp",
    "t": "Fachada",
    "alt": "Fachada da loja TECHSMART"
  },
  {
    "src": "assets/fotos/recepcao.webp",
    "t": "Recepção",
    "alt": "Área interna da TECHSMART"
  },
  {
    "src": "assets/fotos/antes-e-depois.webp",
    "t": "Antes e depois",
    "alt": "iPhone com a traseira danificada antes do reparo e com a traseira restaurada depois"
  }
],
  // Números reais: preencha v (null = dado a confirmar)
  // CONFIRMAR os números reais
  stats: [{v:4,s:'',l:'Fabricantes atendidos'},{v:1000,s:'+',l:'Clientes atendidos'},{v:1500,s:'+',l:'Aparelhos avaliados'},{v:5,s:'',u:' anos',l:'De experiência'}],
  brands: [['Samsung','Galaxy e linha A'],['Apple','iPhone'],['Motorola','Moto G, Edge e outros'],['Xiaomi','Redmi, Poco e Mi']],
  // CONFIRMAR: fluxo real de atendimento
  steps: [['Contato','Você conta o que aconteceu com o aparelho.'],['Avaliação','A equipe técnica analisa o problema.'],['Orçamento','Você recebe a orientação e decide se segue.'],['Serviço','O serviço é feito somente após a sua autorização.'],['Entrega','O aparelho volta para você, com as explicações do que foi feito.']],
  // Depoimentos reais (com autorização): {t:'texto', n:'nome', o:'Google'}
  testimonials: [
  {
    "n": "Bruna Lima",
    "t": "Meu iPhone 15 ficou como novo. O reparo foi entregue no mesmo dia, com garantia e atendimento atencioso.",
    "o": "Google"
  },
  {
    "n": "Marcus Carneiro",
    "t": "Reparei a tela, o vidro traseiro e a câmera do iPhone 14 Plus. O serviço foi rápido, com preço justo, e o aparelho manteve o desempenho.",
    "o": "Google"
  },
  {
    "n": "Adriana Mendes",
    "t": "Peças de qualidade, preço justo e equipe rápida e atenciosa. Meu aparelho chegou muito bem embalado pelo Uber Flash.",
    "o": "Google"
  }
],
  faq: [
    ['Como solicitar atendimento?','Escolha a marca do seu aparelho na seção "O que busca?" e fale com a nossa equipe. Conte o que aconteceu para agilizar a avaliação.'],
    ['Como funciona a avaliação?','O aparelho é analisado por um técnico para identificar a causa do problema. Só depois disso você recebe a orientação e decide se quer seguir com o serviço.'],
    ['Quais fabricantes vocês atendem?','Atendemos aparelhos Samsung, Apple, Motorola e Xiaomi.'],
    ['Como recebo um orçamento?','O orçamento é passado depois da avaliação, porque depende do defeito encontrado e da disponibilidade de peças.'],
    ['Como consulto prazos e condições?','Prazos e condições variam de acordo com cada caso e são informados no atendimento, junto com o orçamento.'],
    ['Como entro em contato?','Pelos botões de atendimento deste site. Os demais canais oficiais aparecem no rodapé.']
  ]
};
const IC = {
  screen:'<rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10 18.5h4M9 7l3 3M12 6l3 3"/>',
  battery:'<rect x="2.5" y="7" width="17" height="10" rx="2"/><path d="M21.5 10.5v3M9.5 9.5l-2 3h4l-2 3"/>',
  plug:'<path d="M9 2v5M15 2v5M6 7h12v4a6 6 0 0 1-12 0V7zM12 17v5"/>',
  cam:'<rect x="3" y="3" width="18" height="18" rx="4"/><circle cx="9" cy="9" r="2.5"/><circle cx="15" cy="15" r="2.5"/><circle cx="16" cy="8" r=".8"/>',
  drop:'<path d="M12 2.5S5.5 9.6 5.5 14a6.5 6.5 0 0 0 13 0C18.5 9.6 12 2.5 12 2.5z"/><path d="M9 14.5a3 3 0 0 0 3 3"/>',
  chip:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>'
};
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const waUrl = msg => { const n = CONFIG.whatsapp.replace(/\D/g,''); return n ? `https://wa.me/${n}?text=${encodeURIComponent(msg)}` : null; };
const track = (ev, data) => { /* ganchos para GA4 / Meta Pixel quando configurados e consentidos */ (window.dataLayer = window.dataLayer || []).push({event: ev, ...data}); };
document.body.classList.remove('nojs');

/* ---------- render ---------- */
const ICHAT = '<i class="ich" aria-hidden="true"></i>';
const aboutSections = new Set(['nosso-espaco','resultados','o-que-busca']);
const headerNav = CONFIG.nav.filter(([id]) => !aboutSections.has(id) || id === 'nosso-espaco');
const navHTML = headerNav.map(([id, t]) => `<a href="#${id}" data-go="${id}">${id === 'nosso-espaco' ? 'SOBRE' : t}</a>`).join('');
$('#nav').innerHTML = navHTML;
$('#mm').innerHTML = navHTML + `<a class="btn wa" href="#o-que-busca" data-go="o-que-busca" data-cta="menu">${ICHAT}Fale conosco</a>`;
$('#ft-nav').innerHTML = CONFIG.nav.map(([id, t]) => `<li><a href="#${id}" data-go="${id}">${t}</a></li>`).join('');
$('#sv').innerHTML = CONFIG.services.map((s, i) => `<article class="card" data-rv style="--i:${i % 3}">
  <span class="ic" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${IC[s.ic]}</svg></span>
  <h3>${esc(s.t)}</h3><p>${esc(s.d)}</p>
  <a class="lk" href="#o-que-busca" data-go="o-que-busca" data-svc="${esc(s.t)}">${ICHAT}Fale conosco</a></article>`).join('');
window.TS_GALLERY = CONFIG.gallery;
$('#track').innerHTML = CONFIG.gallery.map((g, i) => `<figure class="slide" id="sl${i}" role="group" aria-roledescription="foto" aria-label="${i + 1} de ${CONFIG.gallery.length}: ${esc(g.t)}" style="margin:0">
  ${g.src ? `<img src="${esc(g.src)}" alt="${esc(g.alt)}" loading="lazy" decoding="async" width="1280" height="800">` : `<div class="ph"><div><b>${esc(g.t)}</b><small>Foto real da TECHSMART em breve</small></div></div>`}
  </figure>`).join('');
$('#dots').innerHTML = CONFIG.gallery.map((g, i) => `<button aria-label="Foto ${i + 1}: ${esc(g.t)}" aria-current="${i === 0}"></button>`).join('');
$('#st').innerHTML = CONFIG.stats.map((s, i) => `<div data-rv style="--i:${i}"><div class="num" ${s.v != null ? `data-to="${s.v}"` : ''}>${s.v != null ? `0` : '—'}${s.v != null && s.s ? `<sup>${s.s}</sup>` : ''}${s.u ? `<small class="un">${s.u}</small>` : ''}</div><p>${esc(s.l)}</p>${s.v == null ? '<span class="pend">Dado a confirmar</span>' : ''}</div>`).join('');
$('#bb').innerHTML = CONFIG.brands.map(([b, s], i) => `<a class="brand" href="#contato" role="button" aria-pressed="false" data-brand="${b}" data-rv style="--i:${i}"><b>${b}</b><small>${s}</small></a>`).join('');
const SIC = ['<path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.1A8 8 0 1 1 20 12z"/>','<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.4-4.4"/>','<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M10 12h5M10 16h5"/>','<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.5 17.3a1.8 1.8 0 0 0 2.6 2.6l5.8-5.8a4 4 0 0 0 5.2-5.4l-2.5 2.5-2.3-.4-.4-2.3z"/>','<path d="M20 7 9.5 17.5 4 12"/>'];
$('#pr').innerHTML = CONFIG.steps.map(([t, d], i) => `<li class="stp" data-rv style="--i:${i}"><span class="n" aria-label="Etapa ${i + 1}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${SIC[i] || ''}</svg></span><h3>${t}</h3><p>${d}</p></li>`).join('');
$('#dp').innerHTML = CONFIG.testimonials.length
  ? `<div class="dp">${CONFIG.testimonials.map((t, i) => `<article class="card review" data-rv style="--i:${i}"><span class="review-stars" role="img" aria-label="5 de 5 estrelas">★★★★★</span><p>${esc(t.t)}</p><div class="review-person"><strong>${esc(t.n)}</strong><small>${esc(t.o)}</small></div></article>`).join('')}</div>`
  : `<div class="empty" data-rv><b>As avaliações dos nossos clientes vão aparecer aqui.</b>Publicamos somente depoimentos reais, com autorização de quem atendemos.</div>`;
$('#fq').innerHTML = CONFIG.faq.map(([q, a], i) => `<div class="qa"><button id="q${i}" aria-expanded="false" aria-controls="a${i}">${esc(q)}<span class="pl" aria-hidden="true"></span></button><div class="ans" id="a${i}" role="region" aria-labelledby="q${i}" aria-hidden="true"><div><p>${esc(a)}</p></div></div></div>`).join('');
const ct = [];
if (CONFIG.phone) ct.push(`<li><span>${esc(CONFIG.phone)}</span></li>`);
if (CONFIG.email) ct.push(`<li><a href="mailto:${esc(CONFIG.email)}">${esc(CONFIG.email)}</a></li>`);
if (CONFIG.address) ct.push(`<li><span>${esc(CONFIG.address)}</span></li>`);
if (CONFIG.hours) ct.push(`<li><span>${esc(CONFIG.hours)}</span></li>`);
if (CONFIG.instagram) ct.push(`<li><a href="${esc(CONFIG.instagram)}" target="_blank" rel="noopener noreferrer">Instagram</a></li>`);
ct.push(`<li><a href="#o-que-busca" data-go="o-que-busca" data-cta="footer">Fale conosco</a></li>`);
$('#ft-ct').innerHTML = ct.join('');
$('#copy').textContent = `${CONFIG.name} © ${CONFIG.year} - Todos os direitos reservados.${CONFIG.email ? ` - ${CONFIG.email}` : ''}`;
// FAQPage (dados estruturados)
const ld = document.createElement('script'); ld.type = 'application/ld+json';
ld.textContent = JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:CONFIG.faq.map(([q, a]) => ({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))});
document.head.appendChild(ld);

/* ---------- WhatsApp ---------- */
let brand = null;
const applyWa = () => {
  const msg = brand ? CONFIG.waBrand(brand) : CONFIG.waDefault, url = waUrl(msg);
  const fab = $('#wa-fab');
  if (url) { fab.href = waUrl(CONFIG.waDefault); fab.target = '_blank'; fab.rel = 'noopener noreferrer'; fab.removeAttribute('data-go'); }
  $$('[data-cta]').forEach(a => { if (url) { a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer'; a.removeAttribute('data-go'); } });
};
applyWa();

/* ---------- O que busca? ---------- */
$('#bb').addEventListener('click', e => {
  const b = e.target.closest('.brand'); if (!b) return;
  brand = b.dataset.brand;
  $$('.brand').forEach(x => x.setAttribute('aria-pressed', x === b));
  track('select_device_brand', {brand, section: 'o-que-busca'});
  const url = waUrl(CONFIG.waBrand(brand));
  $('#fbk').innerHTML = `Atendimento para <b>${esc(brand)}</b> selecionado. ${url ? 'Abrindo o WhatsApp…' : 'Siga para o atendimento abaixo.'}`;
  const c = $('#ctx'); c.hidden = false; c.textContent = `Aparelho: ${brand}`;
  applyWa();
  if (url) { e.preventDefault(); b.href = url; window.open(url, '_blank', 'noopener'); }
  else { e.preventDefault(); goToSection('contato'); }
});
$('#bb').addEventListener('keydown', e => { if (e.key === ' ' && e.target.closest('.brand')) { e.preventDefault(); e.target.click(); } });

/* ---------- navegação (uma única: rolagem nativa) ---------- */
const LEGAL = ['politica-de-privacidade', 'termos-de-uso'];
const homeIds = new Set([...$$('#v-home section[id]')].map(s => s.id));
const intro = document.getElementById('inicio');
let view = 'home';
const show = v => {
  if (v === view) return;
  view = v;
  $$('.view').forEach(m => m.hidden = m.id !== `v-${v}`);
  document.title = v === 'home' ? 'TECHSMART · Assistência técnica' : `${$(`#v-${v} h1`).textContent.replace('.', '')} · TECHSMART`;
  window.scrollTo({top: 0, behavior: 'instant'});
  dispatchEvent(new Event('scroll'));
};
const goToSection = (id, push = true) => {
  closeMenu();
  if (LEGAL.includes(id)) { show(id); if (push) history.pushState(null, '', `#${id}`); $(`#v-${id} h1`).setAttribute('tabindex', '-1'); $(`#v-${id} h1`).focus({preventScroll: true}); return; }
  if (!homeIds.has(id)) { show('404'); return; }
  const was = view; show('home');
  if (push && location.hash !== `#${id}`) history.pushState(null, '', `#${id}`);
  const el = document.getElementById(id);
  requestAnimationFrame(() => { const top = id === 'inicio' ? 0 : el.getBoundingClientRect().top + scrollY - (document.getElementById('hd').offsetHeight + 8);
    if (window.__lenis && !reduce && was === 'home') (window.__lenis.scrollTo(top, {duration: 1.2}), wakeFrame()); else window.scrollTo({top, behavior: 'instant'}); });
};
window.goToSection = goToSection;
document.addEventListener('click', e => {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const a = e.target.closest('a[href^="#"]'); if (!a || a.closest('#bb')) return;
  const id = a.getAttribute('href').slice(1) || 'inicio';
  e.preventDefault();
  if (a.dataset.svc) { $('#fbk').innerHTML = `Interesse em <b>${esc(a.dataset.svc)}</b>. Escolha a marca do aparelho.`; track('click_service', {service: a.dataset.svc}); }
  if (a.dataset.cta) track(`click_cta_${a.dataset.cta}`, {});
  goToSection(id);
});
const route = () => { const id = location.hash.slice(1); if (!id) { goToSection('inicio', false); return; } goToSection(id, false); };
addEventListener('popstate', route);

/* ---------- header, menu, scroll spy ---------- */
const hd = $('#hd'), bg = $('#burger'), mm = $('#mm');
function closeMenu() { if (!mm.classList.contains('open')) return; mm.classList.remove('open'); mm.setAttribute('aria-hidden', 'true'); bg.setAttribute('aria-expanded', 'false'); bg.setAttribute('aria-label', 'Abrir menu'); document.body.classList.remove('lock'); }
bg.addEventListener('click', () => {
  const o = !mm.classList.contains('open');
  if (!o) return closeMenu();
  mm.classList.add('open'); mm.setAttribute('aria-hidden', 'false'); bg.setAttribute('aria-expanded', 'true'); bg.setAttribute('aria-label', 'Fechar menu'); document.body.classList.add('lock');
  mm.querySelector('a').focus();
});
addEventListener('keydown', e => {
  if (!mm.classList.contains('open')) return;
  if (e.key === 'Escape') { closeMenu(); bg.focus(); return; }
  if (e.key !== 'Tab') return;
  const links = mm.querySelectorAll('a');
  if (e.shiftKey && document.activeElement === links[0]) { e.preventDefault(); links[links.length-1].focus(); }
  else if (!e.shiftKey && document.activeElement === links[links.length-1]) { e.preventDefault(); links[0].focus(); }
});
const menuBreakpoint = matchMedia('(min-width:1050px)');
menuBreakpoint.addEventListener('change', event => { if (event.matches) closeMenu(); });
for (const link of mm.querySelectorAll('a')) link.addEventListener('click', closeMenu);

const frameJobs = new Set();
let frameID = 0;
function wakeFrame() {
  if (!frameID && !document.hidden) frameID = requestAnimationFrame(runFrame);
}
function runFrame(time) {
  frameID = 0;
  if (document.hidden) return;
  for (const job of frameJobs) if (job.active()) job.update(time);
  if ([...frameJobs].some(job => job.active())) wakeFrame();
}
window.techsmartFrame = (update, active = () => true) => {
  const job = {update, active};
  frameJobs.add(job);
  wakeFrame();
  return () => frameJobs.delete(job);
};
window.techsmartWake = wakeFrame;
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { cancelAnimationFrame(frameID); frameID = 0; }
  else wakeFrame();
});

let scrollDirty = true;
const onScroll = () => { scrollDirty = true; wakeFrame(); };
/* abertura: o progresso da rolagem conduz o iPhone (módulo 3D) e a entrada do herói */
const sm = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const heroEl = document.getElementById('hero'), iword = document.getElementById('iword'), ihint = document.getElementById('ihint'), cssph = document.querySelector('.cssph');
function introProgress(r, span) {
  if (r.bottom < -innerHeight) return;
  const p = Math.min(1, Math.max(0, -r.top / span));
  window.__ip = p;
  const h = sm(0.885, 0.97, p);
  heroEl.style.opacity = h; heroEl.style.setProperty('--hp', h); heroEl.classList.toggle('on', h > 0.005);
  const w = sm(0.3, 0.52, p);
  iword.style.opacity = 1 - w; iword.style.transform = `scale(${1 + w * 0.35})`;
  ihint.style.opacity = p < 0.025 ? 1 : 0;
  if (cssph) cssph.style.opacity = 1 - sm(0.6, 0.85, p);
}
window.__ip = 0;
addEventListener('scroll', onScroll, {passive: true}); addEventListener('resize', onScroll, {passive: true});
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  $$('.nav a, .mm a').forEach(a => a.classList.toggle('act', a.dataset.go === (aboutSections.has(e.target.id) ? 'nosso-espaco' : e.target.id)));
}), {rootMargin: '-45% 0px -50% 0px'});
$$('#v-home section[id]').forEach(s => spy.observe(s));

/* ---------- revelações e contadores ---------- */
const count = el => {
  const to = Number(el.dataset.to), duration = 1400;
  let visible = true, last = null, elapsed = 0, previous = -1;
  const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; last = null; wakeFrame(); });
  observer.observe(el);
  el.firstChild.nodeValue = '0';
  const remove = window.techsmartFrame(time => {
    if (last !== null) elapsed += Math.min(50, time - last);
    last = time;
    const p = Math.min(1, elapsed / duration), value = Math.round(to * (1 - (1 - p) ** 3));
    if (value !== previous) { el.firstChild.nodeValue = value.toLocaleString('pt-BR'); previous = value; }
    if (p === 1) { observer.disconnect(); remove(); }
  }, () => visible);
};
const rv = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; e.target.classList.add('vis'); rv.unobserve(e.target);
  const n = e.target.querySelector('.num[data-to]'); if (n) reduce ? (n.firstChild.nodeValue = (+n.dataset.to).toLocaleString('pt-BR')) : count(n);
}), {rootMargin: '0px 0px -10% 0px'});
$$('[data-rv]').forEach(el => rv.observe(el));
requestAnimationFrame(() => document.body.classList.add('ready'));
if (!reduce) setTimeout(() => { if (!window.__introOK) intro.classList.add('no3d'); }, 6000);
/* Rolagem da página */
if (!reduce && window.Lenis) {
  const lenis = new Lenis({lerp:0.09,smoothWheel:true,syncTouch:false,wheelMultiplier:1});
  window.__lenis = lenis;
  lenis.on('scroll', onScroll);
  lenis.on('virtual-scroll', () => { if (!lenis.isSmooth) lenis.time = performance.now(); wakeFrame(); });
  window.techsmartFrame(time => lenis.raf(time), () => lenis.isSmooth);
}

/* ---------- processo: linha acompanha a rolagem ---------- */
const pr = $('#pr'), stps = $$('.stp');
const lastStepMarker = stps.at(-1);
if (lastStepMarker) {
  new ResizeObserver(([entry]) => {
    const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.target.offsetHeight;
    if (height) pr.style.setProperty('--last-step-height', height + 'px');
  }).observe(lastStepMarker);
}
const processSection = pr.closest('.prs');
let lastProcess = '', lastStep = -1;
function progress(r, sr, sectionHeight, VH) {
  const pinned = sectionHeight > VH * 1.5;
  if (sr.bottom < 0 || sr.top > VH) return;
  const t = pinned ? (-sr.top + VH * 0.05) / ((sectionHeight - VH) * 0.85) : (VH * 0.8 - r.top) / (r.height * 0.95);
  const p = Math.min(1, Math.max(0, t));
  const value = p.toFixed(3);
  if (value !== lastProcess) { pr.style.setProperty('--p', value); lastProcess = value; }
  const step = Math.min(stps.length - 1, Math.floor((p + .02) * (stps.length - 1)));
  if (step !== lastStep) {
    stps.forEach((item, index) => item.classList.toggle('on', index <= step));
    lastStep = step;
  }
}


window.techsmartFrame(() => {
  scrollDirty = false;
  const height = innerHeight, y = scrollY;
  const home = view === 'home';
  const ir = home && !reduce ? intro.getBoundingClientRect() : null;
  const span = ir ? Math.max(1, intro.offsetHeight - height) : 1;
  const sr = home ? processSection.getBoundingClientRect() : null;
  const inProcess = sr && sr.bottom >= 0 && sr.top <= height;
  const row = inProcess ? pr.getBoundingClientRect() : null;
  const sectionHeight = row ? processSection.offsetHeight : 0;
  const inIntro = Boolean(ir && ir.bottom > height * 1.02);
  document.body.classList.toggle('in-intro', inIntro);
  hd.inert = inIntro;
  $('#wa-fab').inert = inIntro;
  hd.classList.toggle('on', !inIntro && (y > 20 || !home));
  if (ir) introProgress(ir, span);
  if (row) progress(row, sr, sectionHeight, height);
}, () => scrollDirty);
document.fonts.ready.then(() => { window.__lenis?.resize(); onScroll(); });
document.addEventListener('visibilitychange', () => { if (!document.hidden) { window.__lenis?.resize(); onScroll(); } });
/* ---------- FAQ ---------- */
$('#fq').addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  const o = b.getAttribute('aria-expanded') !== 'true';
  $$('#fq button').forEach(button => {
    const expanded = button === b && o;
    button.setAttribute('aria-expanded', expanded);
    document.getElementById(button.getAttribute('aria-controls')).setAttribute('aria-hidden', !expanded);
  });
});

/* ---------- carrossel (rolagem nativa com snap) ---------- */
const tr = $('#track'), slides = $$('.slide'), dots = $$('#dots button');
let cur = 0;
const goSlide = i => { cur = (i + slides.length) % slides.length; tr.scrollTo({left: slides[cur].offsetLeft - (tr.clientWidth - slides[cur].clientWidth) / 2, behavior: reduce ? 'instant' : 'smooth'}); };
$('#prev').addEventListener('click', () => goSlide(cur - 1));
$('#next').addEventListener('click', () => goSlide(cur + 1));
dots.forEach((d, i) => d.addEventListener('click', () => goSlide(i)));
tr.addEventListener('keydown', e => { if (e.key === 'ArrowRight') { e.preventDefault(); goSlide(cur + 1); } if (e.key === 'ArrowLeft') { e.preventDefault(); goSlide(cur - 1); } });
const so = new IntersectionObserver(es => es.forEach(e => { if (e.intersectionRatio > .6) { cur = slides.indexOf(e.target); dots.forEach((d, k) => d.setAttribute('aria-current', k === cur)); } }), {root: tr, threshold: [.6]});
slides.forEach(s => so.observe(s));
// arrastar com o mouse (no toque a rolagem nativa já desliza)
let dx = null, sl0 = 0;
tr.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; dx = e.clientX; sl0 = tr.scrollLeft; tr.classList.add('drag'); tr.setPointerCapture(e.pointerId); stopAuto(); });
tr.addEventListener('pointermove', e => { if (dx !== null) tr.scrollLeft = sl0 - (e.clientX - dx); });
const endDrag = e => { if (dx === null) return; const d = e.clientX - dx; dx = null; tr.classList.remove('drag'); goSlide(Math.abs(d) > 60 ? cur + (d < 0 ? 1 : -1) : cur); startAuto(); };
tr.addEventListener('pointerup', endDrag); tr.addEventListener('pointercancel', endDrag);
tr.addEventListener('lostpointercapture', endDrag);
// desliza sozinho com calma; pausa ao interagir, fora da tela ou com movimento reduzido
let auto = 0, carVis = false;
function startAuto() { stopAuto(); if (!reduce && carVis && !document.hidden) auto = setInterval(() => goSlide(cur + 1), 4200); }
function stopAuto() { clearInterval(auto); auto = 0; }
new IntersectionObserver(([e]) => { carVis = e.isIntersecting; carVis ? startAuto() : stopAuto(); }).observe(tr);
['mouseenter', 'focusin', 'touchstart'].forEach(ev => tr.addEventListener(ev, stopAuto, {passive: true}));
document.addEventListener('visibilitychange', () => document.hidden ? stopAuto() : startAuto());
['mouseleave', 'focusout'].forEach(ev => tr.addEventListener(ev, startAuto));

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
addEventListener('load', () => {
  const id = location.hash.slice(1);
  const reload = performance.getEntriesByType('navigation')[0]?.type === 'reload';
  if (!id || id === 'inicio' || (reload && homeIds.has(id))) {
    if (id && id !== 'inicio') history.replaceState(history.state, '', '#inicio');
    window.scrollTo({top:0,behavior:'instant'});
    window.__lenis?.resize();
    onScroll();
    return;
  }
  route();
}, {once:true});
}
