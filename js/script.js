let allCoches = new Map();
const options = {
    method: "GET",
  };
  //let json = "js/alumnos.json";

fetch(json,options)
  .then(res => res.json())
  .then(data => {
    let coches = data//.aqui va lo que haya que extraer de datos;
    for(let idCoches in coches){
        allCoches.set(coches, coches[idCoches]) 
    }
    cargarDatos();
    mostrarTablaInicio();
  })
  .catch(err => console.error(err));