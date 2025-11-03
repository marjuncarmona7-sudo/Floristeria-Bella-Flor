// --- Menú hamburguers ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
// --- Accordion ---
const headers = document.querySelectorAll('.accordion-header');
headers.forEach(header => {
  header.addEventListener('click', () => {
    // Cerrar otros contenidos
    headers.forEach(h => {
      if (h !== header) h.nextElementSibling.style.display = 'none';
    });
    // Alternar contenido del header clickeado
    const content = header.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
// --- Función comprar ---
function comprarFlor(nombreFlor) {
  alert(`Has elegido comprar ${nombreFlor}. ¡Gracias por tu preferencia! 🌸`);
}
