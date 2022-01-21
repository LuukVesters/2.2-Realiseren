/*
    Auteur: Luuk Vesters
    Datum: 23-11-2021
    Onderwerp: 2.2
*/
var welcome = prompt("Wat is uw naam?");
document.getElementById("welcome").innerHTML = "Welkom " + welcome + "!"

var menuList = ["Home", "Shop", "365", "Xbox", "Support"];

document.getElementById("menu").innerHTML = 
"<li><a href=\"" + "index.html" + "\">" + menuList[0] + "</a></li>" +
"<li><a href=\"pages/" + menuList[1] + ".html\">" + menuList[1] + "</a></li>" +
"<li><a href=\"pages/" + "microsoft365.html" + "\">" + menuList[2] + "</a></li>" +
"<li><a href=\"pages/" + menuList[3] + ".html\">" + menuList[3] + "</a></li>" +
"<li><a href=\"pages/" + menuList[4] + ".html\">" + menuList[4] + "</a></li>";