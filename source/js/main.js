'use strict';

var imask = window.IMask;

imask(document.getElementById('modal-tel'), {
  mask: '+{7}(000)000-00-00'
});

imask(document.getElementById('form-tel'), {
  mask: '+{7}(000)000-00-00'
});


var modalWindow = document.querySelector('.modal-feedback');
var modalCloseButton = document.querySelector('.modal-feedback__close');
var callbackButton = document.querySelector('.button--callback');
var popupLayer = document.querySelector('.popup-layer');


var showPopup = function () {
  modalWindow.classList.remove('modal-feedback--off');
  popupLayer.classList.remove('popup-layer--off');
  document.body.classList.add('lock');
};

var hidePopup = function () {
  modalWindow.classList.add('modal-feedback--off');
  popupLayer.classList.add('popup-layer--off');
  document.body.classList.remove('lock');
};

var onPopupLayerClick = function () {
  hidePopup();
  popupLayer.removeEventListener('click', onPopupLayerClick);
};

var onEscKeyDown = function (evt) {
  if (evt.keyCode === 27) {
    onPopupLayerClick();
  }
};

var onCallbackButtonClick = function () {
  showPopup();
  document.addEventListener('keydown', onEscKeyDown);
  popupLayer.addEventListener('click', onPopupLayerClick);
};

function onModalCloseButtonClick() {
  hidePopup();
  popupLayer.removeEventListener('click', onPopupLayerClick);
}

if (callbackButton) {
  callbackButton.addEventListener('click', onCallbackButtonClick);
}

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
}


