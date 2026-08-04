class Header extends HTMLElement {
  connectedCallback() {
    if (this.initialized) return;
    this.initialized = true;

    this.innerHTML = `
      <header class="header glass" id="main-header">
        <div class="container header-container">
          <a href="index.html" class="logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="logo-icon"><path d="M12 5.5c-1.5-2-4-2-6-1-2 1-3 3-2 6 1 3 3 5 3 8 0 2 2 2.5 3.5 1.5.5-.3 1-.8 1.5-1.5.5.7 1 1.2 1.5 1.5 1.5 1 3.5.5 3.5-1.5 0-3 2-5 3-8 1-3 0-5-2-6-2-1-4.5-1-6 1z"/></svg>
            <span>Dentique</span>
          </a>
          
          <nav class="nav-menu">
            <ul class="nav-list">
              <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
              <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
              <li class="nav-item"><a href="treatments.html" class="nav-link">Treatments</a></li>
              <li class="nav-item"><a href="gallery.html" class="nav-link">Smile Gallery</a></li>
              <li class="nav-item"><a href="pricing.html" class="nav-link">Pricing</a></li>
              <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            </ul>

          </nav>
          
          <div class="header-actions" style="display: flex; align-items: center; gap: 16px;">
            <button class="theme-toggle hover-lift" aria-label="Toggle Theme" style="background:none; border:none; color:var(--text-main); cursor:pointer; display:flex; align-items:center; padding: 4px;">
              <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              <svg class="moon-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none;"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
            <a href="book.html" class="btn btn-primary btn-sm">Book Consultation</a>
            <button class="mobile-menu-btn" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
      <div class="nav-overlay"></div>
    `;

    // Highlight active link
    const currentPath = window.location.pathname;
    let fileName = currentPath.split('/').pop() || 'index.html';
    
    const navLinks = this.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === fileName) {
        const navItem = link.closest('.nav-item');
        if (navItem) navItem.classList.add('active');
      }
    });

    // Mobile Menu Toggle logic
    const mobileBtn = this.querySelector('.mobile-menu-btn');
    const navMenu = this.querySelector('.nav-menu');
    const overlay = this.querySelector('.nav-overlay');
    
    const closeMenu = () => {
      mobileBtn?.classList.remove('active');
      navMenu?.classList.remove('active');
      overlay?.classList.remove('active');
      document.body.classList.remove('menu-open');
    };

    const toggleMenu = () => {
      if (mobileBtn?.classList.contains('active')) {
        closeMenu();
      } else {
        mobileBtn?.classList.add('active');
        navMenu?.classList.add('active');
        overlay?.classList.add('active');
        document.body.classList.add('menu-open');
      }
    };

    if (mobileBtn) {
      mobileBtn.addEventListener('click', toggleMenu);
    }
    
    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }
    
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
}

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a href="index.html" class="logo">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="logo-icon"><path d="M12 5.5c-1.5-2-4-2-6-1-2 1-3 3-2 6 1 3 3 5 3 8 0 2 2 2.5 3.5 1.5.5-.3 1-.8 1.5-1.5.5.7 1 1.2 1.5 1.5 1.5 1 3.5.5 3.5-1.5 0-3 2-5 3-8 1-3 0-5-2-6-2-1-4.5-1-6 1z"/></svg>
                <span>Dentique</span>
              </a>
              <p class="footer-desc">Crafting Confident Smiles. Experience world-class luxury cosmetic dentistry.</p>
              <div class="social-links">
                <a href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
                <a href="#" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
                <a href="#" aria-label="Twitter"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M18.9 4H21.5L15.9 10.4L22.5 19H17.4L13.4 13.7L8.8 19H6.2L12.2 12.1L6 4H11.3L15 9L18.9 4ZM18 17.5H19.5L9.5 5.5H7.9L18 17.5Z"/></svg></a>
              </div>
            </div>
            
            <div class="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="about.html">About Us</a></li>
                <li><a href="treatments.html">Treatments</a></li>
                <li><a href="gallery.html">Smile Gallery</a></li>
                <li><a href="pricing.html">Pricing</a></li>
              </ul>
            </div>
            
            <div class="footer-contact">
              <h4>Contact Us</h4>
              <ul>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg> 123 Luxury Ave, Beverly Hills, CA 90210</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> +1 (555) 123-4567</li>
                <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> hello@dentique.com</li>
              </ul>
            </div>
            
            <div class="footer-newsletter">
              <h4>Newsletter</h4>
              <p>Subscribe for dental tips and exclusive offers.</p>
              <form class="newsletter-form">
                <input type="email" placeholder="Your Email Address" required>
                <button type="submit" class="btn btn-primary">→</button>
              </form>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; 2026 Dentique Luxury Dental Studio. All rights reserved.</p>
            <button id="back-to-top" aria-label="Back to top">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            </button>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-header', Header);
customElements.define('custom-footer', Footer);
