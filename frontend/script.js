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

function loadSavedWorkers() {
  const saved = JSON.parse(localStorage.getItem("sahyogWorkers") || "[]");
  if (saved.length > 0) {
    workers = [...defaultWorkers, ...saved];
  }
}

let selectedTrade = "";
let selectedWorker = null;

const qInput = document.getElementById("q");
const tradeSelect = document.getElementById("tradeSelect");
const locInput = document.getElementById("locInput");
const priceSelect = document.getElementById("priceSelect");

const chipRow = document.getElementById("chipRow");
const workerGrid = document.getElementById("workerGrid");
const loadingRow = document.getElementById("loadingRow");
const emptyState = document.getElementById("emptyState");

const joinOverlay = document.getElementById("joinOverlay");
const modalOverlay = document.getElementById("modalOverlay");


function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}


function getInitials(name) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(part => part.charAt(0))
    .join("")
    .toUpperCase();
}


function getTrades() {
  return [...new Set(workers.map(worker => worker.trade))].sort();
}


function populateServices() {
  const trades = getTrades();

  tradeSelect.innerHTML = '<option value="">All works</option>';

  trades.forEach(trade => {
    const option = document.createElement("option");
    option.value = trade;
    option.textContent = trade;
    tradeSelect.appendChild(option);
  });

  chipRow.innerHTML = "";

  categories.forEach(trade => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
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
        <div class="avatar">
          ${escapeHtml(getInitials(worker.name))}
        </div>

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

          <div class="worker-trade">
            ${escapeHtml(worker.trade)}
          </div>
        </div>
      </div>

      <div class="worker-meta">
        <span>★ ${Number(worker.rating || 0).toFixed(1)}</span>
        <span>📍 ${escapeHtml(worker.location)}</span>
        <span>${worker.years} yrs experience</span>
      </div>

      <div class="worker-bio">
        ${escapeHtml(worker.bio)}
      </div>

      <div class="worker-foot">
        <div class="rate">
          ₹${worker.rate}
          <span>/visit</span>
        </div>

        <button
          class="connect-btn"
          type="button"
          data-worker-id="${worker.id}"
        >
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

  const filteredWorkers = workers.filter(worker => {
    const matchesQuery =
      !query ||
      worker.name.toLowerCase().includes(query) ||
      worker.trade.toLowerCase().includes(query) ||
      worker.bio.toLowerCase().includes(query);

    const matchesTrade =
      !trade || worker.trade.toLowerCase() === trade.toLowerCase();

    const matchesLocation =
      !location || worker.location.toLowerCase().includes(location);

    let matchesPrice = true;
    if (priceRange === "under400") {
      matchesPrice = worker.rate < 400;
    } else if (priceRange === "400-600") {
      matchesPrice = worker.rate >= 400 && worker.rate <= 600;
    } else if (priceRange === "above600") {
      matchesPrice = worker.rate > 600;
    }

    return matchesQuery && matchesTrade && matchesLocation && matchesPrice;
  });

  renderWorkers(filteredWorkers);

  emptyState.style.display = filteredWorkers.length === 0 ? "block" : "none";
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
    if (input) {
      input.focus();
    }
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


function bindEvents() {
  qInput.addEventListener("input", filterWorkers);
  locInput.addEventListener("input", filterWorkers);

  if (priceSelect) {
    priceSelect.addEventListener("change", filterWorkers);
  }

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
      bio:
        document.getElementById("jBio").value.trim() ||
        "Local household service professional.",
      rating: 5.0
    };

    if (
      !listing.name ||
      !listing.trade ||
      !listing.location ||
      !listing.rate ||
      !listing.phone
    ) {
      return;
    }

    saveWorkerListing(listing);

    document.getElementById("joinConfirm").textContent =
      "Your listing has been saved successfully!";
    document.getElementById("joinConfirm").classList.add("show");
    document.getElementById("joinForm").reset();

    setTimeout(() => {
      closeJoinModal();
      document.getElementById("joinConfirm").classList.remove("show");
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
  }, 450);

  bindEvents();
}

document.addEventListener("DOMContentLoaded", init);