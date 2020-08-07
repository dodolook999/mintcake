/* Add any JavaScript you need to this file. */

/******* left menu ******/
function showAll() {
  document.querySelector('#birth_cate').style.display = 'block';
  document.querySelector('#wedding_cate').style.display = 'block';
  document.querySelector('#cup_cate').style.display = 'block';
  document.querySelector('#dessert_cate').style.display = 'block';
  document.querySelector('#cate_title').innerHTML = 'ALL CAKES';
}
function showBirth() {
  document.querySelector('#birth_cate').style.display = 'block';
  document.querySelector('#wedding_cate').style.display = 'none';
  document.querySelector('#cup_cate').style.display = 'none';
  document.querySelector('#dessert_cate').style.display = 'none';
  document.querySelector('#cate_title').innerHTML = 'BIRTHDAY CAKE';
}
function showWed() {
  document.querySelector('#birth_cate').style.display = 'none';
  document.querySelector('#wedding_cate').style.display = 'block';
  document.querySelector('#cup_cate').style.display = 'none';
  document.querySelector('#dessert_cate').style.display = 'none';
  document.querySelector('#cate_title').innerHTML = 'WEDDING CAKE';
}
function showCup() {
  document.querySelector('#birth_cate').style.display = 'none';
  document.querySelector('#wedding_cate').style.display = 'none';
  document.querySelector('#cup_cate').style.display = 'block';
  document.querySelector('#dessert_cate').style.display = 'none';
  document.querySelector('#cate_title').innerHTML = 'CUPCAKE';
}
function showDessert() {
  document.querySelector('#birth_cate').style.display = 'none';
  document.querySelector('#wedding_cate').style.display = 'none';
  document.querySelector('#cup_cate').style.display = 'none';
  document.querySelector('#dessert_cate').style.display = 'block';
  document.querySelector('#cate_title').innerHTML = 'DESSERT';
}

/*******show and close big image*******/
function imageView(bigImage) {
  document.querySelector('#popupImage').setAttribute('src', bigImage);
  document.querySelector('#popup').style.display = 'block';
  document.querySelector('#popupbg').style.visibility = 'visible';
}

function imageClose() {
  document.querySelector('#popup').style.display = 'none';
  document.querySelector('#popupbg').style.visibility = 'hidden';
}

/**********contacts**********/
function addOrderNumber() {
  var elem = document.querySelector('#order_number');
  elem.innerHTML =
    '<label for="orderNo" class="form-check-label mt-2"><span class="text-danger">* </span>Order Number</label><input type="text" name="orderNo" id="orderNo" placeholder="Please enter your Order Number" class="form-control" required>';
}

function clearOrderNumber() {
  document.querySelector('#order_number').innerHTML = '';
}

function errorMessage(messages) {
  document.getElementById('errors').innerHTML += messages;
}

function clearErrors() {
  clearOrderNumber();
  document.getElementById('errors').innerHTML = ' ';
  document.getElementById('first-name').focus();
}
