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
const fireHoodieProductImgElem = document.querySelector('main > article.art-2 > figure');
fireHoodieProductImgElem.style.backgroundColor = 'rgb(228, 104, 104)';

const contactAddressElem = document.querySelector('footer > section > article:nth-of-type(2) > p');
// 7. Byt ut adressen på sidan.
contactAddressElem.innerHTML = 'Sinus skateboards<br>Birger Jarlsgatan 58<br>114 29 Stockholm';

// 8. Byt färg på samtliga <p>.
document.querySelectorAll('p').forEach( pElem => {
    pElem.style.color = 'rgb(125, 98, 56)';
});

// 9. Ändra text på samtliga knappar till add to cart.
document.querySelectorAll('button').forEach( pElem => {
    pElem.textContent = 'add to cart';
});

// 10. Lägg till classen active på menyalternativet home.
homeHeaderButtonElem.classList.add('active');

// 11. Ta bort classen logo på logotypen.
// document.querySelector('img.logo').classList.remove('logo');

/*
    ADD NEW CONTENT
*/

// 12. Lägg till ett nytt menyalternativ.
const aboutLinkElem = document.createElement('a');
aboutLinkElem.href = '#';
aboutLinkElem.textContent = 'About';
const navElem = document.querySelector('header > nav');
const navImgElem =  document.querySelector('header > nav > img');
navElem.insertBefore(aboutLinkElem, navImgElem);
const footElem = document.querySelector('footer > section > article:first-of-type');
footElem.appendChild(aboutLinkElem.cloneNode(true));

/* 13. Lägg till en ny produkt med följande info.
--------------------------------------------------------------------------
-- tagg    -    beskrivning                                             --
--------------------------------------------------------------------------
-- img     -    hoodie-forrest.png                                      --
-- h2      -    Sinus Hoodie                                            --
-- h3      -    Forrest                                                 --
-- p       -	Lorem ipsum dolor sit amet                              --
--              consectetur adipisicing elit. Saepe, dolores.           --
--------------------------------------------------------------------------
*/
// const productElem = document.createElement('article');
// productElem.classList.add('art-4');

// const productFig = document.createElement('figure');
// const productImg = document.createElement('img');
// productImg.src = 'img/hoodie-forrest.png';
// productFig.appendChild(productImg);

// const productHeading2 = document.createElement('h2');
// productHeading2.textContent = 'Sinus Hoodie';

// const productHeading3 = document.createElement('h3');
// productHeading3.textContent = 'Forrest';

// const productDesc = document.createElement('p');
// productDesc.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.';

// const productBuyButtton = document.createElement('button');
// productBuyButtton.textContent ='add to cart';

// productElem.append(productFig, productHeading2, productHeading3, productDesc, productBuyButtton);
// document.querySelector('main').appendChild(productElem);

document.querySelector('main').insertAdjacentHTML('beforeend',
    "<article class='art-4'>\
        <figure><img src='img/hoodie-forrest.png'></figure>\
        <h2>Sinus Hoodie</h2>\
        <h3>Forrest</h3>\
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>\
        <button>add to cart</button>\
    </article>"
);

/* 

    EVENTS

*/
// 14. Lyssna efter ett klick på logotypen (.logo). När den registrerar ett klick skall du console.log:a "found you!";
document.querySelector('.logo').addEventListener('click', (event) => {
    console.log("found you!");
});

// 15. Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick skall du console.log:a "Hi, Im article Fire / Ash / Water".
document.querySelectorAll('main > article').forEach( (article) => {
    article.addEventListener("click", (event) => {
        const articleType = article.querySelector('h3').textContent;
        console.log(`Hi, I'm article ${articleType}`);
    });
});




