function displayJeans(){
  var targetElement = document.getElementById('jeans');
  targetElement.scrollIntoView();
}
function displayTshirt(){
  var targetElement = document.getElementById('tshirt');
  targetElement.scrollIntoView();
}
function displayPerfume(){
  var targetElement = document.getElementById('perfume');
  targetElement.scrollIntoView();
}
function displaySando(){
  var targetElement = document.getElementById('sando');
  targetElement.scrollIntoView();
}
function displayToy(){
  var targetElement = document.getElementById('toy');
  targetElement.scrollIntoView();
}

function displayTop(){
  var targetElement = document.getElementById('header');
  targetElement.scrollIntoView();
}

let items = {
  jeans1: { name: "Jeans 1", price: 30, stock: 10 },
  jeans2: { name: "Jeans 2", price: 20, stock: 10 },
  jeans3: { name: "Jeans 3", price: 10, stock: 10 },
  jeans4: { name: "Jeans 3", price: 15, stock: 10 },
  tshirt1: {name: "T-shirt 1", price: 20, stock: 10},
  tshirt2: {name: "T-shirt 2", price: 15, stock: 10},
  tshirt3: {name: "T-shirt 3", price: 10, stock: 10},
  tshirt4: {name: "T-shirt 4", price: 10, stock: 10},
  perfume1: {name: "Perfume 1", price: 5, stock: 10},
  perfume2: {name: "Perfume 2", price: 8, stock: 10},
  perfume3: {name: "Perfume 2", price: 9, stock: 10},
  perfume4: {name: "Perfume 2", price: 7, stock: 10},
  sando1: {name: "Sando 1", price: 8, stock: 10},
  sando2: {name: "Sando 2", price: 10, stock: 10},
  sando3: {name: "Sando 3", price: 11, stock: 10},
  sando4: {name: "Sando 4", price: 10, stock: 10},
  toy1: {name: "Toy 1", price: 5, stock: 10},
  toy2: {name: "Toy 2", price: 6, stock: 10},
  toy3: {name: "Toy 3", price: 8, stock: 10},
  toy4: {name: "Toy 4", price: 5, stock: 10},
  // Add more items here
};

function addToCart(itemName, itemKey) {
  if (items[itemKey].stock > 0) {
    items[itemKey].stock--;
    document.getElementById(itemKey + "-stock").textContent = items[itemKey].stock;
    alert(`${itemName} added to cart. Total price: $${calculateTotal()}`);
  } else {
    alert(`Sorry, ${itemName} is out of stock.`);
  }
}

function increaseStock(itemKey) {
  items[itemKey].stock++;
  document.getElementById(itemKey + "-stock").textContent = items[itemKey].stock;
}

function calculateTotal() {
  let total = 0;
  for (let itemKey in items) {
    total += items[itemKey].price * (10 - items[itemKey].stock);
  }
  return total;
}
function toggleCart() {
  let cartContent = document.getElementById('cart-content');
  cartContent.classList.toggle('show');
}

function addToCart(itemName, itemKey) {
  if (items[itemKey].stock > 0) {
    items[itemKey].stock--;
    document.getElementById(itemKey + "-stock").textContent = items[itemKey].stock;
    updateCartSummary(itemName, items[itemKey].price);
  } else {
    alert(`Sorry, ${itemName} is out of stock.`);
  }
}

function updateCartSummary(itemName, itemPrice) {
  let cartItemsElement = document.getElementById('cart-items');
  let cartTotalElement = document.getElementById('cart-total');
  let cartCountElement = document.getElementById('cart-count-summary');
  
  let cartItem = document.createElement('div');
  cartItem.textContent = `${itemName} - $${itemPrice}`;
  cartItemsElement.appendChild(cartItem);

  let currentTotal = parseFloat(cartTotalElement.textContent);
  cartTotalElement.textContent = (currentTotal + itemPrice).toFixed(2);

  let currentCount = parseInt(cartCountElement.textContent);
  cartCountElement.textContent = currentCount + 1;
}

function checkout() {
  let cartContent = document.getElementById('cart-content');
  cartContent.classList.remove('show');

  let cartTotal = document.getElementById('cart-total').textContent;
  alert(`Thank you for your purchase! \nTotal amount to pay: $${cartTotal}`);

  // Reset the cart after checkout
  resetCart();
}

function resetCart() {
  let cartItemsElement = document.getElementById('cart-items');
  let cartTotalElement = document.getElementById('cart-total');
  let cartCountElement = document.getElementById('cart-count-summary');

  cartItemsElement.innerHTML = "";
  cartTotalElement.textContent = "0.00";
  cartCountElement.textContent = "0";
}
document.addEventListener("DOMContentLoaded", function() {
  var scrollBtn = document.getElementById("scrollBtn");

  scrollBtn.addEventListener("click", function() {
      scrollToTop(1000); // 1000 milliseconds (1 second) for smooth scrolling
  });

  function scrollToTop(duration) {
      var start = window.pageYOffset;
      var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

      function scroll() {
          var now = 'now' in window.performance ? performance.now() : new Date().getTime();
          var time = Math.min(1, ((now - startTime) / duration));
          window.scrollTo(0, Math.ceil((1 - time) * start));
          if (window.pageYOffset === 0) return;
          requestAnimationFrame(scroll);
      }

      scroll();
  }
});

