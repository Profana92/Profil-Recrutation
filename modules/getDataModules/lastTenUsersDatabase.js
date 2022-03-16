export { lastTenUsersDatabase };
let lastTenUsers = [];
let generatorLink = document.querySelector("a");

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

/* Tests */
if (generatorLink == undefined) {
  throw " Error ⛔⛔⛔ DOM Element selection error in lastTenUsersDatabase.js";
}
