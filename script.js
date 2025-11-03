// Menú hamburguesa

const hamburger = document.getElementById('hamburger');

const navLinks = document.getElementById('nav-links');



hamburger.addEventListener('click', () => {

  navLinks.classList.toggle('show');

});



// Accordion simple

const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {

  header.addEventListener('click', () => {

    // cerrar otros (comportamiento tipo acordeón)

    headers.forEach(h => {

      if (h !== header) h.nextElementSibling.style.display = 'none';

    });

    const content = header.nextElementSibling;

    content.style.display = content.style.display === 'block' ? 'none' : 'block';
    function comprarFlor(nombreFlor) {
  alert(`Has elegido comprar ${nombreFlor}. ¡Gracias por tu preferencia! 🌸`);
}


  });

});