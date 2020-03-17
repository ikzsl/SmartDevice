'use strict';

// console.log(IMask);
// var phoneMask = IMask(
//   document.getElementById('phone-mask'), {
//   mask: '+{7}(000)000-00-00'
// });

// console.log(phoneMask(826384768237));


var modalWindow = document.querySelector('.modal-feedback');
var modalCloseButton = document.querySelector('.modal-feedback__close');
var callbackButton = document.querySelector('.button--callback');
var popupLayer = document.querySelector('.popup-layer');

function onCallbackButtonClick() {
  modalWindow.classList.remove('modal-feedback--off');
  popupLayer.classList.remove('popup-layer--off');
}

if (callbackButton) {
  callbackButton.addEventListener('click', onCallbackButtonClick);
}



function onModalCloseButtonClick() {
  modalWindow.classList.add('modal-feedback--off');
  popupLayer.classList.add('popup-layer--off');
}

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
}

