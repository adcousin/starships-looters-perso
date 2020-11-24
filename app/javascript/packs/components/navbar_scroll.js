const navbarScroll = () => {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar-lewagon");
    console.log(navbar);
    navbar.classList.toggle("scrolled", window.scrollY > window.innerHeight);
  });
};

export  { navbarScroll }