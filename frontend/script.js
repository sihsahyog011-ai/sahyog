const defaultWorkers = [
  {
    id: 1,
    name: { en: "Arun Kumar", bn: "অরুণ কুমার", hi: "अरुण कुमार" },
    trade: { en: "Plumber", bn: "প্লাম্বার", hi: "प्लंबर" },
    location: { en: "Salt Lake", bn: "সল্টলেক", hi: "सॉल्ट लेक" },
    rate: 450,
    years: 8,
    rating: 4.9,
    phone: "+919876543210",
    bio: {
      en: "Leaks, taps, bathroom fittings and small plumbing repairs.",
      bn: "লিক, ট্যাপ, বাথরুমের ফিটিংস ও মেরামতের কাজ।",
      hi: "लीकेज, नल, बाथरूम फिटिंग और पाइप मरम्मत का काम।"
    }
  },
  {
    id: 2,
    name: { en: "Sourav Das", bn: "সৌরভ দাস", hi: "सौरव दास" },
    trade: { en: "Electrician", bn: "ইলেকট্রিশিয়ান", hi: "इलेक्ट्रीशियन" },
    location: { en: "New Town", bn: "নিউ টাউন", hi: "न्यू टाउन" },
    rate: 550,
    years: 6,
    rating: 4.8,
    phone: "+919876543211",
    bio: {
      en: "House wiring, switches, fans, lighting and electrical repairs.",
      bn: "ঘরের ওয়্যারিং, সুইচ, ফ্যান ও বৈদ্যুতিক কাজ।",
      hi: "घर की वायरिंग, स्विच, पंखे, लाइट और बिजली की मरम्मत।"
    }
  },
  {
    id: 3,
    name: { en: "Mita Roy", bn: "মিতা রায়", hi: "मिता रॉय" },
    trade: { en: "Cleaner", bn: "ক্লিনার", hi: "सफाई कर्मी" },
    location: { en: "Ballygunge", bn: "বালিগঞ্জ", hi: "बालीगंज" },
    rate: 350,
    years: 5,
    rating: 4.7,
    phone: "+919876543212",
    bio: {
      en: "Regular home cleaning, kitchen cleaning and move-in cleaning.",
      bn: "নিয়মিত ঘর পরিষ্কার ও রান্নাঘর ডিপ ক্লিন।",
      hi: "घर की नियमित सफाई और किचन डीप क्लीनिंग।"
    }
  },
  {
    id: 4,
    name: { en: "Rakesh Mondal", bn: "রাকেশ মন্ডল", hi: "राकेश मंडल" },
    trade: { en: "Carpenter", bn: "কার্পেন্টার", hi: "बढ़ई (कारपेंटर)" },
    location: { en: "Dum Dum", bn: "দমদম", hi: "दमदम" },
    rate: 600,
    years: 10,
    rating: 4.9,
    phone: "+919876543213",
    bio: {
      en: "Furniture repair, shelves, doors and custom woodwork.",
      bn: "আসবাবপত্র মেরামত, তাক, দরজা ও কাঠের কাজ।",
      hi: "फर्नीचर की मरम्मत, अलमारी, दरवाजे और लकड़ी का काम।"
    }
  },
  {
    id: 5,
    name: { en: "Nandita Sen", bn: "নন্দিতা সেন", hi: "नंदिता सेन" },
    trade: { en: "Painter", bn: "পেন্টার", hi: "पेंटर" },
    location: { en: "Jadavpur", bn: "যাদবপুর", hi: "जादवपुर" },
    rate: 500,
    years: 7,
    rating: 4.8,
    phone: "+919876543214",
    bio: {
      en: "Interior painting, touch-ups and small wall repair work.",
      bn: "ঘরের রং, দেওয়াল মেরামত ও ওয়াটারপ্রুফিং।",
      hi: "कमरों का पेंट, दीवारों की मरम्मत और टच-अप कार्य।"
    }
  },
  {
    id: 6,
    name: { en: "Imran Ali", bn: "ইমরান আলী", hi: "इमरान अली" },
    trade: { en: "Appliance Repair", bn: "যন্ত্রপাতি মেরামত", hi: "उपकरण मरम्मत" },
    location: { en: "Park Circus", bn: "পার্ক সার্কাস", hi: "पार्क सर्कस" },
    rate: 400,
    years: 6,
    rating: 4.6,
    phone: "+919876543215",
    bio: {
      en: "Repair and maintenance for common household appliances.",
      bn: "ওয়াশিং মেশিন, মাইক্রোওয়েভ ও হোম অ্যাপ্লায়েন্স মেরামত।",
      hi: "वाशिंग मशीन, माइक्रोवेव और घरेलू उपकरणों की मरम्मत।"
    }
  },
  {
    id: 7,
    name: { en: "Debjit Ghosh", bn: "দেবজিৎ ঘোষ", hi: "देवजीत घोष" },
    trade: { en: "Pest Control", bn: "কীটপতঙ্গ নিয়ন্ত্রণ", hi: "पेस्ट कंट्रोल" },
    location: { en: "Behala", bn: "বেহালা", hi: "बेहाला" },
    rate: 700,
    years: 9,
    rating: 4.8,
    phone: "+919876543216",
    bio: {
      en: "Home pest checks and treatment for common household pests.",
      bn: "ছারপোকা, উইপোকা ও ঘরের কীটনাশক স্প্রে।",
      hi: "दीमक, खटमल और कीट नियंत्रण उपचार।"
    }
  },
  {
    id: 8,
    name: { en: "Priya Dutta", bn: "প্রিয়া দত্ত", hi: "प्रिया दत्ता" },
    trade: { en: "Locksmith", bn: "তালা মিস্ত্রি", hi: "ताला मैकेनिक" },
    location: { en: "Howrah", bn: "হাওড়া", hi: "हावड़ा" },
    rate: 300,
    years: 4,
    rating: 4.7,
    phone: "+919876543217",
    bio: {
      en: "Lock replacement, repairs and emergency home lock service.",
      bn: "তালা তৈরি, নতুন চাবি ও জরুরি ডোর লক সার্ভিস।",
      hi: "ताले बदलना, नई चाबी बनाना और आपातकालीन लॉक सर्विस।"
    }
  },
  {
    id: 9,
    name: { en: "Sanjay Barman", bn: "সঞ্জয় বর্মন", hi: "संजय बर्मन" },
    trade: { en: "Sanitization", bn: "জীবাণুমুক্তকরণ", hi: "सैनिटाइजेशन" },
    location: { en: "Salt Lake", bn: "সল্টলেক", hi: "सॉल्ट लेक" },
    rate: 450,
    years: 5,
    rating: 4.9,
    phone: "+919876543218",
    bio: {
      en: "Full home sanitization, kitchen sterilization & viral disinfectant spray.",
      bn: "সম্পূর্ণ বাড়ি স্যানিটাইজেশন ও জীবাণুনাশক স্প্রে।",
      hi: "पूरे घर की कीटाणुशोधन और सैनिटाइजेशन सेवा।"
    }
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
    navReceipts: "My Receipts",
    browseWorkers: "Browse workers",
    heroEyebrow: "HOUSEHOLD SERVICES, VERIFIED",
    heroHeading: "Every service your home needs, one call away.",
    heroSub: "Find trusted plumbers, electricians, carpenters and other skilled workers near you. Unlimited bookings with a simple community subscription plan.",
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
    step1Title: "Choose a plan",
    step1Desc: "Subscribe Quarterly (₹350) or Yearly (₹500) for unlimited direct household service access.",
    step2Title: "Find & connect",
    step2Desc: "Browse verified profiles, check experience, ratings, and contact pros directly.",
    step3Title: "Get your receipt",
    step3Desc: "Receive and download instant digital receipts with zero per-visit commission.",
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
    navReceipts: "আমার রসিদ",
    browseWorkers: "সব কর্মী দেখুন",
    heroEyebrow: "গৃহস্থালি পরিষেবা, বিশ্বস্ত ও পরীক্ষিত",
    heroHeading: "ঘরের যেকোনো কাজের জন্য সেরা কারিগর, এক কলেই হাজির।",
    heroSub: "সহজ সাবস্ক্রিপশন প্ল্যানে কোনো অতিরিক্ত কমিশন ছাড়াই আপনার এলাকার বিশ্বস্ত মিস্ত্রিদের সাথে যুক্ত হন।",
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
    step1Title: "প্ল্যান বেছে নিন",
    step1Desc: "ত্রৈমাসিক (₹৩৫০) বা বাৎসরিক (₹৫০০) সাবস্ক্রিপশনে আনলিমিটেড সার্ভিস বুক করুন।",
    step2Title: "সরাসরি যুক্ত হন",
    step2Desc: "অভিজ্ঞতা, রেটিং ও কাজের বিবরণ দেখে সরাসরি ফোনে কথা বলুন।",
    step3Title: "রসিদ পান",
    step3Desc: "যেকোনো সময়ে আপনার ডিজিটাল মেম্বারশিপ রসিদ ডাউনলোড ও প্রিন্ট করুন।",
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
    navReceipts: "मेरी रसीदें",
    browseWorkers: "सभी कारीगर देखें",
    heroEyebrow: "घरेलू सेवाएं, सत्यापित एवं विश्वसनीय",
    heroHeading: "घर की हर ज़रूरत के लिए कुशल कारीगर, बस एक कॉल की दूरी पर।",
    heroSub: "सहयोग मेंबरशिप के साथ बिना किसी अतिरिक्त कमीशन के अपने इलाके के सर्वश्रेष्ठ कारीगरों से संपर्क करें।",
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
    step1Title: "प्लान चुनें",
    step1Desc: "त्रैमासिक (₹350) या वार्षिक (₹500) प्लान के साथ अनलिमिटेड सर्विस एक्सेस पाएं।",
    step2Title: "सीधे संपर्क करें",
    step2Desc: "अनुभव और रेटिंग देखकर सीधे फोन या व्हाट्सएप पर बात करें।",
    step3Title: "रसीद प्राप्त करें",
    step3Desc: "अपनी डिजिटल सब्सक्रिप्शन रसीद तुरंत देखें या डाउनलोड करें।",
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
const historyOverlay = document.getElementById("historyOverlay");
const subscriptionOverlay = document.getElementById("subscriptionOverlay");
const receiptViewOverlay = document.getElementById("receiptViewOverlay");
const receiptCountBadge = document.getElementById("receiptCountBadge");

function scrollToBrowse() {
  const browseSection = document.getElementById("browse");
  if (!browseSection) return;
  const headerHeight = 84;
  const targetPosition = browseSection.getBoundingClientRect().top + window.pageYOffset - (headerHeight + 20);

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });
}

function loadSavedWorkers() {
  const saved = JSON.parse(localStorage.getItem("sahyogWorkers") || "[]");
  if (saved.length > 0) {
    workers = [...defaultWorkers, ...saved];
  }
}

function getLocalized(val) {
  const lang = document.getElementById("langSwitch")?.value || "en";
  if (val && typeof val === "object") {
    return val[lang] || val.en || "";
  }
  return String(val || "");
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
  return [...new Set(workers.map(w => (typeof w.trade === "object" ? w.trade.en : w.trade)))].sort();
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
      scrollToBrowse();
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
    const locations = [...new Set(workers.map(w => (typeof w.location === "object" ? w.location.en : w.location)))].sort();
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
  const lang = document.getElementById("langSwitch")?.value || "en";

  const labels = {
    en: { verified: "Verified", exp: "yrs experience", visit: "/visit", connect: "Connect Pro" },
    bn: { verified: "যাচাইকৃত", exp: "বছরের অভিজ্ঞতা", visit: "/ভিজিট", connect: "যোগাযোগ করুন" },
    hi: { verified: "सत्यापित", exp: "वर्षों का अनुभव", visit: "/विजिट", connect: "संपर्क करें" }
  }[lang] || { verified: "Verified", exp: "yrs experience", visit: "/visit", connect: "Connect Pro" };

  list.forEach(worker => {
    const card = document.createElement("article");
    card.className = "worker-card";

    const workerName = getLocalized(worker.name);
    const workerTrade = getLocalized(worker.trade);
    const workerLoc = getLocalized(worker.location);
    const workerBio = getLocalized(worker.bio);

    card.innerHTML = `
      <div class="worker-top">
        <div class="avatar">${escapeHtml(getInitials(workerName))}</div>
        <div>
          <div class="worker-name-row">
            <h3>${escapeHtml(workerName)}</h3>
            <span class="verified">
              <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 3l2.1 1.7 2.7-.2.9 2.5 2.3 1.4-.8 2.6.8 2.6-2.3 1.4-.9 2.5-2.7-.2L12 21l-2.1-1.7-2.7.2-.9-2.5L4 15.6l.8-2.6L4 10.4l2.3-1.4.9-2.5 2.7.2L12 3z"></path>
                <path d="M9 12l2 2 4-4"></path>
              </svg>
              ${labels.verified}
            </span>
          </div>
          <div class="worker-trade">${escapeHtml(workerTrade)}</div>
        </div>
      </div>

      <div class="worker-meta">
        <span>★ ${Number(worker.rating || 0).toFixed(1)}</span>
        <span>📍 ${escapeHtml(workerLoc)}</span>
        <span>${worker.years} ${labels.exp}</span>
      </div>

      <div class="worker-bio">${escapeHtml(workerBio)}</div>

      <div class="worker-foot">
        <div class="rate">₹${worker.rate}<span>${labels.visit}</span></div>
        <button class="connect-btn" type="button" data-worker-id="${worker.id}">
          ${labels.connect}
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
    const nameStr = (typeof worker.name === "object" ? Object.values(worker.name).join(" ") : worker.name).toLowerCase();
    const tradeStr = (typeof worker.trade === "object" ? Object.values(worker.trade).join(" ") : worker.trade).toLowerCase();
    const bioStr = (typeof worker.bio === "object" ? Object.values(worker.bio).join(" ") : worker.bio).toLowerCase();
    const locStr = (typeof worker.location === "object" ? Object.values(worker.location).join(" ") : worker.location).toLowerCase();

    const matchesQuery = !query || nameStr.includes(query) || tradeStr.includes(query) || bioStr.includes(query);
    const workerTradeEn = typeof worker.trade === "object" ? worker.trade.en : worker.trade;
    const matchesTrade = !trade || workerTradeEn.toLowerCase() === trade.toLowerCase();
    const matchesLocation = !location || locStr.includes(location);

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

  const workerName = getLocalized(worker.name);
  const workerTrade = getLocalized(worker.trade);
  const workerLoc = getLocalized(worker.location);

  document.getElementById("modalName").textContent = workerName;
  document.getElementById("modalTrade").textContent =
    `${workerTrade} · ${workerLoc} · ₹${worker.rate}/visit · ${Number(worker.rating || 0).toFixed(1)}★`;

  const phone = worker.phone.replace(/\s+/g, "");
  document.getElementById("callLink").href = `tel:${phone}`;
  document.getElementById("waLink").href =
    `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(
      `Hi ${workerName}, I found your listing on Sahyog and would like to hire your ${workerTrade.toLowerCase()} service.`
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

// ---------------- Subscription & Receipt Management ---------------- //

function getSubscriptions() {
  return JSON.parse(localStorage.getItem("sahyogSubscriptions") || "[]");
}

function updateReceiptCountBadge() {
  const subs = getSubscriptions();
  if (receiptCountBadge) receiptCountBadge.textContent = subs.length;
}

function openSubscriptionModal() {
  updateSubSummary();
  subscriptionOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeSubscriptionModal() {
  subscriptionOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

function updateSubSummary() {
  const selectedPlan = document.querySelector('input[name="subPlan"]:checked')?.value || "quarterly";
  const nameLabel = document.getElementById("summaryPlanName");
  const priceLabel = document.getElementById("summaryPlanPrice");

  if (selectedPlan === "yearly") {
    nameLabel.textContent = "Yearly Plan (12 Months)";
    priceLabel.textContent = "₹500";
  } else {
    nameLabel.textContent = "Quarterly Plan (3 Months)";
    priceLabel.textContent = "₹350";
  }
}

function openReceiptsDrawer() {
  renderReceiptsDrawer();
  historyOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeReceiptsDrawer() {
  historyOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

function renderReceiptsDrawer() {
  const container = document.getElementById("receiptsListContainer");
  const subs = getSubscriptions();

  if (subs.length === 0) {
    container.innerHTML = `
      <div class="empty-state" style="margin: 30px 0; border: none;">
        <h3>No subscriptions yet</h3>
        <p>Subscribe to Sahyog Plus to unlock unlimited pro contacts and digital receipts.</p>
        <button type="button" class="btn btn-brass" style="margin-top:14px;" onclick="closeReceiptsDrawer(); openSubscriptionModal();">
          Get Membership
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = subs.map(sub => `
    <div class="receipt-card">
      <div class="receipt-card-head">
        <div>
          <h4>${escapeHtml(sub.planTitle)}</h4>
          <span class="receipt-card-meta">Receipt ID: #${sub.id}</span>
        </div>
        <span class="status-badge-active">ACTIVE</span>
      </div>

      <div class="receipt-card-meta">
        <strong>Subscriber:</strong> ${escapeHtml(sub.subscriberName)} (${escapeHtml(sub.phone)})<br>
        <strong>Amount Paid:</strong> ₹${sub.amount}<br>
        <strong>Validity:</strong> ${sub.startDate} to ${sub.validUntil}
      </div>

      <div style="display: flex; gap: 8px; margin-top: 6px;">
        <button type="button" class="btn btn-outline" style="flex: 1; font-size: 12px;" onclick="viewReceipt(${sub.id})">
          📄 View Receipt Slip
        </button>
      </div>
    </div>
  `).join("");
}

function viewReceipt(id) {
  const subs = getSubscriptions();
  const sub = subs.find(item => item.id === id);
  if (!sub) return;

  document.getElementById("rcptId").textContent = `#RCPT-${sub.id}`;
  document.getElementById("rcptName").textContent = sub.subscriberName;
  document.getElementById("rcptPhone").textContent = sub.phone;
  document.getElementById("rcptPlan").textContent = sub.planTitle;
  document.getElementById("rcptDate").textContent = sub.startDate;
  document.getElementById("rcptValid").textContent = sub.validUntil;
  document.getElementById("rcptAmount").textContent = `₹${sub.amount}`;

  receiptViewOverlay.classList.add("open");
}

function closeReceiptViewModal() {
  receiptViewOverlay.classList.remove("open");
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

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (dict[key]) {
      elem.textContent = dict[key];
    }
  });
  filterWorkers();
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

  const findProNav = document.querySelector('a[href="#browse"]');
  if (findProNav) {
    findProNav.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToBrowse();
    });
  }

  document.getElementById("searchBtn").addEventListener("click", () => {
    filterWorkers();
    scrollToBrowse();
  });

  tradeSelect.addEventListener("change", () => {
    selectedTrade = tradeSelect.value;
    updateActiveChip();
    filterWorkers();
  });

  // Subscription Form Submit
  document.getElementById("subForm").addEventListener("submit", event => {
    event.preventDefault();

    const planType = document.querySelector('input[name="subPlan"]:checked')?.value || "quarterly";
    const name = document.getElementById("subName").value.trim();
    const phone = document.getElementById("subPhone").value.trim();

    const now = new Date();
    const validDate = new Date();
    const isYearly = planType === "yearly";

    if (isYearly) {
      validDate.setFullYear(validDate.getFullYear() + 1);
    } else {
      validDate.setMonth(validDate.getMonth() + 3);
    }

    const newSub = {
      id: Math.floor(100000 + Math.random() * 900000),
      planType: planType,
      planTitle: isYearly ? "Sahyog Plus Yearly Plan" : "Sahyog Plus Quarterly Plan",
      amount: isYearly ? 500 : 350,
      subscriberName: name,
      phone: phone,
      startDate: now.toLocaleDateString(),
      validUntil: validDate.toLocaleDateString()
    };

    const subs = getSubscriptions();
    subs.unshift(newSub);
    localStorage.setItem("sahyogSubscriptions", JSON.stringify(subs));

    updateReceiptCountBadge();
    closeSubscriptionModal();
    document.getElementById("subForm").reset();

    viewReceipt(newSub.id);
  });

  // Worker Listing Form
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

  // Direct Request Form
  document.getElementById("requestForm").addEventListener("submit", event => {
    event.preventDefault();
    if (!selectedWorker) return;

    const workerName = getLocalized(selectedWorker.name);
    const confirmNote = document.getElementById("confirmNote");
    confirmNote.textContent = `Request sent! ${workerName} has been notified and will contact you directly.`;
    confirmNote.classList.add("show");

    setTimeout(() => {
      closeModal();
      confirmNote.classList.remove("show");
    }, 1600);
  });

  joinOverlay.addEventListener("click", event => {
    if (event.target === joinOverlay) closeJoinModal();
  });

  modalOverlay.addEventListener("click", event => {
    if (event.target === modalOverlay) closeModal();
  });

  historyOverlay.addEventListener("click", event => {
    if (event.target === historyOverlay) closeReceiptsDrawer();
  });

  subscriptionOverlay.addEventListener("click", event => {
    if (event.target === subscriptionOverlay) closeSubscriptionModal();
  });

  receiptViewOverlay.addEventListener("click", event => {
    if (event.target === receiptViewOverlay) closeReceiptViewModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key !== "Escape") return;
    if (joinOverlay.classList.contains("open")) closeJoinModal();
    if (modalOverlay.classList.contains("open")) closeModal();
    if (historyOverlay.classList.contains("open")) closeReceiptsDrawer();
    if (subscriptionOverlay.classList.contains("open")) closeSubscriptionModal();
    if (receiptViewOverlay.classList.contains("open")) closeReceiptViewModal();
  });
}

// Window attachments
window.scrollToBrowse = scrollToBrowse;
window.openJoinModal = openJoinModal;
window.closeJoinModal = closeJoinModal;
window.closeModal = closeModal;
window.openSubscriptionModal = openSubscriptionModal;
window.closeSubscriptionModal = closeSubscriptionModal;
window.openReceiptsDrawer = openReceiptsDrawer;
window.closeReceiptsDrawer = closeReceiptsDrawer;
window.updateSubSummary = updateSubSummary;
window.viewReceipt = viewReceipt;
window.closeReceiptViewModal = closeReceiptViewModal;

function init() {
  loadingRow.style.display = "flex";

  setTimeout(() => {
    loadSavedWorkers();
    populateServices();
    populateModalDropdowns();
    updateStats();
    updateReceiptCountBadge();
    filterWorkers();
    loadingRow.style.display = "none";
  }, 350);

  bindEvents();
}

document.addEventListener("DOMContentLoaded", init);