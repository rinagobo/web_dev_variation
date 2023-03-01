import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <section class="contact-link">
        <a href=""><i class="contact-icon fa-brands fa-twitter"></i></a><a href="https://github.com/rinagobo?tab=repositories"><i class="contact-icon fa-brands fa-github"></i></a><a href=""><i class="contact-icon fa-brands fa-instagram"></i></a><a href="mailto:"><i class="contact-icon fa-solid fa-envelope"></i></a>
      </section>
      <p>Copyright ⓒ{year} RinaNeman</p>
    </footer>
  );
}

export default Footer;
