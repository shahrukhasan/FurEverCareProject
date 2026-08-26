(() => {
  'use strict';

  const imagePlaceholder = (label = 'Pet photo') => {
    const safe = String(label).replace(/[<>&'\"]/g, '');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="650" viewBox="0 0 900 650"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#eee9ff"/><stop offset=".55" stop-color="#ffe9f2"/><stop offset="1" stop-color="#fff0d8"/></linearGradient></defs><rect width="900" height="650" rx="28" fill="url(#g)"/><circle cx="450" cy="270" r="105" fill="#fff" opacity=".7"/><circle cx="450" cy="270" r="58" fill="#6d4aff" opacity=".16"/><path d="M450 330 C390 285 380 250 405 230 C425 214 445 226 450 244 C455 226 475 214 495 230 C520 250 510 285 450 330Z" fill="#6d4aff"/><text x="450" y="445" font-family="Arial,sans-serif" font-size="34" font-weight="700" fill="#5d4a78" text-anchor="middle">${safe}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  };

  document.addEventListener('error', (event) => {
    const target = event.target;
    if (target && target.tagName === 'IMG' && !target.dataset.fallbackDone) {
      target.dataset.fallbackDone = '1';
      target.src = imagePlaceholder(target.alt || 'Pet photo');
    }
  }, true);

  const fallbackProducts = [
    { id: 1, name: 'Wholesome Chicken Bites', category: 'Dog/Cat Food', description: 'Balanced dry-food style demo listing for everyday adult pet nutrition.', price: 3290, image: 'assets/images/product-food.jpg' },
    { id: 2, name: 'Bounce & Fetch Ball Set', category: 'Toys', description: 'Bright, easy-to-carry play balls designed for supervised fetch sessions.', price: 1250, image: 'assets/images/product-toy.jpg' },
    { id: 3, name: 'Gentle Groom Brush', category: 'Grooming Essentials', description: 'Soft-pin grooming brush for routine coat care and loose-hair removal.', price: 1890, image: 'assets/images/product-grooming.jpg' },
    { id: 4, name: 'Cloud Nap Pet Bed', category: 'Bedding and Apparel', description: 'A cozy cushioned resting spot with a soft raised edge for nap time.', price: 5490, image: 'assets/images/product-bed.jpg' },
    { id: 5, name: 'Daily Wellness Drops', category: 'Health Supplements', description: 'A non-functional supplement showcase item; consult a veterinarian before real use.', price: 2750, image: 'assets/images/product-wellness.jpg' }
  ];

  const fallbackAdoptions = [
    { id: 1, name: 'Sunny', type: 'dog', age: 1, ageGroup: 'young', breed: 'Golden Retriever Mix', location: 'Karachi', description: 'Playful, social and happiest around people.', image: 'assets/images/adopt-sunny.jpg' },
    { id: 2, name: 'Milo', type: 'cat', age: 2, ageGroup: 'adult', breed: 'Orange Tabby', location: 'Karachi', description: 'Curious indoor cat who enjoys quiet window spots.', image: 'assets/images/adopt-milo.jpg' },
    { id: 3, name: 'Pepper', type: 'rabbit', age: 1, ageGroup: 'young', breed: 'Mixed Rabbit', location: 'Hyderabad', description: 'Gentle rabbit who loves leafy greens and calm spaces.', image: 'assets/images/adopt-pepper.jpg' }
  ];

  const fallbackCases = [
    { pet: 'Bella', species: 'Dog', age: '6 years', issue: 'Recurring itchy skin', history: 'Seasonal itching, paw licking and mild redness. Appetite and activity normal.', plan: 'Skin exam, parasite review, diet history and follow-up monitoring.', status: 'Improving' },
    { pet: 'Simba', species: 'Cat', age: '4 years', issue: 'Dental tartar', history: 'Bad breath and visible tartar noticed during routine check. Eating normally.', plan: 'Oral exam, dental cleaning discussion and home dental-care guidance.', status: 'Scheduled' },
    { pet: 'Oreo', species: 'Rabbit', age: '2 years', issue: 'Reduced appetite', history: 'Eating less hay for one day with fewer droppings reported by owner.', plan: 'Prompt physical exam, hydration assessment and dental/gastrointestinal evaluation.', status: 'Monitoring' }
  ];

  const fallbackEmergency = [
    { name: 'FurEver Demo Vet Desk', type: 'General Vet Help', phone: '+92 21 555 0101', hours: '8:00 AM - 10:00 PM' },
    { name: 'City Animal Emergency Demo', type: 'Emergency Clinic', phone: '+92 21 555 0199', hours: '24/7' },
    { name: 'Pet Poison Information Demo', type: 'Poison Helpline', phone: '+92 21 555 0177', hours: '24/7' }
  ];

  const fallbackEvents = [
    { day: '14', month: 'SEP', title: 'Weekend Adoption Drive', place: 'Community Hall, Karachi', time: '11:00 AM - 5:00 PM' },
    { day: '21', month: 'SEP', title: 'Low-Cost Vaccination Camp', place: 'FurEver Rescue Network', time: '10:00 AM - 3:00 PM' },
    { day: '05', month: 'OCT', title: 'Responsible Pet Care Workshop', place: 'Online + Shelter Courtyard', time: '4:00 PM - 6:00 PM' }
  ];

  const navSets = {
    owner: [
      ['owner-overview', 'speedometer2', 'Dashboard'],
      ['pet-profile', 'person-badge', 'Pet Profile'],
      ['feeding', 'cup', 'Feeding Guide'],
      ['grooming', 'brush', 'Grooming Videos'],
      ['health', 'heart', 'Health Tips'],
      ['training', 'award', 'Training Tips'],
      ['products', 'bag', 'Pet Products'],
      ['emergency', 'telephone', 'Emergency & Vet Help'],
      ['feedback', 'envelope', 'Feedback'],
      ['contact', 'geo-alt', 'Contact Us'],
      ['about', 'heart-fill', 'About Us']
    ],
    vet: [
      ['vet-profile', 'bandaid', 'Profile'],
      ['vet-slots', 'calendar3', 'Time Slots'],
      ['vet-cases', 'clipboard', 'Case Studies'],
      ['vet-about', 'stars', 'About Dashboard']
    ],
    shelter: [
      ['adoption', 'house-door', 'Pet Adoption'],
      ['stories', 'heart-fill', 'Success Stories'],
      ['events', 'megaphone', 'Events'],
      ['shelter-contact', 'geo-alt', 'Shelter Contact']
    ]
  };

  const state = {
    userName: '',
    role: '',
    pet: null,
    vet: null,
    vetPhoto: '',
    products: [],
    adoptions: [],
    cases: [],
    activeAdoptionType: 'all',
    visitorCount: 0,
    locationText: 'Location permission pending'
  };

  const $id = (id) => document.getElementById(id);
  const money = new Intl.NumberFormat('en-PK', { style: 'currency', currency: 'PKR', maximumFractionDigits: 0 });

  function saveSession() {
    const payload = {
      userName: state.userName,
      role: state.role,
      pet: state.pet,
      vet: state.vet,
      vetPhoto: state.vetPhoto
    };
    sessionStorage.setItem('fureverCareState', JSON.stringify(payload));
  }

  function restoreSession() {
    try {
      const saved = JSON.parse(sessionStorage.getItem('fureverCareState') || 'null');
      if (!saved) return;
      state.userName = saved.userName || '';
      state.role = saved.role || '';
      state.pet = saved.pet || null;
      state.vet = saved.vet || null;
      state.vetPhoto = saved.vetPhoto || '';
    } catch (_) {
      sessionStorage.removeItem('fureverCareState');
    }
  }

  function showScreen(screenId) {
    const allScreens = document.querySelectorAll('.screen');
    allScreens.forEach((screen) => {
      if (screen.id !== screenId) {
        screen.hidden = true;
        screen.classList.remove('is-active');
      }
    });

    const target = $id(screenId);
    if (!target) return;
    target.hidden = false;
    target.classList.add('is-active');

    if (window.jQuery) {
      window.jQuery(target).stop(true, true).hide().fadeIn(260);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function updateTopbar() {
    const status = $id('topbarStatus');
    if (!state.userName || !state.role) {
      status.hidden = true;
      return;
    }
    status.hidden = false;
    $id('userNameChip').textContent = `Hi, ${state.userName}`;
    let context = state.role === 'owner' ? (state.pet?.name || 'Pet Owner') : state.role === 'vet' ? (state.vet?.name || 'Veterinarian') : 'Animal Shelter';
    $id('contextNameChip').textContent = context;
    document.querySelectorAll('.js-user-name').forEach((node) => node.textContent = state.userName);
    document.querySelectorAll('.js-pet-name').forEach((node) => node.textContent = state.pet?.name || 'your pet');
  }

  function buildNav() {
    const nav = $id('pawNav');
    nav.innerHTML = '';
    const items = navSets[state.role] || [];
    items.forEach(([panel, icon, label], index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.panelTarget = panel;
      button.innerHTML = `<span class="nav-emoji" aria-hidden="true"><i class="bi bi-${icon}"></i></span><span>${label}</span>`;
      if (index === 0) button.classList.add('is-active');
      button.addEventListener('click', () => showPanel(panel));
      nav.appendChild(button);
    });

    const info = {
      owner: ['person-badge', 'Pet Owner Portal', 'Care • Products • Help'],
      vet: ['bandaid', 'Veterinarian Portal', 'Profile • Slots • Cases'],
      shelter: ['house-door', 'Animal Shelter Portal', 'Adoption • Stories • Events']
    }[state.role];
    if (info) {
      $id('sidebarRoleIcon').innerHTML = `<i class="bi bi-${info[0]}"></i>`;
      $id('sidebarTitle').textContent = info[1];
      $id('sidebarSubtitle').textContent = info[2];
    }
  }

  function showPanel(panelName) {
    document.querySelectorAll('.portal-panel').forEach((panel) => panel.hidden = true);
    const target = document.querySelector(`.portal-panel[data-panel="${panelName}"]`);
    if (!target) return;
    target.hidden = false;

    document.querySelectorAll('#pawNav button').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.panelTarget === panelName);
    });

    if (window.jQuery) {
      window.jQuery(target).stop(true, true).css('opacity', 0).animate({ opacity: 1 }, 220);
    }

    if (panelName === 'feeding') drawFeedingChart();
    if (panelName === 'products') renderProducts();
    if (panelName === 'adoption') renderAdoptions();

    $id('portalSidebar').classList.remove('is-open');
    $id('mobileNavToggle').setAttribute('aria-expanded', 'false');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function openPortal(role) {
    state.role = role;
    updateTopbar();
    buildNav();
    showScreen('portalScreen');

    const firstPanel = navSets[role]?.[0]?.[0];
    if (firstPanel) showPanel(firstPanel);

    if (role === 'owner') populatePetProfile();
    if (role === 'vet') populateVetProfile();
    saveSession();
  }

  function resetToWelcome() {
    state.role = '';
    state.pet = null;
    state.vet = null;
    state.vetPhoto = '';
    sessionStorage.removeItem('fureverCareState');
    $id('welcomeForm').reset();
    $id('petProfileForm').reset();
    $id('vetProfileForm').reset();
    updateTopbar();
    showScreen('welcomeGate');
  }

  function collectForm(form) {
    const data = Object.fromEntries(new FormData(form).entries());
    Object.keys(data).forEach((key) => data[key] = String(data[key]).trim());
    return data;
  }

  // JSON data storage:
  // 1) Always keep a JSON copy in localStorage so the project also works as a
  //    normal static website (file:// or static hosting).
  // 2) If the project is running on a PHP-enabled server, also persist the
  //    same records to data/form-submissions.json through save-data.php.
  function getStoredJsonData() {
    try {
      return JSON.parse(localStorage.getItem('fureverFormData') || '{"version":1,"submissions":[]}');
    } catch (_) {
      return { version: 1, submissions: [] };
    }
  }

  function saveFormData(formName, data) {
    const record = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      form: formName,
      submittedAt: new Date().toISOString(),
      data
    };

    const stored = getStoredJsonData();
    if (!Array.isArray(stored.submissions)) stored.submissions = [];
    stored.submissions.push(record);
    stored.updatedAt = new Date().toISOString();

    localStorage.setItem('fureverFormData', JSON.stringify(stored));

    // Server-side JSON persistence when PHP is available.
    fetch('save-data.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(record)
    }).catch(() => {
      // Static hosting/file:// has no PHP endpoint; localStorage still works.
    });

    return record;
  }

  function downloadSavedJson() {
    const stored = getStoredJsonData();
    const blob = new Blob([JSON.stringify(stored, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'furever-form-data.json';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function populatePetProfile() {
    if (!state.pet) return;
    const pet = state.pet;
    const species = (pet.species || '').toLowerCase();
    const speciesIcon = species === 'bird' ? 'stars' : species === 'rabbit' ? 'flower1' : species === 'cat' ? 'moon-stars' : species === 'dog' ? 'heart-fill' : 'heart';
    $id('petAvatarIcon').innerHTML = `<i class="bi bi-${speciesIcon}"></i>`;
    $id('petProfileLine').textContent = `${pet.species || 'Pet'}${pet.breed ? ` • ${pet.breed}` : ''}`;
    $id('vaccinationSummary').textContent = pet.vaccination || 'Not sure';
    $id('petProfileTags').innerHTML = [pet.species, pet.breed, pet.gender].filter(Boolean).map(v => `<span>${escapeHtml(v)}</span>`).join('');
    $id('petProfileFacts').innerHTML = `
      <div><small>Age</small><strong>${escapeHtml(pet.age || 'Not entered')} years</strong></div>
      <div><small>Weight</small><strong>${pet.weight ? `${escapeHtml(pet.weight)} kg` : 'Not entered'}</strong></div>
      <div><small>Vaccination</small><strong>${escapeHtml(pet.vaccination || 'Not sure')}</strong></div>
      <div><small>Profile status</small><strong>Session profile</strong></div>`;
    document.querySelectorAll('.js-pet-name').forEach((node) => node.textContent = pet.name || 'your pet');
    updateTopbar();
  }

  function populateVetProfile() {
    if (!state.vet) return;
    $id('vetProfileName').textContent = state.vet.name || 'Veterinarian';
    $id('vetProfileSpecialty').textContent = state.vet.specialization || 'General Practice';
    $id('vetProfileEmail').textContent = state.vet.email || 'Not entered';
    $id('vetProfilePhone').textContent = state.vet.phone || 'Not entered';
    if (state.vetPhoto) $id('vetProfilePhoto').src = state.vetPhoto;
    updateTopbar();
  }

  function escapeHtml(value) {
    return String(value ?? '').replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
  }

  async function fetchJson(path, fallback) {
    try {
      const response = await fetch(path, { cache: 'no-store' });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.json();
    } catch (error) {
      console.warn(`Using fallback for ${path}:`, error.message);
      return fallback;
    }
  }

  async function loadData() {
    const [products, adoptions, cases] = await Promise.all([
      fetchJson('data/products.json', fallbackProducts),
      fetchJson('data/adoptable-pets.json', fallbackAdoptions),
      fetchJson('data/case-studies.json', fallbackCases)
    ]);
    state.products = Array.isArray(products) ? products : fallbackProducts;
    state.adoptions = Array.isArray(adoptions) ? adoptions : fallbackAdoptions;
    state.cases = Array.isArray(cases) ? cases : fallbackCases;
    renderProducts();
    renderAdoptions();
    renderCases();
  }

  function renderProducts() {
    const grid = $id('productGrid');
    if (!grid) return;
    const search = ($id('productSearch').value || '').toLowerCase();
    const category = $id('productCategory').value;
    const sort = $id('productSort').value;

    let list = [...state.products].filter((item) => {
      const haystack = `${item.name} ${item.category} ${item.description}`.toLowerCase();
      return (category === 'all' || item.category === category) && haystack.includes(search);
    });

    if (sort === 'price-low') list.sort((a, b) => Number(a.price) - Number(b.price));
    if (sort === 'price-high') list.sort((a, b) => Number(b.price) - Number(a.price));
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));

    grid.innerHTML = list.map((item) => `
      <article class="product-card">
        <div class="product-image">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" loading="lazy">
          <span class="product-category">${escapeHtml(item.category)}</span>
        </div>
        <div class="product-body">
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="product-bottom">
            <span class="product-price">${money.format(Number(item.price) || 0)}</span>
            <button class="buy-demo" type="button" data-buy-name="${escapeHtml(item.name)}">Buy Now</button>
          </div>
        </div>
      </article>`).join('');

    $id('productEmpty').hidden = list.length !== 0;
    grid.querySelectorAll('.buy-demo').forEach((button) => button.addEventListener('click', () => {
      showDemoModal('Buy Now is display-only', `${button.dataset.buyName} is a showcase product. No payment, cart or order is created.`);
    }));
  }

  function renderAdoptions() {
    const grid = $id('adoptionGrid');
    if (!grid) return;
    const search = ($id('adoptionSearch').value || '').toLowerCase();
    const age = $id('adoptionAge').value;
    const type = state.activeAdoptionType;

    const list = state.adoptions.filter((pet) => {
      const haystack = `${pet.name} ${pet.breed} ${pet.location}`.toLowerCase();
      const typeMatch = type === 'all' || pet.type === type;
      const ageMatch = age === 'all' || pet.ageGroup === age;
      return typeMatch && ageMatch && haystack.includes(search);
    });

    grid.innerHTML = list.map((pet) => `
      <article class="adoption-card">
        <div class="pet-photo"><img src="${escapeHtml(pet.image)}" alt="${escapeHtml(pet.name)} - ${escapeHtml(pet.type)}" loading="lazy"></div>
        <div class="pet-copy">
          <span>${escapeHtml(pet.type)}</span>
          <h3>${escapeHtml(pet.name)}</h3>
          <div class="pet-meta">${escapeHtml(pet.age)} year${Number(pet.age) === 1 ? '' : 's'} • ${escapeHtml(pet.breed)} • ${escapeHtml(pet.location)}</div>
          <p>${escapeHtml(pet.description)}</p>
        </div>
      </article>`).join('');

    if (!list.length) grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><span aria-hidden="true"><i class="bi bi-search"></i></span><h3>No matching pets</h3><p>Try another type, age or search term.</p></div>`;
  }

  function renderCases() {
    const grid = $id('caseGrid');
    if (!grid) return;
    grid.innerHTML = state.cases.map((item) => `
      <article class="case-card">
        <span class="case-status">${escapeHtml(item.status)}</span>
        <h3>${escapeHtml(item.pet)} — ${escapeHtml(item.issue)}</h3>
        <div class="case-meta">${escapeHtml(item.species)} • ${escapeHtml(item.age)}</div>
        <h4>History</h4><p>${escapeHtml(item.history)}</p>
        <h4>Example plan</h4><p>${escapeHtml(item.plan)}</p>
      </article>`).join('');
  }

  function loadEmergencyXml() {
    if (!window.jQuery) {
      renderEmergency(fallbackEmergency);
      return;
    }
    window.jQuery.ajax({
      url: 'data/emergency.xml',
      dataType: 'xml',
      cache: false,
      success(xml) {
        const list = [];
        window.jQuery(xml).find('contact').each(function () {
          const node = window.jQuery(this);
          list.push({
            name: node.find('name').text(),
            type: node.find('type').text(),
            phone: node.find('phone').text(),
            hours: node.find('hours').text()
          });
        });
        renderEmergency(list.length ? list : fallbackEmergency);
      },
      error() { renderEmergency(fallbackEmergency); }
    });
  }

  function renderEmergency(list) {
    const grid = $id('emergencyGrid');
    grid.innerHTML = list.map((item) => `
      <article class="emergency-card">
        <span class="contact-type">${escapeHtml(item.type)}</span>
        <h3>${escapeHtml(item.name)}</h3>
        <a class="phone" href="tel:${escapeHtml(item.phone).replace(/\s/g, '')}">${escapeHtml(item.phone)}</a>
        <small>Hours: ${escapeHtml(item.hours)}</small>
      </article>`).join('');
  }

  function loadEventXml() {
    if (!window.jQuery) {
      renderEvents(fallbackEvents);
      return;
    }
    window.jQuery.ajax({
      url: 'data/shelter-events.xml',
      dataType: 'xml',
      cache: false,
      success(xml) {
        const list = [];
        window.jQuery(xml).find('event').each(function () {
          const node = window.jQuery(this);
          list.push({ day: node.find('day').text(), month: node.find('month').text(), title: node.find('title').text(), place: node.find('place').text(), time: node.find('time').text() });
        });
        renderEvents(list.length ? list : fallbackEvents);
      },
      error() { renderEvents(fallbackEvents); }
    });
  }

  function renderEvents(list) {
    $id('eventList').innerHTML = list.map((event) => `
      <article class="event-card">
        <div class="event-date"><b>${escapeHtml(event.day)}</b><span>${escapeHtml(event.month)}</span></div>
        <div><h3>${escapeHtml(event.title)}</h3><p>${escapeHtml(event.place)}</p></div>
        <span class="event-time">${escapeHtml(event.time)}</span>
      </article>`).join('');
  }

  function renderSlots() {
    const times = [
      ['09:00 AM', 'available', 'Available'], ['09:45 AM', 'booked', 'Booked - Bella'], ['10:30 AM', 'available', 'Available'], ['11:15 AM', 'booked', 'Booked - Simba'],
      ['12:00 PM', 'available', 'Available'], ['02:00 PM', 'available', 'Available'], ['02:45 PM', 'booked', 'Booked - Oreo'], ['03:30 PM', 'available', 'Available'],
      ['04:15 PM', 'available', 'Available'], ['05:00 PM', 'booked', 'Booked - Max'], ['05:45 PM', 'available', 'Available'], ['06:30 PM', 'available', 'Available']
    ];
    $id('slotGrid').innerHTML = times.map(([time, status, label]) => `<div class="slot-card ${status}"><strong>${time}</strong><small>${label}</small></div>`).join('');
  }

  function showDemoModal(title, text) {
    $id('demoModalTitle').textContent = title;
    $id('demoModalText').textContent = text;
    if (window.bootstrap?.Modal) {
      window.bootstrap.Modal.getOrCreateInstance($id('demoModal')).show();
    } else {
      window.alert(`${title}\n\n${text}`);
    }
  }

  function startClock() {
    const tick = () => {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      const date = now.toLocaleDateString([], { weekday: 'short', day: '2-digit', month: 'short' });
      $id('tickerClock').textContent = `Time: ${date} ${time}`;
      $id('contactClock').textContent = time;
    };
    tick();
    setInterval(tick, 1000);
  }

  function startGeolocation() {
    if (!('geolocation' in navigator)) {
      updateLocation('Geolocation not supported');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude.toFixed(3);
        const lon = position.coords.longitude.toFixed(3);
        updateLocation(`Lat ${lat}, Lon ${lon}`);
      },
      () => updateLocation('Location permission not granted'),
      { enableHighAccuracy: false, timeout: 9000, maximumAge: 300000 }
    );
  }

  function updateLocation(text) {
    state.locationText = text;
    $id('tickerLocation').textContent = `Location: ${text}`;
    $id('contactLocation').textContent = text;
  }

  async function loadTickerUpdates() {
    try {
      const response = await fetch('data/updates.txt', { cache: 'no-store' });
      if (!response.ok) throw new Error('Could not load updates');
      const text = await response.text();
      text.split(/\r?\n/).filter(Boolean).slice(0, 4).forEach((line) => {
        const span = document.createElement('span');
        span.textContent = line;
        $id('tickerTrack').appendChild(span);
      });
    } catch (_) {
      ['Keep vaccination records easy to find.', 'Supervise new toys and replace damaged items.'].forEach((line) => {
        const span = document.createElement('span');
        span.textContent = line;
        $id('tickerTrack').appendChild(span);
      });
    }
  }

  function setupVisitorCounter() {
    const previous = Number(localStorage.getItem('fureverDemoVisitors') || 2418);
    const increment = Math.floor(Math.random() * 4) + 1;
    state.visitorCount = previous + increment;
    localStorage.setItem('fureverDemoVisitors', String(state.visitorCount));
    $id('visitorCount').textContent = state.visitorCount.toLocaleString();
    $id('visitorTicker').textContent = `Visitors: ${state.visitorCount.toLocaleString()} (simulated)`;
  }

  function drawFeedingChart() {
    const canvas = $id('feedingChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const displayWidth = Math.max(320, canvas.clientWidth || 460);
    const displayHeight = 270;
    const scale = window.devicePixelRatio || 1;
    canvas.width = displayWidth * scale;
    canvas.height = displayHeight * scale;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
    ctx.clearRect(0, 0, displayWidth, displayHeight);

    const data = [72, 42, 68, 32];
    const labels = ['Morning', 'Midday', 'Evening', 'Treats'];
    const colors = ['#6d4aff', '#53d6b1', '#ff6fa8', '#ffb14d'];
    const pad = 34;
    const baseY = 218;
    const chartH = 150;
    const gap = 18;
    const barW = Math.min(62, (displayWidth - pad * 2 - gap * 3) / 4);
    const totalW = barW * 4 + gap * 3;
    const startX = (displayWidth - totalW) / 2;

    ctx.font = '12px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.lineCap = 'round';
    data.forEach((value, index) => {
      const x = startX + index * (barW + gap);
      const barH = chartH * value / 100;
      ctx.fillStyle = '#f1eff6';
      roundRect(ctx, x, baseY - chartH, barW, chartH, 14);
      ctx.fill();
      const gradient = ctx.createLinearGradient(0, baseY - barH, 0, baseY);
      gradient.addColorStop(0, colors[index]);
      gradient.addColorStop(1, `${colors[index]}99`);
      ctx.fillStyle = gradient;
      roundRect(ctx, x, baseY - barH, barW, barH, 14);
      ctx.fill();
      ctx.fillStyle = '#3d344c';
      ctx.fillText(labels[index], x + barW / 2, 242);
    });
  }

  function roundRect(ctx, x, y, w, h, r) {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
  }

  function speak(text) {
    if (!('speechSynthesis' in window)) {
      showDemoModal('Audio unavailable', 'This browser does not support Speech Synthesis. The text guide is still available on screen.');
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1.02;
    window.speechSynthesis.speak(utterance);
  }

  function startRevealAnimations() {
    const items = document.querySelectorAll('.reveal-me');
    if (!('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
  }

  const COMPLETE_EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  function applyCompleteEmailValidity(input) {
    if (!input) return true;
    const value = input.value.trim();
    const valid = !value || COMPLETE_EMAIL_RE.test(value);
    input.setCustomValidity(valid ? '' : 'Enter a complete email address, including a domain suffix such as .com or .pk.');
    return valid;
  }

  function bindStrictEmailValidation() {
    ['vetEmail', 'feedbackEmail'].forEach((id) => {
      const input = $id(id);
      if (!input) return;
      input.addEventListener('input', () => {
        applyCompleteEmailValidity(input);
        if (input.closest('form')?.classList.contains('was-validated')) input.classList.toggle('is-invalid', !input.checkValidity());
      });
      input.addEventListener('blur', () => {
        applyCompleteEmailValidity(input);
        if (input.value) input.classList.toggle('is-invalid', !input.checkValidity());
      });
    });
  }

  // Name validation: minimum 3 characters; numeric-only and other invalid names are rejected.
  function validateNameInput(input) {
    if (!input) return false;
    const value = input.value.trim().replace(/\s+/g, ' ');
    const valid = value.length >= 3 && /^[A-Za-z][A-Za-z .'-]*$/.test(value) && /[A-Za-z]/.test(value);
    input.setCustomValidity(valid ? '' : 'Name must be at least 3 characters and contain letters only.');
    input.classList.toggle('is-invalid', !valid);
    return valid;
  }

  function bindForms() {
  ['firstName', 'petName', 'vetName', 'feedbackName'].forEach((id) => {
    const input = $id(id);
    if (!input) return;
    input.addEventListener('input', () => {
      input.setCustomValidity('');
      if (input.closest('form')?.classList.contains('was-validated')) validateNameInput(input);
    });
    input.addEventListener('blur', () => validateNameInput(input));
  });


    $id('welcomeForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const nameInput = $id('firstName');
      const role = form.querySelector('input[name="userRole"]:checked')?.value;
      let valid = true;

      if (!validateNameInput(nameInput)) {
        valid = false;
      }
      $id('roleError').hidden = Boolean(role);
      if (!role) valid = false;
      if (!valid) return;

      state.userName = nameInput.value.trim().replace(/\s+/g, ' ').split(' ')[0];
      state.role = role;
      saveFormData('welcome', {
        firstName: nameInput.value.trim().replace(/\s+/g, ' '),
        userRole: role
      });
      updateTopbar();
      if (role === 'owner') showScreen('petSetupScreen');
      else if (role === 'vet') showScreen('vetSetupScreen');
      else openPortal('shelter');
    });

    $id('petProfileForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const nameValid = validateNameInput($id('petName'));
      if (!nameValid || !form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      const data = collectForm(form);
      state.pet = {
        name: data.petName,
        species: data.petSpecies,
        breed: data.petBreed,
        age: data.petAge,
        weight: data.petWeight,
        vaccination: data.petVaccination,
        gender: data.petGender
      };
      saveFormData('petProfile', data);
      openPortal('owner');
    });

    $id('vetProfileForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const nameValid = validateNameInput($id('vetName'));
      applyCompleteEmailValidity($id('vetEmail'));
      if (!nameValid || !form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      const data = collectForm(form);
      const imageFile = $id('vetImage').files?.[0];
      if (imageFile) {
        data.vetImage = {
          name: imageFile.name,
          type: imageFile.type,
          size: imageFile.size
        };
      }
      state.vet = { name: data.vetName, specialization: data.vetSpecialization, email: data.vetEmail, phone: data.vetPhone };
      saveFormData('vetProfile', data);
      openPortal('vet');
    });

    $id('feedbackForm').addEventListener('submit', (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      const nameValid = validateNameInput($id('feedbackName'));
      applyCompleteEmailValidity($id('feedbackEmail'));
      if (!nameValid || !form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      const feedbackData = {
        name: $id('feedbackName').value.trim(),
        email: $id('feedbackEmail').value.trim(),
        feedback: $id('feedbackText').value.trim()
      };
      saveFormData('feedback', feedbackData);
      const name = feedbackData.name;
      showDemoModal('Feedback saved', `Thanks, ${name || 'friend'}! Your form data has been saved in JSON.`);
      if (window.jQuery) window.jQuery(form).find('textarea').val('').trigger('focus');
    });

    $id('vetImage').addEventListener('change', (event) => {
      const file = event.target.files?.[0];
      if (!file) {
        state.vetPhoto = '';
        return;
      }
      if (!file.type.startsWith('image/')) {
        showDemoModal('Image file required', 'Please choose a valid image file for the profile preview.');
        event.target.value = '';
        return;
      }
      const reader = new FileReader();
      reader.onload = () => { state.vetPhoto = String(reader.result || ''); };
      reader.readAsDataURL(file);
    });
  }

  function bindControls() {
    document.querySelectorAll('[data-back-to-welcome]').forEach((button) => button.addEventListener('click', resetToWelcome));
    $id('brandHomeBtn').addEventListener('click', resetToWelcome);
    $id('changeRoleBtn').addEventListener('click', resetToWelcome);
    $id('sidebarExitBtn').addEventListener('click', resetToWelcome);
    $id('downloadJsonBtn').addEventListener('click', downloadSavedJson);

    $id('mobileNavToggle').addEventListener('click', () => {
      const sidebar = $id('portalSidebar');
      const open = sidebar.classList.toggle('is-open');
      $id('mobileNavToggle').setAttribute('aria-expanded', String(open));
    });

    document.addEventListener('click', (event) => {
      const jump = event.target.closest('[data-jump-panel]');
      if (jump) showPanel(jump.dataset.jumpPanel);
      const listen = event.target.closest('.listen-tip');
      if (listen) speak(listen.closest('[data-speak]')?.dataset.speak || '');
    });

    ['productSearch', 'productCategory', 'productSort'].forEach((id) => {
      $id(id).addEventListener(id === 'productSearch' ? 'input' : 'change', renderProducts);
    });

    $id('adoptionSearch').addEventListener('input', renderAdoptions);
    $id('adoptionAge').addEventListener('change', renderAdoptions);
    $id('adoptionTypeFilters').addEventListener('click', (event) => {
      const button = event.target.closest('button[data-type]');
      if (!button) return;
      state.activeAdoptionType = button.dataset.type;
      $id('adoptionTypeFilters').querySelectorAll('button').forEach((node) => node.classList.toggle('is-selected', node === button));
      if (window.jQuery) window.jQuery('#adoptionGrid').stop(true, true).fadeOut(100, () => { renderAdoptions(); window.jQuery('#adoptionGrid').fadeIn(180); });
      else renderAdoptions();
    });

    window.addEventListener('resize', () => {
      const visibleFeeding = !$id('feedingPanel').hidden;
      if (visibleFeeding) drawFeedingChart();
      if (window.innerWidth > 991) {
        $id('portalSidebar').classList.remove('is-open');
        $id('mobileNavToggle').setAttribute('aria-expanded', 'false');
      }
    });
  }

  function maybeRestorePortal() {
    if (!state.userName || !state.role) return;
    updateTopbar();
    if (state.role === 'owner' && state.pet) openPortal('owner');
    else if (state.role === 'vet' && state.vet) openPortal('vet');
    else if (state.role === 'shelter') openPortal('shelter');
  }

  function init() {
    restoreSession();
    bindForms();
    bindStrictEmailValidation();
    bindControls();
    startClock();
    startGeolocation();
    setupVisitorCounter();
    startRevealAnimations();
    renderSlots();
    loadEmergencyXml();
    loadEventXml();
    loadTickerUpdates();
    loadData();
    maybeRestorePortal();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
