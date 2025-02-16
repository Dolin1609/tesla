// script.js
let currentIndex = 0;
const carModels = [
    {
        name: "Tesla Model S",
        description: "The Model S is the ultimate electric luxury sedan.",
        specs: [
            "Top Speed: 200 mph",
            "Range: 370 miles",
            "Acceleration: 0-60 mph in 1.99 seconds"
        ],
        image: "tesla_model_s_details.jpg"
    },
    {
        name: "Tesla Model 3",
        description: "A compact, electric sedan with incredible performance.",
        specs: [
            "Top Speed: 162 mph",
            "Range: 358 miles",
            "Acceleration: 0-60 mph in 3.1 seconds"
        ],
        image: "tesla_model_3_details.jpg"
    },
    {
        name: "Tesla Model X",
        description: "The electric SUV with performance and space.",
        specs: [
            "Top Speed: 155 mph",
            "Range: 348 miles",
            "Acceleration: 0-60 mph in 2.6 seconds"
        ],
        image: "tesla_model_x_details.jpg"
    }
];

// Handle Carousel Movement
function nextSlide() {
    currentIndex = (currentIndex + 1) % carModels.length;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Show Car Details
function showCarDetails(index) {
    const detailsSection = document.getElementById('car-details');
    const car = carModels[index];

    document.getElementById('car-name').textContent = car.name;
    document.getElementById('car-description').textContent = car.description;
    const specsList = document.getElementById('car-specs');
    specsList.innerHTML = '';
    car.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specsList.appendChild(li);
    });

    detailsSection.style.display = 'block';
    document.querySelector('main').style.display = 'none';
}

function backToCarousel() {
    const detailsSection = document.getElementById('car-details');
    detailsSection.style.display = 'none';
    document.querySelector('main').style.display = 'block';
}

// Event Listeners
document.querySelectorAll('.details-btn').forEach((button, index) => {
    button.addEventListener('click', () => showCarDetails(index));
});

document.getElementById('back-to-carousel').addEventListener('click', backToCarousel);

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);
