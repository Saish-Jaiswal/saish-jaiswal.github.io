/* ============================================================
   script.js — Academic Personal Website
   ============================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────
     MOBILE NAVIGATION TOGGLE
     ────────────────────────────────────────── */

  var navToggle = document.getElementById('navToggle');
  var navLinks  = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile menu when any nav link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ──────────────────────────────────────────
     NAVBAR SHADOW ON SCROLL
     ────────────────────────────────────────── */

  var navbar = document.getElementById('navbar');

  if (navbar) {
    window.addEventListener('scroll', function () {
      navbar.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });
  }

  /* ──────────────────────────────────────────
     ACTIVE SECTION HIGHLIGHTING (IntersectionObserver)
     ────────────────────────────────────────── */

  var sections = document.querySelectorAll('section[id]');
  var navItems = document.querySelectorAll('.nav-link');

  if (sections.length && navItems.length && 'IntersectionObserver' in window) {
    var observerOptions = {
      root: null,
      /*
        rootMargin: shrink the observable viewport so a section is only
        considered "active" when it occupies a meaningful portion of the screen.
        Top offset = navbar height + a little breathing room.
      */
      rootMargin: '-64px 0px -55% 0px',
      threshold: 0
    };

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var activeId = entry.target.getAttribute('id');
          navItems.forEach(function (link) {
            var href = link.getAttribute('href');
            link.classList.toggle('active', href === '#' + activeId);
          });
        }
      });
    }, observerOptions);

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ──────────────────────────────────────────
     SMOOTH SCROLL FALLBACK
     (for browsers that don't support CSS scroll-behavior)
     ────────────────────────────────────────── */

  if (!('scrollBehavior' in document.documentElement.style)) {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = anchor.getAttribute('href').slice(1);
        var target   = document.getElementById(targetId);
        if (!target) return;

        e.preventDefault();

        var navbarHeight = navbar ? navbar.offsetHeight : 0;
        var targetTop    = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({ top: targetTop, behavior: 'smooth' });
      });
    });
  }

  /* ──────────────────────────────────────────
     FOOTER — CURRENT YEAR
     ────────────────────────────────────────── */

  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

})();
