/**
 * FLAME KURUKSHETRA 2026 - INTERACTIVE SCRIPT
 * Complete interactive logic for Live Matchups, Countdown, Event Search,
 * Accordions, Marquees, Modals, and Micro-interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Navbar Scroll State
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 2. Live Matchups / Countdown Banner Toggle & Timer
  const toggleBannerBtn = document.getElementById('toggleBannerModeBtn');
  const matchupsScrollWrap = document.querySelector('.matchups-scroll-wrapper');
  const countdownWrap = document.querySelector('.countdown-mode-container');
  const statusPill = document.querySelector('.banner-status-pill');

  let isLiveMode = true;

  if (toggleBannerBtn && matchupsScrollWrap && countdownWrap) {
    toggleBannerBtn.addEventListener('click', () => {
      isLiveMode = !isLiveMode;
      if (isLiveMode) {
        matchupsScrollWrap.style.display = 'block';
        countdownWrap.classList.remove('active');
        toggleBannerBtn.innerHTML = '<span>⏳ Switch to Countdown</span>';
        statusPill.innerHTML = '<span class="pulsing-dot"></span> <span>KURUKSHETRA LIVE ARENA</span>';
      } else {
        matchupsScrollWrap.style.display = 'none';
        countdownWrap.classList.add('active');
        toggleBannerBtn.innerHTML = '<span>🔴 Switch to Live Matches</span>';
        statusPill.innerHTML = '<span class="pulsing-dot orange"></span> <span>COUNTDOWN TO KURUKSHETRA 2026</span>';
      }
    });
  }

  // Live Countdown Calculation to Kurukshetra
  function updateCountdown() {
    // Target: Next Kurukshetra Fest date (e.g. October 24, 2026)
    const targetDate = new Date('2026-10-24T09:00:00+05:30').getTime();
    const now = new Date().getTime();
    let difference = targetDate - now;

    if (difference < 0) {
      difference = 3 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 35 * 60 * 1000; // Simulated fallback
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    const elDays = document.getElementById('countDays');
    const elHours = document.getElementById('countHours');
    const elMins = document.getElementById('countMins');
    const elSecs = document.getElementById('countSecs');

    if (elDays) elDays.innerText = String(days).padStart(2, '0');
    if (elHours) elHours.innerText = String(hours).padStart(2, '0');
    if (elMins) elMins.innerText = String(minutes).padStart(2, '0');
    if (elSecs) elSecs.innerText = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // 3. Event Search & Filter Engine
  const searchInput = document.getElementById('eventSearchInput');
  const catFilterPills = document.querySelectorAll('.cat-filter-pill');
  const modeFilterPills = document.querySelectorAll('.mode-filter-pill');
  const eventCards = document.querySelectorAll('.event-card-item');
  const resultsCountText = document.getElementById('resultsCountText');
  const noEventsMessage = document.getElementById('noEventsMessage');

  let activeCategory = 'all';
  let activeMode = 'all';
  let searchQuery = '';

  function filterEvents() {
    let visibleCount = 0;

    eventCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category'); // sports, cultural, me
      const cardMode = card.getAttribute('data-mode'); // offline, online
      const cardName = card.querySelector('.event-item-name').innerText.toLowerCase();
      const cardMeta = card.querySelector('.event-item-meta').innerText.toLowerCase();

      const matchesSearch = !searchQuery || cardName.includes(searchQuery) || cardMeta.includes(searchQuery);
      const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
      const matchesMode = activeMode === 'all' || cardMode === activeMode;

      if (matchesSearch && matchesCategory && matchesMode) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (resultsCountText) {
      resultsCountText.innerText = `Showing ${visibleCount} events`;
    }

    if (noEventsMessage) {
      noEventsMessage.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      filterEvents();
    });
  }

  catFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category');
      filterEvents();
    });
  });

  modeFilterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      modeFilterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeMode = pill.getAttribute('data-mode');
      filterEvents();
    });
  });

  // Mega-menu links click event: scroll to search & auto-filter
  const megaLinks = document.querySelectorAll('.mega-event-link');
  megaLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetCategory = link.getAttribute('data-category');
      if (targetCategory) {
        catFilterPills.forEach(p => {
          if (p.getAttribute('data-category') === targetCategory) {
            p.click();
          }
        });
      }
    });
  });

  // 4. Interactive "How to Compete" 4-Step Accordion with Image Swapping
  const stepItems = document.querySelectorAll('.how-step-item');
  const howRightImg = document.querySelector('.how-right-img');

  const stepImages = [
    'assets/how-it-works-player.png',
    'assets/card-racket.png',
    'assets/bento-court.png',
    'assets/bento-player-serve.png'
  ];

  stepItems.forEach((step, index) => {
    step.addEventListener('click', () => {
      stepItems.forEach(s => s.classList.remove('active'));
      step.classList.add('active');

      if (howRightImg && stepImages[index]) {
        howRightImg.style.opacity = '0';
        howRightImg.style.transform = 'scale(0.98)';
        setTimeout(() => {
          howRightImg.src = stepImages[index];
          howRightImg.style.opacity = '1';
          howRightImg.style.transform = 'scale(1)';
        }, 220);
      }
    });
  });

  // 5. Testimonial Switcher
  const authorTabs = document.querySelectorAll('.testimonial-author-tab');
  const quoteElem = document.querySelector('.testimonial-quote');

  const testimonials = [
    {
      quote: '“The courts are always spotless, the booking process is super smooth, and every session feels amazing. FLAME KURUKSHETRA has completely changed the way I experience collegiate sports.”',
      author: 'Jordan Smith',
      role: 'Tennis Gold Medalist, St. Xavier’s'
    },
    {
      quote: '“From the floodlit turf to the roar of over 10,000 spectators under the Pune night sky, Kurukshetra is the only tournament where every match feels like the national championship.”',
      author: 'Alex Johnson',
      role: 'Football Captain, IIT Bombay'
    },
    {
      quote: '“The fierce competition pushes you past your absolute limits. The energy, the hospitality, and the sheer prestige of lifting the Phoenix trophy is unmatched.”',
      author: 'Taylor Brown',
      role: 'Basketball MVP, FLAME University'
    }
  ];

  authorTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      authorTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      if (quoteElem && testimonials[index]) {
        quoteElem.style.opacity = '0';
        setTimeout(() => {
          quoteElem.innerHTML = testimonials[index].quote;
          quoteElem.style.opacity = '1';
        }, 180);
      }
    });
  });

  // 6. Bento Grid Dots Switcher
  const bentoDots = document.querySelectorAll('.bento-dot');
  const bentoWideImg = document.querySelector('.bento-card-wide img');
  const bentoImages = [
    'assets/bento-player-serve.png',
    'assets/how-it-works-player.png',
    'assets/faq-player.png'
  ];

  bentoDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      bentoDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');

      if (bentoWideImg && bentoImages[index]) {
        bentoWideImg.style.opacity = '0.3';
        setTimeout(() => {
          bentoWideImg.src = bentoImages[index];
          bentoWideImg.style.opacity = '1';
        }, 180);
      }
    });
  });

  // 7. Interactive FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(f => f.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 8. Interactive Registration Modal
  const modalOverlay = document.getElementById('registrationModal');
  const openModalBtns = document.querySelectorAll('.open-reg-modal');
  const closeModalBtn = document.querySelector('.modal-close-btn');
  const regForm = document.getElementById('contingentForm');
  const sportSelect = document.getElementById('sportCategory');

  function openModal(defaultSport = '') {
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (defaultSport && sportSelect) {
        for (let i = 0; i < sportSelect.options.length; i++) {
          if (sportSelect.options[i].text.toLowerCase().includes(defaultSport.toLowerCase())) {
            sportSelect.selectedIndex = i;
            break;
          }
        }
      }
    }
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const defaultSport = btn.getAttribute('data-event-name') || '';
      openModal(defaultSport);
    });
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = 'auto';
      }
    });
  }

  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = regForm.querySelector('button[type="submit"]');
      submitBtn.innerText = 'Submitting Application...';
      submitBtn.disabled = true;

      setTimeout(() => {
        regForm.innerHTML = `
          <div style="text-align: center; padding: 30px 10px;">
            <div style="width: 60px; height: 60px; background: #FE5A00; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 28px; margin: 0 auto 20px auto; box-shadow: 0 10px 25px rgba(254, 90, 0, 0.4);">✓</div>
            <h3 style="font-family: var(--font-header-spartan); font-size: 1.8rem; margin-bottom: 8px;">Registration Confirmed!</h3>
            <p style="color: var(--text-dark-secondary); margin-bottom: 24px;">Welcome to FLAME Kurukshetra 2026. The sports council will email your official contingent verification pack shortly.</p>
            <button type="button" class="btn-pill-dark" onclick="document.getElementById('registrationModal').classList.remove('active'); document.body.style.overflow = 'auto';">Close Window</button>
          </div>
        `;
      }, 900);
    });
  }

  // 9. Interactive Segmented Rating Meter Hover
  const segmentBars = document.querySelectorAll('.segment-bar');
  const impactNumber = document.querySelector('.impact-stat-number');
  
  if (segmentBars.length > 0 && impactNumber) {
    segmentBars.forEach((bar, idx) => {
      bar.addEventListener('mouseenter', () => {
        const percentage = Math.round(((idx + 1) / segmentBars.length) * 100);
        impactNumber.innerText = percentage + '%';
        segmentBars.forEach((b, i) => {
          if (i <= idx) {
            b.classList.add('filled');
          } else {
            b.classList.remove('filled');
          }
        });
      });
    });

    const meterWrapper = document.querySelector('.segment-meter-wrapper');
    if (meterWrapper) {
      meterWrapper.addEventListener('mouseleave', () => {
        impactNumber.innerText = '90%';
        segmentBars.forEach((b, i) => {
          if (i < 14) {
            b.classList.add('filled');
          } else {
            b.classList.remove('filled');
          }
        });
      });
    }
  }

  // 10. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '74px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'rgba(8, 12, 22, 0.98)';
        navLinks.style.borderRadius = '20px';
        navLinks.style.padding = '24px';
        navLinks.style.boxShadow = '0 15px 30px rgba(0,0,0,0.7)';
      }
    });
  }
});
