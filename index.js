
// Display current image on clicking
let thumbnail_Images = document.querySelectorAll('.img');
let display = document.querySelector('#display');
let OnThumbnailClick = () =>{
  thumbnail_Images.forEach(img => img.classList.remove('active'));
  event.target.classList.add('active');
  display.src = event.target.src.replace('-thumbnail','');
}
thumbnail_Images.forEach(img => img.addEventListener('click', OnThumbnailClick));

//Cart display
let cartImg = document.querySelector('.cart-img');
let cart = document.querySelector('.cart');

cartImg.addEventListener("click",()=>{
  cart.classList.toggle('hidden');
});

// Increment Decrement count for products 
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let productCounter = document.querySelector('.productCounter');
let productCounterValue = 1;
let productsInCart = 0;

let setProductCounter = (value) =>{
  if (productCounterValue + value){
    productCounterValue += value;
    // console.log(productCounterValue);
    productCounter.innerHTML = productCounterValue;
    // console.log(productCounterValue);
  }
};
let productCounterPlus = () => {
  setProductCounter(1);
}
let productCounterMinus = () => {
  setProductCounter(-1); 
}
plus.addEventListener("click", productCounterPlus);
minus.addEventListener("click", productCounterMinus);

//Adding items to cart list
let addtocart = document.querySelector('.AddtoCart');
let productContainer = document.querySelector('.productInCart');
let price = 250.0;
let discount = 0.5;

addtocart.addEventListener("click",()=>{
  //console.log(productCounterValue);
   productsInCart = productCounterValue;
  let item=`
  <div class="item-div">
  <figure><img class="item-img" src="images/image-product-1-thumbnail.jpg"></figure>
  <div class="itemDetails">
   <p>Fall Limited Edition Sneekers</p>
   <div class="price-group">
   <div class="price">$${(price*discount).toFixed(2)} x<div/> 
   <div class="count">${(productsInCart)}<div/>
   <div class="totalPrice">$${(price*discount*productsInCart).toFixed(2)}<div/>
  <div/>
  <img id="delButton" src="images/icon-delete.svg">
  </div>`;

  productContainer.innerHTML = item;
 updateCartIcon();
updateCheckout();
   const delButton = document.querySelector('#delButton');
   delButton.addEventListener("click", onDelButtonClick);

});

let cartCount = document.querySelector('.cartIcon');
let updateCartIcon = () =>{
  cartCount.textContent = productsInCart;
  if (productsInCart > 0){
      //if(!cartCount.classList.contains('hidden')){
        cartCount.classList.remove('hidden');
      //}
      // else{
      //   cartCount.classList.remove('hidden');
      // }
  }
} 

let checkout = document.querySelector('.checkout');
let updateCheckout = () => {
  if(productsInCart > 0){
    checkout.classList.remove('hidden');
  }
  }

let onDelButtonClick = () => {
   productsInCart--;
 let cnt = document.querySelector('.count');
  let totalPrice = document.querySelector('.totalPrice');
   cnt.innerHTML = productsInCart;
   console.log(totalPrice);
   totalPrice.innerHTML = `$${(price*discount*productsInCart).toFixed(2)}`;
   totalPrice.innerHTML ;
  console.log(totalPrice);
  if(productsInCart == 0 || productsInCart > 0 ){
     productContainer.innerHTML = ``;
     checkout.classList.add('hidden');
     cartCount.classList.add('hidden');
  }
}

// Light Gallery
let divLight = document.querySelector('.prod_img_light');
display.addEventListener("click",() => divLight.classList.remove('hidden'))

let btnClose = document.querySelector('.btnClose')
btnClose.addEventListener("click",() => divLight.classList.add('hidden'))

// Display current image on clicking in Light Gallery
let thumbnailImages = document.querySelectorAll('.imgLight');
let displayLight = document.querySelector('#displayLight');
let OnThumbnailClickLight = () =>{
  thumbnailImages.forEach(img => img.classList.remove('active'));
  event.target.classList.add('active');
  displayLight.src = event.target.src.replace('-thumbnail','');
}
thumbnailImages.forEach(img => img.addEventListener('click', OnThumbnailClickLight));

let btnNext =  document.querySelector('.btnNext');
 btnNext.addEventListener("click", OnClickbtnNext)

 let btnPrevious =  document.querySelector('.btnPrevious');
 btnPrevious.addEventListener("click", OnClickbtnPrevious)

 function OnClickbtnNext (){
  let imageNo = getCurrentImageNo ();
  //console.log(imageNo);
  imageNo++;
  //console.log(imageNo)
  if(imageNo > 4){
    imageNo = 4;
  }
  setdisplayLIghtImg (imageNo);
 }
 function OnClickbtnPrevious (){
  let imageNo = getCurrentImageNo ();
  //console.log(imageNo);
  imageNo--;
  //console.log(imageNo)
  if(imageNo < 1){
    imageNo = 1;
  }
  setdisplayLIghtImg (imageNo);
 }
 function getCurrentImageNo (){
  let  imageNo =  displayLight.src.replace('images/image-product-','').replace('.jpg','');
  //imageNo++;
//console.log(imageNo);
  // console.log(displayLight);
  // //displayLight.src = displayLight.src.replace('images/image-product-','').replace('.jpg','')
  // console.log(displayLight.src);
return imageNo;
 }

 function setdisplayLIghtImg (imageNo){
  displayLight.src = `images/image-product-${imageNo}.jpg`;
  thumbnailImages.forEach(img => img.classList.remove('active'));
  thumbnailImages[imageNo-1].classList.add('active');
  console.log(imageNo);
 }

// Mobile View

//To open close nav bar
let menu = document.querySelector('.menu');
let nav = document.querySelector('.navigation');
let closeMenu = document.querySelector('.close-menu');

 menu.addEventListener("click",()=>{
  nav.classList.remove('hidden');
 })
closeMenu.addEventListener("click",()=>{
  nav.classList.add('hidden');
 })

 document.addEventListener('DOMContentLoaded',init);

 function init (){
  let query = window.matchMedia("(min-width:375px)and(max-width:412px)");

  if (query.matches){
    document.querySelector('h1').innerHTML="Autumn Limited Edition...";
  }
  else{
    document.querySelector('h1').innerHTML="Fall Limited Edition Sneakers";
  }
 }

 let btnNextMob =  document.querySelector('.btnNextMob');
 btnNextMob.addEventListener("click", OnClickbtnNext)

 let btnPreviousMob =  document.querySelector('.btnPreviousMob');
 btnPreviousMob.addEventListener("click", OnClickbtnPrevious)

 function OnClickbtnNext (){
  let imageNo = getCurrentImageNo ();
  //console.log(imageNo);
  imageNo++;
  //console.log(imageNo)
  if(imageNo > 4){
    imageNo = 4;
  }
  setdisplayLIghtImg (imageNo);
 }
 function OnClickbtnPrevious (){
  let imageNo = getCurrentImageNo ();
  //console.log(imageNo);
  imageNo--;
  if(imageNo < 1){
    imageNo = 1;
  }
  setdisplayLIghtImg (imageNo);
 }
 function getCurrentImageNo (){
  let  imageNo =  display_mob.src.replace('images/image-product-','').replace('.jpg','');
  return imageNo;
 }

 function setdisplayLIghtImg (imageNo){
  display_mob.src = `images/image-product-${imageNo}.jpg`;
   console.log(imageNo);
 }
