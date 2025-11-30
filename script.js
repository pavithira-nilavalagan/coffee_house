    const menuBTN = document.getElementById("menu-btn");

    const navLinks = document.getElementById("nav_links");

    const menuBTNIcon = menuBTN.querySelector("i");

    menuBTN.addEventListener("click", (e) =>{

      navLinks.classList.toggle("open");

      const isOpen = navLinks.classList.contains("open");

      menuBTNIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    })

    navLinks.addEventListener("click", (e) =>{
      navLinks.classList.remove("open");
      menuBTNIcon.setAttribute("class","ri-menu-line");
    })

    const scrollRevealOption = {
      distance: "50px",
      origin: "bottom",
      duration: 1000,
    };

    ScrollReveal().reveal(".header_image img",{
      ...scrollRevealOption,
      origin: "right",
    });

    ScrollReveal().reveal(".header_content h2",{
      ...scrollRevealOption,
      delay: 500,
    });

    ScrollReveal().reveal(".header_content h1",{
      ...scrollRevealOption,
      delay: 1000,
    });

    ScrollReveal().reveal(".order_card",{
      ...scrollRevealOption,
      interval: 500,
    });

    ScrollReveal().reveal(".event_content",{
      ...scrollRevealOption,
      duration: 1000,
    });



  const reservationForm = document.querySelector('.reservation_container form');

  reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = reservationForm.querySelector('input[type="text"]').value;
    const email = reservationForm.querySelector('input[type="email"]').value;
    const date = reservationForm.querySelector('input[type="date"]').value;
    const time = reservationForm.querySelector('input[type="time"]').value;
    const people = reservationForm.querySelector('input[type="number"]').value;

    if (!name || !email || !date || !time || !people) {
      alert('Please fill all fields!');
      return;
    }

    // Example: show reservation info
    alert(`Thank you, ${name}! Your table for ${people} people on ${date} at ${time} is booked.`);

    // Optional: reset form
    reservationForm.reset();

    console.log({ name, email, date, time, people });
  });

  // CART
  let cart = [];

  const orderButtons = document.querySelectorAll('.order_card .btn');
  const cartSidebar = document.getElementById('cart-sidebar');
  const cartItemsList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const openCartBtn = document.getElementById('open-cart-btn');
  const closeCartBtn = document.getElementById('close-cart');
  const cartOverlay = document.getElementById('cart-overlay');

  function updateCartUI() {
    cartItemsList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;
      const li = document.createElement('li');
      li.innerHTML = `${item.name} - $${item.price} <span data-index="${index}" class="remove-item" style="cursor:pointer;">x</span>`;
      cartItemsList.appendChild(li);
    });

    cartTotal.innerText = `Total: $${total}`;
  }

  function openCart() {
    cartSidebar.style.right = '0';
    cartOverlay.style.display = 'block';
  }

  function closeCart() {
    cartSidebar.style.right = '-350px';
    cartOverlay.style.display = 'none';
  }

  orderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.order_card');
      const name = card.querySelector('h4').innerText;
      const price = parseFloat(card.dataset.price);
      cart.push({ name, price });
      updateCartUI();
      openCart();
    });
  });

  openCartBtn.addEventListener('click', openCart);
  closeCartBtn.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  // Remove item from cart
  cartItemsList.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      updateCartUI();
    }
  });

  // Checkout
  const checkoutBtn = document.getElementById('checkout-btn');
  checkoutBtn.addEventListener('click', () => {
    if(cart.length === 0){
      alert('Your cart is empty!');
      return;
    }
    alert(`Thank you for your order! Total: $${cart.reduce((sum, item) => sum + item.price, 0)}`);
    cart = [];
    updateCartUI();
    closeCart();
  });

  /* MODAL FUNCTIONS */
function switchToRegister() {
    closeLoginModal();
    openRegisterModal();
}

function switchToLogin() {
    closeRegisterModal();
    openLoginModal();
}

// Open / Close Modals
function openLoginModal() { document.getElementById('login-modal').style.display = 'flex'; }
function closeLoginModal() { document.getElementById('login-modal').style.display = 'none'; }

function openRegisterModal() { document.getElementById('register-modal').style.display = 'flex'; }
function closeRegisterModal() { document.getElementById('register-modal').style.display = 'none'; }

// Handle Forms
function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    if(email && password){
        alert('Bean Successful!');
        closeLoginModal();
    } else {
        alert('Please fill all fields!');
    }
}

function handleRegister() {
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    if(name && email && password){
        alert('Sprout Successful!');
        closeRegisterModal();
    } else {
        alert('Please fill all fields!');
    }
}




// Change navbar style on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});