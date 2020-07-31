## Syfte
Detta projektet skapades för industriprogrammet på kattegattgymnasiet. Syftet med applikationen är att ha en kundsida som ger kunden möjlighetenatt skicka in en beställning som sedan admins kan hantera och uppdatera status genom applikationen som både kunden kan se och admin. 


## För att köra applikationen
* Skapa .env fil med följande variabler
EMAILPASS="Lösenord till gmail konto för all leverera mail"
EMAILUSER= "Email för att leverar mail"
EXPIRATIONTIME="Tid innan authentication token försvinner, rekomenderatvärde = 2h"
MONGOURL="url till mongodb databas"
TOKENSECRET="Secret för JWT token"
* Starta app med npm start

## Frontend
Frontend är skapad i svelte och finns i detta [repository] (https://github.com/Hugo-Persson/T4OrderSystemFrontend/edit/master/README.md)
