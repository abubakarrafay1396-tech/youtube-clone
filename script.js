/* ============================================================
   YOUTUBE CLONE — script.js
   ============================================================ */

/* ─── DATA ────────────────────────────────────────────────── */
const videos = [
  {
    id:1, title:"I Spent 50 Hours Buried Alive", channel:"MrBeast", avatar:"https://ui-avatars.com/api/?name=MrBeast&background=f00&color=fff&size=36&rounded=true",
    views:"322M views", time:"3 years ago", duration:"14:01", verified:true,
    thumb:"https://picsum.photos/seed/vid1/480/270"
  },
  {
    id:2, title:"The Most Dangerous Thing You've Never Heard Of — Documentary", channel:"Veritasium", avatar:"https://ui-avatars.com/api/?name=Veritasium&background=1565c0&color=fff&size=36&rounded=true",
    views:"18M views", time:"8 months ago", duration:"26:47", verified:true,
    thumb:"https://picsum.photos/seed/vid2/480/270"
  },
  {
    id:3, title:"M4 MacBook Pro Review: The BEST Laptop Ever Made?", channel:"Linus Tech Tips", avatar:"https://ui-avatars.com/api/?name=LTT&background=ff6f00&color=fff&size=36&rounded=true",
    views:"4.1M views", time:"5 months ago", duration:"19:22", verified:true,
    thumb:"https://picsum.photos/seed/vid3/480/270"
  },
  {
    id:4, title:"I Built a Working Submarine from Scratch", channel:"Mark Rober", avatar:"https://ui-avatars.com/api/?name=MR&background=00897b&color=fff&size=36&rounded=true",
    views:"71M views", time:"1 year ago", duration:"23:15", verified:true,
    thumb:"https://picsum.photos/seed/vid4/480/270"
  },
  {
    id:5, title:"Why I Left Google After 15 Years", channel:"Fireship", avatar:"https://ui-avatars.com/api/?name=Fireship&background=6200ea&color=fff&size=36&rounded=true",
    views:"2.9M views", time:"2 months ago", duration:"9:44", verified:false,
    thumb:"https://picsum.photos/seed/vid5/480/270"
  },
  {
    id:6, title:"I Survived 100 Days in Antarctica", channel:"Primitive Technology", avatar:"https://ui-avatars.com/api/?name=PT&background=388e3c&color=fff&size=36&rounded=true",
    views:"45M views", time:"6 months ago", duration:"41:00", verified:false,
    thumb:"https://picsum.photos/seed/vid6/480/270"
  },
  {
    id:7, title:"Python in 100 Seconds", channel:"Fireship", avatar:"https://ui-avatars.com/api/?name=Fireship&background=6200ea&color=fff&size=36&rounded=true",
    views:"3.4M views", time:"4 years ago", duration:"2:33", verified:false,
    thumb:"https://picsum.photos/seed/vid7/480/270"
  },
  {
    id:8, title:"How NASA is Planning to Return to the Moon", channel:"Veritasium", avatar:"https://ui-avatars.com/api/?name=Veritasium&background=1565c0&color=fff&size=36&rounded=true",
    views:"12M views", time:"11 months ago", duration:"31:12", verified:true,
    thumb:"https://picsum.photos/seed/vid8/480/270"
  },
  {
    id:9, title:"$1 vs $1,000,000 Hotel Room", channel:"MrBeast", avatar:"https://ui-avatars.com/api/?name=MrBeast&background=f00&color=fff&size=36&rounded=true",
    views:"289M views", time:"2 years ago", duration:"15:57", verified:true,
    thumb:"https://picsum.photos/seed/vid9/480/270"
  },
  {
    id:10, title:"World's Loudest Speaker — How Bad Can It Get?", channel:"Linus Tech Tips", avatar:"https://ui-avatars.com/api/?name=LTT&background=ff6f00&color=fff&size=36&rounded=true",
    views:"7.2M views", time:"7 months ago", duration:"22:08", verified:true,
    thumb:"https://picsum.photos/seed/vid10/480/270"
  },
  {
    id:11, title:"The Entire History of the Universe in 4 Minutes", channel:"Kurzgesagt", avatar:"https://ui-avatars.com/api/?name=KZ&background=f4511e&color=fff&size=36&rounded=true",
    views:"30M views", time:"3 years ago", duration:"4:22", verified:true,
    thumb:"https://picsum.photos/seed/vid11/480/270"
  },
  {
    id:12, title:"Why Your Brain is Not a Computer", channel:"SciShow", avatar:"https://ui-avatars.com/api/?name=SS&background=00838f&color=fff&size=36&rounded=true",
    views:"1.8M views", time:"3 months ago", duration:"11:38", verified:false,
    thumb:"https://picsum.photos/seed/vid12/480/270"
  },
  {
    id:13, title:"I Tried Every Fast Food Burger in America", channel:"Joshua Weissman", avatar:"https://ui-avatars.com/api/?name=JW&background=e65100&color=fff&size=36&rounded=true",
    views:"5.5M views", time:"1 year ago", duration:"18:44", verified:true,
    thumb:"https://picsum.photos/seed/vid13/480/270"
  },
  {
    id:14, title:"React is DEAD. Long Live React. — 2025 State of Frameworks", channel:"Fireship", avatar:"https://ui-avatars.com/api/?name=Fireship&background=6200ea&color=fff&size=36&rounded=true",
    views:"900K views", time:"1 month ago", duration:"7:12", verified:false,
    thumb:"https://picsum.photos/seed/vid14/480/270"
  },
  {
    id:15, title:"We Built a Real-Life Mario Kart Track", channel:"Mark Rober", avatar:"https://ui-avatars.com/api/?name=MR&background=00897b&color=fff&size=36&rounded=true",
    views:"95M views", time:"2 years ago", duration:"28:03", verified:true,
    thumb:"https://picsum.photos/seed/vid15/480/270"
  },
  {
    id:16, title:"Learning Guitar in 30 Days — Complete Journey", channel:"Mike Boyd", avatar:"https://ui-avatars.com/api/?name=MB&background=5c6bc0&color=fff&size=36&rounded=true",
    views:"14M views", time:"5 years ago", duration:"16:19", verified:false,
    thumb:"https://picsum.photos/seed/vid16/480/270"
  },
  {
    id:17, title:"Extreme Ping Pong Trick Shots | Dude Perfect", channel:"Dude Perfect", avatar:"https://ui-avatars.com/api/?name=DP&background=43a047&color=fff&size=36&rounded=true",
    views:"49M views", time:"3 years ago", duration:"10:07", verified:true,
    thumb:"https://picsum.photos/seed/vid17/480/270"
  },
  {
    id:18, title:"Is the Universe a Simulation? — A Physics Deep Dive", channel:"PBS Space Time", avatar:"https://ui-avatars.com/api/?name=PBS&background=1a237e&color=fff&size=36&rounded=true",
    views:"3.7M views", time:"2 years ago", duration:"22:30", verified:true,
    thumb:"https://picsum.photos/seed/vid18/480/270"
  },
];

const shorts = [
  { title:"That's insane 😱", views:"47M views", thumb:"https://picsum.photos/seed/sh1/270/480" },
  { title:"He did WHAT?? 💀", views:"22M views", thumb:"https://picsum.photos/seed/sh2/270/480" },
  { title:"Can't stop watching this", views:"30M views", thumb:"https://picsum.photos/seed/sh3/270/480" },
  { title:"POV: You are a millionaire", views:"15M views", thumb:"https://picsum.photos/seed/sh4/270/480" },
  { title:"The algorithm be like…", views:"9M views", thumb:"https://picsum.photos/seed/sh5/270/480" },
];

/* ─── RENDER VIDEOS ───────────────────────────────────────── */
function createVideoCard(v) {
  return `
    <div class="video-card" onclick="openVideo(${v.id})">
      <div class="thumbnail-wrap">
        <img src="${v.thumb}" alt="${v.title}" loading="lazy"/>
        <div class="preview-overlay">
          <span class="material-icons">play_arrow</span>
        </div>
        <span class="${v.live ? 'live-badge' : 'duration-badge'}">${v.live ? '● LIVE' : v.duration}</span>
      </div>
      <div class="card-meta">
        <img class="channel-avatar" src="${v.avatar}" alt="${v.channel}" loading="lazy"/>
        <div class="card-info">
          <div class="card-title">${v.title}</div>
          <div class="card-channel">
            ${v.channel}
            ${v.verified ? '<span class="material-icons verified-icon">verified</span>' : ''}
          </div>
          <div class="card-stats">${v.views} &bull; ${v.time}</div>
        </div>
        <div class="card-menu">
          <button class="card-menu-btn" onclick="event.stopPropagation(); showMenu(event,${v.id})">
            <span class="material-icons">more_vert</span>
          </button>
        </div>
      </div>
    </div>`;
}

function renderGrid(list) {
  const grid = document.getElementById('video-grid');
  grid.innerHTML = list.map(createVideoCard).join('');
}

/* ─── SHORTS SECTION ──────────────────────────────────────── */
function injectShorts() {
  const grid = document.getElementById('video-grid');
  const shortsHTML = `
    <div class="shorts-section" style="grid-column:1/-1;">
      <div class="section-header">
        <svg class="shorts-icon" viewBox="0 0 24 24"><path d="M17.77 10.32l-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.23-2.53-5.06-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.45.93 2.73 2.28 3.3l1.2.5L6 14.94c-1.84.96-2.53 3.23-1.56 5.06.97 1.83 3.23 2.53 5.06 1.56l8.5-4.5c1.29-.68 2.07-2.04 2-3.49a3.978 3.978 0 00-2.23-3.25zM10 14.45v-5l5 2.5-5 2.5z"/></svg>
        <h2>Shorts</h2>
      </div>
      <div class="shorts-grid">
        ${shorts.map(s=>`
          <div class="short-card">
            <img src="${s.thumb}" alt="${s.title}" loading="lazy"/>
            <div class="short-overlay">
              <div class="short-title">${s.title}</div>
              <div class="short-views">${s.views}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;

  // Insert after 4th card
  const cards = grid.querySelectorAll('.video-card');
  if (cards.length >= 4) {
    cards[3].insertAdjacentHTML('afterend', shortsHTML);
  }
}

/* ─── SIDEBAR TOGGLE ──────────────────────────────────────── */
let sidebarOpen = true;
let isMobile = window.innerWidth <= 600;

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const main    = document.getElementById('main-content');

  isMobile = window.innerWidth <= 600;

  if (isMobile) {
    sidebar.classList.toggle('mobile-open');
    let overlay = document.getElementById('sidebar-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.className = 'sidebar-overlay';
      overlay.id = 'sidebar-overlay';
      overlay.onclick = closeMobileSidebar;
      document.body.appendChild(overlay);
    }
    overlay.classList.toggle('active', sidebar.classList.contains('mobile-open'));
  } else {
    sidebarOpen = !sidebarOpen;
    sidebar.classList.toggle('collapsed', !sidebarOpen);
    main.classList.toggle('expanded', !sidebarOpen);
  }
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('mobile-open');
  const overlay = document.getElementById('sidebar-overlay');
  if (overlay) overlay.classList.remove('active');
}

window.addEventListener('resize', () => {
  const wasMobile = isMobile;
  isMobile = window.innerWidth <= 600;
  if (wasMobile && !isMobile) closeMobileSidebar();
});

/* ─── CHIP FILTER ─────────────────────────────────────────── */
function setChip(el) {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');

  // Shuffle for fun
  const shuffled = [...videos].sort(() => Math.random() - .5);
  renderGrid(shuffled);
  setTimeout(injectShorts, 0);
}

/* ─── SEARCH ──────────────────────────────────────────────── */
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const q = searchInput.value.toLowerCase();
  if (!q) { renderGrid(videos); setTimeout(injectShorts, 0); return; }
  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(q) ||
    v.channel.toLowerCase().includes(q)
  );
  renderGrid(filtered);
});

/* ─── CONTEXT MENU ────────────────────────────────────────── */
function showMenu(e, id) {
  const existing = document.getElementById('ctx-menu');
  if (existing) existing.remove();

  const menu = document.createElement('div');
  menu.id = 'ctx-menu';
  menu.style.cssText = `
    position:fixed; background:#fff; border-radius:4px;
    box-shadow:0 2px 8px rgba(0,0,0,.3); z-index:9999;
    min-width:200px; padding:4px 0; font-family:'Roboto',sans-serif;
    font-size:14px;
    top:${e.clientY}px; left:${e.clientX}px;
  `;
  const items = [
    ['playlist_add','Add to queue'],
    ['watch_later','Save to Watch later'],
    ['bookmark','Save to playlist'],
    ['file_download','Download'],
    ['share','Share'],
    ['not_interested','Not interested'],
    ['feedback','Don\'t recommend channel'],
    ['flag','Report'],
  ];
  items.forEach(([icon, label]) => {
    const item = document.createElement('div');
    item.style.cssText = 'display:flex;align-items:center;gap:16px;padding:8px 16px;cursor:pointer;';
    item.innerHTML = `<span class="material-icons" style="font-size:20px;color:#606060">${icon}</span>${label}`;
    item.addEventListener('mouseenter', () => item.style.background = '#f2f2f2');
    item.addEventListener('mouseleave', () => item.style.background = '');
    item.onclick = () => menu.remove();
    menu.appendChild(item);
  });

  document.body.appendChild(menu);

  // Close on outside click
  setTimeout(() => document.addEventListener('click', () => menu.remove(), { once: true }), 0);

  // Keep in viewport
  const rect = menu.getBoundingClientRect();
  if (rect.right > window.innerWidth) menu.style.left = (e.clientX - rect.width) + 'px';
  if (rect.bottom > window.innerHeight) menu.style.top = (e.clientY - rect.height) + 'px';
}

/* ─── OPEN VIDEO (mock) ───────────────────────────────────── */
function openVideo(id) {
  const v = videos.find(x => x.id === id);
  if (!v) return;
  // Show a simple notification toast
  showToast(`▶  ${v.title}`);
}

function showToast(msg) {
  const existing = document.getElementById('yt-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'yt-toast';
  toast.style.cssText = `
    position:fixed; bottom:24px; left:50%; transform:translateX(-50%);
    background:#282828; color:#fff; padding:10px 20px;
    border-radius:4px; font-family:'Roboto',sans-serif; font-size:14px;
    z-index:9999; white-space:nowrap; max-width:90vw;
    overflow:hidden; text-overflow:ellipsis;
    animation: fadeIn .2s ease;
  `;
  toast.textContent = msg;
  const style = document.createElement('style');
  style.textContent = '@keyframes fadeIn{from{opacity:0;transform:translate(-50%,8px)}to{opacity:1;transform:translateX(-50%)}}';
  document.head.appendChild(style);
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

/* ─── STICKY HEADER SHADOW ───────────────────────────────── */
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  header.style.boxShadow = window.scrollY > 0 ? '0 1px 6px rgba(0,0,0,.2)' : 'none';
});

/* ─── INIT ────────────────────────────────────────────────── */
renderGrid(videos);
setTimeout(injectShorts, 0);