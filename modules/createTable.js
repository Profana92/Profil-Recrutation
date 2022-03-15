export { createTable };

let tableBody = document.querySelector("tbody");
let storageObject = JSON.parse(localStorage.getItem("lastTenUsers"));

function createTable() {
  storageObject.forEach((element) => {
    let date = new Date(element[7]);
    date = date.toLocaleDateString().split(".");
    date = date[2] + "." + date[1] + "." + date[0];
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
