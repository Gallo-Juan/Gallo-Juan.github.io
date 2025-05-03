import { NavBar } from "../../components/NavBar.js"
import { cardComponents } from "../../components/card.js"


let cardContainer=document.getElementById('card-container')
let navContainer = document.querySelector('header')
let pageName=document.getElementById('pageName').value
let title=document.getElementById('title')

let cardData=[
    {image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',title:'Mochila de categoria',description:'Mochila azul para cualquier uso', price:'25000'},
    {image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',title:'Mochila de categoria',description:'Mochila azul para cualquier uso', price:'25000'},
    {image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',title:'Mochila de categoria',description:'Mochila azul para cualquier uso', price:'25000'}
]

window.addEventListener('load',() => {
    navContainer.innerHTML=NavBar
    title.textContent=pageName
    document.title=`${pageName} - Tu Rincon Online`   
        const cards=cardData.map(e=>{
            return cardComponents(e.image,e.title,e.description,e.price)      
        }).join('')        
        cardContainer.innerHTML=cards
})