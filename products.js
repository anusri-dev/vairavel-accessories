const products = [


  // ===== EARRINGS =====
  
  { id: "ER02", name: "Elegant Earrings 2", price: 50, category: "earring", image: "images/e2.jpg", tag: "new" },
  { id: "ER03", name: "Elegant Earrings 3", price: 50, category: "earring", image: "images/e3.jpg" },
  { id: "ER04", name: "Elegant Earrings 4", price: 50, category: "earring", image: "images/e4.jpg",soldout: true   },
  { id: "ER05", name: "Elegant Earrings 5", price: 50, category: "earring", image: "images/e5.jpg",bestseller: true  },
  { id: "ER06", name: "Elegant Earrings 6", price: 50, category: "earring", image: "images/e6.jpg",soldout: true   },
  { id: "ER07", name: "Elegant Earrings 7", price: 50, category: "earring", image: "images/e7.jpg" },
  { id: "ER08", name: "Elegant Earrings 8", price: 45, category: "earring", image: "images/e8.jpg", tag: "new" },
  { id: "ER09", name: "Elegant Earrings 9", price: 45, category: "earring", image: "images/e9.jpg" },
  { id: "ER10", name: "Elegant Earrings 10", price: 45, category: "earring", image: "images/e10.jpg",bestseller: true },
{ id: "ER11", name: "Elegant Earrings", price: 45, category: "earring", image: "images/e11.jpg",soldout: true   },
{ id: "ER12", name: "Elegant Earrings", price: 45, category: "earring", image: "images/e12.jpg" },
{ id: "ER13", name: "Elegant Earrings", price: 45, category: "earring", image: "images/e13.jpg" ,bestseller: true },
{ id: "ER14", name: "Elegant Earrings", price: 45, category: "earring", image: "images/e14.jpg" },
{ id: "ER15", name: "Elegant Earrings", price: 40, category: "earring", image: "images/e15.jpg" },
{ id: "ER16", name: "Elegant Earrings", price: 40, category: "earring", image: "images/e16.jpg",soldout: true   },
{ id: "ER17", name: "Elegant Earrings", price: 40, category: "earring", image: "images/e17.jpg",bestseller: true  },
{ id: "ER18", name: "Elegant Earrings", price: 40, category: "earring", image: "images/e18.jpg",soldout: true   },
{ id: "ER19", name: "Elegant Earrings", price: 40, category: "earring", image: "images/e19.jpg" },
{ id: "ER20", name: "Elegant Earrings", price: 40, category: "earring", image: "images/e20.jpg",soldout: true   },
{ id: "ER21", name: "Elegant Earrings", price: 40, category: "earring", image: "images/e21.jpg",soldout: true   },
{ id: "ER22", name: "Elegant Earrings", price: 35, category: "earring", image: "images/e22.jpg",bestseller: true  },
{ id: "ER23", name: "Elegant Earrings", price: 35, category: "earring", image: "images/e23.jpg" },
{ id: "ER24", name: "Elegant Earrings", price: 35, category: "earring", image: "images/e24.jpg" ,soldout: true  },
{ id: "ER25", name: "Elegant Earrings", price: 35, category: "earring", image: "images/e25.jpg" ,soldout: true  },
{ id: "ER26", name: "Elegant Earrings ", price: 50, category: "earring", image: "images/e26.jpg", tag: "new" },
    { id: "ER27", name: "Elegant Earrings ", price: 50, category: "earring", image: "images/e27.jpg" },
  { id: "ER28", name: "Elegant Earrings ", price: 50, category: "earring", image: "images/e28.jpg" },
  { id: "ER29", name: "Elegant Earrings ", price: 45, category: "earring", image: "images/e29.jpg" },
  { id: "ER30", name: "Elegant Earrings ", price: 45, category: "earring", image: "images/e30.jpg",bestseller: true  },
  { id: "ER31", name: "Elegant Earrings ", price: 45, category: "earring", image: "images/e31.jpg" },
  { id: "ER32", name: "Elegant Earrings ", price: 45, category: "earring", image: "images/e32.jpg" },
  { id: "ER33", name: "Elegant Earrings ", price: 45, category: "earring", image: "images/e33.jpg", tag: "new" },
  { id: "ER34", name: "Elegant Earrings ", price: 45, category: "earring", image: "images/e34.jpg" },
  { id: "ER35", name: "Elegant Earrings ", price: 45, category: "earring", image: "images/e35.jpg" },
{ id: "ER36", name: "Elegant Earrings", price: 40, category: "earring", image: "images/e36.jpg" },
{ id: "ER37", name: "Elegant Earrings", price: 40, category: "earring", image: "images/e37.jpg" },
{ id: "ER38", name: "Elegant Earrings", price: 40, category: "earring", image: "images/e38.jpg" ,soldout: true  },
{ id: "ER39", name: "Elegant Earrings", price: 25, category: "earring", image: "images/e39.jpg",bestseller: true  },
{ id: "ER40", name: "Elegant Earrings", price: 25, category: "earring", image: "images/e40.jpg" },
{ id: "ER41", name: "Elegant Earrings", price: 25, category: "earring", image: "images/e41.jpg" },
{ id: "ER42", name: "Elegant Earrings", price: 25, category: "earring", image: "images/e42.jpg" },
{ id: "ER43", name: "Elegant Earrings", price: 25, category: "earring", image: "images/e43.jpg" },
{ id: "ER44", name: "Elegant Earrings", price: 25, category: "earring", image: "images/e44.jpg" ,bestseller: true },
{ id: "ER45", name: "Elegant Earrings", price: 25, category: "earring", image: "images/e45.jpg" },
{ id: "ER46", name: "Elegant Earrings", price: 30, category: "earring", image: "images/e46.jpg",bestseller: true  },
{ id: "ER47", name: "Elegant Earrings", price: 30, category: "earring", image: "images/e47.jpg" },
{ id: "ER48", name: "Elegant Earrings", price: 30, category: "earring", image: "images/e48.jpg",soldout: true   },
{ id: "ER49", name: "Elegant Earrings", price: 30, category: "earring", image: "images/e49.jpg" },
{ id: "ER50", name: "Elegant Earrings", price: 30, category: "earring", image: "images/e50.jpg" },
{ id: "ER51", name: "Elegant Earrings", price: 30, category: "earring", image: "images/e51.jpg",bestseller: true  },
{ id: "ER52", name: "Elegant Earrings", price: 30, category: "earring", image: "images/e52.jpg" },



// ===== HAIR CLIPS =====
{ id: "CL01", name: "Stylish Hair Clip 1", price: 70, category: "clip", image: "images/c1.jpg" ,bestseller: true },
{ id: "CL02", name: "Stylish Hair Clip 2", price: 30, category: "clip", image: "images/c2.jpg" },
{ id: "CL03", name: "Stylish Hair Clip 3", price: 35, category: "clip", image: "images/c3.jpg" },
{ id: "CL04", name: "Stylish Hair Clip 4", price: 25, category: "clip", image: "images/c4.jpg" },
{ id: "CL05", name: "Stylish Hair Clip 5", price: 18, category: "clip", image: "images/c5.jpg",bestseller: true  },
{ id: "CL06", name: "Stylish Hair Clip 6", price: 25, category: "clip", image: "images/c6.jpg" },
{ id: "CL07", name: "Stylish Hair Clip 7", price: 20, category: "clip", image: "images/c7.jpg" },
{ id: "CL08", name: "Stylish Hair Clip 8", price: 20, category: "clip", image: "images/c8.jpg" },
{ id: "CL09", name: "Stylish Hair Clip 9", price: 40, category: "clip", image: "images/c9.jpg",bestseller: true  },
{ id: "CL10", name: "Stylish Hair Clip 10", price: 50, category: "clip", image: "images/c10.jpg" ,bestseller: true },
{ id: "CL11", name: "Stylish Hair Clip 11", price: 15, category: "clip", image: "images/c11.jpg" },
{ id: "CL12", name: "Stylish Hair Clip 12", price: 20, category: "clip", image: "images/c12.jpg" },
{ id: "CL13", name: "Stylish Hair Clip 13", price: 20, category: "clip", image: "images/c13.jpg" },
{ id: "CL14", name: "Stylish Hair Clip 14", price: 15, category: "clip", image: "images/c14.jpg",bestseller: true  },
{ id: "CL15", name: "Stylish Hair Clip 15", price: 15, category: "clip", image: "images/c15.jpg" },
{ id: "CL16", name: "Stylish Hair Clip 16", price: 15, category: "clip", image: "images/c16.jpg" },
{ id: "CL17", name: "Stylish Hair Clip 17", price: 20, category: "clip", image: "images/c17.jpg" },
{ id: "CL18", name: "Stylish Hair Clip 13", price: 15, category: "clip", image: "images/c18.jpg" },
{ id: "CL19", name: "Stylish Hair Clip 14", price: 25, category: "clip", image: "images/c19.jpg" },
{ id: "CL20", name: "Stylish Hair Clip 15", price: 12, category: "clip", image: "images/c20.jpg" },
{ id: "CL21", name: "Stylish Hair Clip 16", price: 20, category: "clip", image: "images/c21.jpg" ,bestseller: true },
{ id: "CL22", name: "Stylish Hair Clip 17", price: 6, category: "clip", image: "images/c22.jpg" },

//==== Bracelet ====
{ id: "BR01", name: "Anti Turkish Bracelet 1", price: 199, category: "bracelet", image: "images/b1.jpg" },
{ id: "BR02", name: "Anti Turkish Bracelet 2", price: 199, category: "bracelet", image: "images/b2.jpg" },
{ id: "BR03", name: "Anti Turkish Bracelet 3", price: 199, category: "bracelet", image: "images/b3.jpg" },
{ id: "BR04", name: "Anti Turkish Bracelet 4", price: 249, category: "bracelet", image: "images/b4.jpg" ,bestseller: true },
{ id: "BR05", name: "Shining Stone Bracelet 5", price: 60, category: "bracelet", image: "images/b5.jpg" },
{ id: "BR06", name: "Party Wear Stone Bracelet 6", price: 60, category: "bracelet", image: "images/b6.jpg" ,bestseller: true },
{ id: "BR07", name: "Daily Wear Butterfly Bracelet 7", price: 20, category: "bracelet", image: "images/b7.jpg" },

//==== Scrunch & Bow ====
{ id: "SC01", name: "Party Wear Scrunch 1", price: 15, category: "scrunch", image: "images/s1.jpg" },
{ id: "SC02", name: "Stone Scrunch 2", price: 25, category: "scrunch", image: "images/s2.jpg" },
{ id: "SC03", name: "Beads Bow 3", price: 25, category: "scrunch", image: "images/s3.jpg", bestseller: true },

// ===== COMBOS =====
{ id: "CB01", name: "Premium Combo 1", price: 299, category: "combo", image: "images/combo1.jpg" },
{ id: "CB02", name: "Premium Combo 2", price: 399, category: "combo", image: "images/combo2.jpg",bestseller: true  },
{ id: "CB03", name: "Clip Combo Pack", price: 199, category: "combo", image: "images/combo3.jpg" },
{ id: "CB04", name: "Furry & Trendy Combo", price: 299, category: "combo", image: "images/combo4.jpg" },
{ id: "CB05", name: "Clip & Bracelet Combo", price: 199, category: "combo", image: "images/combo5.jpg" },
{ id: "CB06", name: "Complete Fashion Combo", price: 199, category: "combo", image: "images/combo6.jpg" },
{ id: "CB07", name: "Simple Clip Set", price: 149, category: "combo", image: "images/combo7.jpg" },
{ id: "CB08", name: "Earring Combo Set", price: 149, category: "combo", image: "images/combo8.jpg",bestseller: true  },
{ id: "CB09", name: "Clip & Earring Combo", price: 99, category: "combo", image: "images/combo9.jpg" },
{ id: "CB10", name: "Trendy Clip Pack", price: 99, category: "combo", image: "images/combo10.jpg" },
{ id: "CB11", name: "Classic Clip Collection", price: 99, category: "combo", image: "images/combo11.jpg" },
{ id: "CB12", name: "Premium Fashion Set", price: 149, category: "combo", image: "images/combo12.jpg",bestseller: true  }

];
  

const productContainer = document.getElementById("productContainer");

if (productContainer && typeof products !== "undefined") {

  productContainer.innerHTML = "";

  products.forEach(product => {

    const card = document.createElement("div");
    card.classList.add("product-card", product.category);
    card.id = product.id;

    let tagHTML = "";
    if (product.tag === "new") {
      tagHTML = `<span class="new-badge">NEW</span>`;
    }

    card.innerHTML = `
      ${tagHTML}
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p class="price">₹${product.price}</p>
      <p class="code">Code: ${product.id}</p>
      <a href="#" class="order-btn">Order on WhatsApp</a>
    `;

    productContainer.appendChild(card);
  });

}

document.querySelectorAll(".product-card").forEach(card => {

  const name = card.querySelector("h3").innerText;
  const price = card.querySelector(".price").innerText;
  const code = card.querySelector(".code").innerText.replace("Code: ", "");

  const btn = card.querySelector(".order-btn");

  const message = `Hello Vairavel Accessories,%0A%0A🛍️ Order Details:%0AProduct: ${name}%0ACode: ${code}%0APrice: ${price}%0A%0APlease confirm availability 👍`;

  btn.href = `https://wa.me/917010262185?text=${message}`;

});