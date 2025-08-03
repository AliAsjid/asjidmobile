// Simple product click message
const productItems = document.querySelectorAll('.product-card');
productItems.forEach(item => {
  item.addEventListener('click', () => {
    alert(`You clicked on: ${item.querySelector('h3').textContent}`);
  });
});

// Handle quote form submission
const form = document.getElementById('quote-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  alert(`Thank you, ${name}! We will reply to your inquiry at ${email}.`);
  form.reset();
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll to top when clicking header title
const headerTitle = document.getElementById("header-title");
headerTitle.style.cursor = "pointer";
headerTitle.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});