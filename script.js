/**
 * ==============================================================================
 * PREMIUM PORTFOLIO APPLICATION LOGIC
 * Developer: M. Kedara Hamsika
 * Architecture: Data-Driven Rendering via data.js, Case Study Modal System,
 *               Resume Viewer, Filter Tabs, Accessible Trailing Cursor,
 *               Theme Management, and Contact Form Validation.
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // Fallback data in case data.js is not loaded
  const data = typeof PORTFOLIO_DATA !== 'undefined' ? PORTFOLIO_DATA : null;

  // --------------------------------------------------------------------------
  // 1. Theme Management (Dark / Light Mode)
  // --------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('portfolio-theme');
  const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

  if (savedTheme) {
    htmlRoot.setAttribute('data-theme', savedTheme);
  } else if (systemPrefersLight) {
    htmlRoot.setAttribute('data-theme', 'light');
  } else {
    htmlRoot.setAttribute('data-theme', 'dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', targetTheme);
      localStorage.setItem('portfolio-theme', targetTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 2. Custom Accessible Trailing Cursor
  // --------------------------------------------------------------------------
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');
  const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (hasFinePointer && !prefersReducedMotion && cursorDot && cursorRing) {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    }, { passive: true });

    // Smooth animation loop for trailing ring
    const renderCursorRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;
      requestAnimationFrame(renderCursorRing);
    };
    requestAnimationFrame(renderCursorRing);

    // Expand cursor ring when hovering interactive elements
    const attachHoverEffects = () => {
      const interactives = document.querySelectorAll('a, button, input, textarea, .project-card, .skill-chip, .journey-card, .achievement-card');
      interactives.forEach((el) => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
      });
    };
    setTimeout(attachHoverEffects, 300);
  }

  // --------------------------------------------------------------------------
  // 3. Render Dynamic Content from data.js
  // --------------------------------------------------------------------------
  if (data) {
    // 3.1 Render Skills Section
    const skillsContainer = document.getElementById('skillsContainer');
    if (skillsContainer && data.skills) {
      skillsContainer.innerHTML = data.skills
        .map((cat) => `
          <div class="skill-category-card" data-category="${cat.category}">
            <h3 class="cat-card-title">${cat.categoryTitle}</h3>
            <p class="cat-card-desc">${cat.description}</p>
            <div class="skill-chips-list">
              ${cat.items
                .map(
                  (item) => `
                <div class="skill-chip">
                  <div class="chip-main">
                    <span class="chip-dot"></span>
                    <div>
                      <span class="chip-name">${item.name}</span>
                      ${item.note ? `<span class="chip-note">${item.note}</span>` : ''}
                    </div>
                  </div>
                  <span class="chip-badge">${item.badge || item.level}</span>
                </div>
              `
                )
                .join('')}
            </div>
          </div>
        `)
        .join('');
    }

    // 3.2 Render Featured Projects
    const projectsContainer = document.getElementById('projectsContainer');
    if (projectsContainer && data.projects) {
      projectsContainer.innerHTML = data.projects
        .map((proj) => {
          const isDeployed = proj.statusType === 'deployed';
          return `
          <article class="project-card" data-project-id="${proj.id}">
            <div>
              <div class="project-card-top">
                <span class="project-badge-tag">${proj.previewBadge || 'Featured'}</span>
                <span class="project-status-pill ${isDeployed ? 'status-deployed' : 'status-prototype'}">
                  <span class="status-dot"></span>
                  ${proj.status}
                </span>
              </div>

              <h3 class="project-title">${proj.title}</h3>
              <p class="project-tagline">${proj.tagline || ''}</p>
              <p class="project-summary">${proj.shortDescription}</p>

              <div class="project-tags-wrap">
                ${proj.technologies.map((t) => `<span class="project-tag-chip">${t}</span>`).join('')}
              </div>
            </div>

            <div class="project-card-footer">
              <button class="btn btn-primary btn-sm view-case-study-btn" data-project-id="${proj.id}">
                <span>View Case Study</span>
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </button>

              <div style="display: flex; gap: 8px;">
                ${
                  proj.githubUrl
                    ? `
                  <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm" aria-label="GitHub Repository">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    <span>Repo</span>
                  </a>`
                    : ''
                }
                ${
                  proj.demoUrl
                    ? `
                  <a href="${proj.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" aria-label="Live Demo">
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span>Live</span>
                  </a>`
                    : ''
                }
              </div>
            </div>
          </article>
          `;
        })
        .join('');
    }

    // 3.3 Render Currently Exploring (Learning Journey)
    const journeyContainer = document.getElementById('journeyContainer');
    if (journeyContainer && data.learningJourney) {
      journeyContainer.innerHTML = data.learningJourney
        .map(
          (item) => `
        <div class="journey-card">
          <div>
            <div class="journey-header">
              <div class="journey-icon-wrap">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 class="journey-topic">${item.topic}</h3>
            </div>
            <p class="journey-focus">${item.focus}</p>
          </div>
          <span class="journey-status-pill">● ${item.status}</span>
        </div>
      `
        )
        .join('');
    }

    // 3.4 Render Achievements & Certifications
    const achievementsContainer = document.getElementById('achievementsContainer');
    if (achievementsContainer && data.achievements) {
      achievementsContainer.innerHTML = data.achievements
        .map(
          (ach) => `
        <div class="achievement-card">
          <div>
            <div class="achieve-header">
              <span class="achieve-issuer">${ach.issuer}</span>
              <span class="achieve-tag">${ach.status}</span>
            </div>
            <h3 class="achieve-title">${ach.title}</h3>
            <div class="achieve-date">${ach.date}</div>
            <p class="achieve-desc">${ach.description}</p>
          </div>
          <div>
            ${
              ach.verificationUrl
                ? `
              <a href="${ach.verificationUrl}" target="_blank" rel="noopener noreferrer" class="achieve-link">
                <span>View Certificate Credential</span>
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2" fill="none">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>`
                : ''
            }
          </div>
        </div>
      `
        )
        .join('');
    }
  }

  // --------------------------------------------------------------------------
  // 4. Skills Category Filtering
  // --------------------------------------------------------------------------
  const skillTabBtns = document.querySelectorAll('.skill-tab-btn');
  skillTabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      skillTabBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');
      const cards = document.querySelectorAll('.skill-category-card');

      cards.forEach((card) => {
        const cat = card.getAttribute('data-category');
        if (filterValue === 'all' || filterValue === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --------------------------------------------------------------------------
  // 5. Dedicated Project Case Study Modal System
  // --------------------------------------------------------------------------
  const caseStudyModal = document.getElementById('caseStudyModal');
  const closeCaseStudyBtn = document.getElementById('closeCaseStudyBtn');

  const openCaseStudy = (projectId) => {
    if (!data || !data.projects || !caseStudyModal) return;
    const project = data.projects.find((p) => p.id === projectId);
    if (!project) return;

    document.getElementById('csModalStatus').textContent = project.status;
    document.getElementById('csModalBadge').textContent = project.previewBadge || 'Case Study';
    document.getElementById('csModalTitle').textContent = project.title;
    document.getElementById('csModalTagline').textContent = project.tagline || '';

    // Render Tech tags
    const tagsContainer = document.getElementById('csModalTechTags');
    if (tagsContainer) {
      tagsContainer.innerHTML = project.technologies
        .map((t) => `<span class="project-tag-chip">${t}</span>`)
        .join('');
    }

    // Case study contents
    const cs = project.caseStudy || {};
    document.getElementById('csModalProblem').textContent =
      cs.problem || 'Details coming soon as development progresses.';
    document.getElementById('csModalSolution').textContent =
      cs.solution || project.shortDescription;
    document.getElementById('csModalContribution').textContent =
      cs.myContribution || 'Architectural planning, system design, and implementation.';

    const highlightsList = document.getElementById('csModalHighlights');
    if (highlightsList) {
      if (cs.highlights && cs.highlights.length > 0) {
        highlightsList.innerHTML = cs.highlights.map((h) => `<li>${h}</li>`).join('');
      } else {
        highlightsList.innerHTML = '<li>Focused on practical utility and modular architecture.</li>';
      }
    }

    // Footer buttons
    const footerLinks = document.getElementById('csModalFooterLinks');
    if (footerLinks) {
      footerLinks.innerHTML = `
        ${
          project.githubUrl
            ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">GitHub Repository</a>`
            : ''
        }
        ${
          project.demoUrl
            ? `<a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">Launch Live Demo</a>`
            : ''
        }
        <button id="csModalDismissBtn" class="btn btn-outline btn-sm">Close</button>
      `;

      const dismissBtn = document.getElementById('csModalDismissBtn');
      if (dismissBtn) dismissBtn.addEventListener('click', closeCaseStudy);
    }

    caseStudyModal.classList.add('open');
    caseStudyModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeCaseStudy = () => {
    if (!caseStudyModal) return;
    caseStudyModal.classList.remove('open');
    caseStudyModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (closeCaseStudyBtn) {
    closeCaseStudyBtn.addEventListener('click', closeCaseStudy);
  }

  if (caseStudyModal) {
    caseStudyModal.addEventListener('click', (e) => {
      if (e.target === caseStudyModal) closeCaseStudy();
    });
  }

  // Delegate clicks on dynamic "View Case Study" buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.view-case-study-btn');
    if (btn) {
      const projId = btn.getAttribute('data-project-id');
      if (projId) openCaseStudy(projId);
    }
  });

  // --------------------------------------------------------------------------
  // 6. Resume Modal & Print Viewer
  // --------------------------------------------------------------------------
  const resumeBtn = document.getElementById('resumeBtn');
  const resumeModal = document.getElementById('resumeModal');
  const closeResumeBtn = document.getElementById('closeResumeBtn');
  const printResumeBtn = document.getElementById('printResumeBtn');

  const openResumeModal = () => {
    if (!resumeModal) return;
    resumeModal.classList.add('open');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeResumeModal = () => {
    if (!resumeModal) return;
    resumeModal.classList.remove('open');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  if (resumeBtn) resumeBtn.addEventListener('click', openResumeModal);
  if (closeResumeBtn) closeResumeBtn.addEventListener('click', closeResumeModal);

  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) closeResumeModal();
    });
  }

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // --------------------------------------------------------------------------
  // 7. Mobile Navigation Drawer
  // --------------------------------------------------------------------------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  const openDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openDrawer);
  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeDrawer);

  if (mobileDrawer) {
    mobileDrawer.addEventListener('click', (e) => {
      if (e.target === mobileDrawer) closeDrawer();
    });
  }

  drawerLinks.forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });

  // Global Escape key handler to close any active modal/drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (caseStudyModal && caseStudyModal.classList.contains('open')) closeCaseStudy();
      if (resumeModal && resumeModal.classList.contains('open')) closeResumeModal();
      if (mobileDrawer && mobileDrawer.classList.contains('open')) closeDrawer();
    }
  });

  // --------------------------------------------------------------------------
  // 8. Sticky Header & ScrollSpy
  // --------------------------------------------------------------------------
  const header = document.getElementById('header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  const handleScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
            drawerLinks.forEach((link) => {
              if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // --------------------------------------------------------------------------
  // 9. Back To Top Button
  // --------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTopBtn');
  if (backToTopBtn) {
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 450) {
          backToTopBtn.classList.add('visible');
        } else {
          backToTopBtn.classList.remove('visible');
        }
      },
      { passive: true }
    );

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --------------------------------------------------------------------------
  // 10. Contact Form Client-side Validation & Toast Feedback
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const subjectInput = document.getElementById('userSubject');
  const messageInput = document.getElementById('userMessage');

  const toastMessage = document.getElementById('toastMessage');
  const closeToastBtn = document.getElementById('closeToastBtn');
  let toastTimer;

  const showToast = (title, message) => {
    if (!toastMessage) return;
    const titleEl = toastMessage.querySelector('.toast-title');
    const descEl = toastMessage.querySelector('.toast-desc');

    if (titleEl && title) titleEl.textContent = title;
    if (descEl && message) descEl.textContent = message;

    toastMessage.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastMessage.classList.remove('show');
    }, 5500);
  };

  if (closeToastBtn && toastMessage) {
    closeToastBtn.addEventListener('click', () => {
      toastMessage.classList.remove('show');
    });
  }

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  const validateField = (input, isValid) => {
    const group = input.closest('.form-group');
    if (!group) return isValid;
    if (!isValid) group.classList.add('has-error');
    else group.classList.remove('has-error');
    return isValid;
  };

  if (nameInput) {
    nameInput.addEventListener('input', () => {
      validateField(nameInput, nameInput.value.trim().length >= 2);
    });
  }
  if (emailInput) {
    emailInput.addEventListener('input', () => {
      validateField(emailInput, isValidEmail(emailInput.value.trim()));
    });
  }
  if (subjectInput) {
    subjectInput.addEventListener('input', () => {
      validateField(subjectInput, subjectInput.value.trim().length >= 3);
    });
  }
  if (messageInput) {
    messageInput.addEventListener('input', () => {
      validateField(messageInput, messageInput.value.trim().length >= 10);
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameOk = validateField(nameInput, nameInput.value.trim().length >= 2);
      const isEmailOk = validateField(emailInput, isValidEmail(emailInput.value.trim()));
      const isSubOk = validateField(subjectInput, subjectInput.value.trim().length >= 3);
      const isMsgOk = validateField(messageInput, messageInput.value.trim().length >= 10);

      if (isNameOk && isEmailOk && isSubOk && isMsgOk) {
        const sender = nameInput.value.trim();
        showToast(
          `Thank You, ${sender}!`,
          'Message format validated successfully. To route incoming messages directly to your email inbox, configure your free endpoint at Formspree.'
        );

        contactForm.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach((inp) => {
          const grp = inp.closest('.form-group');
          if (grp) grp.classList.remove('has-error');
        });
      } else {
        if (!isNameOk) nameInput.focus();
        else if (!isEmailOk) emailInput.focus();
        else if (!isSubOk) subjectInput.focus();
        else if (!isMsgOk) messageInput.focus();
      }
    });
  }

  // --------------------------------------------------------------------------
  // 11. Footer Current Year
  // --------------------------------------------------------------------------
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }
});
