/**
 * CARTAGENA CONFIABLE - JAVASCRIPT PURO (VANILLA JS)
 * Funcionalidades interactivas:
 * - Menú hamburguesa responsivo
 * - Barra de progreso de lectura en scroll
 * - Resaltado dinámico de navegación (Active Links)
 * - Animación sutil de aparición (Intersection Observer)
 * - Actualizador interactivo del enlace del bot de Telegram y QR
 * - Botón de regreso arriba (Back to top)
 * - Efectos interactivos en el diagrama de arquitectura multi-agente
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. SELECTORES PRINCIPALES
  const navbar = document.getElementById('navbar');
  const scrollProgressBar = document.getElementById('scroll-progress');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  // Selectores para el enlace de Telegram
  const tgLinkInput = document.getElementById('tg-link-input');
  const updateLinkBtn = document.getElementById('update-link-btn');
  const mainTgBtn = document.getElementById('main-tg-btn');
  const navTgBtn = document.querySelector('.nav-btn-highlight');
  const footerTgBtn = document.querySelector('.footer-btn-test');

  // 2. BARRA DE PROGRESO DE LECTURA Y SOMBRA DEL NAVBAR
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${progress}%`;
    }

    // Sombra y fondo del Navbar al hacer scroll
    if (scrollTop > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Botón Volver Arriba
    if (scrollTop > 450) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  // Botón Volver Arriba
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 3. MENÚ HAMBURGUESA PARA DISPOSITIVOS MÓVILES
  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      hamburgerBtn.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar el menú al hacer clic en cualquier enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Cerrar el menú si se hace clic fuera del mismo
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 4. ACTIVE LINK EN NAVBAR CON INTERSECTION OBSERVER
  const sections = document.querySelectorAll('section[id]');
  
  const sectionObserverOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, sectionObserverOptions);

  sections.forEach(section => sectionObserver.observe(section));

  // 5. ANIMACIONES SUTILES AL HACER SCROLL (FADE IN UP)
  const animatedElements = document.querySelectorAll(
    '.problem-card, .feature-card, .impact-card, .concept-card, .tech-card, .kb-pillar-card, .biz-actor-card, .team-card, .workflow-step-card'
  );

  animatedElements.forEach(el => el.classList.add('reveal-on-scroll'));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => revealObserver.observe(el));

  // 6. ACTUALIZADOR DEL ENLACE DE TELEGRAM EN VIVO
  function updateBotLinks(newUrl) {
    let cleanUrl = newUrl.trim();
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      cleanUrl = 'https://' + cleanUrl;
    }

    if (mainTgBtn) mainTgBtn.setAttribute('href', cleanUrl);
    if (navTgBtn) navTgBtn.setAttribute('href', cleanUrl);
    if (footerTgBtn) footerTgBtn.setAttribute('href', cleanUrl);

    // Feedback visual momentáneo
    if (updateLinkBtn) {
      const originalText = updateLinkBtn.textContent;
      updateLinkBtn.textContent = '¡Guardado! ✓';
      updateLinkBtn.style.backgroundColor = '#10B981';
      updateLinkBtn.style.color = '#ffffff';

      setTimeout(() => {
        updateLinkBtn.textContent = originalText;
        updateLinkBtn.style.backgroundColor = '';
        updateLinkBtn.style.color = '';
      }, 2000);
    }
  }

  if (updateLinkBtn && tgLinkInput) {
    updateLinkBtn.addEventListener('click', () => {
      if (tgLinkInput.value) {
        updateBotLinks(tgLinkInput.value);
      }
    });

    tgLinkInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        updateBotLinks(tgLinkInput.value);
      }
    });
  }

  // 7. EFECTO INTERACTIVO EN EL DIAGRAMA DE FLUJO MULTI-AGENTE
  const workflowCards = document.querySelectorAll('.workflow-step-card');
  workflowCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      workflowCards.forEach(c => c.style.opacity = '0.7');
      card.style.opacity = '1';
      card.style.transform = 'translateY(-6px) scale(1.02)';
    });

    card.addEventListener('mouseleave', () => {
      workflowCards.forEach(c => {
        c.style.opacity = '1';
        c.style.transform = '';
      });
    });
  });

  console.log('✅ Cartagena Confiable - Landing page iniciada correctamente.');
});

