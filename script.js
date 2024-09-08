let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Show the slide based on index
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? '1' : '0';
  });
}

// Navigate to the next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Navigate to the previous slide
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Add event listeners to "Explore" buttons
const exploreButtons = document.querySelectorAll('.explore-btn');
const urls = [
  "https://www.easemytrip.com/blog/best-places-to-visit-in-kerala",
  "https://www.thebrokebackpacker.com/beautiful-places-in-switzerland/",
  "https://www.thrillophilia.com/places-to-visit-in-maldives",
  "https://www.thrillophilia.com/places-to-visit-in-malaysia",
  "https://www.indonesia.travel/gb/en/home.html",
  "https://thailandstartshere.com/thailand-destinations/",
  "https://www.cntraveller.com/article/beautiful-places-turkey"
];

exploreButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    window.open(urls[currentSlide], '_blank');
  });
});

// Initialize the first slide as visible
showSlide(currentSlide);

// JavaScript for handling the Blog and Book buttons
document.addEventListener('DOMContentLoaded', () => {
    const blogButton = document.querySelector('.nav-btn:first-child');
    const bookButton = document.querySelector('.nav-btn:nth-child(2)');
    const reviewButton = document.querySelector('#review-btn');
    const dropdownContent = document.querySelector('#dropdown-content');

    // Event listener for Blog button
    blogButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.open("https://codepen.io/Ridwan-Jaffer/full/xxoJgKm", "_blank"); // Ensure the blog link opens in a new tab
    });

    // Event listener for Book button
    bookButton.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block'; // Toggle dropdown visibility
    });

    // Event listener for Review button
    reviewButton.addEventListener('click', () => {
        window.open('https://codepen.io/Ridwan-Jaffer/full/GRbPpQL', '_blank');
    });

    // Close dropdown when clicking outside of it
    document.addEventListener('click', (event) => {
        if (!bookButton.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});