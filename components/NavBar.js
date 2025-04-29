const navElements=[
  {title:'Ropa de Hombre',link:'../../pages/categorias/RopaHombre.html'},
  {title:'Ropa de Mujer',link:'../../pages/categorias/RopaMujer.html'},
  {title:'Electrónica',link:'../../pages/categorias/Electronica.html'},
  {title:'<img src="../../imgs/carrito.png" alt="Carrito" width="40" height="40" class="rounded-circle img-carrito">',link:"../../pages/carrito/carrito.html"},
  {title:'Cerrar Sesion',link:'../../pages/inicio/login.html'}
]


export const NavBar=`
 <nav class="navbar navbar-expand-lg bg-card">
        <div class="container-fluid">
          <a class="navbar-brand"  href="../../index.html">
            <img src="../../imgs/logo.png" alt="Logo" width="75" height="75" class="rounded-circle bg-logo">
          </a>
          <button class="navbar-toggler bg-nav-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            ${
                navElements.map(e=>{
                    return`
                    <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href=${e.link}>${e.title}</a>
              </li>
                    `
                }).join('')
            }
              
            </ul>
          </div>
        </div>
      </nav>
`