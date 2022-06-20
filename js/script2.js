let allCoches = new Map();
const options = {
    method: "GET",
  };
  let url = "json/coches.json";

fetch(url,options)
  .then(res => res.json())
  .then(data => {
    let coches = data.coches
    for(let idCoches in coches){
        allCoches.set(idCoches, coches[idCoches]) 
    }
    cargarConcesionario();
  })
  .catch(err => console.error(err));


function cargarConcesionario(){

    let thead = document.createElement('thead');
   
    let tbody = document.createElement('tbody');

    let row1 = document.createElement('tr');
    let hcolum = document.createElement('th');
    let hcolum1 = document.createElement('th');


    hcolum.innerHTML = "CONCESIONARIO";
    hcolum1.innerHTML = "ENLACE";

    row1.appendChild(hcolum);
    row1.appendChild(hcolum1);
    thead.appendChild(row1);

    for (coches of allCoches.keys()){
            let row2 = document.createElement('tr');
            let bColumn = document.createElement('td');
            bColumn.innerHTML = allCoches.get(coches).concesionario;
            let bColumn1 = document.createElement('td');
            bColumn1.innerHTML = "<a href="+allCoches.get(coches).url+">Aqui</a>";
            console.log(bColumn1)
            row2.appendChild(bColumn);
            row2.appendChild(bColumn1);
            tbody.appendChild(row2);
    }
    document.getElementById('tabla').appendChild(thead);
    document.getElementById('tabla').appendChild(tbody);
}