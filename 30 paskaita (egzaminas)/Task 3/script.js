/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';

const output = document.getElementById("output");
const btn = document.getElementById("btn");
 btn.addEventListener('click', () => {
	fetch(ENDPOINT)
 		.then((response) => {
 			return response.json();
		})
		.then((data) => {
      output.innerHTML = "";
      const divEl = document.createElement('div');
			data.forEach((user) => {
				const login = document.createElement("div");
				const img = document.createElement('img');
        		img.style.height = "200px";    
        		output.style.fontSize = "25px"
        		login.textContent = user.login;
 				img.src = user.avatar_url;
 				divEl.append(login);
 				divEl.append(img);
 			});
 			output.append(divEl);
 		})
 		.catch((res) => {
      output.innerHTML = 'Api' + res.status;
		});
 });