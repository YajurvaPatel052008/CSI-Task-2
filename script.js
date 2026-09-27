// Campus Lost & Found - CSI AITR Student Chapter

// Demo data
var demoItems = [
  { id: 1, name: "Student ID Card", category: "ID Cards", status: "Lost", location: "Central Library", date: "2026-09-20", description: "Blue ID card holder with a student ID of CSE 2nd year. Lost somewhere near the reading hall.", contactName: "Rahul Sharma", contactEmail: "rahul.sharma@student.aitr.ac.in", contactPhone: "+91 98260 11223" },
  { id: 2, name: "Wallet", category: "Accessories", status: "Found", location: "Cafeteria", date: "2026-09-21", description: "Brown leather wallet found on a table near the juice counter. Contains some cards and cash.", contactName: "Priya Verma", contactEmail: "priya.verma@student.aitr.ac.in", contactPhone: "+91 94250 33445" },
  { id: 3, name: "Laptop Charger", category: "Electronics", status: "Lost", location: "Academic Block", date: "2026-09-21", description: "Dell 65W charger with a round pin, left behind in room 204 after the DBMS lecture.", contactName: "Aman Khan", contactEmail: "aman.khan@student.aitr.ac.in", contactPhone: "+91 90090 55667" },
  { id: 4, name: "Notebook", category: "Books", status: "Found", location: "Seminar Hall", date: "2026-09-22", description: "Single-line register notebook with DBMS notes, name written on the cover as 'Sneha'.", contactName: "Karan Patel", contactEmail: "karan.patel@student.aitr.ac.in", contactPhone: "+91 97550 77889" },
  { id: 5, name: "Scientific Calculator", category: "Electronics", status: "Lost", location: "Lab Block", date: "2026-09-22", description: "Casio fx-991EX calculator with a sticker on the back. Lost during the mechanics lab.", contactName: "Divya Yadav", contactEmail: "divya.yadav@student.aitr.ac.in", contactPhone: "+91 88390 22114" },
  { id: 6, name: "Earphones", category: "Electronics", status: "Found", location: "Sports Ground", date: "2026-09-23", description: "White wired earphones found near the cricket practice nets.", contactName: "Mohit Jain", contactEmail: "mohit.jain@student.aitr.ac.in", contactPhone: "+91 79990 43326" },
  { id: 7, name: "USB Drive", category: "Electronics", status: "Lost", location: "Lab Block", date: "2026-09-23", description: "SanDisk 32GB black pen drive with lab assignments. Last seen in the computer lab 3.", contactName: "Anjali Gupta", contactEmail: "anjali.gupta@student.aitr.ac.in", contactPhone: "+91 96690 65547" },
  { id: 8, name: "Water Bottle", category: "Other", status: "Found", location: "Auditorium", date: "2026-09-24", description: "Steel water bottle with a university fest sticker, found under a seat after the seminar.", contactName: "Rohit Mehta", contactEmail: "rohit.mehta@student.aitr.ac.in", contactPhone: "+91 90890 87768" },
  { id: 9, name: "Watch", category: "Accessories", status: "Lost", location: "Main Gate", date: "2026-09-24", description: "Black analog Fastrack watch with a leather strap, lost while getting off the college bus.", contactName: "Sneha Rathi", contactEmail: "sneha.rathi@student.aitr.ac.in", contactPhone: "+91 91110 19907" },
  { id: 10, name: "Backpack", category: "Accessories", status: "Found", location: "Parking Area", date: "2026-09-25", description: "Grey Wildcraft backpack found hanging on a bike handle in the two-wheeler parking.", contactName: "Vikas Sahu", contactEmail: "vikas.sahu@student.aitr.ac.in", contactPhone: "+91 95750 31128" },
  { id: 11, name: "Bike Keys", category: "Other", status: "Lost", location: "Parking Area", date: "2026-09-25", description: "Honda bike key with a blue keychain, lost somewhere between the academic block and parking.", contactName: "Nisha Soni", contactEmail: "nisha.soni@student.aitr.ac.in", contactPhone: "+91 62650 53349" },
  { id: 12, name: "Textbook - Engineering Maths", category: "Books", status: "Found", location: "Central Library", date: "2026-09-25", description: "B.S. Grewal Engineering Mathematics book found on a library table, no name written inside.", contactName: "Aayush Dubey", contactEmail: "aayush.dubey@student.aitr.ac.in", contactPhone: "+91 78690 75570" },
  { id: 13, name: "Headphones", category: "Electronics", status: "Lost", location: "Auditorium", date: "2026-09-26", description: "Black boAt over-ear headphones left on a chair during the CSI orientation event.", contactName: "Tanvi Agrawal", contactEmail: "tanvi.agrawal@student.aitr.ac.in", contactPhone: "+91 90770 97791" },
  { id: 14, name: "Pen Drive", category: "Electronics", status: "Found", location: "Academic Block", date: "2026-09-26", description: "HP 16GB pen drive found near the lift on the second floor of the academic block.", contactName: "Shubham Raj", contactEmail: "shubham.raj@student.aitr.ac.in", contactPhone: "+91 88150 39912" },
  { id: 15, name: "College ID", category: "ID Cards", status: "Found", location: "Cafeteria", date: "2026-09-26", description: "AITR college ID of a mechanical branch student, handed over at the CSI help desk in the cafeteria.", contactName: "Kunal Mishra", contactEmail: "kunal.mishra@student.aitr.ac.in", contactPhone: "+91 93030 61133" }
];

var STORAGE_KEY = "csi_aitr_lost_found_reports";
var allItems = [];
var myReports = [];
var browseFilters = { search: "", category: "All", status: "All", sort: "newest" };

// Local storage
function loadMyReports() {
  var stored = localStorage.getItem(STORAGE_KEY);
  myReports = stored ? JSON.parse(stored) : [];
}

function saveMyReports() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(myReports));
}

function getAllItems() {
  return demoItems.concat(myReports);
}

// Navigation
function showPage(pageName) {
  var pages = document.querySelectorAll(".page");
  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.add("hidden");
  }
  var target = document.getElementById("page-" + pageName);
  if (target) target.classList.remove("hidden");

  var links = document.querySelectorAll(".nav-link");
  for (var j = 0; j < links.length; j++) {
    links[j].classList.toggle("active", links[j].getAttribute("data-nav") === pageName);
  }

  document.getElementById("mainNav").classList.remove("open");
  window.scrollTo(0, 0);
}

document.addEventListener("click", function (e) {
  var navEl = e.target.closest("[data-nav]");
  if (navEl) {
    e.preventDefault();
    showPage(navEl.getAttribute("data-nav"));
  }
});

document.getElementById("hamburgerBtn").addEventListener("click", function () {
  document.getElementById("mainNav").classList.toggle("open");
});

// Rendering
function formatDate(iso) {
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var parts = iso.split("-");
  if (parts.length !== 3) return iso;
  return parseInt(parts[2], 10) + " " + months[parseInt(parts[1], 10) - 1] + " " + parts[0];
}

function itemCardHTML(item, withDelete) {
  var desc = item.description.length > 80 ? item.description.slice(0, 80) + "..." : item.description;
  var deleteBtn = withDelete ? '<button class="btn delete-btn" data-id="' + item.id + '">Delete Report</button>' : '';
  return '' +
    '<div class="item-card">' +
      '<h3>' + item.name + '</h3>' +
      '<div class="item-tags">' +
        '<span class="tag tag-category">' + item.category + '</span>' +
        '<span class="tag tag-' + item.status.toLowerCase() + '">' + item.status + '</span>' +
      '</div>' +
      '<p class="item-meta">📍 ' + item.location + '</p>' +
      '<p class="item-meta">📅 ' + formatDate(item.date) + '</p>' +
      '<p class="item-desc">' + desc + '</p>' +
      '<button class="btn btn-primary view-btn" data-id="' + item.id + '">View Details</button>' +
      deleteBtn +
    '</div>';
}

function renderBrowseItems() {
  var grid = document.getElementById("itemsGrid");
  var empty = document.getElementById("browseEmpty");

  var list = getAllItems().filter(function (item) {
    var matchSearch = item.name.toLowerCase().indexOf(browseFilters.search.toLowerCase()) !== -1 ||
      item.description.toLowerCase().indexOf(browseFilters.search.toLowerCase()) !== -1;
    var matchCategory = browseFilters.category === "All" || item.category === browseFilters.category;
    var matchStatus = browseFilters.status === "All" || item.status === browseFilters.status;
    return matchSearch && matchCategory && matchStatus;
  });

  list.sort(function (a, b) {
    if (browseFilters.sort === "newest") return b.date.localeCompare(a.date);
    return a.date.localeCompare(b.date);
  });

  grid.innerHTML = list.map(function (item) { return itemCardHTML(item, false); }).join("");
  empty.classList.toggle("hidden", list.length > 0);
}

function renderMyReports() {
  var grid = document.getElementById("myReportsGrid");
  var empty = document.getElementById("myReportsEmpty");

  grid.innerHTML = myReports.map(function (item) { return itemCardHTML(item, true); }).join("");
  empty.classList.toggle("hidden", myReports.length > 0);
}

// Item details modal
function openItemModal(id) {
  var item = null;
  var items = getAllItems();
  for (var i = 0; i < items.length; i++) {
    if (items[i].id === id) { item = items[i]; break; }
  }
  if (!item) return;

  document.getElementById("modalBody").innerHTML =
    '<h2>' + item.name + '</h2>' +
    '<div class="item-tags" style="margin-bottom:14px;">' +
      '<span class="tag tag-category">' + item.category + '</span>' +
      '<span class="tag tag-' + item.status.toLowerCase() + '">' + item.status + '</span>' +
    '</div>' +
    '<div class="detail-row"><span class="detail-label">Status</span><span>' + item.status + '</span></div>' +
    '<div class="detail-row"><span class="detail-label">Date</span><span>' + formatDate(item.date) + '</span></div>' +
    '<div class="detail-row"><span class="detail-label">Location</span><span>' + item.location + '</span></div>' +
    '<div class="detail-row"><span class="detail-label">Description</span><span>' + item.description + '</span></div>' +
    '<div class="detail-row"><span class="detail-label">Reported by</span><span>' + item.contactName + '</span></div>' +
    '<button class="btn claim-btn" id="claimBtn">Claim / Contact</button>' +
    '<div id="claimInfo"></div>';

  document.getElementById("claimBtn").addEventListener("click", function () {
    document.getElementById("claimInfo").innerHTML =
      '<div class="claim-box">' +
        '<strong>Contact the reporter:</strong><br/>' +
        'Name: ' + item.contactName + '<br/>' +
        'Email: ' + item.contactEmail + '<br/>' +
        'Phone: ' + item.contactPhone + '<br/><br/>' +
        'This item is listed as <strong>' + item.status + '</strong> at ' + item.location +
        ' on ' + item.date + '. Please describe the item in detail before claiming it.';
    this.remove();
  });

  document.getElementById("itemModal").classList.remove("hidden");
}

function closeItemModal() {
  document.getElementById("itemModal").classList.add("hidden");
}

document.getElementById("modalCloseBtn").addEventListener("click", closeItemModal);
document.getElementById("itemModal").addEventListener("click", function (e) {
  if (e.target === this) closeItemModal();
});

document.addEventListener("click", function (e) {
  var btn = e.target.closest(".view-btn");
  if (btn) openItemModal(parseInt(btn.getAttribute("data-id"), 10));
});

// Search, filters and sorting
document.getElementById("categoryFilter").addEventListener("change", function () {
  browseFilters.category = this.value;
  renderBrowseItems();
});

document.getElementById("statusFilter").addEventListener("change", function () {
  browseFilters.status = this.value;
  renderBrowseItems();
});

document.getElementById("sortSelect").addEventListener("change", function () {
  browseFilters.sort = this.value;
  renderBrowseItems();
});

document.getElementById("browseSearch").addEventListener("input", function () {
  browseFilters.search = this.value;
  renderBrowseItems();
});

// Home search and category cards
document.getElementById("homeSearchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  browseFilters.search = document.getElementById("homeSearchInput").value;
  document.getElementById("browseSearch").value = browseFilters.search;
  document.getElementById("categoryFilter").value = "All";
  browseFilters.category = "All";
  browseFilters.status = "All";
  document.getElementById("statusFilter").value = "All";
  showPage("browse");
  renderBrowseItems();
});

document.addEventListener("click", function (e) {
  var card = e.target.closest(".category-card");
  if (card) {
    browseFilters.category = card.getAttribute("data-category");
    browseFilters.search = "";
    document.getElementById("homeSearchInput").value = "";
    document.getElementById("browseSearch").value = "";
    document.getElementById("categoryFilter").value = browseFilters.category;
    browseFilters.status = "All";
    document.getElementById("statusFilter").value = "All";
    showPage("browse");
    renderBrowseItems();
  }
});

// Form validation
function validateEmail(email) {
  return email.indexOf("@") !== -1 && email.indexOf(".") !== -1;
}

function readReportForm(prefix, status) {
  var fields = ["ItemName", "Category", "Date", "Location", "Description", "ContactName", "ContactEmail", "ContactPhone"];
  var values = {};
  var valid = true;

  for (var i = 0; i < fields.length; i++) {
    var el = document.getElementById(prefix + fields[i]);
    var value = el.value.trim();
    if (!value) { valid = false; }
    values[fields[i]] = value;
  }

  if (valid && !validateEmail(values.ContactEmail)) valid = false;

  if (!valid) return null;

  return {
    id: Date.now(),
    name: values.ItemName,
    category: values.Category,
    status: status,
    location: values.Location,
    date: values.Date,
    description: values.Description,
    contactName: values.ContactName,
    contactEmail: values.ContactEmail,
    contactPhone: values.ContactPhone
  };
}

function clearReportForm(prefix) {
  var fields = ["ItemName", "Category", "Date", "Location", "Description", "ContactName", "ContactEmail", "ContactPhone"];
  for (var i = 0; i < fields.length; i++) {
    document.getElementById(prefix + fields[i]).value = "";
  }
}

// Report lost
document.getElementById("lostForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var report = readReportForm("lost", "Lost");
  var error = document.getElementById("lostFormError");
  var success = document.getElementById("lostSuccess");

  if (!report) {
    error.classList.remove("hidden");
    success.classList.add("hidden");
    return;
  }

  error.classList.add("hidden");
  myReports.push(report);
  saveMyReports();
  renderBrowseItems();
  renderMyReports();
  clearReportForm("lost");
  success.classList.remove("hidden");
});

// Report found
document.getElementById("foundForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var report = readReportForm("found", "Found");
  var error = document.getElementById("foundFormError");
  var success = document.getElementById("foundSuccess");

  if (!report) {
    error.classList.remove("hidden");
    success.classList.add("hidden");
    return;
  }

  error.classList.add("hidden");
  myReports.push(report);
  saveMyReports();
  renderBrowseItems();
  renderMyReports();
  clearReportForm("found");
  success.classList.remove("hidden");
});

// Delete report
document.addEventListener("click", function (e) {
  var btn = e.target.closest(".delete-btn");
  if (btn) {
    var id = parseInt(btn.getAttribute("data-id"), 10);
    myReports = myReports.filter(function (item) { return item.id !== id; });
    saveMyReports();
    renderMyReports();
    renderBrowseItems();
  }
});

// Init
loadMyReports();
renderBrowseItems();
renderMyReports();
showPage("home");
