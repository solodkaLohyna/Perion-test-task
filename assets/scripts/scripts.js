window.addEventListener('load', function () {
    window.nextSlide = nextSlide;
    window.prevSlide = prevSlide;
    const wrap = document.querySelector('.wrap');

    if (window.innerWidth < 668) {
        wrap.style.padding = '50px';
    }
    const header = document.querySelector('.header');
    const logo = document.querySelector('.logo');

    setTimeout(() => {
        logo.classList.add('move-right');
        setTimeout(() => {
            logo.classList.add('move-up');
            setTimeout(() => {
                window.innerWidth > 1023 && header.style.height == '10%';
            }, 1500)
        }, 1500);
    }, 1500);

    const movePhotos = document.querySelector('.photos');
    const button = document.querySelector('.button');
    const navButtons = document.querySelector('.nav-buttons');
    const carousel = document.querySelector('.carousel');

    setTimeout(() => {
        movePhotos.classList.remove('move');

        navButtons.style.animation = 'appearing 1.5s ease-in-out';
        navButtons.style.opacity = '1';

        carousel.style.animation = 'appearing 1.5s ease-in-out';
        carousel.style.opacity = '1';

        button.style.animation = 'appearing 1.5s ease-in-out';
        button.style.opacity = '1';
    }, 4500)


    const description = document.querySelector('.description');
    const parts = description.innerHTML.split(/<br\s*\/?>/);

    description.innerHTML = parts.
        map((line, index) => `<span class="line" style="transition-delay: ${index * 0.2}s">${line}</span>`)
        .join("<br>");

    setTimeout(() => {
        document.querySelectorAll(".line").forEach(span => {
            span.style.opacity = "1";
            span.style.transform = "translateX(0)";
        });
        setTimeout(() => {
            window.innerWidth > 1023 && document.querySelector('.description').style.marginTop == '5vh';
        }, 1000);
    }, 5000);

    let currentIndex = 0;
    const slides = document.querySelectorAll(".carousel .content .frame");
    const photos = document.querySelectorAll(".photos .photo");
    const counter = document.querySelector(".counter");
    const container = document.querySelector('.container');

    const totalSlides = slides.length;

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const prevSvg = document.querySelector(".prev-svg");
    const nextSvg = document.querySelector(".next-svg");

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${-currentIndex * 100}%)`;
            slide.style.transition = 'transform 0.6s ease-in-out';
        });

        photos.forEach((photo) => {
            photo.style.transform = `translateX(${-currentIndex * 100}%)`;
            photo.style.transition = 'transform 0.6s ease-in-out';
        })

        counter.textContent = `${currentIndex + 1}/${totalSlides}`;
        currentIndex === totalSlides - 1 ? nextSvg.style.stroke = 'lightgray' : nextSvg.style.stroke = 'black';
        currentIndex === 0 ? prevSvg.style.stroke = 'lightgray' : prevSvg.style.stroke = 'black';
    }

    function nextSlide() {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
        }
        updateCarousel();
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
        }
        updateCarousel();
    }

    setTimeout(() => {
        let autoSlideInterval = setInterval(nextSlide, 4000);
        function stopAutoSlide() {
            clearInterval(autoSlideInterval);
        }

        container.addEventListener('click', stopAutoSlide);
        prevButton.addEventListener('click', stopAutoSlide);
        nextButton.addEventListener('click', stopAutoSlide);

        window.nextSlide = nextSlide;
        window.prevSlide = prevSlide;
        updateCarousel();
    }, 10000);
});
