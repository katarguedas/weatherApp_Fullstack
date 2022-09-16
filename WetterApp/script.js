// const fetch = (url) => import('node-fetch').then(({default: fetch}) => fetch(url));


// let city;

// -------- EVENT: Eingabe der Stadt -----------------------------------------------
// ---------Abruf der Wetterdaten erfolgt erst nach der Eingabe der Stadt  ----------

// const input = document.querySelector('input');
// input.addEventListener('input', start);
const element = document.getElementById("sendData");
element.addEventListener("click", start);

function start() {
    getData();
    setInterval(getData, 12000);
}
// -----------------------------------------------

const getCity = () => {

    cityName = document.getElementsByTagName("input")[0].value;         // Eingabe auslesen:
    console.log("City:", cityName);
    return cityName;
}

async function getData() {

    getCity();

    const url1 = "http://localhost:3001/weather/"
    const url = `${url1}${encodeURI(cityName)}`
    console.log("------");
    console.log("URL:", url);

    let response = await fetch(url);
    const data = await response.json();

    if ((data.cod === "404") || (data.message == "city not found")) {
        const collection = document.getElementsByTagName("h1");
        collection[0].innerHTML = "Für diesen Ort gibt es keine Daten";
        collection[0].style.color = "#ebb94f";
    } else {
        // console.log("Daten:", data);
        // console.log("Stadt:", data.name);
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temperature").innerText = data.main.temp.toFixed(1);
        document.querySelector(".tempfe").innerText = data.main.feels_like.toFixed(1);
        document.querySelector(".humidity").innerText = data.main.humidity;
        let icon = data.weather[0].icon;
        let imgSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        document.querySelector("img").src = imgSrc;

        const date = new Date();
        const Datum = date.toDateString();
        console.log(Datum);
        const Zeit = date.toTimeString();
        document.querySelector(".time").innerText = `Am ${Datum} um ${Zeit}`;
    }
}







// https://openweathermap.org/weather-conditions

