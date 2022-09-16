const express = require('express')
const app = express()
const { DateTime } = require('luxon')
const cors = require('cors')
const fetch = (url) => import('node-fetch').then(({ default: fetch }) => fetch(url));
const port = 3001;

//------------------------------------------------------------
// Uhrzeit:
const dt = DateTime.now();
const time = dt.toLocaleString(DateTime.TIME_SIMPLE); 

// Variablen für Wetterabfrage:
const units = "metric";
const urlConst = "https://api.openweathermap.org/data/2.5/weather?";
const id = "fd85415ecb728585e2baaa8a4da00e06";

// --------------- MIDDLEWARE: -------------------------------

app.use(cors())

// -------------------ROUTEN:--------------------------------

// Uhrzeit:
app.get('/uhrzeit', (req, res) => {
    res.status(200).send(time)
    // res.send(time)
})


// Weather:
app.get('/weather/:city?', async (req, res) => {       // Function als 'async'
    // const cityName = req.params.city || "Berlin";
    const cityName = req.params.city;
    // let url = `${urlConst}q=${encodeURI(city)}&units=${units}&appid=${id}`;
    let url = `${urlConst}q=${encodeURI(cityName)}&units=${units}&appid=${id}`;
    // console.log(url);

    let response = await fetch(url);
    const data = await response.json();
    
    // console.log("Daten:", data);
    res.status(200).send(data);
  })


  app.get('/health-ckeck', (req, res) => {
    res.status(200).send('OK. Alles gut.')
  })

// Übungen / Beispiele:
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/test', (req, res) => {
    res.send('Test!')
})
app.get('/dim', (req, res) => {
    const result = 1+1;                 // Integer können nicht ausgegeben werden
    res.status(200).send(result.toString())     // <=   diese Form bevorzugen
})


// -------------ENDE DER ROUTEN---------------------------------

// ----------START DES SERVERS:---------------------------------

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
