# Wetter App

Der Dienst OpenWeather Map stellt über eine API Schnittstelle kostenlos weltweite Wetterdaten bereit.
Mit Hilfe der Fetch API Methode lassen sich diese Daten abfragen und in eine eigene kleine Webseite integrieren.

## API Key

Zur Nutzun der API ist ein API Key erforderlich. Dieser lässt sich über eine Registrierung auf der Seite generieren: https://home.openweathermap.org/users/sign_up   
Alternativ kann der folgend Key genutzt werden: `94f71069f647fb7800be2f7f846f4db0`

## Aufgaben

1. Passe die Variable **city** auf eine Stadt deiner Wahl an.

2. Zur Abfrage der aktuellen Wetterdaten einer Stadt muss folgende URL abgefragt werden:
`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`   
Um Fehler bei Umlaufen im Städtnamen zu vermeiden, sollte die Stadt (String) mit der Methode `encodeURI()` angepasst werden.
Weiter Details zur API Abfrage findet ihr auch hier: https://openweathermap.org/current   
Nutze die Fetch API Methode um die Daten abzufragen und anschließend mit **json()** zu verarbeiten, orientiere dich hierbei an dem Beispiel zur CatAPI.

3. Ersetze die jeweiligen Felder der HTML Vorlage mit den Informationen aus der API Rückmeldung. Weiter Informationen zu den Icons findest du auf folgender Seite: https://openweathermap.org/weather-conditions   
Zusätzlich soll die Uhrzeit der Daten aktualisiert werden. Hierfür bietet JavaScript vordefinierte Methoden.

4. Implementiere eine Funktion, um die Daten alle 10 Sekunden zu aktualisieren.