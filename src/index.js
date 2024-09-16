import "./styles.css";
import homeContent from "./home/home.js";
import menuContent from "./menu/menu.js";
import aboutContent from "./about/about.js";

const main = document.querySelector(".main-content");
const links = document.querySelectorAll(".nav-link");

main.innerHTML = homeContent;

links.forEach(link => {
    link.addEventListener("click", (e) => {
        links.forEach(link => link.querySelector("button").classList.remove("selected"));
        e.target.classList.add("selected");

        if (e.target.id === "home-btn") {
            main.innerHTML = homeContent;
        } else if (e.target.id === "menu-btn") {
            main.innerHTML = menuContent;
        } else {
            main.innerHTML = aboutContent;
        }
    });
});