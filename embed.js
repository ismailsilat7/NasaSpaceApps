// Select all elements with class .about-box and .imgalign
const aboutBoxes = document.querySelectorAll('.about-box');
const imgAligns = document.querySelectorAll('[class^="imgalign"]'); // Select all elements with class starting with "imgalign"

// Intersection Observer for .about-box elements
const observerAboutBox = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            if (entry.target.id === 'box1' || entry.target.id === 'box2') {
                entry.target.style.transform = 'translateY(0)';
            } else if (entry.target.id === 'box3' || entry.target.id === 'box4') {
                entry.target.style.transform = 'translateY(0)';
            }
        } else {
            entry.target.style.opacity = '0';
            if (entry.target.id === 'box1' || entry.target.id === 'box2') {
                entry.target.style.transform = 'translateY(100px)';
            } else if (entry.target.id === 'box3' || entry.target.id === 'box4') {
                entry.target.style.transform = 'translateY(100px)';
            }
        }
    });
});

// Intersection Observer for .imgalign elements
const observerImgAligns = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            if (entry.target.classList.contains('imgalign1') || entry.target.classList.contains('imgalign2')) {
                entry.target.style.transform = 'translateY(0)';
            } else if (entry.target.classList.contains('imgalign3') || entry.target.classList.contains('imgalign4')) {
                entry.target.style.transform = 'translateY(0)';
            }
        } else {
            entry.target.style.opacity = '0';
            if (entry.target.classList.contains('imgalign1') || entry.target.classList.contains('imgalign2')) {
                entry.target.style.transform = 'translateY(100px)';
            } else if (entry.target.classList.contains('imgalign3') || entry.target.classList.contains('imgalign4')) {
                entry.target.style.transform = 'translateY(100px)';
            }
        }
    });
});

// Observe each .about-box element
aboutBoxes.forEach(box => {
    observerAboutBox.observe(box);
});

// Observe each .imgalign element
imgAligns.forEach(img => {
    observerImgAligns.observe(img);
});
// Get the scroll-to-top button element
const scrollToTopButton = document.getElementById('scrollToTopButton');

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
};

// Show the button when scrolling down
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

