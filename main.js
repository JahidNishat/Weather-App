const inputTxt = document.querySelector('.inputTxt');
var button = document.querySelector('.btn');
const showData = document.querySelector('.showData');

//Get API_Key
const API_key = "30681a08ff7e01e4c7c6b3a70ea53556";

button.addEventListener('click',() => {
    //Get Input Value
    const cityInput = inputTxt.value;
    //console.log(cityInput) ;

    //Fetch Through Get API
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&APPID=${API_key}`)
    .then(res => res.json())
    .then(data => {
        //console.log(data);
        //When Fill Input Field Then Clear Input Field
        inputTxt.value = " ";

        //Show All Data Value
        showData.innerHTML = `
                                <ul>
                                    <li class="desc">${data.weather[0].description}</li>
                                    <li class="city">${data.name}</li>
                                    <li class="temp">${data.main.temp}°c</li>
                                </ul>
                                `
    })
})