// Indian states & union territories
const STATES = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka",
  "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const $ = (id) => document.getElementById(id);
const inr = (n) => "₹" + n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function fillStates(select, selected) {
  STATES.forEach((s) => {
    const o = document.createElement("option");
    o.textContent = s;
    if (s === selected) o.selected = true;
    select.appendChild(o);
  });
}

function calc() {
  const amt = Math.max(0, parseFloat($("amt").value) || 0);
  const rate = parseFloat($("rate").value);
  const tax = (amt * rate) / 100;
  const intra = $("from").value === $("to").value;
  const row = (k, v) => `<div class="row"><span>${k}</span><span>${v}</span></div>`;
  let html = row("Taxable value", inr(amt));
  if (intra) {
    html += row(`CGST (${rate / 2}%)`, inr(tax / 2));
    html += row(`SGST (${rate / 2}%)`, inr(tax / 2));
  } else {
    html += row(`IGST (${rate}%)`, inr(tax));
  }
  html += `<div class="row total"><span>Invoice total</span><span>${inr(amt + tax)}</span></div>`;
  html += `<small>${intra ? "Intra-state supply → CGST + SGST" : "Inter-state supply → IGST"}</small>`;
  $("result").innerHTML = html;
}

fillStates($("from"), "Tamil Nadu");
fillStates($("to"), "Karnataka");
["amt", "rate", "from", "to"].forEach((id) => $(id).addEventListener("input", calc));
calc();

// Waitlist: no backend yet — opens the visitor's email client addressed to the contact email.
$("waitlist-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = $("wl-email").value.trim();
  const to = $("contact-email").textContent.trim();
  window.location.href = `mailto:${to}?subject=${encodeURIComponent("ShipGST India waitlist")}&body=${encodeURIComponent("Please add me to the waitlist: " + email)}`;
  $("wl-msg").textContent = "Thanks! Your email app should open to confirm your spot.";
});

$("yr").textContent = new Date().getFullYear();
