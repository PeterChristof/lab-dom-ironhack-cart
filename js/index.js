// ITERATION 1
console.log("JS is connected")

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  const price = product.querySelector(".price span").innerText;
const quantity = product.querySelector(".quantity input").value;

const totalValue = price * quantity;
const subTotal = product.querySelector(".subtotal span");
subTotal.innerText = `${totalValue}`
return totalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let sum = 0;
  const allProducts = document.getElementsByClassName("product");
  
for (let i=0; i < allProducts.length; i++) {
updateSubtotal(allProducts[i]);
sum += updateSubtotal(allProducts[i]);

}


  // ITERATION 3
 const finalTotal = document.querySelector("#total-value span")
 finalTotal.innerText = sum
 return sum

}

// ITERATION 4

function removeProduct(event) {

  const allDeleteButtons = document.getElementsByClassName(".btn btn-remove")


  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
