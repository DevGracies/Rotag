const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
 e.preventDefault();
 const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 document.getElementById('result').textContent = `Thanks ${name}! We'll reach you at ${email}.`;
});
