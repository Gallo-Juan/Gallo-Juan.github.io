import { NavBar } from "/components/NavBar.js"
import { cardComponents } from "/components/card.js"


let cardContainer=document.getElementById('card-container')
let navContainer = document.querySelector('header')
let pageName=document.getElementById('pageName').value
let title=document.getElementById('title')

let cardData=[
    {image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',title:'Bolso Comun',description:'Bolso azul para todo uso', price:'20000'},
    {image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',title:'Bolso Comun',description:'Bolso azul para todo uso', price:'20000'},
    {image:'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',title:'Bolso Comun',description:'Bolso azul para todo uso', price:'20000'}
]

window.addEventListener('load',() => {
    navContainer.innerHTML=NavBar
    title.textContent=`Bienvenido a ${pageName}`
    document.title=pageName
    const cards=cardData.map(e=>{          
                    return cardComponents(e.image,e.title,e.description,e.price)                                        
            }).join('')

    cardContainer.innerHTML=cards

})