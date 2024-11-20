import { productSectionInit } from "./assets/products-section/products-section";
import { cartInit } from "./assets/cart/cart.js";
import { menuInterfaceInit } from "./assets/menu-interface/menu-interface.js";
import { typewriterInit } from "./assets/typewriter/typewriter.js";
import { scrollInit } from "./assets/scroll-effect/scroll.js";

//Función inicializadora
const init = () => {
  productSectionInit();
  cartInit();
  menuInterfaceInit();
  typewriterInit();
  scrollInit();
};

init();
