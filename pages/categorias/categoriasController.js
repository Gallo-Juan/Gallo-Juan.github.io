import { NavBar } from "/components/NavBar.js"
import { cardComponents } from "/components/card.js"


let cardContainer=document.getElementById('card-container')
let navContainer = document.querySelector('header')
let pageName=document.getElementById('pageName').value
let title=document.getElementById('title')


window.addEventListener('load',() => {
    navContainer.innerHTML=NavBar
    title.textContent=pageName
    document.title=`${pageName} - Tu Rincon Online` 

    fetch('/productos.json').then(res=>res.json()).then(data=>{
        const filtro=data.filter(e=>e.category===pageName) 
        const cards=filtro.map(e=>{
            return cardComponents(e.image,e.title,e.description,e.price)      
        }).join('')        
        cardContainer.innerHTML=cards
    })
})
