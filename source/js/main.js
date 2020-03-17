'use strict';

var modalPhoneMask = IMask(
  document.getElementById('modal-tel'), {
  mask: '+{7}(000)000-00-00'
});

var formPhoneMask = IMask(
  document.getElementById('form-tel'), {
  mask: '+{7}(000)000-00-00'
});


var modalWindow = document.querySelector('.modal-feedback');
var modalCloseButton = document.querySelector('.modal-feedback__close');
var callbackButton = document.querySelector('.button--callback');
var popupLayer = document.querySelector('.popup-layer');

var showPopup = function () {
  modalWindow.classList.remove('modal-feedback--off');
  popupLayer.classList.remove('popup-layer--off');
};

var hidePopup = function () {
  modalWindow.classList.add('modal-feedback--off');
  popupLayer.classList.add('popup-layer--off');
};

var onPopupLayerClick = function () {
  hidePopup();
  popupLayer.removeEventListener('click', onPopupLayerClick);
}


var onCallbackButtonClick = function () {
  showPopup();
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      hidePopup();
      popupLayer.removeEventListener('click', onPopupLayerClick);
    }
  });

  popupLayer.addEventListener('click', onPopupLayerClick);
}

if (callbackButton) {
  callbackButton.addEventListener('click', onCallbackButtonClick);
}

function onModalCloseButtonClick() {
  hidePopup()
  popupLayer.removeEventListener('click', onPopupLayerClick);
}

if (modalCloseButton) {
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
}

