let tableHeaders = document.querySelectorAll("th");
console.log(tableHeaders);
let i = 0;
tableHeaders.forEach((th) => {
  th.addEventListener("click", () => {
    sortTable(th.cellIndex);
  });
});

let tableBody = document.querySelector("tbody");
let storageObject = JSON.parse(localStorage.getItem("lastTenUsers"));
console.log(storageObject);

function createTable() {
  storageObject.forEach((element) => {
    let date = new Date(element[7]);
    date = date.toLocaleDateString().split(".");
    date = date[2] + "." + date[1] + "." + date[0];
    console.log(date);
    const tableBodyRow = document.createElement("tr");
    tableBodyRow.innerHTML = `
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td>${element[3]}</td>
    <td>${date}</td>
    </tr>`;
    tableBody.appendChild(tableBodyRow);
  });
}

createTable();

function sortTable(n) {
  let table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;

  table = document.getElementById("userTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      let xContent = isNaN(x.innerHTML)
        ? x.innerHTML.toLowerCase() === "-"
          ? 0
          : x.innerHTML.toLowerCase()
        : parseFloat(x.innerHTML);
      let yContent = isNaN(y.innerHTML)
        ? y.innerHTML.toLowerCase() === "-"
          ? 0
          : y.innerHTML.toLowerCase()
        : parseFloat(y.innerHTML);
      if (dir == "asc") {
        if (xContent > yContent) {
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (xContent < yContent) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
