const productsContainer = document.querySelector(".products-container");
const showMoreBtn = document.querySelector(".btn-load");
const categoriesContainer = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const cartBtn = document.querySelector(".cart-label");
const cartMenu = document.querySelector(".cart");
const overlay = document.querySelector(".overlay");
const menuBtn = document.querySelector(".menu-label");
const barsMenu = document.querySelector(".navbar-list");
const productsCart = document.querySelector(".cart-container");
const modal = document.querySelector(".add-modal");
const total = document.querySelector(".total");
const btnBuy = document.querySelector(".btn-buy");
const btnDelete = document.querySelector(".btn-delete");
const cartBubble = document.querySelector(".cart-bubble");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

/*---------------------------------------------------------------------- */
/*---------------------- Lógica de productos---------------------------- */
/*---------------------------------------------------------------------- */
const createProductTemplate = (product) => {
  const { cardImg, name, userImg, user, bid, id } = product;
  return `
        <div class="product">
        <img src=${cardImg} alt=${name} />
        <div class="product-info">

            <div class="product-top">
                <h3>${name}</h3>
                <p>Current Bid</p>
            </div>

            <div class="product-mid">
                <div class="product-user">
                    <img src=${userImg} alt="user" />
                    <p>@${user}</p>
                </div>
                <span>${bid} eTH</span>
            </div>
            <div class="product-bot">
                <div class="product-offer">
                    <div class="offer-time">
                        <img src="./assets/img/fire.png" alt="" />
                        <p>05:12:07</p>
                    </div>
                    <button class="btn-add"
                    data-id='${id}'
                    data-name='${name}'
                    data-bid='${bid}'
                    data-img='${cardImg}'>Add</button>
                </div>
            </div>
        </div>
    </div>
    `;
};

const renderProducts = (productsList) => {
  productsContainer.innerHTML += productsList
    .map(createProductTemplate)
    .join("");
};

/*---------------------------------------------------------------------- */
/*---------------------- Lógica de "ver más"---------------------------- */
/*---------------------------------------------------------------------- */

const isLastIndexOf = () => {
  return appState.currenProductsIndex === appState.productsLimit - 1;
};

const showMoreProdcuts = () => {
  appState.currenProductsIndex += 1;
  let { products, currenProductsIndex } = appState;
  renderProducts(products[currenProductsIndex]);
  if (isLastIndexOf()) {
    showMoreBtn.classList.add("hidden");
  }
};

const setShowMoreVisibility = () => {
  if (!appState.activeFilter) {
    showMoreBtn.classList.remove("hidden");
    return;
  }
  showMoreBtn.classList.add("hidden");
};

/*---------------------------------------------------------------------- */
/*------------------------ Lógica de filtros --------------------------- */
/*---------------------------------------------------------------------- */

const isInactiveFilterBtn = (element) => {
  return (
    element.classList.contains("category") &&
    !element.classList.contains("active")
  );
};

const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};

const changeFilterState = (btn) => {
  appState.activeFilter = btn.dataset.category;
  changeBtnActiveState(appState.activeFilter);
  setShowMoreVisibility();
};

const renderFilteredProducts = () => {
  const filteredProducts = productsData.filter((product) => {
    return product.category === appState.activeFilter;
  });
  renderProducts(filteredProducts);
};

const applyFilter = ({ target }) => {
  if (!isInactiveFilterBtn(target)) return;
  changeFilterState(target);
  productsContainer.innerHTML = "";
  if (appState.activeFilter) {
    renderFilteredProducts();
    appState.currenProductsIndex = 0;
    return;
  }
  renderProducts(appState.products[0]);
};

/*-----------------------------------------------------*/
/*--------------------Menu interface-------------------*/
/*-----------------------------------------------------*/
const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const closeOnScroll = () => {
  if (
    barsMenu.classList.contains("open-menu") ||
    cartMenu.classList.contains("open-cart")
  ) {
    barsMenu.classList.remove("open-menu");
    cartMenu.classList.remove("open-cart");
    overlay.classList.remove("show-overlay");
  }
};

const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) {
    barsMenu.classList.remove("open-menu");
    cartMenu.classList.remove("open-cart");
    overlay.classList.remove("show-overlay");
  }
};

/*---------------------------------------------------------------------- */
/*---------------------- Lógica de Carrito------------------------------ */
/*---------------------------------------------------------------------- */

const createCartProductTemplate = (product) => {
  const { id, name, bid, img, quantity } = product;
  return `
    <div class="cart-item">
      <img
        src=${img}
        alt="Nft del carrito"
      />
      <div class="item-info">
      <h3 class="item-title">${name}</h3>
        <p class="item-bid">Current bid</p>
        <span class="item-price">${bid} ETH</span>
      </div>
      <div class="item-handler">
        <span class="quantity-handler down" data-id=${id}>-</span>
        <span class="item-quantity">${quantity}</span>
        <span class="quantity-handler up" data-id=${id}>+</span>
        </div>
    </div>
  `;
};

const renderCart = () => {
  //renderizar productos del carrito
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg">No hay productos en el carrito.</p>`;
    return;
  }
  productsCart.innerHTML = cart.map(createCartProductTemplate).join("");
};

const createDataProduct = (dataset) => {
  const { id, name, img, bid } = dataset;
  return { id, name, img, bid };
};

const isExistingCartProduct = (productID) => {
  return cart.find((product) => product.id === productID);
};

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
};

const showSuccesModal = (msg) => {
  modal.classList.add("active-modal");
  modal.textContent = msg;

  setTimeout(() => {
    modal.classList.remove("active-modal");
  }, 3000);
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

const getTotalCart = () => {
  return cart.reduce((acc, value) => {
    return acc + Number(value.bid) * value.quantity;
  }, 0);
};

const showCartTotal = () => {
  total.innerHTML = `${getTotalCart().toFixed(2)} eTH`;
};

const disabledBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
  } else {
    btn.classList.remove("disabled");
  }
};

const renderCartBubble = () => {
  cartBubble.innerHTML = cart.reduce((acc, value) => acc + value.quantity, 0);
};

const updateCartState = () => {
  //guardar en el LS
  saveCartToLocalStorage();
  //renderizar el carrrito
  renderCart();
  // debemos mostar el total
  showCartTotal();
  // chequear botones
  disabledBtn(btnBuy);
  disabledBtn(btnDelete);
  // actualizar bubble
  renderCartBubble();
};

const addProduct = ({ target }) => {
  if (!target.classList.contains("btn-add")) return;
  // traer la data del producto
  const product = createDataProduct(target.dataset);
  //Si el producto existe en el carrito
  if (isExistingCartProduct(product.id)) {
    addUnitToProduct(product);
    showSuccesModal("Se agrego una unidad del producto al carrito");
  } else {
    //agregar el prodcuto nuevo
    createCartProduct(product);
    //damos feedback
    showSuccesModal("El producto se ha agregado al carrito");
  }
  updateCartState();
};

const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  updateCartState();
};

const substractProductUnit = (existingProduct) => {
  cart = cart.map((product) => {
    return product.id === existingProduct.id
      ? { ...product, quantity: product.quantity - 1 }
      : product;
  });
};

const handleMinusBtnEvent = (productID) => {
  const existingCartProduct = cart.find((product) => product.id === productID);

  if (existingCartProduct.quantity === 1) {
    if (window.confirm("¿Desea eliminar el producto del carrito?")) {
      removeProductFromCart(existingCartProduct);
    }
    return;
  }
  substractProductUnit(existingCartProduct);
};

const handlePlusBtnEvent = (productID) => {
  const existingCartProduct = cart.find((product) => product.id === productID);
  addUnitToProduct(existingCartProduct);
};

const handleQuantity = ({ target }) => {
  if (target.classList.contains("down")) {
    handleMinusBtnEvent(target.dataset.id);
  } else if (target.classList.contains("up")) {
    handlePlusBtnEvent(target.dataset.id);
  }
  updateCartState();
};

const resetCartItems = () => {
  cart = [];
  updateCartState();
};

const completeCartAction = (confirMsg, successMsg) => {
  if (!cart.length) return; //si el carrito no tiene nada, no hace nada
  if (window.confirm(confirMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};

const completeBuy = () => {
  completeCartAction("¿Desea Completar su compra?", "¡Gracias por tu compra!");
};

const deleteCart = () => {
  completeCartAction("¿Desea vaciar el carrito?", "Productos eliminados!");
};

/*---------------------------------------------------------------------- */
/*------------------------ INIT --------------------------- */
/*---------------------------------------------------------------------- */
const init = () => {
  renderProducts(appState.products[0]);
  showMoreBtn.addEventListener("click", showMoreProdcuts);
  categoriesContainer.addEventListener("click", applyFilter);
  cartBtn.addEventListener("click", toggleCart);
  menuBtn.addEventListener("click", toggleMenu);
  window.addEventListener("scroll", closeOnScroll);
  overlay.addEventListener("click", closeOnOverlayClick);
  barsMenu.addEventListener("click", closeOnClick);

  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showCartTotal);
  productsContainer.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  btnBuy.addEventListener("click", completeBuy);
  btnDelete.addEventListener("click", deleteCart);
  disabledBtn(btnBuy);
  disabledBtn(btnDelete);
  renderCartBubble();
};

init();
