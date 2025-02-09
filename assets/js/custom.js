$(document).ready(function() {
    // Initialize page slider
    var $pageSlider = $('.page-slider');
    var $currentSlidePage = $('#currentSlide1');
    var $totalSlidesPage = $('#totalSlides1');
    
    // Initialize main slider
    var $mainSlider = $('.main-slider');
    var $currentSlideMain = $('#currentSlide');
    var $totalSlidesMain = $('#totalSlides');

    // Ensure both sliders exist and have slides
    if ($pageSlider.length && $pageSlider.find('.slider-item').length > 0) {
        $pageSlider.slick({
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 3.5, // Show 3.5 slides
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
            responsive: [{
                breakpoint: 768, // Small screens
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });

        // Update counters for page slider
        $pageSlider.on('init reInit afterChange', function(event, slick, currentSlide) {
            var totalSlidesCountPage = slick.slideCount;
            var slideIndexPage = (currentSlide ? currentSlide : 0) + 1;

            $currentSlidePage.text(slideIndexPage.toString().padStart(2, '0'));
            $totalSlidesPage.text(totalSlidesCountPage.toString().padStart(2, '0'));
        });
    } else {
        console.error("No slides found in the page slider.");
    }

    // Initialize main slider
    if ($mainSlider.length && $mainSlider.find('.slider-item').length > 0) {
        $mainSlider.slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 6000,
            arrows: true,
        });

        // Update counters for main slider
        $mainSlider.on('init reInit afterChange', function(event, slick, currentSlide) {
            var totalSlidesCountMain = slick.slideCount;
            var slideIndexMain = (currentSlide ? currentSlide : 0) + 1;

            $currentSlideMain.text(slideIndexMain.toString().padStart(2, '0'));
            $totalSlidesMain.text(totalSlidesCountMain.toString().padStart(2, '0'));
        });
    } else {
        console.error("No slides found in the main slider.");
    }
});





   function updateCountdown() {
    const targetDate = new Date("February 17, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft <= 0) {
        document.querySelector(".day-counter").innerHTML = "<div>Countdown Ended</div>";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Format numbers to have two digits (09, 08, 07, etc.)
    document.getElementById("days").innerText = days.toString().padStart(2, '0');
    document.getElementById("hours").innerText = hours.toString().padStart(2, '0');
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, '0');
}

// Run every second
setInterval(updateCountdown, 1000);
updateCountdown();


  async function fetchWeather() {
    const apiKey = "9f2c22e40d6b98d8087e183b4492dad3"; 
    const city = "Allahabad,IN";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const temp = Math.round(data.main.temp);
            const condition = data.weather[0].description;
            const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit' });
            const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString("en-IN", { hour: '2-digit', minute: '2-digit' });

            document.getElementById("temperature").innerText = `${temp}°C`;
            document.getElementById("condition").innerText = condition.charAt(0).toUpperCase() + condition.slice(1);
            document.getElementById("sunrise").innerText = sunrise;
            document.getElementById("sunset").innerText = sunset;
        } else {
            document.getElementById("condition").innerText = `Error: ${data.message}`;
        }
    } catch (error) {
        document.getElementById("condition").innerText = "Network error";
    }
}

fetchWeather();
setInterval(fetchWeather, 600000); // Update every 10 minutes


 document.addEventListener('DOMContentLoaded', function () {
    const lightbox = GLightbox({
      selector: '.glightbox',
    });
  });
  
  
  $(window).on("scroll", function() {
  $(".ecotourism-map, .about-us").each(function() {
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var elementTop = $(this).offset().top;
    var elementHeight = $(this).outerHeight();
    var scrollProgress = (windowTop + windowHeight - elementTop) / elementHeight;
    scrollProgress = Math.min(1, Math.max(0, scrollProgress));
    var movement = scrollProgress * 100;

    $(this).find(".image-move").css("margin-top", `${movement}px`);
	$(this).find(".banner-absolute").css("margin-top", `${movement}px`);
  });
});

$(window).on("scroll", function() {
  $(".program-details,.blue-bg").each(function() {
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var elementTop = $(this).offset().top;
    var elementHeight = $(this).outerHeight();
    var scrollProgress = (windowTop + windowHeight - elementTop) / elementHeight;
    scrollProgress = Math.min(40, Math.max(0, scrollProgress));
    var movement = scrollProgress * 200;

    $(this).find(".absoulte-image").css("right", `${movement}px`);
	$(this).find(".blue-absolute").css("right", `${movement}px`);
  });
});

$(window).on("scroll", function() {
  $(".video-section").each(function() {
    var windowTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var elementTop = $(this).offset().top;
    var elementHeight = $(this).outerHeight();
    var scrollProgress = (windowTop + windowHeight - elementTop) / elementHeight;
    scrollProgress = Math.min(40, Math.max(0, scrollProgress));
    var movement = scrollProgress * 100;

    // Use left instead of right to move in the opposite direction
    $(this).find(".video-absolute").css("left", `${movement}px`);
  });
});
    

$(document).ready(function () {
    async function getVisitorCount() {
      try {
        const response = await fetch("https://api-mvaychpb7a-uc.a.run.app/visitor-count");
        const data = await response.json();
        document.getElementById("visitorCount").innerText = data.count;
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      }
    },
    getVisitorCount();
    $("#contactForm").submit(function (e) {
        e.preventDefault(); 

      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
      };

      try {
        const response = await fetch("https://api-mvaychpb7a-uc.a.run.app/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();
        alert(result.message);
      } catch (error) {
        console.error("Error:", error);
        alert("Failed to send message");
      }
    });
});
