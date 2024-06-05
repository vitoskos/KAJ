
# RaceTracker
> **🍲 _Tvůj závodní deník._**

> **🔖 Aktuální verze:** 0.1.0

## Popis:

"RaceTracker" je praktická webová aplikace navržená pro zapisování vašich závodů.

Ať už se ti závod povede nebo ne, zapiš si ho, můžeš se tak zpětně koukat na své výsledky!

Aplikace postavena na moderních technologiích HTML5, CSS a JavaScript, 
nabízí jednoduché a užitečné funkce pro zapisování a prohlížení závo.

![home.png](./README_IMG/home.png)

*RaceTracker, hlavní stránka*

### Objevování jídel
- Aplikace integruje Meal API, konkrétně toto api: https://www.themealdb.com/api.php
- Člověk může na základě náhodného výběru dostat vždy nový recept hned na hlavní straně.
- Recept si pak může rovnou uložit do svých oblíbených, které jsou drženy v LocalStorage.

### Kategorie jídel
- Široká nabídka různých kategorií.
![categories.png](README_IMG/categories.png)

  *RaceTracker, příspěvky*


- Možnost procházení závodů podle jména, data, místa a umístění
  

### Ukládání receptů do oblíbených
- Uživatel si bude moct uložit oblíbené recepty do oblíbených pro rychlejší přístup.
- Recepty si následně bude moct otevřít v záložce "Favourites".
  ![favourites.png](README_IMG/favourites.png)

   *Culinary Companion, oblíbené položky*

### Detail jídla a recept
- Detail jídla obsahuje velký obrázek hotového pokrmu, ingredience, instrukce a případné video.
- Uživatel může recept sdílet a přidat, popř. odebrat z oblíbených.
  ![detail.gif](README_IMG/detail.gif)



## Požadavky semestrální práce:

| Kategorie                         | Popis                                                                                                   | Body   | email                   |                                                                                                                 |
|-----------------------------------|---------------------------------------------------------------------------------------------------------|--------|-------------------------|-----------------------------------------------------------------------------------------------------------------|
|                                   |                                                                                                         |        | cechvit1 ed fel cvut cz |                                                                                                                 |
| Dokumentace                       |                                                                                                         | **1**  | **1**                   |                                                                                                                 |
|                                   | cíl projektu, postup, popis funkčnosti, komentáře ve zdrojovém kódu                                     | 1      | 1                       | Toto README.MD                                                                                                  |
|                                   |                                                                                                         |        |                         |                                                                                                                 |
| HTML 5                            |                                                                                                         | **10** | **10**                  |                                                                                                                 |
| Validita                          | Validní použití HTML5 doctype                                                                           | 1      | 1                       | Kontrolováno.                                                                                                   |
| Validita                          | Fungující v moderních prohlíčečích<br>v posledních vývojových verzích<br>(Chrome, Firefox, Edge, Opera) | 2      | 2                       | Kontrolováno na Chrome, Firefox, Safari, Edge                                                                   |
| Semantické značky                 | správné použití sémantických značek<br>(section, article, nav, aside, ...)                              | 1      | 1                       | Použito nav, article, section, footer                                                                           |
| Grafika - SVG / Canvas            |                                                                                                         | 2      | 2                       | Nehodí se na můj projekt, SVG použito pouze jako ikona běžce                                                    |
| Média - Audio/Video               |                                                                                                         | 1      | 1                       | Nehodí se na můj projekt, audio při ukládání závodu                                                             |                                                   |
| Formulářové prvky                 | Validace, typy, placeholder, autofocus                                                                  | 2      | 2                       | Formulář k novému závodu.                                                                                       |
| Offline aplikace                  | využití možnosti fungování stránky bez Internetového připojení<br>(viz sekce Javascript)                | 1      | 1                       |                                                                                                                 |
|                                   |                                                                                                         |        |                         |                                                                                                                 |
| CSS                               |                                                                                                         | **8**  | **8**                   |                                                                                                                 |
| Pokročilé selektory               | použití pokročilých pseudotříd a kombinátorů                                                            | 1      | 1                       |                                                                                                                 |
| Vendor prefixy                    |                                                                                                         | 1      | 1                       |                                                                                                                 |
| CSS3 transformace 2D/3D           |                                                                                                         | 2      | 2                       | Použití scale.                                                                                                  |
| CSS3 transitions/animations       |                                                                                                         | 2      | 2                       | Při každém překliknutí se používá transition.                                                                   |
| Media queries                     | stránky fungují i na mobilních zařízeních i jiných (tedy nerozpadají se)                                | 2      | 2                       | Stránky jsou plně kompatibilní s mobilním rozvržením pomocí media queries.                                      |
|                                   |                                                                                                         |        |                         |                                                                                                                 |
| Javascript                        |                                                                                                         | **12** | **12**                  |                                                                                                                 |
| OOP přístup                       | prototypová dědičnost, její využití, jmenné prostory                                                    | 2      | 2                       |                                                                                                                 |
| Použití JS frameworku či knihovny | použití a pochopení frameworku či knihovny jQuery, React, Vue ..                                        | 1      | 1                       |                                                                                                                 |
| Použití pokročilých JS API        | využití pokročilých API (File API, Geolocation, Drag & Drop, LocalStorage, Sockety, ...)                | 3      | 3                       | Implementován Local storage na ukládání závodů                                                                  |
| Funkční historie                  | posun tlačítky zpět/vpřed prohlížeče - pokud to vyplývá z funkcionatilty (History API)                  | 2      | 2                       |                                                                                                                 |
| Ovládání medií                    | použití Média API (video, zvuk), přehrávání z JS                                                        | 1      | 1                       | Nehodí se na můj projekt                                                                                        |
| Offline aplikace                  | využití JS API pro zjišťování stavu                                                                     | 1      | 1                       |                                                                                                                 |
| JS práce se SVG                   | události, tvorba, úpravy                                                                                | 2      | 2                       |                                                                                                                 |
|                                   |                                                                                                         |        |                         |                                                                                                                 |
| Ostatní                           |                                                                                                         | **5**  | **5**                   |                                                                                                                 |
| Kompletnost řešení                |                                                                                                         | 3      | 3                       |                                                                                                                 |
| Estetické zpracování              |                                                                                                         | 2      | 2                       |                                                                                                                 |
| Pozdni odevzdani                  |                                                                                                         | 0      | -3                      |                                                                                                                 |
|                                   |                                                                                                         |        |                         |                                                                                                                 |
|                                   |                                                                                                         | **36** | **36**                  |
