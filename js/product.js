const urlApi = 'http://fundamentos.academlo.com/api/v1/'


function getUuidProduct() {
    const url = window.location.href
    const urlArray = url.split('?')
    return urlArray[1] // retornamos el identificador
}

function getProduct() {
    // {{apiURL}}/products/82993a90-1397-4503-b16b-00b71f71ee7c
    const productUuid = getUuidProduct()
    // const urlProduct = urlApi + 'products' + productUuid  
    const urlProduct = `${urlApi}products/${productUuid}`
    fetch(urlProduct)
        .then(product => product.json())
        .then(product => {
            innerHTML(product)
        })
}

getProduct()

function innerHTML(product) {
    const html = `
    <div id="card-main" class="container">
    <div class="row">
      <div class="col-sm">
            <div  id="info-left" class="jumbotron jumbotron-fluid">
                    <div id="info-left-text" class="container">
                      <h1 class="display-4">${product.name}</h1>
                      <p class="lead" style="color: lightgrey">${product.description}</p>
                    </div>
                    <div class="container">
                            <div id="link-web" class="row">
                              <div class="col-sm">
                                    <button type="button" class="btn btn-outline-secondary"><a href="${product.url}" target="_blank" class="btn custom-button is-small px-5 custom-btn-light-bordered">Visit
                                    Website</a></button>
                              </div>
                              <div class="col-sm">
                                <h5 style="margin-left: 120px">Share<i class="fab fa-facebook"><i class="fab fa-twitter"></i></i></h5> 
                              </div>
                              
                            </div>
                          </div>
                  </div>
      </div>
      <div class="col-sm">
            <div id="info-right" class="jumbotron jumbotron-fluid">
                    <div id="card-right" class="container">
                            <div class="container">
                                    <div class="row">
                                      <div class="col-sm">
                                            <div class="card" style="border: 0" >
                                                    <div class="card-body">
                                                      <h5 class="card-title">Amplia variedad de selección </h5>
                                                      <p class="card-text">Más de 1,000,000 de ejemplares de acuerdo a sus búsquedas, compras y favoritos.</p>
                                                      <div class="btn-group btn-group-sm" role="group" aria-label="...">
                                                            <button type="button" class="btn btn-primary btn-sm" style="font-size: 10px">Prueba Gratis</button>
                                                            <button type="button" class="btn btn-primary btn-sm" style="font-size: 10px; background-color: #f8f9fa; color: #339CFF; border: 0" >Catalogo </button>
                                                      </div>
                                                    </div>
                                                  </div>
                                      </div>
                                      <div class="col-sm">
                                            <img src="${product.image}" class="img-fluid" alt="Responsive image" style="padding: 20px">
                                      </div>
                                    </div>
                                    <div id="logos" class="container">
                                            <div class="row">
                                              <div class="col"><img src="https://images.pexels.com/photos/266246/pexels-photo-266246.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img-fluid" alt="Responsive image"></div>
                                              <div class="col"><img src="https://images.pexels.com/photos/2467277/pexels-photo-2467277.png?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img-fluid" alt="Responsive image"></div>
                                              <div class="col"><img src="https://images.pexels.com/photos/1069798/pexels-photo-1069798.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="img-fluid" alt="Responsive image"></div>
                                              <div class="col"><img src="https://images.pexels.com/photos/2180780/pexels-photo-2180780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="img-fluid" alt="Responsive image"></div>
                                              <div class="col"><img src="https://images.pexels.com/photos/2235130/pexels-photo-2235130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="img-fluid" alt="Responsive image"></div>
                                              <div class="col"><img src="https://images.pexels.com/photos/2326290/pexels-photo-2326290.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="img-fluid" alt="Responsive image"></div>
                                            </div>
                                  </div>
                              </div> 
                          </div> 

                          <div id="int-r-info" class="jumbotron jumbotron-fluid">
                                <div class="container">
                                        <div id="card-int-r" class="card mb-3" style="max-width: 540px;">
                                                <div class="row no-gutters">
                                                        <div class="col-md-8">
                                                                <div class="card-body">
                                                                  <h5 class="card-title">Información compartida</h5>
                                                                  <p class="card-text">Una manera de sencilla de compratir información con grupos de interés afín.</p>
                                                                  <button type="button" class="btn btn-primary btn-sm" style="font-size: 10px; background-color: white; color: #339CFF; border: 0" >Más información... </button>
                                                                </div>
                                                              </div>
                                                  <div class="col-md-4">
                                                  <a href="./producto.html">
                                                    <img src="https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img" alt="...">
                                                  </div>
                                                  
                                                </div>
                                              </div>
                                </div>
                              </div>      
                    </div>
                  </div>
      </div>
      
    </div>
  </div> 
    `

    const element = document.getElementById('product-details')
    element.innerHTML = html
}