/* ---------- WhatsApp: troque o número só aqui ---------- */
const WHATSAPP = "5574998196058";
const MSG_PADRAO = "Olá, Luana! Vim pelo site e gostaria de mais informações.";
const linkWA = (msg) => "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);

document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = linkWA(a.dataset.msg || MSG_PADRAO);
  a.target = "_blank";
  a.rel = "noopener";
});

/* ---------- menu no celular ---------- */
const menuBtn = document.querySelector(".menu-btn");
const menu = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  const aberto = menu.toggleAttribute("data-aberto");
  menuBtn.setAttribute("aria-expanded", aberto);
});
menu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    menu.removeAttribute("data-aberto");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

/* ---------- filtro de procedimentos ---------- */
const filtros = [...document.querySelectorAll(".filtro")];
const cards = [...document.querySelectorAll(".card")];

filtros.forEach((f) => {
  f.addEventListener("click", () => {
    filtros.forEach((x) => x.setAttribute("aria-selected", x === f));
    const cat = f.dataset.cat;
    cards.forEach((c) => { c.hidden = cat !== "todos" && c.dataset.cat !== cat; });
  });
});

/* ---------- comparador antes e depois ---------- */
document.querySelectorAll(".comparar").forEach((c) => {
  const barra = c.querySelector("input");
  const atualizar = () => c.style.setProperty("--pos", barra.value + "%");
  barra.addEventListener("input", atualizar);
  atualizar();
});