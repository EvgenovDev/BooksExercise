'use strict';

let book = document.querySelectorAll(".book");
let modal = document.querySelector(".adv");
let titleBook = document.querySelectorAll(".book > h2 > a");
let li = document.querySelectorAll(".book > ul > li");
let chapter = document.createElement ("li");
let list6 = document.querySelector(".book:nth-child(3) > ul");
let list6Li = document.querySelectorAll(".book:nth-child(3) > ul > li");

chapter.textContent = "Глава 8: За пределами ES6";
list6.append(chapter);
list6Li[9].before(chapter);

document.body.style.backgroundImage = "url(/image/you-dont-know-js.jpg)";
modal.style.display = "none";
titleBook[4].textContent = "Книга 3. this и Прототипы Объектов";

book[0].before(book[1]);
book[0].after(book[4]);
book[4].after(book[3]);
book[5].after(book[2]);

li[2].before(li[3]);
li[3].after(li[6]);
li[6].after(li[8]);	
li[10].before(li[2]);
li[47].after(li[55]);
li[50].after(li[48]);
li[54].before(li[51]);