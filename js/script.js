var menuBtn = document.getElementById('menu-btn');
var menuItemList = document.querySelector('.menu-item-list');
var addBtnSocial = document.getElementById('add-social');
var popUp = document.querySelector('.enter-popup');
var overlayPopup = document.getElementById('overlay-popup');
var closePopup = document.querySelector('.close-pop');
menuBtn.addEventListener('click', function(){
	menuItemList.classList.toggle('open');
})

addBtnSocial.addEventListener('click', function(){
	popUp.style.display = 'block';
	overlayPopup.style.display = 'block';
})

closePopup.addEventListener('click', function() {
	popUp.style.display = 'none';
	overlayPopup.style.display = 'none';
})
