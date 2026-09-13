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


let workers = [];
let selectedTrade = "";
let selectedWorker = null;
let currentLanguage = "en";
let currentFiltered = [];


// --------------------------------------------------
// MULTI-LANGUAGE DICTIONARY
// --------------------------------------------------

const translations = {

  en: {
    brandName: "Sahyog",
    pageTitle: "Sahyog — Trusted Services for Your Home",
    navFind: "Find a pro",
    navHow: "How it works",
    navWorkers: "For workers",
    browseWorkers: "Browse workers",
    browseByServiceTitle: "Browse by service",
    browseByServiceSub: "Choose a service or search for a specific household need.",
    allWorks: "All works",
    all: "All",
    verified: "Verified",
    yearsExperience: "yrs experience",
    visit: "/visit",
    viewConnect: "View & connect",
    call: "Call",
    whatsapp: "WhatsApp",
    orSendRequest: "or send a request",
    sendRequest: "Send request",
    requestSaved: "Request saved.",
    requestSavedFor: "{worker} will receive your request.",
    yourName: "Your name",
    whatNeedDone: "What do you need done?",
    ratePerVisit: "Rate per visit (₹)",
    yearsExperienceLabel: "Years of experience",
    phoneLabel: "Phone",
    shortDescription: "Short description",
    selectTrade: "Select trade",
    selectArea: "Select area",
    searchPlaceholder: "e.g. leaking tap, rewiring, painting",
    areaPlaceholder: "Neighborhood",
    joinNamePlaceholder: "e.g. Ramesh Chandra",
    joinRatePlaceholder: "e.g. 450",
    joinYearsPlaceholder: "e.g. 5",
    joinPhonePlaceholder: "+91...",
    joinBioPlaceholder: "Tell people briefly about your work.",
    reqNamePlaceholder: "Your name",
    reqMsgPlaceholder: "Describe the work you need.",
    submitListing: "Submit listing",
    joinSaving: "Saving...",
    joinSavedSuccess: "Your listing has been saved successfully.",
    requestNameRequired: "Please enter your name.",
    priceAny: "Any Price",
    priceUnder400: "Under ₹400",
    price400600: "₹400 - ₹600",
    priceAbove600: "Above ₹600",
    footerText: "© 2026 SAHYOG. A cooperative platform for household services.",
    loadingWorkers: "Fetching workers from the directory…",

    heroEyebrow: "HOUSEHOLD SERVICES, VERIFIED",

    heroHeading:
      "Every service your home needs, one call away.",

    heroSub:
      "Find trusted plumbers, electricians, carpenters and other skilled workers near you. Compare profiles, check ratings and connect directly.",

    labelNeed: "What do you need?",
    labelServices: "Services",
    labelArea: "Area",
    labelBudget: "Max Budget",
    btnSearch: "Search",

    statWorkers: "active workers",
    statTrades: "trades covered",
    statRating: "average rating",

    findProHead: "Find a Pro",

    findProSub:
      "What kind of professional do you need today? Select a trade or filter by your preferences below.",

    noWorkersFound: "No workers found",

    noWorkersSub:
      "Try a different service, budget, keyword or area.",

    howHead: "How it works",

    howSub:
      "Getting the right person for the job takes only a few steps.",

    step1Title: "Search your trade",

    step1Desc:
      "Search by service, problem or neighborhood to find workers nearby.",

    step2Title: "Check their profile",

    step2Desc:
      "See experience, ratings, service area and pricing before contacting them.",

    step3Title: "Connect directly",

    step3Desc:
      "Call, message or send a service request and discuss the job and timing.",

    joinLabel: "FOR SKILLED WORKERS",

    joinHeading:
      "Are you a plumber, electrician, carpenter or tradesperson?",

    joinSub:
      "List your services on Sahyog and connect with households in your area looking for your skills.",

    joinBtn: "Join as a worker",

    joinModalTitle: "List your services",

    joinModalSub:
      "Add your details so people nearby can find you."
  },


  bn: {
    brandName: "সহযোগ",
    pageTitle: "সহযোগ — আপনার ঘরের জন্য বিশ্বস্ত সেবা কেন্দ্র",
    navFind: "কারিগর খুঁজুন",
    navHow: "কীভাবে কাজ করে",
    navWorkers: "কর্মীদের জন্য",
    browseWorkers: "সব কর্মী দেখুন",
    browseByServiceTitle: "সেবার মাধ্যমে ব্রাউজ করুন",
    browseByServiceSub: "কাজের ধরন বা নির্দিষ্ট প্রয়োজন অনুযায়ী খুঁজুন।",
    allWorks: "সব কাজ",
    all: "সব",
    verified: "যাচাই করেছেন",
    yearsExperience: "বছর অভিজ্ঞতা",
    visit: "/ভিজিট",
    viewConnect: "দেখুন ও যোগাযোগ করুন",
    call: "কল করুন",
    whatsapp: "হোয়াটসঅ্যাপ",
    orSendRequest: "অথবা অনুরোধ পাঠান",
    sendRequest: "অনুরোধ পাঠান",
    requestSaved: "অনুরোধ সংরক্ষিত।",
    requestSavedFor: "{worker} আপনার অনুরোধ পাবেন।",
    yourName: "আপনার নাম",
    whatNeedDone: "আপনি কী কাজ চান?",
    ratePerVisit: "ভিজিটের মূল্য (₹)",
    yearsExperienceLabel: "অভিজ্ঞতার বছর",
    phoneLabel: "ফোন",
    shortDescription: "সংক্ষিপ্ত বর্ণনা",
    selectTrade: "কাজের ধরন বেছে নিন",
    selectArea: "এলাকা বেছে নিন",
    searchPlaceholder: "যেমন: লিক হচ্ছে ট্যাপ, রিওয়ারিং, পেইন্টিং",
    areaPlaceholder: "এলাকা",
    joinNamePlaceholder: "যেমন: রমেশ চন্দ্র",
    joinRatePlaceholder: "যেমন: 450",
    joinYearsPlaceholder: "যেমন: 5",
    joinPhonePlaceholder: "+91...",
    joinBioPlaceholder: "সংক্ষেপে আপনার কাজ সম্পর্কে লিখুন।",
    reqNamePlaceholder: "আপনার নাম",
    reqMsgPlaceholder: "আপনি কী কাজ করতে চান তা লিখুন।",
    submitListing: "তালিকাভুক্ত করুন",
    joinSaving: "সংরক্ষণ করা হচ্ছে...",
    joinSavedSuccess: "আপনার তালিকা সফলভাবে সংরক্ষিত হয়েছে।",
    requestNameRequired: "অনুগ্রহ করে আপনার নাম লিখুন।",
    priceAny: "যেকোনো মূল্য",
    priceUnder400: "₹400 এর কম",
    price400600: "₹400 - ₹600",
    priceAbove600: "₹600 এর বেশি",
    footerText: "© 2026 SAHYOG. ঘরোয়া সেবা জন্য সহযোগিতামূলক প্ল্যাটফর্ম।",
    loadingWorkers: "কর্মী তালিকা আনা হচ্ছে…",

    heroEyebrow:
      "গৃহস্থালি পরিষেবা, বিশ্বস্ত ও পরীক্ষিত",

    heroHeading:
      "ঘরের যেকোনো কাজের জন্য সেরা কারিগর, এক কলেই হাজির।",

    heroSub:
      "আপনার এলাকার নির্ভরযোগ্য পাইপলাইন মিস্ত্রি, বৈদ্যুতিক কর্মী, মিস্ত্রিদের খুঁজুন। রেটিং যাচাই করুন এবং সরাসরি যোগাযোগ করুন।",

    labelNeed: "আপনার কী সেবা দরকার?",
    labelServices: "কাজের ধরন",
    labelArea: "এলাকা",
    labelBudget: "বাজেট সীমা",
    btnSearch: "খুঁজুন",

    statWorkers: "সক্রিয় কর্মী",
    statTrades: "কাজের বিভাগ",
    statRating: "গড় রেটিং",

    findProHead: "কারিগর বাছুন",

    findProSub:
      "আজ আপনার কী পরিষেবা প্রয়োজন? তালিকা থেকে কাজের বিভাগ বেছে নিন।",

    noWorkersFound: "কোনো কারিগর পাওয়া যায়নি",

    noWorkersSub:
      "অন্য কোনো কাজের ধরন, বাজেট বা এলাকা বেছে নিয়ে চেষ্টা করুন।",

    howHead: "সহজ ৩টি ধাপ",

    howSub:
      "আপনার কাজের জন্য সঠিক লোক খুঁজে পাওয়া এখন খুব সহজ।",

    step1Title: "কাজের ধরন খুঁজুন",

    step1Desc:
      "কাজের নাম বা আপনার এলাকা লিখে সহজেই কর্মী খুঁজুন।",

    step2Title: "প্রোফাইল যাচাই করুন",

    step2Desc:
      "অভিজ্ঞতা, রেটিং ও কাজের দর দেখে নিশ্চিন্ত হন।",

    step3Title: "সরাসরি যোগাযোগ করুন",

    step3Desc:
      "সরাসরি ফোন বা হোয়াটসঅ্যাপে কথা বলে কাজের সময় ঠিক করুন।",

    joinLabel: "দক্ষ কর্মীদের জন্য",

    joinHeading:
      "আপনি কি প্লাম্বার, ইলেকট্রিশিয়ান বা দক্ষ মিস্ত্রি?",

    joinSub:
      "সহযোগ-এ আপনার নাম নথিভুক্ত করুন এবং আপনার এলাকার নতুন গ্রাহকদের সাথে যুক্ত হন।",

    joinBtn: "কর্মী হিসেবে যুক্ত হন",

    joinModalTitle:
      "আপনার পরিষেবা তালিকাভুক্ত করুন",

    joinModalSub:
      "আপনার বিশদ তথ্য দিন যাতে গ্রাহকরা আপনাকে সহজে খুঁজে পায়।"
  },


  hi: {
    brandName: "साह्योग",
    pageTitle: "साह्योग — आपके घर के लिए भरोसेमंद सेवाएं",
    navFind: "कारीगर खोजें",
    navHow: "यह कैसे काम करता है",
    navWorkers: "कारीगरों के लिए",
    browseWorkers: "सभी कारीगर देखें",
    browseByServiceTitle: "सेवा के अनुसार देखें",
    browseByServiceSub: "सेवा प्रकार या किसी विशेष जरूरत के आधार पर खोजें।",
    allWorks: "सभी काम",
    all: "सब",
    verified: "सत्यापित",
    yearsExperience: "वर्ष अनुभव",
    visit: "/भेंट",
    viewConnect: "देखें और संपर्क करें",
    call: "कॉल",
    whatsapp: "व्हाट्सऐप",
    orSendRequest: "या अनुरोध भेजें",
    sendRequest: "अनुरोध भेजें",
    requestSaved: "अनुरोध सहेजा गया।",
    requestSavedFor: "{worker} को आपका अनुरोध मिल जाएगा।",
    yourName: "आपका नाम",
    whatNeedDone: "आपको क्या काम करवाना है?",
    ratePerVisit: "प्रति विजिट शुल्क (₹)",
    yearsExperienceLabel: "अनुभव के वर्ष",
    phoneLabel: "फोन",
    shortDescription: "संक्षिप्त विवरण",
    selectTrade: "सेवा चुनें",
    selectArea: "इलाका चुनें",
    searchPlaceholder: "जैसे: टूटता हुआ नल, वायरिंग, पेंटिंग",
    areaPlaceholder: "इलाका",
    joinNamePlaceholder: "जैसे: रमेश चंद्र",
    joinRatePlaceholder: "जैसे: 450",
    joinYearsPlaceholder: "जैसे: 5",
    joinPhonePlaceholder: "+91...",
    joinBioPlaceholder: "संक्षेप में अपनी सेवा के बारे में बताएं।",
    reqNamePlaceholder: "आपका नाम",
    reqMsgPlaceholder: "आपको क्या काम चाहिए, लिखें।",
    submitListing: "लिस्टिंग जमा करें",
    joinSaving: "सहेजा जा रहा है...",
    joinSavedSuccess: "आपकी लिस्टिंग सफलतापूर्वक सहेज ली गई।",
    requestNameRequired: "कृपया अपना नाम लिखें।",
    priceAny: "कोई भी कीमत",
    priceUnder400: "₹400 से कम",
    price400600: "₹400 - ₹600",
    priceAbove600: "₹600 से अधिक",
    footerText: "© 2026 SAHYOG. घरेलू सेवाओं के लिए सहयोगात्मक प्लेटफ़ॉर्म।",
    loadingWorkers: "कारीगरों की सूची लोड हो रही है…",

    heroEyebrow:
      "घरेलू सेवाएं, सत्यापित एवं विश्वसनीय",

    heroHeading:
      "घर की हर ज़रूरत के लिए कुशल कारीगर, बस एक कॉल की दूरी पर।",

    heroSub:
      "अपने नज़दीकी प्लंबर, इलेक्ट्रीशियन और बढ़ई खोजें। प्रोफाइल और रेटिंग देखकर सीधे संपर्क करें।",

    labelNeed:
      "आपको क्या काम करवाना है?",

    labelServices: "सेवाएं",
    labelArea: "इलाका",
    labelBudget: "अधिकतम बजट",
    btnSearch: "खोजें",

    statWorkers: "सक्रिय कारीगर",
    statTrades: "सेवा श्रेणियां",
    statRating: "औसत रेटिंग",

    findProHead: "कारीगर चुनें",

    findProSub:
      "आज आपको किस काम के लिए कारीगर चाहिए? नीचे अपनी पसंद चुनें।",

    noWorkersFound:
      "कोई कारीगर नहीं मिला",

    noWorkersSub:
      "कृपया अपनी सेवा, बजट या इलाके का चयन बदल कर प्रयास करें।",

    howHead:
      "यह कैसे काम करता है",

    howSub:
      "सही कारीगर को बुलाना अब बेहद आसान है।",

    step1Title:
      "सेवा खोजें",

    step1Desc:
      "अपनी समस्या या इलाके के अनुसार सही कारीगर चुनें।",

    step2Title:
      "प्रोफ़ाइल देखें",

    step2Desc:
      "अनुभव, रेटिंग और शुल्क देखकर संतुष्ट हों।",

    step3Title:
      "सीधे संपर्क करें",

    step3Desc:
      "फोन या व्हाट्सएप पर सीधे बात करके समय तय करें।",

    joinLabel:
      "कारीगरों के लिए",

    joinHeading:
      "क्या आप प्लंबर, इलेक्ट्रीशियन या कुशल कारीगर हैं?",

    joinSub:
      "सहयोग पर अपनी सेवाएं दर्ज करें और अपने क्षेत्र के परिवारों से जुड़ें।",

    joinBtn:
      "कारीगर के रूप में जुड़ें",

    joinModalTitle:
      "अपनी सेवाएं जोड़ें",

    joinModalSub:
      "अपनी जानकारी भरें ताकि ग्राहक आप तक आसानी से पहुंच सकें।"
  }

};

const workerNameTranslations = {
  bn: {
    "Arun Kumar": "অরুণ কুমার",
    "Imran Ali": "ইমরান আলী",
    "Sourav Das": "সৌরভ দাস",
    "Rakesh Mondal": "রাকেশ মণ্ডল",
    "Nandita Sen": "নন্দিতা সেন",
    "Sanjay Barman": "সঞ্জয় বর্মন",
    "Satyam Haz": "সত্যম হাজ",
    "Ramesh Chandra": "রমেশ চন্দ্র",
    "Mita Roy": "মিতা রায়",
    "Priya Dutta": "প্রিয়া দত্ত",
    "Debjit Ghosh": "দেবজিৎ ঘোষ",
    "NIL": "নিল"
  },
  hi: {
    "Arun Kumar": "अरुण कुमार",
    "Imran Ali": "इमरान अली",
    "Sourav Das": "सौरभ दास",
    "Rakesh Mondal": "राकेश मंडल",
    "Nandita Sen": "नंदिता सेन",
    "Sanjay Barman": "संजय बर्मन",
    "Satyam Haz": "सत्यम हाज़",
    "Ramesh Chandra": "रमेश चंद्र",
    "Mita Roy": "मिता राय",
    "Priya Dutta": "प्रिया दत्ता",
    "Debjit Ghosh": "देबजीत घोष",
    "NIL": "निल"
  }
};


// --------------------------------------------------
// DOM ELEMENTS
// --------------------------------------------------

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


// --------------------------------------------------
// LOAD WORKERS FROM PHP
// --------------------------------------------------

async function loadWorkersFromPHP() {

  try {

    const response = await fetch("../backend/get_workers.php", {
      method: "GET",
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error("Could not load workers from PHP.");
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error("Invalid worker data.");
    }

    /*
      Prefer the PHP-backed data file as the
      single source of truth for the current
      worker directory.
    */

    workers = Array.isArray(data) && data.length > 0
      ? data
      : [...defaultWorkers];

    console.log("Workers loaded from PHP:", workers);

  } catch (error) {

    console.error("PHP worker loading failed:", error);

    /*
      If PHP is not running, the website
      will still show default workers.
    */

    workers = [...defaultWorkers];
  }
}


// --------------------------------------------------
// ESCAPE HTML
// --------------------------------------------------

function escapeHtml(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


// --------------------------------------------------
// GET INITIALS
// --------------------------------------------------

function getInitials(name) {

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part.charAt(0))
    .join("")
    .toUpperCase();
}


function normalizeText(value) {

  return String(value ?? "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

}


// --------------------------------------------------
// GET TRADES
// --------------------------------------------------

function getTrades() {

  return [
    ...new Set(
      workers.map(worker => worker.trade)
    )
  ].sort();
}


// --------------------------------------------------
// POPULATE SERVICES
// --------------------------------------------------

function populateServices() {

  const trades = getTrades();

  tradeSelect.innerHTML =
    '<option value="">All works</option>';

  trades.forEach(trade => {

    const option =
      document.createElement("option");

    option.value = trade;
    option.textContent = trade;

    tradeSelect.appendChild(option);
  });


  chipRow.innerHTML = "";


  // ALL CHIP

  const allChip =
    document.createElement("button");

  allChip.type = "button";

  allChip.className =
    `chip ${selectedTrade === "" ? "active" : ""}`;

  allChip.dataset.trade = "";

  allChip.textContent = "All";


  allChip.addEventListener("click", () => {

    selectedTrade = "";

    tradeSelect.value = "";

    updateActiveChip();

    filterWorkers();
  });


  chipRow.appendChild(allChip);


  // CATEGORY CHIPS

  categories.forEach(trade => {

    const chip =
      document.createElement("button");

    chip.type = "button";

    chip.className =
      `chip ${selectedTrade === trade ? "active" : ""}`;

    chip.dataset.trade = trade;

    chip.textContent = trade;


    chip.addEventListener("click", () => {

      selectedTrade =
        selectedTrade === trade
          ? ""
          : trade;

      tradeSelect.value = selectedTrade;

      updateActiveChip();

      filterWorkers();


      const browse =
        document.getElementById("browse");

      if (browse) {

        browse.scrollIntoView({
          behavior: "smooth"
        });

      }

    });


    chipRow.appendChild(chip);

  });

}


// --------------------------------------------------
// POPULATE JOIN MODAL DROPDOWNS
// --------------------------------------------------

function populateModalDropdowns() {

  const modalTradeSelect =
    document.getElementById("jTradeLabel");

  const modalLocSelect =
    document.getElementById("jLocation");


  // TRADE

  if (modalTradeSelect) {

    modalTradeSelect.innerHTML =
      '<option value="" disabled selected>Select trade</option>';


    categories.forEach(trade => {

      const option =
        document.createElement("option");

      option.value = trade;

      option.textContent = trade;

      modalTradeSelect.appendChild(option);

    });

  }


  // LOCATION

  if (modalLocSelect) {

    const locations = [
      ...new Set(
        workers.map(worker => worker.location)
      )
    ].sort();


    modalLocSelect.innerHTML =
      '<option value="" disabled selected>Select area</option>';


    locations.forEach(location => {

      const option =
        document.createElement("option");

      option.value = location;

      option.textContent = location;

      modalLocSelect.appendChild(option);

    });

  }

}


// --------------------------------------------------
// UPDATE ACTIVE CHIP
// --------------------------------------------------

function updateActiveChip() {

  document
    .querySelectorAll(".chip")
    .forEach(chip => {

      chip.classList.toggle(
        "active",
        chip.dataset.trade === selectedTrade
      );

    });

}


// --------------------------------------------------
// RENDER WORKERS
// --------------------------------------------------

function translateWorkerName(worker) {

  const translatedName =
    workerNameTranslations[currentLanguage]?.[worker.name] || worker.name;

  return {
    ...worker,
    name: translatedName
  };
}


function renderWorkers(list) {

  const dict = translations[currentLanguage] || translations.en;

  workerGrid.innerHTML = "";


  list.map(translateWorkerName).forEach(worker => {

    const card =
      document.createElement("article");

    card.className = "worker-card";


    card.innerHTML = `

      <div class="worker-top">

        <div class="avatar">
          ${escapeHtml(getInitials(worker.name))}
        </div>

        <div>

          <div class="worker-name-row">

            <h3>
              ${escapeHtml(worker.name)}
            </h3>

            <span class="verified">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >

                <path
                  d="M12 3l2.1 1.7 2.7-.2.9 2.5 2.3 1.4-.8 2.6.8 2.6-2.3 1.4-.9 2.5-2.7-.2L12 21l-2.1-1.7-2.7.2-.9-2.5L4 15.6l.8-2.6L4 10.4l2.3-1.4.9-2.5 2.7.2L12 3z">
                </path>

                <path d="M9 12l2 2 4-4"></path>

              </svg>

              ${escapeHtml(dict.verified || "Verified")}

            </span>

          </div>

          <div class="worker-trade">
            ${escapeHtml(worker.trade)}
          </div>

        </div>

      </div>


      <div class="worker-meta">

        <span>
          ★ ${Number(worker.rating || 0).toFixed(1)}
        </span>

        <span>
          📍 ${escapeHtml(worker.location)}
        </span>

        <span>
          ${Number(worker.years || 0)} ${escapeHtml(dict.yearsExperience || "yrs experience")}
        </span>

      </div>


      <div class="worker-bio">
        ${escapeHtml(worker.bio)}
      </div>


      <div class="worker-foot">

        <div class="rate">
          ₹${Number(worker.rate || 0)}
          <span>${escapeHtml(dict.visit || "/visit")}</span>
        </div>

        <button
          class="connect-btn"
          type="button"
          data-worker-id="${worker.id}"
        >
          ${escapeHtml(dict.viewConnect || "View & connect")}
        </button>

      </div>

    `;


    workerGrid.appendChild(card);

  });


  // CONNECT BUTTONS

  document
    .querySelectorAll(".connect-btn")
    .forEach(button => {

      button.addEventListener("click", () => {

        const workerId =
          Number(button.dataset.workerId);


        const worker =
          workers.find(
            item => Number(item.id) === workerId
          );


        openWorkerModal(worker);

      });

    });

}


// --------------------------------------------------
// FILTER WORKERS
// --------------------------------------------------

function filterWorkers() {

  const query =
    qInput ? normalizeText(qInput.value) : "";

  const location =
    locInput ? normalizeText(locInput.value) : "";

  const trade =
    tradeSelect
      ? normalizeText(tradeSelect.value || selectedTrade)
      : normalizeText(selectedTrade);

  const priceRange =
    priceSelect
      ? priceSelect.value
      : "all";


  const filtered =
    workers.filter(worker => {

      const workerName =
        normalizeText(worker.name || "");

      const workerTrade =
        normalizeText(worker.trade || "");

      const workerBio =
        normalizeText(worker.bio || "");

      const workerLocation =
        normalizeText(worker.location || "");


      // SEARCH

      const matchesQuery =
        !query ||
        workerName.includes(query) ||
        workerTrade.includes(query) ||
        workerBio.includes(query);


      // TRADE

      const matchesTrade =
        !trade ||
        workerTrade === trade;


      // LOCATION

      const matchesLocation =
        !location ||
        workerLocation.includes(location);


      // PRICE

      let matchesPrice = true;


      if (priceRange === "under400") {

        matchesPrice =
          Number(worker.rate) < 400;

      }

      else if (priceRange === "400-600") {

        matchesPrice =
          Number(worker.rate) >= 400 &&
          Number(worker.rate) <= 600;

      }

      else if (priceRange === "above600") {

        matchesPrice =
          Number(worker.rate) > 600;

      }


      return (
        matchesQuery &&
        matchesTrade &&
        matchesLocation &&
        matchesPrice
      );

    });


  currentFiltered = filtered;

  renderWorkers(filtered);


  emptyState.style.display =
    filtered.length === 0
      ? "block"
      : "none";

}


// --------------------------------------------------
// UPDATE STATISTICS
// --------------------------------------------------

function updateStats() {

  const statWorkers = document.getElementById("statWorkers");
  const statTrades = document.getElementById("statTrades");

  if (statWorkers) {
    statWorkers.textContent = workers.length;
  }

  if (statTrades) {
    statTrades.textContent = getTrades().length;
  }

}


// --------------------------------------------------
// OPEN JOIN MODAL
// --------------------------------------------------

function openJoinModal() {

  joinOverlay.classList.add("open");

  document.body.style.overflow = "hidden";


  setTimeout(() => {

    const input =
      document.getElementById("jName");

    if (input) {
      input.focus();
    }

  }, 100);

}


// --------------------------------------------------
// CLOSE JOIN MODAL
// --------------------------------------------------

function closeJoinModal() {

  joinOverlay.classList.remove("open");

  document.body.style.overflow = "";

}


// --------------------------------------------------
// OPEN WORKER MODAL
// --------------------------------------------------

function openWorkerModal(worker) {

  if (!worker) return;


  selectedWorker = worker;

  const localizedWorker = translateWorkerName(worker);


  document.getElementById("modalName")
    .textContent = localizedWorker.name;


  document.getElementById("modalTrade")
    .textContent =
      `${worker.trade} · ${worker.location} · ₹${worker.rate}/visit · ${Number(worker.rating || 0).toFixed(1)}★`;


  const phone =
    String(worker.phone || "")
      .replace(/\s+/g, "");


  document.getElementById("callLink")
    .href = `tel:${phone}`;


  document.getElementById("waLink")
    .href =
      `https://wa.me/${phone.replace("+", "")}?text=${encodeURIComponent(
        `Hi ${worker.name}, I found your listing on Sahyog and would like to know about your ${String(worker.trade).toLowerCase()} services.`
      )}`;


  document.getElementById("confirmNote")
    .classList.remove("show");


  document.getElementById("requestForm")
    .reset();


  modalOverlay.classList.add("open");

  document.body.style.overflow = "hidden";

}


// --------------------------------------------------
// CLOSE WORKER MODAL
// --------------------------------------------------

function closeModal() {

  modalOverlay.classList.remove("open");

  document.body.style.overflow = "";

  selectedWorker = null;

}


// --------------------------------------------------
// SAVE WORKER THROUGH PHP
// --------------------------------------------------

async function saveWorkerListing(worker) {

  try {

    const response =
      await fetch("../backend/save_worker.php", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(worker)

      });


    if (!response.ok) {

      throw new Error(
        `Server returned ${response.status}`
      );

    }


    const result =
      await response.json();


    if (!result.success) {

      throw new Error(
        result.message || "Worker could not be saved."
      );

    }


    console.log(
      "Worker saved successfully:",
      result
    );


    // Reload workers from PHP

    await loadWorkersFromPHP();


    // Update website

    updateStats();

    populateServices();

    populateModalDropdowns();

    filterWorkers();


    return true;

  }


  catch (error) {

    console.error(
      "Worker save error:",
      error
    );


    alert(
      "Worker could not be saved. Make sure PHP server is running."
    );


    return false;

  }

}


// --------------------------------------------------
// SAVE REQUEST THROUGH PHP
// --------------------------------------------------

async function saveRequest(request) {

  try {

    const response =
      await fetch("../backend/save_request.php", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(request)

      });


    if (!response.ok) {

      throw new Error(
        `Server returned ${response.status}`
      );

    }


    const result =
      await response.json();


    if (!result.success) {

      throw new Error(
        result.message || "Request could not be saved."
      );

    }


    console.log(
      "Request saved successfully:",
      result
    );


    return true;

  }


  catch (error) {

    console.error(
      "Request save error:",
      error
    );


    alert(
      "Request could not be saved. Make sure PHP server is running."
    );


    return false;

  }

}


// --------------------------------------------------
// LANGUAGE
// --------------------------------------------------

function applyLanguage(lang) {

  currentLanguage = lang;

  const dict =
    translations[lang] || translations.en;


  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.getAttribute("data-i18n");


      if (dict[key]) {

        element.textContent =
          dict[key];

      }

    });


  const brand = document.querySelector(".logo span");
  if (brand && dict.brandName) {
    brand.textContent = dict.brandName;
  }

  if (dict.pageTitle) {
    document.title = dict.pageTitle;
  }


  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach(element => {

      const key =
        element.getAttribute("data-i18n-placeholder");

      if (dict[key]) {

        element.placeholder =
          dict[key];

      }

    });


  const allOption =
    tradeSelect &&
    tradeSelect.querySelector('option[value=""]');

  if (allOption) {
    allOption.textContent =
      dict.allWorks || "All works";
  }


  if (currentFiltered.length > 0) {
    renderWorkers(currentFiltered);

  } else {
    renderWorkers(workers);
  }

}


// --------------------------------------------------
// BIND EVENTS
// --------------------------------------------------

function bindEvents() {


  // SEARCH INPUT

  if (qInput) {

    qInput.addEventListener(
      "input",
      filterWorkers
    );

  }


  // LOCATION INPUT

  if (locInput) {

    locInput.addEventListener(
      "input",
      filterWorkers
    );

  }


  // PRICE

  if (priceSelect) {

    priceSelect.addEventListener(
      "change",
      filterWorkers
    );

  }


  // LANGUAGE

  if (langSwitch) {

    langSwitch.addEventListener(
      "change",
      event => {

        applyLanguage(
          event.target.value
        );

      }
    );

  }


  // SEARCH BUTTON

  const searchBtn =
    document.getElementById("searchBtn");


  if (searchBtn) {

    searchBtn.addEventListener(
      "click",
      () => {

        filterWorkers();


        const browse =
          document.getElementById("browse");


        if (browse) {

          browse.scrollIntoView({
            behavior: "smooth"
          });

        }

      }
    );

  }


  // TRADE SELECT

  if (tradeSelect) {

    tradeSelect.addEventListener(
      "change",
      () => {

        selectedTrade =
          tradeSelect.value;


        updateActiveChip();

        filterWorkers();

      }
    );

  }


  // ------------------------------------------------
  // JOIN WORKER FORM
  // ------------------------------------------------

  const joinForm =
    document.getElementById("joinForm");


  if (joinForm) {

    joinForm.addEventListener(
      "submit",
      async event => {

        event.preventDefault();


        const listing = {

          id: Date.now(),

          name:
            document
              .getElementById("jName")
              .value
              .trim(),

          trade:
            document
              .getElementById("jTradeLabel")
              .value
              .trim(),

          location:
            document
              .getElementById("jLocation")
              .value
              .trim(),

          rate:
            Number(
              document
                .getElementById("jRate")
                .value
            ),

          years:
            Number(
              document
                .getElementById("jYears")
                .value
            ) || 0,

          phone:
            document
              .getElementById("jPhone")
              .value
              .trim(),

          bio:
            document
              .getElementById("jBio")
              .value
              .trim() ||
            "Local household service professional.",

          rating: 5.0

        };


        // VALIDATION

        if (
          !listing.name ||
          !listing.trade ||
          !listing.location ||
          !listing.rate ||
          !listing.phone
        ) {

          alert(
            "Please fill all required worker details."
          );

          return;

        }


        // Disable button while saving

        const submitButton =
          joinForm.querySelector(
            'button[type="submit"]'
          );


        if (submitButton) {

          submitButton.disabled = true;

          submitButton.textContent =
            "Saving...";

        }


        // SEND DATA TO PHP

        const saved =
          await saveWorkerListing(listing);


        // Enable button again

        if (submitButton) {

          submitButton.disabled = false;

          submitButton.textContent =
            "Join as a worker";

        }


        if (!saved) {

          return;

        }


        // SUCCESS MESSAGE

        const note =
          document.getElementById(
            "joinConfirm"
          );


        if (note) {

          note.textContent =
            "Your listing has been saved successfully.";

          note.classList.add("show");

        }


        // RESET FORM

        joinForm.reset();


        // CLOSE MODAL

        setTimeout(() => {

          closeJoinModal();


          if (note) {

            note.classList.remove("show");

          }

        }, 1800);

      }
    );

  }


  // ------------------------------------------------
  // CUSTOMER REQUEST FORM
  // ------------------------------------------------

  const requestForm =
    document.getElementById("requestForm");


  if (requestForm) {

    requestForm.addEventListener(
      "submit",
      async event => {

        event.preventDefault();


        if (!selectedWorker) {

          return;

        }


        const request = {

          workerId:
            selectedWorker.id,

          worker:
            selectedWorker.name,

          customer:
            document
              .getElementById("reqName")
              .value
              .trim(),

          message:
            document
              .getElementById("reqMsg")
              .value
              .trim(),

          createdAt:
            new Date().toISOString()

        };


        if (!request.customer) {

          alert(
            "Please enter your name."
          );

          return;

        }


        const saved =
          await saveRequest(request);


        if (!saved) {

          return;

        }


        const confirmNote =
          document.getElementById(
            "confirmNote"
          );


        if (confirmNote) {

          confirmNote.textContent =
            `Request saved. ${selectedWorker.name} will receive your request.`;

          confirmNote.classList.add("show");

        }


        requestForm.reset();

      }
    );

  }


  // ------------------------------------------------
  // JOIN MODAL CLICK
  // ------------------------------------------------

  if (joinOverlay) {

    joinOverlay.addEventListener(
      "click",
      event => {

        if (
          event.target === joinOverlay
        ) {

          closeJoinModal();

        }

      }
    );

  }


  // ------------------------------------------------
  // WORKER MODAL CLICK
  // ------------------------------------------------

  if (modalOverlay) {

    modalOverlay.addEventListener(
      "click",
      event => {

        if (
          event.target === modalOverlay
        ) {

          closeModal();

        }

      }
    );

  }


  // ------------------------------------------------
  // ESCAPE KEY
  // ------------------------------------------------

  document.addEventListener(
    "keydown",
    event => {

      if (event.key !== "Escape") {

        return;

      }


      if (
        joinOverlay &&
        joinOverlay.classList.contains("open")
      ) {

        closeJoinModal();

      }


      if (
        modalOverlay &&
        modalOverlay.classList.contains("open")
      ) {

        closeModal();

      }

    }
  );

}


// --------------------------------------------------
// MAKE FUNCTIONS AVAILABLE TO HTML
// --------------------------------------------------

window.openJoinModal =
  openJoinModal;

window.closeJoinModal =
  closeJoinModal;

window.closeModal =
  closeModal;


// --------------------------------------------------
// INITIALIZE WEBSITE
// --------------------------------------------------

async function init() {

  loadingRow.style.display =
    "flex";


  /*
    Load workers from PHP first.
  */

  await loadWorkersFromPHP();


  /*
    Build the UI after workers
    have been loaded.
  */

  populateServices();

  populateModalDropdowns();

  updateStats();

  filterWorkers();


  loadingRow.style.display =
    "none";


  /*
    Activate all buttons,
    forms and search events.
  */

  bindEvents();

}


// --------------------------------------------------
// START APPLICATION
// --------------------------------------------------

document.addEventListener(
  "DOMContentLoaded",
  init
);