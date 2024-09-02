const countriesList = ['Austria', 'Bolgary' , 'China' , 'Dinmark' , 'France' ,'Germany', 'India' , 'Iran' , 'Monaco' , 'Nigeria' , 'Oman' , 'Poland' , 'Rassia' , 'Siria' , 'Turkey' , 'USA' , 'UK' , 'Zambia'];
const myInput = document.getElementById('myInput');
const selectCountry = document.getElementById('selectCountry');
const searchCountry = document.getElementById('searchCountry');
const countryName = document.getElementById('countryName');

myInput.addEventListener('keydown' , searchCountryName) // when you press one the keys on the keyboard, it must invite the function of 'searchCountryName' 


function selectCountryFunction(){
    if (searchCountry.style.display == 'none') {
        searchCountry.style.display = 'flex';
    }

    else {
        searchCountry.style.display = 'none';
    }
}


function insertCountryToList(){
        countriesList.forEach(c => {
        let cName = document.createElement('p');
        cName.innerHTML = c;
        countryName.appendChild(cName);
    })
}

insertCountryToList(); // invite it because we want to implement a function that wants to do a function or action on the HTML for ex. add some country names


function searchCountryName(){
    let searchFor = myInput.value;
    // when we want to take all of the children of a list , we use childNodes
    countryName.childNodes.forEach(child => {
        if (child.innerHTML) {
            if (child.innerHTML.includes(searchFor)) {
                child.style.display = 'flex';
            }
    
            else {
                child.style.display = 'none';
            }
        }
    })
    // we don not need to invite it because there is condition in this function.
}