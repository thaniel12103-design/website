// Smooth scroll to plans
function scrollToPlans() {
  document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' });
}
document.addEventListener("DOMContentLoaded", function () {

  const nav = document.getElementById("navMenu");
  const toggle = document.querySelector(".menu-toggle");

  // ✅ Toggle menu
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });
  }

  // ✅ Close menu on link click
  if (nav) {
    const links = nav.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    });
  }

  // ✅ Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (!nav || !toggle) return;

    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      nav.classList.remove("active");
    }
  });

});

// ================= FORM VALIDATION =================
function submitForm() {
  const name = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const message = document.getElementById('message')?.value.trim();
  const msg = document.getElementById('formMsg');

  if (!msg) return;

  if (!name || !email || !message) {
    msg.style.color = 'red';
    msg.innerText = 'Please fill all fields';
    return;
  }

  msg.style.color = 'lightgreen';
  msg.innerText = 'Message sent successfully!';
}

// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = '#000';
  } else {
    header.style.background = 'rgba(0,0,0,0.8)';
  }
});

// ================= SCROLL ANIMATION =================
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.card, .about-content, .contact-info').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// ================= BUTTON RIPPLE EFFECT =================
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function (e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');

    const rect = this.getBoundingClientRect();
    circle.style.left = e.clientX - rect.left + 'px';
    circle.style.top = e.clientY - rect.top + 'px';

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});

// ================= SUBSCRIBE INTERACTION =================
document.querySelector('.subscribe-box button')?.addEventListener('click', () => {
  alert('Subscribed successfully!');
});

///join.html//website.js
function submitJoinForm(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;

  document.getElementById("successMsg").innerText =
    "Welcome " + name + "! Your membership is confirmed.";

}
function joinPlan(plan) {
  window.location.href = "join.html?plan=" + plan;
}
const params = new URLSearchParams(window.location.search);
document.getElementById("plan").value = params.get("plan");

function joinPlan(plan) {
  window.location.href = "join.html?plan=" + plan;
}
document.addEventListener("DOMContentLoaded", function () {

  const params = new URLSearchParams(window.location.search);
  const selectedPlan = params.get("plan");

  const planDropdown = document.getElementById("plan");

  if (selectedPlan && planDropdown) {
    planDropdown.value = selectedPlan;
  }

});
