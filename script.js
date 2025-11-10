/* FILE: script.js */
/* Guardar como: script.js (separado y referenciado con defer en el HTML) */


// Smooth scroll for anchor links
(function () {
    function supportsSmoothScroll() {
        return 'scrollBehavior' in document.documentElement.style;
    }


    document.addEventListener('click', function (e) {
        const target = e.target.closest('a[href^="#"]');
        if (!target) return;
        const href = target.getAttribute('href');
        if (href === '#') return; // enlaces de ejemplo
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
            e.preventDefault();
            const topOffset = 72; // compensación para header
            const targetPosition = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
            if (supportsSmoothScroll()) {
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            } else {
                window.scrollTo(0, targetPosition);
            }
        }
    }, false);


    // Simple contact form handling 
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.getElementById('contact-form');
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();


        if (form) {
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                const name = form.name.value.trim();
                const email = form.email.value.trim();
                const message = form.message.value.trim();
                if (!name || !email || !message) {
                    alert('Por favor completa todos los campos.');
                    return;
                }
                const getformEndpoint = 'https://getform.io/f/agdjepyb';
                form.action = getformEndpoint;
                form.method = 'POST';
                form.submit();
                alert('Gracias, ' + name + '. Tu mensaje ha sido recibido.');
                form.reset();
            });
        }


        // Hover interaction: show more details on project hover (accessible)
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    // Toggle focus state
                    card.classList.toggle('focused');
                }
            });
        });
    });
})();

/*carrusel de imagenes simple*/
const track = document.querySelector('.carousel-track');
const items = Array.from(document.querySelectorAll('.carousel-item'));
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
let currentIndex = 0;

function updateCarousel() {
  const width = items[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${currentIndex * width}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

let resizeTimer;
function onResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(updateCarousel, 100);
}

window.addEventListener('resize', onResize);

updateCarousel();

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});


/* Fin de script.js */