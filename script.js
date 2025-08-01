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