/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const output = document.getElementById("output");

fetch (ENDPOINT)
    .then((res)=> res.json())
    .then((data)=>{
        data.forEach((car)=>{
            const brandType = document.createElement('div');
            const brand = document.createElement('h1');
            const models = document.createElement('h4');
            brand.style.paddingBottom = '10px';
            brand.style.textAlign = 'center';
            brandType.style.paddingLeft = '20px';
            brandType.style.borderBottom = '3px solid green';
            brand.textContent = car.brand;           
            models.style.paddingBottom = '15px';
            models.style.color= '#333333';
            models.style.textAlign = 'center';
            models.textContent = car.models;
            brandType.append(brand);
            brandType.append(models);
            output.append(brandType);

        })
    })