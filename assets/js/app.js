// Sidebar Laptop Show
var slide_navbar = document.querySelector('.sidebar-toggler'),
    body_navbar = document.body.classList;

slide_navbar.addEventListener('click', _ => {
    body_navbar.toggle('sidebar-lg-show');
});

// Responsive
var mq = "(max-width: 991.98px)";
var navbar_mobile = document.querySelector("#navbarResponsive");
if (window.matchMedia(mq.matches)) {
    navbar_mobile.classList.remove("show");
} else {
    navbar_mobile.classList.add("show");
}