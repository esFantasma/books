const urlApi= 'http://fundamentos.academlo.com/api/v1/';

const directoriesURL = urlApi + 'directories';

fetch(urlApi)
    .then(response =>{
        return response.json();
    })
    .then(directories => {
        console.log(directories);
    })
    .catch(error =>{
        alert("Error")
        console.log(error); 
    })