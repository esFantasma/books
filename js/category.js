
const urlApi = "http://fundamentos.academlo.com/api/v1";
const content = document.getElementById("cont-category");
getDirectories();

function getDirectories(){
    const url = `${urlApi}/categories/265ef2df-2a6e-4719-b08c-4c3e8cbd9fc7/products`;
    fetch(url)
        .then(response => response.json())
        .then(response => {
            response.products.forEach(e => {
                drawTarjeta(e);
            });
        })
}

const drawTarjeta = e => {
    const tarjeta = `
    <div class="tarjeta">
    <div class="cont-img">
        <img src="${e.image}" alt="">
    </div>
    <div class="cont-pie-tarjeta">
        <h3>${e.name}</h3>
        <p>${e.description}</p>
        <a href="#">Visita la pagina</a>
    </div>
</div>
    `;
    content.insertAdjacentHTML('beforeEnd',  tarjeta);
}