

export const cardComponents=(imagen,nombre,texto,precio)=>{
    return `
     <div class="col">
            <div class="card bg-card">
              <img src=${imagen} class="mx-auto d-block mt-3 img-productos" alt="Logo">
              <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${texto}</p>
              </div>
              <div class="card-footer">
                <div class="row text-center">
                  <div class="col">
                  <p class="price">$${precio}</p>
                </div>
                <div class="col">
                  <input type="number" class="form-control input-cantidad" min="0" max="5" placeholder="0" step="1">
                </div>
              </div>           
            </div> 
          </div>  
          </div>
    `
    }

