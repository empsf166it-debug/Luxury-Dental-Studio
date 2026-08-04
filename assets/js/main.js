document.addEventListener('DOMContentLoaded', () => {
  // Theme Toggle
  const themeToggles = document.querySelectorAll('.theme-toggle');
  
  // Check for saved theme preference or system preference
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  const updateIcons = (isDark) => {
    document.querySelectorAll('.sun-icon').forEach(icon => icon.style.display = isDark ? 'none' : 'block');
    document.querySelectorAll('.moon-icon').forEach(icon => icon.style.display = isDark ? 'block' : 'none');
  };

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateIcons(true);
  }
  
  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        updateIcons(false);
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        updateIcons(true);
      }
    });
  });

  // Sticky Header
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });


  // Scroll Reveal Animations
  const revealElements = document.querySelectorAll('.reveal, .fade-up, .fade-left, .fade-right, .zoom-in');
  
  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  revealElements.forEach(el => {
    revealOnScroll.observe(el);
  });

  // Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if(backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });
    
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================
  // V2: PREMIUM ANIMATIONS & 3D EFFECTS
  // =========================================

  // 1. Custom Cursor Glow
  const cursorGlow = document.createElement('div');
  cursorGlow.className = 'cursor-glow';
  document.body.appendChild(cursorGlow);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorGlow.style.left = `${mouseX}px`;
    cursorGlow.style.top = `${mouseY}px`;
  });

  // Expand glow on clickable items
  const clickables = document.querySelectorAll('a, button, .tilt-card');
  clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursorGlow.style.width = '400px';
      cursorGlow.style.height = '400px';
    });
    el.addEventListener('mouseleave', () => {
      cursorGlow.style.width = '300px';
      cursorGlow.style.height = '300px';
    });
  });

  // 2. Scroll Progress Indicator
  const scrollProgress = document.createElement('div');
  scrollProgress.className = 'scroll-progress';
  document.body.appendChild(scrollProgress);

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = `${scrollPercent}%`;
  });

  // 3. Stagger List Reveal
  const staggerLists = document.querySelectorAll('.stagger-list');
  const staggerObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  staggerLists.forEach(list => staggerObserver.observe(list));

  // 4. Vanilla 3D Tilt Effect
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10; // Max 10 deg rotation
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
      card.style.transition = 'transform 0.5s ease-out';
    });
    
    card.addEventListener('mouseenter', () => {
      card.style.transition = 'none';
    });
  });
});
