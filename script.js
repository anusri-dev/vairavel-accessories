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

  // Banner Overlay Click Effect
  

  // Banner Overlay Click Effect

const shopBtn = document.getElementById("shopBtn");
const banner = document.querySelector(".banner");

if(shopBtn && banner){

shopBtn.addEventListener("click", function(e){

  e.preventDefault();

  banner.classList.add("active");

  setTimeout(function(){
    window.location.href = "products.html";
  },1200);

});

}
const filterButtons = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

document.querySelector(".filter-btn.active").classList.remove("active");

button.classList.add("active");

const filter = button.getAttribute("data-filter");

products.forEach(product => {

if(filter === "all" || product.classList.contains(filter)){

product.style.display = "block";

}else{

product.style.display = "none";

}

});

});

});

document.addEventListener("DOMContentLoaded", function(){

  const products = document.querySelectorAll(".product-card");

  products.forEach(product => {

    product.addEventListener("click", function(){

      products.forEach(p => {
        p.style.boxShadow = "0 8px 20px rgba(0,0,0,0.08)";
        p.style.transform = "scale(1)";
      });

      this.style.boxShadow = "0 0 25px gold";
      this.style.transform = "scale(1.05)";

      this.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

    });

  });

});