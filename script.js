/* ==========================================================
   AZIRA — EDIT THIS BLOCK to change phone, prices, names, Instagram
   ========================================================== */
const CONFIG = {
  phone: "9100767096",          // for Order Now buttons (tel:)
  whatsapp: "919100767096",     // WhatsApp number with country code 91, no + or spaces
  instagram: "",                // <!-- ADD INSTAGRAM URL HERE --> e.g. "https://instagram.com/yourname"
  sizes: ["250g", "500g"],
  products: [
    // image = file name, saved next to index.html  (REPLACE the photo with your own, keep the same name; keep the photos in the same folder as index.html)
    { name: "Bottle Gourd Dessert", hero: true, image: "bottle-gourd-dessert.jpg", note: "Our signature dessert.",
      prices: { "250g": "₹130", "500g": "₹200" } },
    { name: "Apricot Dessert",  image: "apricot-dessert.jpg",  note: "Made with care.", prices: { "250g": "₹[ADD PRICE]", "500g": "₹[ADD PRICE]" } },
    { name: "Kaddu Ka Halwa",   image: "kaddu-ka-halwa.jpg",   note: "A traditional favourite.", prices: { "250g": "₹[ADD PRICE]", "500g": "₹[ADD PRICE]" } },
    { name: "Carrot Halwa",     image: "carrot-halwa.jpg",     note: "A traditional favourite.", prices: { "250g": "₹[ADD PRICE]", "500g": "₹[ADD PRICE]" } },
    { name: "Beetroot Halwa",   image: "beetroot-halwa.jpg",   note: "A traditional favourite.", prices: { "250g": "₹[ADD PRICE]", "500g": "₹[ADD PRICE]" } }
  ],
  occasions: ["Weddings","Birthdays","Family Gatherings","Festivals","Religious Occasions","Kitty Parties","Corporate Events","Celebrations"],
  faqs: [
    ["Where do you deliver?", "We deliver in Vijayawada."],
    ["What sizes are available?", "Two sizes: 250g and 500g."],
    ["How do I order?", "Tap Order Now to call us on 9100767096, or message us on WhatsApp."],
    ["Do you offer bulk orders?", "Yes. Ask us about bulk and special orders."],
    ["How early should I order?", "Please place bulk orders 2 days before. 1 day before may be possible, depending on availability."],
    ["Do you deliver outside Vijayawada?", "For orders above 10kg, delivery across Andhra Pradesh may be available. Delivery charges may apply for distances beyond our normal Vijayawada delivery area."],
    ["Is there a minimum order?", "[ADD MINIMUM ORDER DETAILS] Please call or WhatsApp us to confirm."],
    ["Can I order for events?", "Yes. Weddings, birthdays, festivals, kitty parties, corporate events and more. Message us with your date and quantity."],
    ["How can I contact Azira?", "Call or WhatsApp 9100767096. We are at One Town, Vijayawada — 520001."]
  ]
};

/* ---------- Everything below works automatically ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const root = document.documentElement;
const wa = t => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}`;
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Dessert cards
$("#grid").innerHTML = CONFIG.products.map(p => `
  <article class="rv ${p.hero ? "hero-card" : ""}">
    <div class="glass card">
      <div class="ph">
        <span>Add photo: ${p.image}</span>
        <!-- REPLACE this photo by saving your image as ${p.image} -->
        <img src="${p.image}" alt="${esc(p.name)} by Azira Sweets &amp; Desserts, Vijayawada" loading="lazy" width="800" height="600">
        ${p.hero ? '<span class="badge">Signature</span>' : ""}
      </div>
      <div class="cbody">
        <h3>${esc(p.name)}</h3><p>${esc(p.note)}</p>
        <ul>${CONFIG.sizes.map(s => `<li><span>${s}</span><b>${esc(p.prices[s] || "")}</b>
          <a href="${wa(`Hi Azira, I'd like to order ${p.name} - ${s}.`)}" target="_blank" rel="noopener" aria-label="WhatsApp order: ${esc(p.name)} ${s}">WhatsApp</a></li>`).join("")}</ul>
        <a class="btn" href="tel:${CONFIG.phone}">Order Now</a>
      </div>
    </div>
  </article>`).join("");
$$(".ph img").forEach(i => i.addEventListener("error", () => i.remove()));

// Occasions, FAQ, links
$("#chips").innerHTML = CONFIG.occasions.map(o => `<li class="glass rv" data-rv="scale">${esc(o)}</li>`).join("");
$("#faqbox").innerHTML = CONFIG.faqs.map(([q, a], i) => `<div class="item">
  <button class="q" type="button" aria-expanded="false" aria-controls="a${i}" id="q${i}">${esc(q)}</button>
  <div class="a" id="a${i}" role="region" aria-labelledby="q${i}"><div><p>${esc(a)}</p></div></div></div>`).join("");
$$(".q").forEach(b => b.addEventListener("click", () => b.setAttribute("aria-expanded", b.getAttribute("aria-expanded") !== "true")));
$("#cwa").href = wa("Hi Azira, I'd like to place an order.");
$("#bulkwa").href = wa("Hi Azira, I'd like to ask about a bulk / special order.");
if (CONFIG.instagram) { const ig = $("#ig"); ig.href = CONFIG.instagram; ig.hidden = false; $("#igsoon").hidden = true; }
$("#yr").textContent = new Date().getFullYear();

// Theme (saved, starts from system preference)
$("#theme").addEventListener("click", () => {
  const t = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = t;
  try { localStorage.setItem("azira-theme", t); } catch (e) {}
});

// Mobile menu
const nav = $("#nav"), burger = $("#burger");
const menu = open => { nav.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); };
burger.addEventListener("click", () => menu(!nav.classList.contains("open")));
$$("#mmenu a").forEach(a => a.addEventListener("click", () => menu(false)));
document.addEventListener("keydown", e => e.key === "Escape" && menu(false));

// Scroll: hero fade / ribbon parallax / nav appears
let tick = false;
const onScroll = () => {
  tick = false;
  const y = scrollY;
  root.style.setProperty("--p", Math.min(1, y / (innerHeight * .9)).toFixed(3));
  nav.classList.toggle("on", y > 40);
  if (y <= 40) menu(false);
};
addEventListener("scroll", () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true });
onScroll();

// Scroll reveals (staggered inside each group)
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: .12, rootMargin: "0px 0px -6% 0px" });
$$(".rv").forEach(el => {
  const sibs = [...el.parentElement.children].filter(c => c.classList.contains("rv"));
  el.style.setProperty("--d", sibs.indexOf(el) * 110 + "ms");
  io.observe(el);
});

// Reduced motion: stop the ribbon's built-in SVG animation
if (matchMedia("(prefers-reduced-motion: reduce)").matches) { const s = $(".ribbon svg"); s && s.pauseAnimations(); }
