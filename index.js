import { NavBar } from "/components/NavBar.js"
import { cardComponents } from "/components/card.js"


let cardContainer=document.getElementById('card-container')
let navContainer = document.querySelector('header')
let pageName=document.getElementById('pageName').value
let title=document.getElementById('title')



window.addEventListener('load',() => {
    navContainer.innerHTML=NavBar
    title.textContent=`Bienvenido a ${pageName}`
    document.title=pageName
    fetch('./productos.json').then(res=>res.json()).then(data=>{
    
        // Función para obtener 4 elementos aleatorios de un array
        function obtenerAleatorios(arr, cantidad) {
                return arr.sort(() => 0.5 - Math.random()).slice(0, cantidad);
        }

         // Agrupar por categoría
        const categoria1 = data.filter(p => p.category === 'Ropa de Hombre');
        const categoria2 = data.filter(p => p.category === 'Ropa de Mujer');
        const categoria3 = data.filter(p => p.category === 'Electrónica');

       // Obtener 4 productos aleatorios por categoría
        const seleccionados = [
        ...obtenerAleatorios(categoria1, 4),
        ...obtenerAleatorios(categoria2, 4),
        ...obtenerAleatorios(categoria3, 4)
        ];

        const mezclados = seleccionados.sort(() => 0.5 - Math.random());

        // Generar las tarjetas
        const cards = mezclados.map(e =>
                cardComponents(e.image, e.title, e.description, e.price)
        ).join('');
        
        cardContainer.innerHTML=cards
        })
})

