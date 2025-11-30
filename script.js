const cart = [];
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsContainer = document.getElementById('cartItems');

addToCartButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    const product = e.target.parentElement.querySelector('h4').textContent;
    cart.push(product);
    renderCart();
  });
});
function fbLogin() {
  alert('هنا هيتفتح تسجيل الدخول بالفيسبوك بعد إضافة App ID الخاص بك.');
}

function renderCart() {
  cartItemsContainer.innerHTML = cart.map(item => `<p>${item}</p>`).join('');
}

const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('تم إرسال رسالتك بنجاح!');
  form.reset();
});
