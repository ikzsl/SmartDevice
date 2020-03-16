'use strict';
var modalWindow = document.querySelector('.modal-feedback');
var modalCloseButton = document.querySelector('.modal-feedback__close');
var callbackButton = document.querySelector('.button--callback');
var popupLayer = document.querySelector('.popup-layer');

function onCallbackButtonClick() {
  modalWindow.classList.remove('modal-feedback--off');
  popupLayer.classList.remove('popup-layer--off');
}
callbackButton.addEventListener('click', onCallbackButtonClick);


function onModalCloseButtonClick() {
  modalWindow.classList.add('modal-feedback--off');
  popupLayer.classList.add('popup-layer--off');
}
modalCloseButton.addEventListener('click', onModalCloseButtonClick);
