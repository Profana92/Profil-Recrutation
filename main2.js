import { createTable } from "./modules/createTable.js";
import { sortTable } from "./modules/sortTable.js";

createTable();

let tableHeaders = document.querySelectorAll("th");
tableHeaders.forEach((th) => {
  th.addEventListener("click", () => {
    sortTable(th.cellIndex);
  });
});
