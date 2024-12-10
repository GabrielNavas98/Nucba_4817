import { requestCity } from "./request.js";
import { getCityData, isEmptyInput, isInvalidInput } from "./utils.js";

const form = document.getElementById("form");
const inputCity = document.querySelector(".search-input");
const cardContainer = document.querySelector(".card-container");
const searchMsg = document.querySelector(".search-msg");

const createCityTemplate = (cityData) => {
  const {
    cityName,
    cityST,
    humidity,
    imageIcon,
    temp,
    tempMax,
    tempMin,
    weatherInfo,
  } = cityData;

  return `
        <div class="weather-card animate">
            <div class="weather-info-container">
              <h2 class="weather-title">${cityName}</h2>
              <p class="weather-description">${weatherInfo}</p>
              <div class="weather-temp-container">
                <span class="weather-temp">${temp} °</span>
                <span class="weather-st">${cityST} ° ST</span>
              </div>
            </div>
            <div class="weather-img-container">
              <img src="./assets/img/${imageIcon}.png" alt="weather image" />
            </div>
            <div class="weather-extra-container">
              <div class="weather-minmax-container">
                <span class="weather-span"
                  ><i class="fa-solid fa-arrow-up-long"></i>Max: ${tempMax} º</span
                >
                <span class="weather-span"
                  ><i class="fa-solid fa-arrow-down-long"></i>Min: ${tempMin} º</span
                >
              </div>
              <span class="weather-humidity">${humidity}% Humedad</span>
            </div>
        </div>
    `;
};

const renderCity = (cityData) => {
  cardContainer.innerHTML = createCityTemplate(cityData);
};

const changeMsg = (cityName) => {
  searchMsg.innerHTML = `Así está el clima en ${cityName}, ¿Queres ver el clima en otra ciudad? `;
};

const searchCity = async (e) => {
  e.preventDefault();

  if (isEmptyInput(inputCity)) {
    alert("Por favor ingresa una ciudad");
    return;
  }
  const fetchedCity = await requestCity(inputCity.value.trim());

  if (isInvalidInput(fetchedCity)) {
    alert("La ciudad no existe...");
    form.reset();
    return;
  }
  //   console.log(fetchedCity); //=> data de la api
  //   console.log(getCityData(fetchedCity)); // data manipulada por nosotrs XD
  renderCity(getCityData(fetchedCity));
  changeMsg(fetchedCity.name);
  form.reset();
};

const init = () => {
  form.addEventListener("submit", searchCity);
};
init();
