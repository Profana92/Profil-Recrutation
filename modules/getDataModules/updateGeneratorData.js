import {
  generatorUserFirstName,
  generatorUserLastName,
  generatorImage,
  generatorUserRegisterDate,
  generatorUserNationality,
  generatorUserLocalization,
  generatorMainWrap,
} from "../DomElements.js";

export { updateGeneratorData };

function updateGeneratorData(response) {
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

function showOrHideGeneratorData() {
  if (generatorMainWrap.classList.contains("hidden"))
    generatorMainWrap.classList.toggle("hidden");
}
