import {
  generatorUserLocalization,
  generatorHideAdressCheckbox,
} from "./domElements.js";
import { lastTenUsersDatabase } from "./getDataModules/lastTenUsersDatabase.js";
import { updateGeneratorData } from "./getDataModules/updateGeneratorData.js";
export { getData };

let url = new URL(
  "https://randomuser.me/api/?inc=name,nat,registered,picture,location"
);

async function getData() {
  if (generatorHideAdressCheckbox.checked)
    generatorUserLocalization.classList.add("hidden");
  else generatorUserLocalization.classList.remove("hidden");
  const res = await fetch(url);
  const response = await res.json();
  lastTenUsersDatabase(response);
  updateGeneratorData(response);
}
