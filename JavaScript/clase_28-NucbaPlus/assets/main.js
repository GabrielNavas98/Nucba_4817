import { fetchMovies, TOPRATED, UPCOMING, TRENDING } from "./request.js";

const cardsContainer = document.querySelector(".cards-container");
const prevBtn = document.querySelector(".left");
const nextBtn = document.querySelector(".right");
const pageNumber = document.querySelector(".page-number");
const filterContainer = document.querySelector(".filter-container");
const filtersButtons = document.querySelectorAll(".btn");

const ImgBaseUrl = "https://image.tmdb.org/t/p/original";

const appState = {
  page: null,
  totalPage: null,
  searchParam: TRENDING,
};

const showMovies = async () => {
  cardsContainer.innerHTML = renderLoader();
  const movies = await fetchMovies(appState.searchParam);
  appState.totalPage = movies.total_pages;
  appState.page = movies.page;
  setPaginationSate();
  renderPage(movies.results);
};

const createTemplateMovie = (movie) => {
  const { title, vote_average, poster_path, release_date } = movie;
  return `
    <div class="card">
        <img
          loading="lazy"
          src=${
            poster_path
              ? ImgBaseUrl + poster_path
              : "./assets/img/placeholder.png"
          }
          alt="pelicula"
          class="card-img"
        />
        <div class="card-popularity">${formarVoteAverage(
          vote_average
        )}% de popularidad</div>
        <div class="card-content">
          <h2>${title}</h2>
          <p>Fecha de estreno: ${formatDate(release_date)}</p>
        </div>
      </div>
  `;
};

const formarVoteAverage = (voteAverage) => {
  return Math.floor(voteAverage * 10);
};

const formatDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

const renderPage = (movies) => {
  cardsContainer.innerHTML = movies
    .map((movie) => createTemplateMovie(movie))
    .join("");
};

const loadAndShow = (movies) => {
  setTimeout(() => {
    renderPage(movies);
    filterContainer.scrollIntoView({
      behavior: "smooth",
    });
  }, 1500);
};

const changePage = async () => {
  cardsContainer.innerHTML = renderLoader();
  const movies = await fetchMovies(appState.searchParam, appState.page);
  setPaginationSate();
  loadAndShow(movies.results);
};

const nextPage = () => {
  if (appState.page === appState.totalPage) return;
  appState.page += 1;
  changePage();
};

const prevPage = () => {
  if (appState.page === 1) return;
  appState.page -= 1;
  changePage();
};

const setPaginationSate = () => {
  pageNumber.innerHTML = appState.page;
  togglePrevBtn(appState.page);
  toggleNextBtn(appState.page, appState.totalPage);
};

const togglePrevBtn = (page) => {
  if (page === 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
};

const toggleNextBtn = (page, total) => {
  if (page === total) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
};

const renderLoader = () => {
  return `
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  `;
};

const isActiveCategoryBtn = (btn) => {
  //validar si es un btn y si esta activo
  return (
    btn.classList.contains("btn") && !btn.classList.contains("btn--active")
  );
};

const parameterSelector = (filterType) => {
  return filterType === "TOPRATED"
    ? TOPRATED
    : filterType === "UPCOMING"
    ? UPCOMING
    : TRENDING;
};

const changeSearchParam = (e) => {
  if (!isActiveCategoryBtn(e.target)) return;
  const selectedParam = e.target.dataset.filter;
  appState.searchParam = parameterSelector(selectedParam);
  setActiveBtn(selectedParam);
  showMovies();
};

const setActiveBtn = (selectedParam) => {
  // console.log(filtersButtons);
  const buttons = [...filtersButtons];
  buttons.forEach((btn) => {
    if (btn.dataset.filter !== selectedParam) {
      btn.classList.remove("btn--active");
    } else {
      btn.classList.add("btn--active");
    }
  });
};

const init = () => {
  window.addEventListener("DOMContentLoaded", showMovies);
  nextBtn.addEventListener("click", nextPage);
  prevBtn.addEventListener("click", prevPage);
  filterContainer.addEventListener("click", changeSearchParam);
};
init();
