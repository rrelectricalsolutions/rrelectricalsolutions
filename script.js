// ===== RR Electrical Solutions — Common Script =====

// ---------- Navbar Scroll Shadow ----------
window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }
});

// ---------- Mobile Menu Toggle ----------
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');

if (navToggle) {
  navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close menu when a link is clicked
  var links = navLinks.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      navToggle.classList.remove('open');
      navLinks.classList.remove('open');
    });
  }
}

// ---------- Image Slider ----------
function slide(id, amount) {
  var track = document.getElementById(id);
  if (track) {
    track.scrollBy({ left: amount, behavior: 'smooth' });
  }
}

// ---------- Drag to Scroll for Sliders ----------
var sliders = document.querySelectorAll('.slider-track');
for (var s = 0; s < sliders.length; s++) {
  (function (track) {
    var isDown = false;
    var startX;
    var scrollLeft;

    track.addEventListener('mousedown', function (e) {
      isDown = true;
      track.style.cursor = 'grabbing';
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });

    track.addEventListener('mouseleave', function () {
      isDown = false;
      track.style.cursor = 'grab';
    });

    track.addEventListener('mouseup', function () {
      isDown = false;
      track.style.cursor = 'grab';
    });

    track.addEventListener('mousemove', function (e) {
      if (!isDown) return;
      e.preventDefault();
      var x = e.pageX - track.offsetLeft;
      var walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });

    track.style.cursor = 'grab';
  })(sliders[s]);
}

// ---------- Reveal on Scroll ----------
function initReveal() {
  var reveals = document.querySelectorAll('.reveal');
  var observer = new IntersectionObserver(function (entries) {
    for (var i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        entries[i].target.classList.add('visible');
      }
    }
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  for (var i = 0; i < reveals.length; i++) {
    observer.observe(reveals[i]);
  }
}

document.addEventListener('DOMContentLoaded', initReveal);