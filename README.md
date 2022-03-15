# Profil-Recruitment

Recruitment task - Random User Generator API

This project is a Profil-software Recruitment task. All of the tasks were completed, with several additions from my side.

The application got separated into modules imported by index.js and lastTen.js files, which both control the behavior of different pages.

The main task of this app is to fetch data and use it to create random users and store 10 of those users in localStorage. The task stated that 10 users are a minimum, so the function counts to 10, if 10 users got generated will display a button directing to another page. If the number of users will get above then, the Array shift function will delete the first value of the array to make place for a new value. This restriction is the result of the way I understood the task at first, later my perception of that subject changed, however, I decided not to change it as I think it is more complicated than just a simple Array push function.

Data fetch is done by URL class and constructor new URL, to let the possible manipulation of URL possible if needed later in the development cycle. Task stated that only data needed should be fetched, and as I understood the author it applies for not fetching the whole data from API, but just a restricted part, so URL contains: ?inc=name,nat,registered,picture,location
which according to documentation limits the result of data requests.
so it can fetch only name, nationality, registration date, picture, and current location. Instead of not fetching the location manipulation of the URL class constructor argument I decided to just not show the location by CSS display:none, as a much simpler solution. However, it can also be done with an additional function allowing to not fetch the location, as follows:

let url = new URL( urlManipulation(generatorHideAdressCheckbox.checked));  
function urlManipulation() {  
if (generatorHideAdressCheckbox.checked) return "https://randomuser.me/api/?inc=name,nat,registered,picture,location";  
else return "https://randomuser.me/api/?inc=name,nat,registered,picture";  
}

This would ensure that only data needed will be fetched. However, there would still exist a problem of error while updateGeneratorData function would want to place location.country into the element (and localSession) as it would be undefined (because did not get fetched). This problem should be solved with the ?. operator in the easier scenario or a function that would replace undefined with "no data" string. That is the most simple solution I can think of at the moment.

The table sorting function is applied to all table headers instead of as stated in the task only to 2 of them. As it can be done just for 2 of them I think it is much better to apply it to every header, as it works properly for all of them. To limit the use of this function just to columns 1 and 3 as stated in the task if statement with return no value would be used, as follows:

if (n === 1 || n == 3) return;

This piece of code placed in the first line of the sortTable function should exit out of the function if the column index (stored in n) is equal to 1 or 3.
Even if it is a very simple solution I decided not to use it because I value additional functionalities.

Application structure:
<img src="https://wojciech-marczak.pl/schematic.jpg" width="828" height="673">

Figma:
<a href="https://www.figma.com/file/ZQwHnMF3F27ITIGwVmldi0/Untitled?node-id=0%3A1">Figma design</a>
