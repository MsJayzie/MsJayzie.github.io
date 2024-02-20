const setCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}

document.addEventListener("DOMContentLoaded", function() {
    setCurrentYear();

    var footer = document.getElementById("dynamic-footer");
    var lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        
        if (st > lastScrollTop) {
            // Scrolling down, hide the footer
            footer.style.display = "none";
        } else {
            // Scrolling up, show the footer
            footer.style.display = "block";
        }

        lastScrollTop = st;
    });
});

// Zum Beispiel für ein Dropdown-Menü bei kleineren Bildschirmgrößen
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
  navLinks.classList.toggle('active');
}

document.querySelector('.navbar').addEventListener('click', toggleMenu);