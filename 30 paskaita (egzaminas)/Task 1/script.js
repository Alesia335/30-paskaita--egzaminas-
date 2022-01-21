/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;


------------------------------------------------------------------- */


const form = document.querySelector('form')

form.addEventListener('submit', (event)=>{
    event.preventDefault();

    const value = document.getElementById('search').value
    const lb = value * 2.2046;
    const g = value * 0.0010000;
    const oz = value * 35.274;

    document.getElementById('svaras').textContent= lb;
    document.getElementById('gramas').textContent= g;
    document.getElementById('uncija').textContent= oz;
})

