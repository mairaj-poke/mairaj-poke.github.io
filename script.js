/* ══════════════════════════════════════════════════════════════════
   MAIRAJ POKE — PORTFOLIO — script.js
   Interactions: Loader, Cursor, Nav, Scroll Reveal, Counter,
   Skill Bars, Testimonial Slider, Form Handling
   ══════════════════════════════════════════════════════════════════ */

'use strict';

// ── LOADER ──────────────────────────────────────────────────────────
const loader = document.getElementById('loader');
window.addEventListener('load', () => {
  setTimeout(() => {
    loader.classList.add('done');
    // Trigger initial reveals after loader
    setTimeout(() => observeReveal(), 100);
  }, 2400);
});

// ── CUSTOM CURSOR ────────────────────────────────────────────────────
const cursor         = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursorFollower');

if (window.innerWidth > 768 && cursor) {
  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  // Smooth follower
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    cursorFollower.style.left = followerX + 'px';
    cursorFollower.style.top  = followerY + 'px';
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  // Hover state on interactive elements
  const hoverEls = document.querySelectorAll('a, button, .project-card, .skill-card, .app-card, .testi-btn, input, textarea');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('hover');
      cursorFollower.classList.add('hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
      cursorFollower.classList.remove('hover');
    });
  });
}

// ── NAV SCROLL ───────────────────────────────────────────────────────
const nav = document.getElementById('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
  lastScrollY = currentScrollY;
}, { passive: true });

// ── HAMBURGER / MOBILE NAV ───────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── SMOOTH SCROLL FOR NAV LINKS ──────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── SCROLL REVEAL ────────────────────────────────────────────────────
function observeReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Trigger skill bars when skills section is visible
          if (entry.target.classList.contains('skill-card')) {
            const bar = entry.target.querySelector('.skill-fill');
            if (bar) {
              const width = bar.getAttribute('data-width');
              bar.style.width = width + '%';
            }
          }
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
  );
  revealEls.forEach(el => revealObserver.observe(el));
}
observeReveal();

// ── COUNTER ANIMATION ────────────────────────────────────────────────
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseInt(el.getAttribute('data-target'), 10);
          const duration = 1800;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed  = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(eased * target);
            if (progress < 1) requestAnimationFrame(updateCounter);
            else el.textContent = target;
          }
          requestAnimationFrame(updateCounter);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach(c => counterObserver.observe(c));
}
animateCounters();

// ── TESTIMONIALS SLIDER ──────────────────────────────────────────────
const track  = document.getElementById('testimonialsTrack');
const dots   = document.querySelectorAll('.testi-dot');
const btnPrev = document.getElementById('testiPrev');
const btnNext = document.getElementById('testiNext');

let currentTesti = 0;
const totalTesti = dots.length;

function goToTesti(index) {
  currentTesti = (index + totalTesti) % totalTesti;
  const cards     = track.querySelectorAll('.testi-card');
  const cardWidth = cards[0].offsetWidth + 24; // gap
  track.scrollTo({ left: currentTesti * cardWidth, behavior: 'smooth' });
  dots.forEach((d, i) => d.classList.toggle('active', i === currentTesti));
}

btnNext && btnNext.addEventListener('click', () => goToTesti(currentTesti + 1));
btnPrev && btnPrev.addEventListener('click', () => goToTesti(currentTesti - 1));
dots.forEach((dot, i) => dot.addEventListener('click', () => goToTesti(i)));

// Auto-advance testimonials
let testiInterval = setInterval(() => goToTesti(currentTesti + 1), 5000);
track && track.addEventListener('mouseenter', () => clearInterval(testiInterval));
track && track.addEventListener('mouseleave', () => {
  testiInterval = setInterval(() => goToTesti(currentTesti + 1), 5000);
});

// ── CONTACT FORM ─────────────────────────────────────────────────────
const contactForm   = document.getElementById('contactForm');
const formSuccess   = document.getElementById('formSuccess');

contactForm && contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.btn-primary');
  btn.textContent = 'Sending...';
  btn.style.opacity = '0.7';
  btn.disabled = true;

  // Simulate send (replace with actual EmailJS / Formspree integration)
  setTimeout(() => {
    btn.style.display = 'none';
    formSuccess.classList.add('show');
    contactForm.reset();
  }, 1500);
});

// ── PARALLAX HERO ORBS (subtle) ──────────────────────────────────────
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const orb1 = document.querySelector('.hero-orb-1');
  const orb2 = document.querySelector('.hero-orb-2');
  if (orb1) orb1.style.transform = `translate(0, ${scrollY * 0.2}px)`;
  if (orb2) orb2.style.transform = `translate(0, ${-scrollY * 0.15}px)`;
}, { passive: true });

// ── TILT EFFECT ON PROJECT CARDS ─────────────────────────────────────
if (window.innerWidth > 768) {
  document.querySelectorAll('.project-card, .skill-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect   = card.getBoundingClientRect();
      const x      = e.clientX - rect.left;
      const y      = e.clientY - rect.top;
      const cx     = rect.width  / 2;
      const cy     = rect.height / 2;
      const tiltX  = ((y - cy) / cy) * 6;
      const tiltY  = ((x - cx) / cx) * -6;
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

// ── ACTIVE NAV LINK ON SCROLL ────────────────────────────────────────
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  },
  { threshold: 0.35 }
);
sections.forEach(sec => sectionObserver.observe(sec));

// ── PAGE TRANSITION ON LINKS ─────────────────────────────────────────
document.querySelectorAll('a:not([href^="#"])').forEach(link => {
  link.addEventListener('click', (e) => {
    if (link.hostname !== window.location.hostname) return; // external links open normally
  });
});

// ── HERO TEXT SPLIT ANIMATION ────────────────────────────────────────
// Stagger title lines on load
window.addEventListener('load', () => {
  setTimeout(() => {
    const titleLines = document.querySelectorAll('.title-line');
    titleLines.forEach((line, i) => {
      line.style.animationDelay = `${0.3 + i * 0.15}s`;
      line.style.animation = `slideInUp 0.9s cubic-bezier(0.4,0,0.2,1) both`;
    });
  }, 2500);
});

// Add CSS keyframe via JS for title animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInUp {
    from { opacity: 0; transform: translateY(60px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .nav-links a.active { color: #f0f0f0; }
  .nav-links a.active::after { right: 0; }
`;
document.head.appendChild(style);

// ── SKILL BAR OBSERVER (additional trigger) ──────────────────────────
const skillBarObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.style.width = bar.getAttribute('data-width') + '%';
        });
        skillBarObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);
document.querySelectorAll('.skill-card').forEach(card => skillBarObserver.observe(card));

// ── FLOATING CARD MOUSE PARALLAX ─────────────────────────────────────
if (window.innerWidth > 1100) {
  const heroCard = document.querySelector('.hero-card');
  window.addEventListener('mousemove', (e) => {
    if (!heroCard) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 12;
    const y = (e.clientY / window.innerHeight - 0.5) * 12;
    heroCard.style.transform = `translateY(-6px) rotateY(${x * 0.5}deg) rotateX(${-y * 0.5}deg)`;
  }, { passive: true });
}

console.log('%c Mairaj Poke Portfolio — Built with ❤️ & Precision ', 'background:#b5f23d;color:#000;padding:8px 16px;font-weight:bold;border-radius:4px;');
