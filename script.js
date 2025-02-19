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
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tesla Cars</title>
    <link rel="stylesheet" href="styles.css">
    <style>
        body {
            background-color: black;
            color: white;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        header nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            padding: 20px;
            background: rgba(0, 0, 0, 0.8);
        }
        header nav ul li {
            margin: 0 15px;
        }
        header nav ul li a {
            color: white;
            text-decoration: none;
            font-size: 18px;
        }
        .carousel-container {
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 80vh;
            position: relative;
        }
        .carousel {
            display: flex;
            transition: transform 1.5s ease-in-out;
        }
        .carousel-item {
            min-width: 100%;
            text-align: center;
            padding: 20px;
        }
        .carousel-item img {
            width: 80%;
            border-radius: 10px;
            transition: transform 0.5s ease;
        }
        .carousel-item img:hover {
            transform: scale(1.05);
        }
        .details-btn {
            padding: 10px 20px;
            background: red;
            color: white;
            border: none;
            cursor: pointer;
            transition: background 0.3s;
        }
        .details-btn:hover {
            background: darkred;
        }
        .car-details {
            display: none;
            text-align: center;
            padding: 20px;
        }
        .car-details img {
            width: 60%;
            border-radius: 10px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Models</a></li>
                <li><a href="#">Performance</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section class="carousel-container">
            <div class="carousel">
                <div class="carousel-item"><img src="tesla_model_s.jpg" alt="Model S"><h2>Model S</h2><p>Luxury electric sedan with unmatched speed and range.</p></div>
                <div class="carousel-item"><img src="tesla_model_3.jpg" alt="Model 3"><h2>Model 3</h2><p>Affordable, high-performance electric sedan.</p></div>
                <div class="carousel-item"><img src="tesla_model_x.jpg" alt="Model X"><h2>Model X</h2><p>Premium SUV with Falcon Wing doors.</p></div>
                <div class="carousel-item"><img src="tesla_model_y.jpg" alt="Model Y"><h2>Model Y</h2><p>Versatile and spacious electric SUV.</p></div>
                <div class="carousel-item"><img src="tesla_cybertruck.jpg" alt="Cybertruck"><h2>Cybertruck</h2><p>Futuristic electric truck with high durability.</p></div>
                <div class="carousel-item"><img src="tesla_roadster.jpg" alt="Roadster"><h2>Roadster</h2><p>Ultra-high-performance sports car.</p></div>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2025 Tesla, Inc. All rights reserved.</p>
    </footer>

    <script>
        let currentIndex = 0;
        const totalSlides = document.querySelectorAll('.carousel-item').length;
        
        function nextSlide() {
            currentIndex = (currentIndex + 1) % totalSlides;
            document.querySelector('.carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
        }
        
        setInterval(nextSlide, 7000);
    </script>
</body>
</html>
