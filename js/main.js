let generatorButton = document.querySelector("button");
let generatorUserFirstName = document.querySelector(".user__firstname");
let generatorUserLastName = document.querySelector(".user__lastname");
let generatorImage = document.querySelector("img");
let generatorUserRegisterDate = document.querySelector(".user__registerdate");
let generatorUserNationality = document.querySelector(".user__nationality");
let generatorUserLocalization = document.querySelector(".user__location");
let generatorMainWrap = document.querySelector(".wrap");
let generatorHideAdressCheckbox = document.querySelector(
  "#hideadress__checkbox"
);
let generatorLink = document.querySelector("a");
let o = JSON.parse(localStorage.getItem("lastTenUsers"));
console.log(o);
let lastTenUsers = [];
let url = new URL(
  "https://randomuser.me/api/?inc=name,nat,registered,picture,location"
);

generatorButton.addEventListener("click", getData);

async function getData() {
  if (generatorHideAdressCheckbox.checked)
    generatorUserLocalization.classList.add("hidden");
  else generatorUserLocalization.classList.remove("hidden");
  const res = await fetch(url);
  const response = await res.json();
  lastTenUsersDatabase(response);
  updateGeneratorData(response);
}

function lastTenUsersDatabase(response) {
  if (lastTenUsers.length >= 10) {
    generatorLink.classList.remove("hidden");
    lastTenUsers.shift();
  }
  lastTenUsers.push([
    response.results[0].name.first,
    response.results[0].name.last,
    response.results[0].picture.large,
    response.results[0].location.country,
    response.results[0].nat,
    response.results[0].location.city,
    response.results[0].location.state,
    response.results[0].registered.date,
  ]);
  localStorage.setItem("lastTenUsers", JSON.stringify(lastTenUsers));
}

function updateGeneratorData(response) {
  function showOrHideGeneratorData() {
    if (generatorMainWrap.classList.contains("hidden"))
      generatorMainWrap.classList.toggle("hidden");
  }
  showOrHideGeneratorData();
  generatorUserFirstName.innerText = response.results[0].name.first;
  generatorUserLastName.innerText = response.results[0].name.last;
  generatorImage.src = response.results[0].picture.large;
  let date = new Date(response.results[0].registered.date);
  generatorUserRegisterDate.innerText = date.toLocaleString();
  generatorUserNationality.innerText =
    response.results[0].location.country + " (" + response.results[0].nat + ")";
  generatorUserLocalization.innerText =
    response.results[0].location.city +
    ", " +
    response.results[0].location.state;
}
