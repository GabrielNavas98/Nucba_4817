import Typewriter from "typewriter-effect/dist/core";

const typewriterSpan = document.querySelector(".typewriter");

let typewriter = new Typewriter(typewriterSpan, {
  loop: false,
  delay: 50,
});

export const typewriterInit = () => {
  typewriter
    .pauseFor(1000)
    .typeString("Crypto")
    .pauseFor(300)
    .deleteChars(6)
    .typeString("Tecnología")
    .pauseFor(300)
    .deleteChars(10)
    .typeString("Nucba")
    .start();
};
