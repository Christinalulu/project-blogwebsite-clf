let searchBtn = document.querySelector("#search-icon");
let searchBar = document.querySelector(".search-bar-container");

searchBtn.addEventListener("onclick", () => {
  searchBtn.classList.toggle("e002");
  searchBar.classList.toggle("active");
});
