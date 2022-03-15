import { getData } from "./modules/getData.js";
import { generatorButton } from "./modules/DomElements.js";

generatorButton.addEventListener("click", getData);
