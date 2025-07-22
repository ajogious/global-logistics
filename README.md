# Global Logistics - Website Documentation 📄

## Table of Contents 📑

- [Project Overview](#project-overview-🌍)
- [Features](#features-✨)
- [File Structure](#file-structure-📂)
- [Setup & Installation](#setup--installation-⚙️)
- [Customization](#customization-🎨)
- [Deployment](#deployment-🚀)
- [Troubleshooting](#troubleshooting-🔧)
- [License](#license-📜)
- [Credits](#credits-🙏)

---

## Project Overview 🌍

A responsive and modern website for **Global Logistics**, offering:

- Car Hire Services 🚗
- Tourism Packages ✈️
- Logistics Solutions 🚚

**Built with:**

- ✔ HTML5
- ✔ CSS3
- ✔ JavaScript
- ✔ Tailwind CSS

---

## Features ✨

- Fully Responsive (Mobile, Tablet, Desktop) 📱💻
- Interactive Navigation (Hamburger Menu) 🍔
- Loading Spinner (Smooth UX) ⏳
- Contact Form (Form Validation) 📝
- Google Maps Integration 🗺️
- Modern Animations (Hover Effects) 🎭

---

## File Structure 📂

global-logistics-website/
├── index.html # Homepage
├── car-hire.html # Car Hire Services
├── tourism.html # Tourism Packages
├── about.html # About Us
├── contact.html # Contact Page
├── assets/
│ ├── css/ # Custom CSS (if needed)
│ ├── js/ # JavaScript files
│ └── images/ # Website images (if using local images)
├── README.md # This documentation
└── LICENSE # Project license

---

## Setup & Installation ⚙️

### 1. Clone the Repository

git clone https://github.com/ajogious/global-logistics.git
cd global-logistics-website 2. Install Dependencies
No dependencies needed (pure HTML/CSS/JS).

For Tailwind CSS (if modifying styles):

npm install -D tailwindcss
npx tailwindcss init 3. Run Locally
Just open any .html file in a browser (e.g. index.html).

💡 Tip: Use the Live Server extension in VS Code for auto-refresh.

Customization 🎨

1. Change Colors
   If using Tailwind config:

Edit
// tailwind.config.js
theme: {
extend: {
colors: {
primary: '#1e40af', // Change this
}
}
}
Or inline:

<div class="bg-blue-600">...</div> <!-- Change to bg-green-600, etc. -->
2. Update Content
Edit text directly in .html files.
Replace images in /assets/images/.

3. Modify Loading Spinner
   Inside any HTML file (after <body>):

<div id="loading-spinner" class="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-90">
  <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
</div>

Deployment 🚀

1. Netlify (Recommended)
   Drag & drop the project folder into Netlify

Enable form handling for contact.html (if using Formspree)

2. GitHub Pages
   Push your code to GitHub

Go to Settings > Pages

Select main branch and / (root) directory

Troubleshooting 🔧
Issue Solution
Spinner not disappearing Check JavaScript console for errors
Mobile menu not working Ensure hamburger.js is correctly linked
Form not submitting Replace your-form-id in Formspree action URL

License 📜
You can clone and use but do not claim the design and idea

Credits 🙏
Tailwind CSS — Styling framework

Font Awesome — Icons

Google Fonts (Poppins)

Unsplash — Free images

```

```
