// PRELOADER
window.addEventListener('load', () => {
  let w = 0;
  const fill = document.getElementById('preloader-fill');
  const t = setInterval(() => {
    w += Math.random() * 15 + 5;
    if(w >= 100) {
      w = 100;
      clearInterval(t);
      setTimeout(() => {
        const pre = document.getElementById('preloader');
        pre.style.opacity = '0';
        pre.style.transition = 'opacity 0.5s';
        setTimeout(() => {
          pre.style.display = 'none';
          initReveal();
        }, 500);
      }, 200);
    }
    fill.style.width = w + '%';
  }, 60);
});

// TYPED TEXT
const phrases = ['intelligent systems', 'LLM-powered apps', 'ML solutions', 'production AI'];
let pi = 0, ci = 0, deleting = false;
function typeEffect() {
  const el = document.getElementById('typed-text');
  if(!el) return;
  const phrase = phrases[pi];
  if(!deleting) {
    el.textContent = phrase.slice(0, ci + 1);
    ci++;
    if(ci === phrase.length) {
      deleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    el.textContent = phrase.slice(0, ci - 1);
    ci--;
    if(ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }
  setTimeout(typeEffect, deleting ? 60 : 100);
}
setTimeout(typeEffect, 1200);

// SCROLL REVEAL
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => obs.observe(el));
}

// SCROLL PROGRESS
window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  document.getElementById('progress').style.width = scrolled + '%';
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  document.getElementById('back-top').classList.toggle('visible', window.scrollY > 400);
  
  // active nav
  ['about', 'timeline', 'projects', 'skills', 'certifications', 'contact'].forEach(id => {
    const sec = document.getElementById(id);
    if(!sec) return;
    const rect = sec.getBoundingClientRect();
    const link = document.querySelector(`[data-section="${id}"]`);
    if(link) link.classList.toggle('active', rect.top <= 80 && rect.bottom > 80);
  });
});

// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; 
  my = e.clientY; 
  cursor.style.left = mx + 'px'; 
  cursor.style.top = my + 'px';
});
function animRing() {
  rx += (mx - rx) * 0.12; 
  ry += (my - ry) * 0.12; 
  ring.style.left = rx + 'px'; 
  ring.style.top = ry + 'px'; 
  requestAnimationFrame(animRing);
}
animRing();
document.querySelectorAll('a, button, .skill-pill, .project-item').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.transform = 'translate(-50%, -50%) scale(1.6)';
    ring.style.borderColor = 'rgba(255, 255, 255, 0.7)';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.transform = 'translate(-50%, -50%) scale(1)';
    ring.style.borderColor = 'rgba(255, 255, 255, 0.4)';
  });
});

// COUNTER ANIMATION
function animateCounters() {
  document.querySelectorAll('.stat-num[data-count]').forEach(el => {
    const target = +el.getAttribute('data-count');
    let cur = 0;
    const step = () => {
      cur += Math.ceil(target / 20);
      if(cur >= target) {
        el.textContent = target;
        return;
      }
      el.textContent = cur;
      requestAnimationFrame(step);
    };
    step();
  });
}
setTimeout(animateCounters, 1400);

// PROJECT FILTER
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    document.querySelectorAll('.project-item').forEach(item => {
      const tags = item.getAttribute('data-tags') || '';
      if(filter === 'all' || tags.includes(filter)) {
        item.classList.remove('hidden');
        item.style.display = '';
      } else {
        item.classList.add('hidden');
      }
    });
  });
});

// TOAST
function showToast(msg, type = 'success') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'show ' + type;
  setTimeout(() => { t.className = ''; }, 3500);
}

// REAL CONTACT FORM SUBMISSION VIA FORMSPREE
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', async function(e) {
  e.preventDefault(); 
  
  const btn = document.getElementById('cf-submit');
  const name = document.getElementById('cf-name').value.trim();
  const email = document.getElementById('cf-email').value.trim();
  const msg = document.getElementById('cf-msg').value.trim();

  if(!name || !email || !msg) { 
    showToast('please fill all fields', 'error'); 
    return; 
  }
  if(!email.includes('@')) { 
    showToast('please enter a valid email', 'error'); 
    return; 
  }

  btn.textContent = 'Sending...';
  btn.disabled = true;

  try {
    // -------------------------------------------------------------
    // IMPORTANT: REPLACE 'YOUR_FORMSPREE_ID_HERE' BELOW WITH YOUR ACTUAL ID
    // -------------------------------------------------------------
    const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID_HERE', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, email: email, message: msg })
    });

    if (response.ok) {
      showToast('message sent! i will get back to you soon ✓', 'success');
      contactForm.reset();
    } else {
      showToast('Oops! There was a problem sending your message.', 'error');
    }
  } catch (error) {
    showToast('Oops! Network error.', 'error');
  }

  btn.textContent = 'Send message';
  btn.disabled = false;
});

// KEYBOARD SHORTCUT
document.addEventListener('keydown', e => {
  if(e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault();
    document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
    showToast('jumped to projects (tip: press / anytime)');
  }
});

// MOBILE MENU TOGGLE
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

// Open/close menu when clicking the hamburger icon
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Change icon to 'X' when open
  menuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Close menu automatically when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuBtn.textContent = '☰';
  });
});
