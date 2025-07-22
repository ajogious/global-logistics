// main.js

// Initialize Swiper
if (document.querySelector(".heroSwiper")) {
  const swiper = new Swiper(".heroSwiper", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

// Mobile Menu Toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll("#navMenu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});

// Form Validation Functions
function setupFormValidation(formId) {
  const form = document.getElementById(formId);
  if (form) {
    form.addEventListener("submit", function (e) {
      const inputs = form.querySelectorAll("[required]");
      let isValid = true;

      for (const input of inputs) {
        if (!input.value.trim()) {
          input.classList.add("border-red-500");
          isValid = false;
        } else {
          input.classList.remove("border-red-500");
        }
      }

      if (!isValid) {
        e.preventDefault();
        alert("Please fill in all required fields.");
        return false;
      }
    });

    // Remove error state when user starts typing
    form.querySelectorAll(".form-input").forEach((input) => {
      input.addEventListener("input", () => {
        if (input.value.trim()) {
          input.classList.remove("border-red-500");
        }
      });
    });
  }
}

// Initialize all forms
setupFormValidation("contactForm");
setupFormValidation("carHireForm");
setupFormValidation("tourBookingForm");

// Modal Functions
function openBooking(destinationName) {
  const destinationInput = document.getElementById("destinationInput");
  const bookingModal = document.getElementById("bookingModal");

  if (destinationInput && bookingModal) {
    destinationInput.value = destinationName;
    bookingModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function closeModal() {
  const bookingModal = document.getElementById("bookingModal");
  if (bookingModal) {
    bookingModal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
}

// Initialize Google Map
function initMap() {
  const mapElement = document.getElementById("map");
  if (mapElement) {
    // Lagos coordinates
    const lagos = { lat: 6.5244, lng: 3.3792 };
    const map = new google.maps.Map(mapElement, {
      zoom: 14,
      center: lagos,
      styles: [
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#46bcec" }, { visibility: "on" }],
        },
      ],
    });

    // Add marker
    new google.maps.Marker({
      position: lagos,
      map: map,
      title: "GlobalLogistics Headquarters",
    });
  }
}

// Active Link Highlighting
function highlightActiveLinks() {
  // Get current page filename (e.g., "index.html")
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Highlight active link in desktop nav
  document.querySelectorAll("nav a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.replace("text-gray-700", "text-blue-600");
      const span = link.querySelector("span");
      if (span) {
        span.classList.replace("w-0", "w-full");
      }
    }
  });

  // Highlight active link in mobile nav
  document.querySelectorAll("#navMenu a").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("text-blue-600", "bg-blue-50");
    }
  });
}

// Page Load Spinner
window.addEventListener("load", function () {
  const spinner = document.getElementById("loading-spinner");
  if (spinner) {
    // Fade out spinner
    spinner.style.opacity = "0";
    // Remove spinner from DOM after fade out
    setTimeout(() => spinner.remove(), 300);
  }
});

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  highlightActiveLinks();

  // Add any other initialization code here
});
