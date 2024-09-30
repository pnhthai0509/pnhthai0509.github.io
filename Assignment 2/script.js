const upDownBtn = document.querySelector('#up-btn');
const upDownImg = document.querySelector('.upDownImg');
const trackListSection = document.querySelector('.track-list-section');


if (upDownBtn && upDownImg) {
  upDownBtn.addEventListener('click', function () {
    if (upDownImg.classList.contains('fa-caret-up')) {
      upDownImg.classList.remove('fa-caret-up');
      upDownImg.classList.add('fa-caret-down');
      trackListSection.classList.remove('track-list-section');
      trackListSection.classList.add('track-list-section-active');
    } else {
      upDownImg.classList.remove('fa-caret-down');
      upDownImg.classList.add('fa-caret-up');
      trackListSection.classList.remove('track-list-section-active');
      trackListSection.classList.add('track-list-section');

    }
  });
}