var slide_navbar = document.querySelector('.sidebar-toggler'),
    body_navbar = document.body.classList;

slide_navbar.addEventListener('click', _ => {
    body_navbar.toggle('sidebar-lg-show');
});