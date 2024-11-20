import ScrollReveal from "scrollreveal";

const discoverSection = document.getElementById("discover");
const infoSection = document.getElementById("info");
const productSection = document.getElementById("products");
const heroSection = document.getElementById("hero");

const revealSection = (section) => {
  ScrollReveal().reveal(section, {
    delay: 700,
    distance: "150px",
    duration: 1000,
    origin: "bottom",
    reset: true,
  });
};

export const scrollInit = () => {
  revealSection(discoverSection);
  revealSection(heroSection);
  revealSection(infoSection);
  revealSection(productSection);
};
