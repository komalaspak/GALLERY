//for enlarge the Image
function enlargeImage(imgElement) {
    var body = document.body;
    var popupContainer = document.getElementById('popup-container');
    var popupImg = document.getElementById('popup-img');

    popupImg.src = imgElement.src;
    popupImg.alt = imgElement.alt;

    body.classList.add('enlarged');
    popupContainer.style.display = 'block';
}
//for closing the pop screen
function closePopup() {
    var body = document.body;
    var popupContainer = document.getElementById('popup-container');

    body.classList.remove('enlarged');
    popupContainer.style.display = 'none';
}
//for carousel
const slider = document.getElementById('carousel');
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % 5;
        updateSlider();
    }

    function updateSlider() {
        const translateValue = -currentIndex * 100 + '%';
        slider.style.transform = 'translateX(' + translateValue + ')';
    }

    setInterval(nextSlide, 3000);