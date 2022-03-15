import { getData } from "./modules/getData.js";
import { generatorButton } from "./modules/domElements.js";

generatorButton.addEventListener("click", getData);
