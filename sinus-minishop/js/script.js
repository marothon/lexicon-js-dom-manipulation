/*
    DOM SELECTION
*/

// 1.* Byt namn på första hoodien från Ash till Potato.
const firstHoodieTitleElem = document.querySelector('main > article.art-1 > h3');
firstHoodieTitleElem.textContent = 'Potato';

// 2. Byt namn på Home till Start.
const homeHeaderButtonElem = document.querySelector('header > nav > a:nth-child(1)');
homeHeaderButtonElem.textContent = 'Start';

const homeFooterButtonElem = document.querySelector('footer > section > article:first-of-type > a:first-of-type');
homeFooterButtonElem.textContent = 'Start';

// 3. Byt namn på Contact till Mail Us.
const contactHeaderButtonElem = document.querySelector('header > nav > a:nth-child(3)');
contactHeaderButtonElem.textContent = 'Mail Us';

const contactFooterButtonElem = document.querySelector('footer > section > article:first-of-type > a:nth-of-type(3)');
contactFooterButtonElem.textContent = 'Mail Us';

// 4. Byt ut informationen om Sinus Hoodie - Fire.
const fireHoodieDescElem = document.querySelector('main > article.art-2 > p');
fireHoodieDescElem.textContent = 'Upplev värmen med vår röda "Fire" hoodie. Tillverkad av mjuk bomull, erbjuder den komfort och stil i ett. Perfekt för kalla dagar eller kvällar.';

// 5. Byt bakgrundsfärg och text på en knapp.
const fireHoodieBuyButtonElem = document.querySelector('main > article.art-2 > button');
fireHoodieBuyButtonElem.style.backgroundColor = 'rgb(236, 49, 49)';
fireHoodieBuyButtonElem.style.color = 'rgb(255, 235, 81)'

// 6. Byt bakgrundsfärg på någon av produkterna.

// 7. Byt ut adressen på sidan.

// 8. Byt färg på samtliga <p>.

// 9. Ändra text på samtliga knappar till add to cart.

// 10. Lägg till classen active på menyalternativet home.

// 11. Ta bort classen logo på logotypen.

/*
    ADD NEW CONTENT
*/

// 12. Lägg till ett nytt menyalternativ.

/* 13. Lägg till en ny produkt med följande info.
------------------------------------------------------------------------------------------
-- tagg    -    beskrivning
-- img     -    hoodie-forrest.png
-- h2      -    Sinus Hoodie
-- h3      -    Forrest
-- p       -	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.
------------------------------------------------------------------------------------------
*/

/* 

    EVENTS

*/
// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";

// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".




