import { NavBar } from "../../components/NavBar.js"


let navContainer = document.querySelector('header')
let pageName=document.getElementById('pageName').value
let title=document.getElementById('title')



window.addEventListener('load',() => {
    navContainer.innerHTML=NavBar
    title.textContent=pageName
    document.title=`${pageName} - Tu Rincon Online`   
        
})