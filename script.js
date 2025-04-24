var slides = document.querySelectorAll('.slide');
var current = 0;
var total = slides.length;

function showSlide(index) {
  for (var i = 0; i < total; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
}

function nextSlide() {
  current = (current + 1) % total;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + total) % total;
  showSlide(current);
}

// Initial display
showSlide(current);

// Button events
document.getElementById('next').onclick = function () {
  nextSlide();
};

document.getElementById('previous').onclick = function () {
  prevSlide();
};

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);
