let allCoches = new Map();
const options = {
    method: "POST",
  };
  let json = "json/coches.json";

fetch(json,options)
  .then(res => res.json())
  .then(data => {
      //console.log(data.coches);
    let coches = data.coches
    for(let idCoches in coches){
        allCoches.set(coches, coches[idCoches]) 
        //console.log(allCoches.get(coches).descripcion);
    }
    cargarDatos();
    //mostrarTablaInicio();
  })
  .catch(err => console.error(err));