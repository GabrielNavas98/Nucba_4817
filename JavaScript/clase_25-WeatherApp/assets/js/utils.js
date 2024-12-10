export const isEmptyInput = (input) => {
  return input.value.trim() === "";
};

export const getCityData = (data) => {
  return {
    cityName: data.name,
    imageIcon: data.weather[0].icon,
    weatherInfo: data.weather[0].description,
    temp: roundNumber(data.main.temp),
    cityST: roundNumber(data.main.feels_like),
    tempMax: roundNumber(data.main.temp_max),
    tempMin: roundNumber(data.main.temp_min),
    humidity: data.main.humidity,
  };
};

export const isInvalidInput = (city) => {
  return !city.id;
};

const roundNumber = (number) => {
  return Math.round(number);
};
