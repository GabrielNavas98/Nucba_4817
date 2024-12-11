const key = "b5ea2e752dfc454d8082ebc2abaa530a";
// https://api.rawg.io/api/games?key=b5ea2e752dfc454d8082ebc2abaa530a&page_size=40

// fetch(
//   "https://api.rawg.io/api/games?key=b5jhkga2e752dfc454d8082ebc2abaa530a&page_size=40"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data.results))
//   .catch((error) => console.log(error));

//ASYNC / AWAIT

export const requestGame = async () => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${key}&page_size=40`
    );
    const data = await response.json();
    // console.log(data.results);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const requestDetail = async (id) => {
  try {
    const response = await fetch(
      `https://api.rawg.io/api/games/${id}?key=${key}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// requestGame();
