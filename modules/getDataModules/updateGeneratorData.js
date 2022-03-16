import {
  generatorUserFirstName,
  generatorUserLastName,
  generatorImage,
  generatorUserRegisterDate,
  generatorUserNationality,
  generatorUserLocalization,
  generatorMainWrap,
} from "../domElements.js";

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

/* Tests */
if (
  generatorUserFirstName == undefined ||
  generatorUserLastName == undefined ||
  generatorImage == undefined ||
  generatorUserRegisterDate == undefined ||
  generatorUserNationality == undefined ||
  generatorUserLocalization == undefined ||
  generatorMainWrap == undefined
) {
  throw " Error ⛔⛔⛔ DOM Elements selection error in updateGeneratorData.js, please ensure correct elements assignment";
}
