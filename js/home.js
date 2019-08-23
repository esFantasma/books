const urlApi = 'http://fundamentos.academlo.com/api/v1/'
const uuidLibros = '5c82982e-b63e-4280-8287-4eba0e99716a'

function getDirectoryWithCatories() {
    const urlCategories = `${urlApi}directories/${uuidLibros}/categories`
    fetch(urlCategories)
        .then(directory => directory.json())
        .then(directory =>{
            populateCategories(directory.categories)
        })
}
function populateCategories(categories) {
    var html = ''
    for(let i = 1; i < 9; i++) {
        html += `<div class="col-md-3">
        <a href="./category.html">
        <div class="card 	 text-white">
            <img class="card-img" src="img/categoriaUNo.jpg" alt="Card image">
            <div class="card-img-overlay min">
                <h5 class="card-title">${ categories[i].name }</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
            </div>
        </div>
    </div>`
    }
    appendHTML(html, 'home-categories')
}

function appendHTML(html, idContainer) {
    const categoriesContainer = document.getElementById(idContainer)
    categoriesContainer.innerHTML = html
}

function getCategoryWithProducts() {
    const uuidFilosofia = 'f5cff243-9ae0-48da-899f-6ca95cc6a200'
    const urlCategory = `${urlApi}categories/${uuidFilosofia}/products`
    fetch(urlCategory)
        .then(category => category.json())
        .then(category => {
            populateProducts(category.products)
        })
}

function populateProducts(products) {
    let html = ''
    for(let i = 0; i < 3; i++) {
        html +=  `<div class="col-md-4 col-sm-12">
        <div class="card">
            <div class="wrap">
            <a href="./product.html?${products[i].uuid}">
                <img class="card-img-top" src="${products[i].image}" alt="Card image cap">
            </div>
            <div class="card-body">
                <h5 class="card-title">${products[i].name}</h5>
                <p class="card-text">
                ${products[i].description}
                </p>
                <a href="#" class="btn btn-lg readme">Read more</a>
            </div>
        </div>
    </div>`
    }
    appendHTML(html, 'featured-products')
}



getDirectoryWithCatories()
getCategoryWithProducts()