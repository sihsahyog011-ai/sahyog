const defaultWorkers = [
  {
    id: 1,
    name: "Arun Kumar",
    trade: "Plumber",
    location: "Salt Lake",
    rate: 450,
    years: 8,
    rating: 4.9,
    phone: "+919876543210",
    bio: "Leaks, taps, bathroom fittings and small plumbing repairs."
  },
  {
    id: 2,
    name: "Sourav Das",
    trade: "Electrician",
    location: "New Town",
    rate: 550,
    years: 6,
    rating: 4.8,
    phone: "+919876543211",
    bio: "House wiring, switches, fans, lighting and electrical repairs."
  },
  {
    id: 3,
    name: "Mita Roy",
    trade: "Cleaner",
    location: "Ballygunge",
    rate: 350,
    years: 5,
    rating: 4.7,
    phone: "+919876543212",
    bio: "Regular home cleaning, kitchen cleaning and move-in cleaning."
  },
  {
    id: 4,
    name: "Rakesh Mondal",
    trade: "Carpenter",
    location: "Dum Dum",
    rate: 600,
    years: 10,
    rating: 4.9,
    phone: "+919876543213",
    bio: "Furniture repair, shelves, doors and custom woodwork."
  },
  {
    id: 5,
    name: "Nandita Sen",
    trade: "Painter",
    location: "Jadavpur",
    rate: 500,
    years: 7,
    rating: 4.8,
    phone: "+919876543214",
    bio: "Interior painting, touch-ups and small wall repair work."
  },
  {
    id: 6,
    name: "Imran Ali",
    trade: "Appliance Repair",
    location: "Park Circus",
    rate: 400,
    years: 6,
    rating: 4.6,
    phone: "+919876543215",
    bio: "Repair and maintenance for common household appliances."
  },
  {
    id: 7,
    name: "Debjit Ghosh",
    trade: "Pest Control",
    location: "Behala",
    rate: 700,
    years: 9,
    rating: 4.8,
    phone: "+919876543216",
    bio: "Home pest checks and treatment for common household pests."
  },
  {
    id: 8,
    name: "Priya Dutta",
    trade: "Locksmith",
    location: "Howrah",
    rate: 300,
    years: 4,
    rating: 4.7,
    phone: "+919876543217",
    bio: "Lock replacement, repairs and emergency home lock service."
  },
  {
    id: 9,
    name: "Sanjay Barman",
    trade: "Sanitization",
    location: "Salt Lake",
    rate: 450,
    years: 5,
    rating: 4.9,
    phone: "+919876543218",
    bio: "Full home sanitization, kitchen sterilization & viral disinfectant spray."
  }
];

const categories = [
  "Plumber",
  "Electrician",
  "Painter",
  "Carpenter",
  "Cleaner",
  "Appliance Repair",
  "Pest Control",
  "Sanitization",
  "Locksmith"
];

let workers = [...defaultWorkers];
let selectedTrade = "";
let selectedWorker = null;

// Multi-language dictionary
const translations = {
  en: {
    navFind: "Find a pro",
    navHow: "How it works",
    navWorkers: "For workers",
    browseWorkers: "Browse workers",
    heroEyebrow: "HOUSEHOLD SERVICES, VERIFIED",
    heroHeading: "Every service your home needs, one call away.",
    heroSub: "Find trusted plumbers, electricians, carpenters and other skilled workers near you. Compare profiles, check ratings and connect directly.",
    labelNeed: "What do you need?",
    labelServices: "Services",
    labelArea: "Area",
    labelBudget: "Max Budget",
    btnSearch: "Search",
    statWorkers: "active workers",
    statTrades: "trades covered",
    statRating: "average rating",
    findProHead: "Find a Pro",
    findProSub: "What kind of professional do you need today? Select a trade or filter by your preferences below.",
    noWorkersFound: "No workers found",
    noWorkersSub: "Try a different service, budget, keyword or area.",
    howHead: "How it works",
    howSub: "Getting the right person for the job takes only a few steps.",
    step1Title: "Search your trade",
    step1Desc: "Search by service, problem or neighborhood to find workers nearby.",
    step2Title: "Check their profile",
    step2Desc: "See experience, ratings, service area and pricing before contacting them.",
    step3Title: "Connect directly",
    step3Desc: "Call, message or send a service request and discuss the job and timing.",
    joinLabel: "FOR SKILLED WORKERS",
    joinHeading: "Are you a plumber, electrician, carpenter or tradesperson?",
    joinSub: "List your services on Sahyog and connect with households in your area looking for your skills.",
    joinBtn: "Join as a worker",
    joinModalTitle: "List your services",
    joinModalSub: "Add your details so people nearby can find you."
  },
  bn: {
    navFind: "কারিগর খুঁজুন",
    navHow: "কীভাবে কাজ করে",
    navWorkers: "কর্মীদের জন্য",
    browseWorkers: "সব কর্মী দেখুন",
    heroEyebrow: "গৃহস্থালি পরিষেবা, বিশ্বস্ত ও পরীক্ষিত",
    heroHeading: "ঘরের যেকোনো কাজের জন্য সেরা কারিগর, এক কলেই হাজির।",
    heroSub: "আপনার এলাকার নির্ভরযোগ্য প্লাম্বার, ইলেকট্রিশিয়ান, মিস্ত্রিদের খুঁজুন। রেটিং যাচাই করুন এবং সরাসরি যোগাযোগ করুন।",
    labelNeed: "আপনার কী সেবা দরকার?",
    labelServices: "কাজের ধরন",
    labelArea: "এলাকা",
    labelBudget: "বাজেট সীমা",
    btnSearch: "খুঁজুন",
    statWorkers: "সক্রিয় কর্মী",
    statTrades: "কাজের বিভাগ",
    statRating: "গড় রেটিং",
    findProHead: "কারিগর বাছুন",
    findProSub: "আজ আপনার কী পরিষেবা প্রয়োজন? তালিকা থেকে কাজের বিভাগ বেছে নিন।",
    noWorkersFound: "কোনো কারিগর পাওয়া যায়নি",
    noWorkersSub: "অন্য কোনো কাজের ধরন, বাজেট বা এলাকা বেছে নিয়ে চেষ্টা করুন।",
    howHead: "সহজ ৩টি ধাপ",
    howSub: "আপনার কাজের জন্য সঠিক লোক খুঁজে পাওয়া এখন খুব সহজ।",
    step1Title: "কাজের ধরন খুঁজুন",
    step1Desc: "কাজের নাম বা আপনার এলাকা লিখে সহজেই কর্মী খুঁজুন।",
    step2Title: "প্রোফাইল যাচাই করুন",
    step2Desc: "অভিজ্ঞতা, রেটিং ও কাজের দর দেখে নিশ্চিন্ত হন।",
    step3Title: "সরাসরি যোগাযোগ করুন",
    step3Desc: "সরাসরি ফোন বা হোয়াটসঅ্যাপে কথা বলে কাজের সময় ঠিক করুন।",
    joinLabel: "দক্ষ কর্মীদের জন্য",
    joinHeading: "আপনি কি প্লাম্বার, ইলেকট্রিশিয়ান বা দক্ষ মিস্ত্রি?",
    joinSub: "সহযোগ-এ আপনার নাম নথিভুক্ত করুন এবং আপনার এলাকার নতুন গ্রাহকদের সাথে যুক্ত হন।",
    joinBtn: "কর্মী হিসেবে যুক্ত হন",
    joinModalTitle: "আপনার পরিষেবা তালিকাভুক্ত করুন",
    joinModalSub: "আপনার বিশদ তথ্য দিন যাতে গ্রাহকরা আপনাকে সহজে খুঁজে পায়।"
  },
  hi: {
    navFind: "कारीगर खोजें",
    navHow: "यह कैसे काम करता है",
    navWorkers: "कारीगरों के लिए",
    browseWorkers: "सभी कारीगर देखें",
    heroEyebrow: "घरेलू सेवाएं, सत्यापित एवं विश्वसनीय",
    heroHeading: "घर की हर ज़रूरत के लिए कुशल कारीगर, बस एक कॉल की दूरी पर।",
    heroSub: "अपने नज़दीकी प्लंबर, इलेक्ट्रीशियन और बढ़ई खोजें। प्रोफाइल और रेटिंग देखकर सीधे संपर्क करें।",
    labelNeed: "आपको क्या काम करवाना है?",
    labelServices: "सेवाएं",
    labelArea: "इलाका",
    labelBudget: "अधिकतम बजट",
    btnSearch: "खोजें",
    statWorkers: "सक्रिय कारीगर",
    statTrades: "सेवा श्रेणियां",
    statRating: "औसत रेटिंग",
    findProHead: "कारीगर चुनें",
    findProSub: "आज आपको किस काम के लिए कारीगर चाहिए? नीचे अपनी पसंद चुनें।",
    noWorkersFound: "कोई कारीगर नहीं मिला",
    noWorkersSub: "कृपया अपनी सेवा, बजट या इलाके का चयन बदल कर प्रयास करें।",
    howHead: "यह कैसे काम करता है",
    howSub: "सही कारीगर को बुलाना अब बेहद आसान है।",
    step1Title: "सेवा खोजें",
    step1Desc: "अपनी समस्या या इलाके के अनुसार सही कारीगर चुनें।",
    step2Title: "प्रोफ़ाइल देखें",
    step2Desc: "अनुभव, रेटिंग और शुल्क देखकर संतुष्ट हों।",
    step3Title: "सीधे संपर्क करें",
    step3Desc: "फोन या व्हाट्सएप पर सीधे बात करके समय तय करें।",
    joinLabel: "कारीगरों के लिए",
    joinHeading: "क्या आप प्लंबर, इलेक्ट्रीशियन या कुशल कारीगर हैं?",
    joinSub: "सहयोग पर अपनी सेवाएं दर्ज करें और अपने क्षेत्र के परिवारों से जुड़ें।",
    joinBtn: "कारीगर के रूप में जुड़ें",
    joinModalTitle: "अपनी सेवाएं जोड़ें",
    joinModalSub: "अपनी जानकारी भरें ताकि ग्राहक आप तक आसानी से पहुंच सकें।"
  }
};

const qInput = document.getElementById("q");
const tradeSelect = document.getElementById("tradeSelect");
const locInput = document.getElementById("locInput");
const priceSelect = document.getElementById("priceSelect");
const langSwitch = document.getElementById("langSwitch");

const chipRow = document.getElementById("chipRow");
const workerGrid = document.getElementById("workerGrid");
const loadingRow = document.getElementById("loadingRow");
const emptyState = document.getElementById("emptyState");

const joinOverlay = document.getElementById("joinOverlay");
const modalOverlay = document.getElementById("modalOverlay");

function loadSavedWorkers() {
  const saved = JSON.parse(localStorage.getItem("sahyogWorkers") || "[]");
  if (saved.length > 0) {
    workers = [...defaultWorkers, ...saved];
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getInitials(name) {
  return name.trim().split(/\s+/).slice(0, 2).map(p => p.charAt(0)).join("").toUpperCase();
}

function getTrades() {
  return [...new Set(workers.map(w => w.trade))].sort();
}

function populateServices() {
  const trades = getTrades();
  tradeSelect.innerHTML = '<option value="">All works</option>';

  trades.forEach(trade => {
    const opt = document.createElement("option");
    opt.value = trade;
    opt.textContent = trade;
    tradeSelect.appendChild(opt);
  });

  chipRow.innerHTML = "";

  // "All" chip
  const allChip = document.createElement("button");
  allChip.type = "button";
  allChip.className = `chip ${selectedTrade === "" ? "active" : ""}`;
  allChip.dataset.trade = "";
  allChip.textContent = "All";
  allChip.addEventListener("click", () => {
    selectedTrade = "";
    tradeSelect.value = "";
    updateActiveChip();
    filterWorkers();
  });
  chipRow.appendChild(allChip);

  categories.forEach(trade => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `chip ${selectedTrade === trade ? "active" : ""}`;
    chip.dataset.trade = trade;
    chip.textContent = trade;

    chip.addEventListener("click", () => {
      selectedTrade = selectedTrade === trade ? "" : trade;
      tradeSelect.value = selectedTrade;
      updateActiveChip();
      filterWorkers();

      document.getElementById("browse").scrollIntoView({
        behavior: "smooth"
      });
    });

    chipRow.appendChild(chip);
  });
}

function populateModalDropdowns() {
  const modalTradeSelect = document.getElementById("jTradeLabel");
  const modalLocSelect = document.getElementById("jLocation");

  if (modalTradeSelect) {
    modalTradeSelect.innerHTML = '<option value="" disabled selected>Select trade</option>';
    categories.forEach(trade => {
      const opt = document.createElement("option");
      opt.value = trade;
      opt.textContent = trade;
      modalTradeSelect.appendChild(opt);
    });
  }

  if (modalLocSelect) {
    const locations = [...new Set(workers.map(w => w.location))].sort();
    modalLocSelect.innerHTML = '<option value="" disabled selected>Select area</option>';
    locations.forEach(loc => {
      const opt = document.createElement("option");
      opt.value = loc;
      opt.textContent = loc;
      modalLocSelect.appendChild(opt);
    });
  }
}

function updateActiveChip() {
  document.querySelectorAll(".chip").forEach(chip => {
    chip.classList.toggle("active", chip.dataset.trade === selectedTrade);
  });
}

function renderWorkers(list) {
  workerGrid.innerHTML = "";

  list.forEach(worker => {
    const card = document.createElement("article");
    card.className = "worker-card";

    card.innerHTML = `
      <div class="worker-top">
        <div class="avatar">${escapeHtml(getInitials(worker.name))}</div>
        <div>
          <div class="worker-name-row">
            <h3>${escapeHtml(worker.name)}</h3>
            <span class="verified">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3l2.1 1.7 2.7-.2.9 2.5 2.3 1.4-.8 2.6.8 2.6-2.3 1.4-.9 2.5-2.7-.2L12 21l-2.1-1.7-2.7.2-.9-2.5L4 15.6l.8-2.6L4 10.4l2.3-1.4.9-2.5 2.7.2L12 3z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
              Verified
            </span>
          </div>
          <div class="worker-trade">${escapeHtml(worker.trade)}</div>
        </div>
      </div>

      <div class="worker-meta">
        <span>★ ${Number(worker.rating || 0).toFixed(1)}</span>
        <span>📍 ${escapeHtml(worker.location)}</span>
        <span>${worker.years} yrs experience</span>
      </div>

      <div class="worker-bio">${escapeHtml(worker.bio)}</div>

      <div class="worker-foot">
        <div class="rate">₹${worker.rate}<span>/visit</span></div>
        <button class="connect-btn" type="button" data-worker-id="${worker.id}">
          View & connect
        </button>
      </div>
    `;

    workerGrid.appendChild(card);
  });

  document.querySelectorAll(".connect-btn").forEach(button => {
    button.addEventListener("click", () => {
      const workerId = Number(button.dataset.workerId);
      const worker = workers.find(item => item.id === workerId);
      openWorkerModal(worker);
    });
  });
}

function filterWorkers() {
  const query = qInput.value.trim().toLowerCase();
  const location = locInput.value.trim().toLowerCase();
  const trade = tradeSelect.value || selectedTrade;
  const priceRange = priceSelect ? priceSelect.value : "all";

  const filtered = workers.filter(worker => {
    const matchesQuery =
      !query ||
      worker.name.toLowerCase().includes(query) ||
      worker.trade.toLowerCase().includes(query) ||
      worker.bio.toLowerCase().includes(query);

    const matchesTrade = !trade || worker.trade.toLowerCase() === trade.toLowerCase();
    const matchesLocation = !location || worker.location.toLowerCase().includes(location);

    let matchesPrice = true;
    if (priceRange === "under400") matchesPrice = worker.rate < 400;
    else if (priceRange === "400-600") matchesPrice = worker.rate >= 400 && worker.rate <= 600;
    else if (priceRange === "above600") matchesPrice = worker.rate > 600;

    return matchesQuery && matchesTrade && matchesLocation && matchesPrice;
  });

  renderWorkers(filtered);
  emptyState.style.display = filtered.length === 0 ? "block" : "none";
}

function updateStats() {
  document.getElementById("statWorkers").textContent = workers.length;
  document.getElementById("statTrades").textContent = getTrades().length;
}

function openJoinModal() {
  joinOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    const input = document.getElementById("jName");
    if (input) input.focus();
  }, 100);
}

function closeJoinModal() {
  joinOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

function openWorkerModal(worker) {
  if (!worker) return;
  selectedWorker = worker;

  document.getElementById("modalName").textContent = worker.name;
  document.getElementById("modalTrade").textContent =
    `${worker.trade} · ${worker.location} · ₹${worker.rate}/visit · ${Number(worker.rating || 0).toFixed(1)}★`;

  const phone = worker.phone.replace(/\s+/g, "");
  document.getElementById("callLink").href = `tel:${phone}`;
  document.getElementById("waLink").href =
    `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(
      `Hi ${worker.name}, I found your listing on Sahyog and would like to know about your ${worker.trade.toLowerCase()} services.`
    )}`;

  document.getElementById("confirmNote").classList.remove("show");
  document.getElementById("requestForm").reset();

  modalOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("open");
  document.body.style.overflow = "";
  selectedWorker = null;
}

function saveWorkerListing(worker) {
  const saved = JSON.parse(localStorage.getItem("sahyogWorkers") || "[]");
  saved.push(worker);
  localStorage.setItem("sahyogWorkers", JSON.stringify(saved));
  loadSavedWorkers();
  updateStats();
  populateServices();
  populateModalDropdowns();
  filterWorkers();
}

function saveRequest(request) {
  const requests = JSON.parse(localStorage.getItem("sahyogRequests") || "[]");
  requests.push(request);
  localStorage.setItem("sahyogRequests", JSON.stringify(requests));
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });
}

function bindEvents() {
  qInput.addEventListener("input", filterWorkers);
  locInput.addEventListener("input", filterWorkers);

  if (priceSelect) priceSelect.addEventListener("change", filterWorkers);

  if (langSwitch) {
    langSwitch.addEventListener("change", e => {
      applyLanguage(e.target.value);
    });
  }

  // Smooth scroll and trigger search on button click
  document.getElementById("searchBtn").addEventListener("click", () => {
    filterWorkers();
    document.getElementById("browse").scrollIntoView({ behavior: "smooth" });
  });

  tradeSelect.addEventListener("change", () => {
    selectedTrade = tradeSelect.value;
    updateActiveChip();
    filterWorkers();
  });

  document.getElementById("joinForm").addEventListener("submit", event => {
    event.preventDefault();

    const listing = {
      id: Date.now(),
      name: document.getElementById("jName").value.trim(),
      trade: document.getElementById("jTradeLabel").value.trim(),
      location: document.getElementById("jLocation").value.trim(),
      rate: Number(document.getElementById("jRate").value),
      years: Number(document.getElementById("jYears").value) || 0,
      phone: document.getElementById("jPhone").value.trim(),
      bio: document.getElementById("jBio").value.trim() || "Local household service professional.",
      rating: 5.0
    };

    if (!listing.name || !listing.trade || !listing.location || !listing.rate || !listing.phone) return;

    saveWorkerListing(listing);

    const note = document.getElementById("joinConfirm");
    note.textContent = "Your listing has been saved on this device.";
    note.classList.add("show");
    document.getElementById("joinForm").reset();

    setTimeout(() => {
      closeJoinModal();
      note.classList.remove("show");
    }, 1800);
  });

  document.getElementById("requestForm").addEventListener("submit", event => {
    event.preventDefault();
    if (!selectedWorker) return;

    const request = {
      workerId: selectedWorker.id,
      worker: selectedWorker.name,
      customer: document.getElementById("reqName").value.trim(),
      message: document.getElementById("reqMsg").value.trim(),
      createdAt: new Date().toISOString()
    };

    saveRequest(request);

    const confirmNote = document.getElementById("confirmNote");
    confirmNote.textContent = `Request saved. ${selectedWorker.name} will receive your request.`;
    confirmNote.classList.add("show");
    document.getElementById("requestForm").reset();
  });

  joinOverlay.addEventListener("click", event => {
    if (event.target === joinOverlay) closeJoinModal();
  });

  modalOverlay.addEventListener("click", event => {
    if (event.target === modalOverlay) closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    if (joinOverlay.classList.contains("open")) closeJoinModal();
    if (modalOverlay.classList.contains("open")) closeModal();
  });
}

window.openJoinModal = openJoinModal;
window.closeJoinModal = closeJoinModal;
window.closeModal = closeModal;

function init() {
  loadingRow.style.display = "flex";

  setTimeout(() => {
    loadSavedWorkers();
    populateServices();
    populateModalDropdowns();
    updateStats();
    filterWorkers();
    loadingRow.style.display = "none";
  }, 400);

  bindEvents();
}

document.addEventListener("DOMContentLoaded", init);