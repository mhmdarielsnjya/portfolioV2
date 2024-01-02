/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav-list a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav-list a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form");
contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs.sendForm("service_67ed936", "template_p7g6p6x", "#contact-form", "HSBPhESOHXP6xRT-S").then(
    () => {
      // Show sent message
      contactMessage.textContent = "Message sent successfully ✅";

      // Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = "";
      }, 5000);

      // Clear input fields
      contactForm.reset();
    },
    () => {
      // Show error message
      contactMessage.textContent = "Message not sent (service error) ❌";
    }
  );
};
contactForm.addEventListener("submit", sendEmail);

/*=============== EMAIL VALIDATION ===============*/
const form = document.getElementById("contact-form"),
  email = document.getElementById("email"),
  pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

email.addEventListener("input", () => {
  // Evaluates if it matches the pattern values
  if (email.value.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
  } else {
    form.classList.add("invalid");
    form.classList.remove("valid");
  }

  // If the input field is empty, delete classes
  if (email.value == "") {
    form.classList.remove("invalid");
    form.classList.remove("valid");
  }
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 400,
});

sr.reveal(`.home-container, .about-container, .projects-container, .contact-container, .footer-container`);
