/* ============================================================
   NANI'S BARBERS — script.js
   Handles: Navbar scroll, hamburger menu, card click states,
            scroll-reveal animations
   ============================================================ */

(function () {
  'use strict';

  /* ── DOM REFERENCES ── */
  const navbar    = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  /* ── NAVBAR: scroll effect ── */
  function handleNavbarScroll() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll(); // run once on load

  /* ── HAMBURGER MENU ── */
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── CARD CLICK STATES ── */
  // Adds a temporary 'clicked' class on interactive cards for color feedback
  const clickableCards = document.querySelectorAll(
    '.service-card, .price-card, .review-card'
  );

  clickableCards.forEach(function (card) {
    card.addEventListener('click', function () {
      // Remove clicked from any previously clicked card of same type
      const siblings = document.querySelectorAll('.' + card.classList[0]);
      siblings.forEach(function (s) { s.classList.remove('clicked'); });

      // Toggle clicked on this card
      card.classList.add('clicked');

      // Auto-remove after 1.4s so user can click again
      setTimeout(function () {
        card.classList.remove('clicked');
      }, 1400);
    });

    // Keyboard: treat Enter/Space as click for accessibility
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  /* ── SCROLL REVEAL ── */
  // Adds 'reveal' + optional 'reveal-delay-N' classes to target elements,
  // then uses IntersectionObserver to add 'visible' when in viewport.

  const revealTargets = [
    { selector: '.about-grid',        delay: 0 },
    { selector: '.service-card',      stagger: true },
    { selector: '.price-card',        stagger: true },
    { selector: '.review-card',       stagger: true },
    { selector: '.gallery-item',      stagger: true },
    { selector: '.about-feat',        stagger: true },
    { selector: '.section-header',    delay: 0 },
    { selector: '.location-grid',     delay: 0 },
    { selector: '.cta-content',       delay: 0 },
  ];

  revealTargets.forEach(function (item) {
    const elements = document.querySelectorAll(item.selector);
    elements.forEach(function (el, index) {
      el.classList.add('reveal');
      if (item.stagger) {
        const delayClass = 'reveal-delay-' + ((index % 4) + 1);
        el.classList.add(delayClass);
      }
    });
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  /* ── GALLERY SLIDER ── */
  (function initSlider() {
    var slidesContainer = document.getElementById('sliderSlides');
    var dotsContainer   = document.getElementById('sliderDots');
    var counter         = document.getElementById('sliderCounter');
    var prevBtn         = document.getElementById('sliderPrev');
    var nextBtn         = document.getElementById('sliderNext');
    if (!slidesContainer || !dotsContainer) return;

    var slides = slidesContainer.querySelectorAll('.slide');
    var total  = slides.length;
    var current = 0;
    var autoTimer;

    slides.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'View image ' + (i + 1));
      dot.addEventListener('click', function () { goTo(i); });
      dotsContainer.appendChild(dot);
    });

    function updateUI() {
      var dots = dotsContainer.querySelectorAll('.slider-dot');
      dots.forEach(function (d, i) { d.classList.toggle('active', i === current); });
      if (counter) counter.textContent = (current + 1) + ' / ' + total;
    }

    function goTo(idx) {
      slides[current].classList.remove('active');
      current = ((idx % total) + total) % total;
      slides[current].classList.add('active');
      updateUI();
      resetAuto();
    }

    prevBtn.addEventListener('click', function () { goTo(current - 1); });
    nextBtn.addEventListener('click', function () { goTo(current + 1); });

    function resetAuto() {
      clearInterval(autoTimer);
      autoTimer = setInterval(function () { goTo(current + 1); }, 4500);
    }
    resetAuto();

    var viewport = slidesContainer.closest('.slider-viewport');
    var touchStartX = 0;
    viewport.addEventListener('touchstart', function (e) {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });
    viewport.addEventListener('touchend', function (e) {
      var diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    }, { passive: true });

    viewport.addEventListener('mouseenter', function () { clearInterval(autoTimer); });
    viewport.addEventListener('mouseleave', function () { resetAuto(); });

    updateUI();
  })();

  /* ── SMOOTH SCROLL for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const offsetTop = targetEl.getBoundingClientRect().top + window.scrollY - 68;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    });
  });

  /* ── ACTIVE NAV LINK highlight on scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActiveNav() {
    let current = '';
    sections.forEach(function (section) {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = '#' + section.getAttribute('id');
      }
    });
    navAnchors.forEach(function (link) {
      link.style.color = link.getAttribute('href') === current
        ? 'var(--clr-gold)'
        : '';
    });
  }

  window.addEventListener('scroll', setActiveNav, { passive: true });

})();
