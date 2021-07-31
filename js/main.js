(() => {
  let img1 = document.querySelector('#IS1'),
      img2 = document.querySelector('#IS2'),
      img3 = document.querySelector('#IS3'),
      img4 = document.querySelector('#IS4'),
      txt = document.querySelector('#ProductTxt'),
      imgcss = document.querySelector('.imageProductBig'),
      price = document.querySelector('.CardPrice'),
      name = document.querySelector('.CardName');

  function changePromo3() {
    price.innerHTML = '<p class="CardPrice">$9.99</p>';
    name.innerHTML = '<p class="CardName">Gold Bond 20% discount in 5 bottles</p>';
    txt.style.marginLeft = "13%";
    imgcss.style.width = "300px";
    imgcss.style.padding = "0px";
    imgcss.style.marginLeft = "20%";
    imgcss.style.marginTop = "17%";
    img1.src = 'images/Bottle-ad.png';
  }

  function changePromoGlass() {
    price.innerHTML = '<p class="CardPrice">$2.50</p>';
    name.innerHTML = '<p class="CardName">Gold Bond Bottle & Class</p>';
    txt.style.marginLeft = "13%";
    imgcss.style.width = "250px";
    imgcss.style.marginLeft = "25%";
    imgcss.style.marginTop = "20%";
    img1.src = 'images/Bottle&glass-beer.png';
  }

  function changePromo3X2() {
    price.innerHTML = '<p class="CardPrice">$3.99</p>';
    name.innerHTML = '<p class="CardName">Gold Bond Promo 3X2</p>';
    txt.style.marginLeft = "12%";
    imgcss.style.width = "300px";
    imgcss.style.padding = "0px";
    imgcss.style.marginLeft = "20%";
    imgcss.style.marginTop = "20%";
    img1.src = 'images/bottle-beer-3.png';
  }

  img3.addEventListener('click', changePromo3);
  img2.addEventListener('click', changePromo3X2);
  img4.addEventListener('click', changePromoGlass);
})();
