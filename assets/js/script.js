document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-gallery img");
    const dots = document.querySelectorAll(".dot");

    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle("active", i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });

        currentIndex = index;
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showImage(index);
        });
    });

    showImage(0);
});



// Start: Home Page
// Header Transition
$(document).ready(function() {
    // Set header to slightly visible by default
    $('header').css('background-color', 'transparent');

    // Smooth Scroll Transition
    $('.scroll-arrow').click(function() {
        $('html, body').animate({ scrollTop: $('#about').offset().top }, 800);
    });

    // Change Header Background on Scroll
    $(window).scroll(function() {
        if ($(window).scrollTop() > 10) {
            $('header').css('background-color', 'rgba(92, 28, 28, 0.9)');
        } else {
            $('header').css('background-color', 'rgba(92, 28, 28, 0.4)'); // Semi-visible when at the top
        }
    });
});

// Carousel
document.addEventListener("DOMContentLoaded", function () {
    const dishes = document.querySelectorAll(".dish");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;
    let interval;

    function showDish(index) {
        dishes.forEach((dish, i) => {
            dish.classList.remove("active");
            if (i === index) {
                dish.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % dishes.length;
        showDish(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + dishes.length) % dishes.length;
        showDish(currentIndex);
    }

    function startAutoSlide() {
        interval = setInterval(nextSlide, 10000);
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    prevBtn.addEventListener("click", () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });

    // Show first dish and start auto-slide
    showDish(currentIndex);
    startAutoSlide();
});
// End: Home Page