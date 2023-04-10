export function reloadSlider() {
    const slider = document.querySelector(".slider-wrapper");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    let currentSlideIndex = 0;
    console.log("It's working!");
    fetch("src/assets/json/datos.json")
        .then((response) => response.json())
        .then((data) => {
            data.slider.forEach((slide) => {
                console.log(slide.image_url)
                const slideDiv = document.createElement("div");
                slideDiv.classList.add("slide");
                slideDiv.innerHTML = `<img src="${slide.image_url}">`;
                slider.appendChild(slideDiv);
            });
        })
        .then(() => {
            const slides = document.querySelectorAll(".slide");
            const slideWidth = slider.offsetWidth / slides.length;

            slider.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;

            nextBtn.addEventListener("click", () => {
                if (currentSlideIndex < slides.length - 1) {
                    currentSlideIndex++;
                    slider.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
                }
            });

            prevBtn.addEventListener("click", () => {
                if (currentSlideIndex > 0) {
                    currentSlideIndex--;
                    slider.style.transform = `translateX(-${currentSlideIndex * slideWidth}px)`;
                }
            });
        })
        .catch((error) => console.error(error));
}

window.addEventListener('resize', reloadSlider);
window.addEventListener('DOMContentLoaded', reloadSlider);