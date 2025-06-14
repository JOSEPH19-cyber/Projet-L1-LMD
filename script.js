//Menu hambuger
const openList = document.querySelector(".hamburger-icon");
const listNav = document.querySelector(".hamburger-list");
openList.addEventListener("click", Menu);
function Menu(){
    listNav.classList.toggle("open");
}