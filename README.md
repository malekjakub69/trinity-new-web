# Trinity web

## Files

Veškeré soubory se umisťují do kořenové složky, popřípadě do složky `public`

### instructors.json

Obsahuje inforamce o všech instrutkorech. Jedná se o pole struktur, které mají následný tvar :

-   "name": Položka name obsahuje celé jméno s přezdívkou instruktora
-   "properties": Jedná se o pole vlastností a popisu instruktora (př: `["Mistr plánování", "Energický motivátor"]`)
-   "citation": Citace uvedená po vlastnostmi
-   "photo": url na foto, které je veřejně dostupné na internetu, nebo je umístěno ve složce `data/photo/`, poté uvést tuto adresu

**Příklad souboru:**

```JSON
[
    {
        "citation": "Každý krok v přírodě je krok k sobě.", // text
        "name": "Tomáš Jedno", // text
        "photo": "data/photo/hand.jpg", // text
        "properties": ["Orientační expert", "Milovník přírody"] //pole textů
    },
    {
        "citation": "Vedení je umění, ne příkaz.", // text
        "name": "Prokop Buben", // text
        "photo": "data/photo/hand.jpg", // text
        "properties": ["Strategický myslitel", "Přirozený lídr"] //pole textů
    }
]
```

### references.json

Obsahuje texty referencí s autorem

-   "text": text reference
-   "author": jméno autora, popřípadě s bydlištěm

**Příklad souboru:**

```JSON
[
    {
        "text": "Každý z nás má nekonečno možností jak obohatit svůj osobní i skautský život, stačí se jim jen otevřít a přijmout ty dobré i ty špatné věci, které přináší. Tohle a mnohé další mě naučil kurz Trinity.", // text
        "author": "Míša z Vyškova" // text
    },
    {
        "text": "Jděte do toho! Na Trinity získáte spoustu nových znalostí tak zábavnou formou, že byste se nejraději na kurz přihlásili i příští rok!", // text
        "author": "Křeček z Prahy" // text
    },
]

```

### course.json

Obsahuje inforamce o aktuálním kurzu

-   "courseYear": Rok konání nadcházejícího kurzu
-   "courseNumber": Číslo nadcházejícího ročníku,
-   "registrationStart": měsíc a den spouštění dalšího přihlášení (vše zadáno jako text. Např. říjen 2024),
-   "registrationVisible": Zda je viditelné tlačítko pro registraci na kurz (true / false)
-   "registrationUrl": Adresa pro přihlášení, nejspíše odkaz do skautisu,
-   "trinityCalc": Odkaz na trinity kalkulačku,
-   "description": Popis, který se zobrazí pod nadpisem aktuálního ročníku (např. důvod odložení dalšího ročníku o rok)

**Příklad souboru:**

```JSON
{
    "courseYear": 2025, // číslo
    "courseNumber": 8, // číslo
    "registrationStart": "září 2024", // text
    "registrationVisible": true, // true / false
    "registrationUrl": "https://www.eventbrite.com/e/2025-course-8-registration-1234567890", // text
    "trinityCalc": "http://www.quiz-maker.com/Q7Y47X5OS",
    "description": " V roce 2024 bude náš instruktorský tým čerpat síly a revidovat programy, \n aby se mohl v roce 2025 vrátit s ještě větším nadšením, chutí i novými zajímavými programy." // text
}
```
