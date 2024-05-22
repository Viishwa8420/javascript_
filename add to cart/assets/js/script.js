// Designed by: Hoang Nguyen
// Original image: https://dribbble.com/shots/5919154-Tab-Bar-Label-Micro-Interaction

const buttons = document.querySelectorAll(".menu__item");
let activeButton = document.querySelector(".menu__item.active");

buttons.forEach(item => {

    const text = item.querySelector(".menu__text");
    setLineWidth(text, item);

    window.addEventListener("resize", () => {
        setLineWidth(text, item);
    })

    item.addEventListener("click", function() {
        if (this.classList.contains("active")) return;

        this.classList.add("active");
        
        if (activeButton) {
            activeButton.classList.remove("active");
            activeButton.querySelector(".menu__text").classList.remove("active");
        }
        
        handleTransition(this, text);
        activeButton = this;

    });

    
});


function setLineWidth(text, item) {
    const lineWidth = text.offsetWidth + "px";
    item.style.setProperty("--lineWidth", lineWidth);
}

function handleTransition(item, text) {

    item.addEventListener("transitionend", (e) => {

        if (e.propertyName != "flex-grow" || 
        !item.classList.contains("active")) return;

        text.classList.add("active");
        
    });

}
let product = [
    {
      id: 1,
      name: "Wool-blend Jacket",
      price: "$39.00",
      sub: "JACKETS",
      quantity:1,
      image: "assets/img/pro-1.jpg",
      Image: "assets/img/pro-2.jpg"
    },
    {
      id: 2,
      name: "Wedge-heeled Espadrilles",
      price: "$17.00",
      sub: "BOOTS",
      quantity:1,
      image: "assets/img/pro-3.jpg",
      Image: "assets/img/pro-4.jpg"
    },
    {
      id: 3,
      name: "V-neck Sweater",
      price: "$13.00",
      sub: "JACKETS",
      quantity:1,
      image: "assets/img/pro-5.jpg",
      Image: "assets/img/pro-6.jpg"
    },
    {
      id: 4,
      name: "Trainers Shoes",
      price: "$14.00",
      sub: "SHOES",
      quantity:1,
      image: "assets/img/pro-7.jpg",
      Image: "assets/img/pro-8.jpg"
    },
    {
      id: 5,
      name: "Tinted Sunglasses",
      price: "$15.00",
      sub: "ACCESSORIES",
      quantity:1,
      image: "assets/img/pro-9.jpg",
      Image: "assets/img/pro-10.jpg"
    },
    {
      id: 6,
      name: "Sweatshirt Short",
      price: "$09.00",
      sub: "FASHION",
      quantity:1,
      image: "assets/img/pro-11.png",
      Image: "assets/img/pro-12.jpg"
    },
    {
      id: 7,
      name: "Stripe Cotton Shirt",
      price: "$17.00",
      sub: "FASHION",
      quantity:1,
      image: "assets/img/pro-13.jpg",
      Image: "assets/img/pro-14.jpg"
    },
    {
      id: 8,
      name: "Straw Shopeer Bag",
      price: "$12.00",
      sub: "LEATHER BAG",
      quantity:1,
      image: "assets/img/pro-15.jpg",
      Image: "assets/img/pro-16.jpg"
    }
  ];
  let productHtml = "";
    product.forEach(p => {
      productHtml += `
      
      <div class="col-3">
        <div class="popular-product">
          <div class="product-img d-flex justify-center align-center">
            <img src="${p.image}" class="front-img">
            <img src="${p.Image}" class="back-img">
          </div>
          <div class="product-content">
            <a href="#" class="t2">${p.sub}</a>
            <a href="#" class="text-color">${p.name}</a>
            <div class="d-flex justify-between">
              <span class="price d-flex align-center text-center">
                <h5>${p.price}</h5>
              </span>
              <a href="#"><button onclick="addCart(${p.id})"><i class="fa-solid fa-cart-shopping"></i>add</button></a>
            </div>
          </div>
        </div>
        </div>
       
      `;
    });
    document.getElementById("product").innerHTML = productHtml;

    // Cart functionality
    let cart = [];

    const addCart = (id) => {
      let c = product.find(item => item.id == id);
      if (c) {
        cart.push(c);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert("Item added to cart!");
      }
    }