'use strict';

(function () {
  var menuToggle = document.querySelector('.burger');

  if (!menuToggle) return;

  menuToggle.addEventListener('click', function () {
    // Если у кнопки нет дополнительных классов.
    if (!menuToggle.classList.contains('burger--open') && !menuToggle.classList.contains('burger--closed')) {
      menuToggle.classList.add('burger--closed');

      // Если у кнопки есть какой-либо из дополднительных классов.
    } else if (menuToggle.classList.contains('burger--open') || menuToggle.classList.contains('burger--closed')) {
      if (menuToggle.classList.contains('burger--open')) {
        menuToggle.classList.remove('burger--open');
        menuToggle.classList.add('burger--closed');
      } else {
        menuToggle.classList.add('burger--open');
        menuToggle.classList.remove('burger--closed');
      }
    }
  });
})();