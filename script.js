// ================= SCROLL REVEAL =================
document.addEventListener("DOMContentLoaded", function () {

  const reveals = document.querySelectorAll(".reveal");

  function handleScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(function (element) {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;

      if (elementTop < windowHeight - 100 && elementBottom > 100) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", handleScroll);
  handleScroll();

});


// ================= BANNER CLICK =================
const shopBtn = document.getElementById("shopBtn");
const banner = document.querySelector(".banner");

if (shopBtn && banner) {
  shopBtn.addEventListener("click", function (e) {
    e.preventDefault();

    banner.classList.add("active");

    setTimeout(function () {
      window.location.href = "products.html";
    }, 1200);
  });
}


// ================= PRODUCT RENDER + FILTER =================
document.addEventListener("DOMContentLoaded", function () {

  const productContainer = document.getElementById("productContainer");

  if (!productContainer) return;

  productContainer.innerHTML = "";

  products.forEach(product => {

    const card = document.createElement("div");
    card.classList.add("product-card", product.category);
    card.setAttribute("data-category", product.category);

  card.innerHTML = `

  ${product.tag === "new" ? `<span class="new-badge">NEW</span>` : ""}
  ${product.soldout === true ? `<span class="sold-badge">SOLD OUT</span>` : ""}
  ${product.bestseller === true ? `<span class="best-badge">BEST SELLER</span>` : ""}

  <img src="${product.image}">
  <h3>${product.name}</h3>
  <p class="price">₹${product.price}</p>
  <p class="code">Code: ${product.id}</p>

  <div class="btn-box">
    <a href="#" class="order-btn">Order on WhatsApp</a>

    <div class="card-actions">
      <button class="cart-btn" ${product.soldout ? "disabled" : ""}>
        ${product.soldout ? "Out of Stock" : "Add to Cart"}
      </button>
      <button class="wish-btn">♡</button>
    </div>
  </div>

`;

    productContainer.appendChild(card);
  });

 // ✅ WHATSAPP + ADD TO CART
document.querySelectorAll(".product-card").forEach(card => {

  const name = card.querySelector("h3").innerText;
  const price = card.querySelector(".price").innerText;
  const code = card.querySelector(".code").innerText.replace("Code: ", "");

  const orderBtn = card.querySelector(".order-btn");
  const cartBtn = card.querySelector(".cart-btn");

  // WhatsApp
const message = `Hello Vairavel Accessories,%0A%0A🛍️ Order Details:%0AProduct: ${name}%0ACode: ${code}%0APrice: ${price}%0A%0APlease confirm availability 👍%0A%0AThank you 😊`;

  orderBtn.href = `https://wa.me/917010262185?text=${message}`;

  // Add to Cart
  cartBtn.addEventListener("click", function(e){

    e.stopPropagation();

    const product = products.find(p => p.id === code);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(item => item.id === product.id);

    if(existing){
      existing.qty += 1;
    } else {
      cart.push({...product, qty:1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    showToast("Added to cart 🛒");
    updateCartCount();

  });

});
// ❤️ WISHLIST FINAL FIX
document.querySelectorAll(".wish-btn").forEach(btn => {

  const card = btn.closest(".product-card");
  const id = card.querySelector(".code").innerText.replace("Code: ", "");

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // ✅ Already in wishlist → show red
  if(wishlist.find(item => item.id === id)){
    btn.classList.add("active");
    btn.innerHTML = "❤";
  } else {
    btn.innerHTML = "♡";
  }

  btn.addEventListener("click", function(e){

    e.stopPropagation();

    const name = card.querySelector("h3").innerText;
    const price = card.querySelector(".price").innerText.replace("₹", "");
    const image = card.querySelector("img").src;

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const index = wishlist.findIndex(item => item.id === id);

    if(index > -1){
      // ❌ remove
      wishlist.splice(index, 1);
      this.classList.remove("active");
      this.innerHTML = "♡";
    } else {
      // ✅ add
      wishlist.push({ id, name, price, image });
      this.classList.add("active");
      this.innerHTML = "❤";
    }

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

  });

});

  // ✅ FILTER (CLEAN)
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => {

    btn.addEventListener("click", () => {

      document.querySelector(".filter-btn.active").classList.remove("active");
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      document.querySelectorAll(".product-card").forEach(card => {

        const category = card.getAttribute("data-category");

        if (filter === "all" || filter === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }

      });

    });

  });


  // 🔍 SEARCH (SAFE ADD)
const searchInput = document.getElementById("searchInput");

if(searchInput){
  searchInput.addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    document.querySelectorAll(".product-card").forEach(card => {

      const name = card.querySelector("h3").innerText.toLowerCase();

      if(name.includes(value)){
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }

    });

  });
}
});

// ================= PRODUCT CLICK → DETAIL PAGE =================
document.addEventListener("DOMContentLoaded", function(){

  document.querySelectorAll(".product-card").forEach(card => {

    card.addEventListener("click", function(){

      const codeText = this.querySelector(".code").innerText;
      const id = codeText.replace("Code: ", "");

      window.location.href = `product-detail.html?id=${id}`;

    });

  });

});

// 🔥 AUTO CATEGORY FROM URL
const params = new URLSearchParams(window.location.search);
const selectedCategory = params.get("category");

if(selectedCategory){

  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".product-card");

  buttons.forEach(btn => {

    if(btn.getAttribute("data-filter") === selectedCategory){

      document.querySelector(".filter-btn.active").classList.remove("active");
      btn.classList.add("active");

    }

  });

  cards.forEach(card => {

    const category = card.getAttribute("data-category");

    if(selectedCategory === "all" || selectedCategory === category){
      card.style.display = "block";
    }else{
      card.style.display = "none";
    }

  });

}

function updateCartCount(){

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let count = 0;

  cart.forEach(item => {
    count += item.qty || 1;
  });

  const countEl = document.getElementById("cartCount");

  if(countEl){
    countEl.innerText = count;
  }

}

updateCartCount();

function showToast(message){

  const toast = document.createElement("div");
  toast.innerText = message;
  toast.classList.add("toast");

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.remove();
  }, 2000);

}
