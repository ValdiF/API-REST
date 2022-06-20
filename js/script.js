let allCoches = new Map();
const options = {
    method: "GET",
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


function cargarDatos(){
    let options = document.createElement('option');
    options.value = 0;
    options.innerHTML="";
    document.getElementById('cargar').appendChild(options);
    for (coches of allCoches.keys()){
        let options = document.createElement('option');
        options.value = allCoches.get(coches).matricula;
        
        let texto = document.createTextNode(allCoches.get(coches).modelo);
        options.appendChild(texto);
        document.getElementById('cargar').appendChild(options);
    }
}

function cargarTabla(){
    document.getElementById('tabla').innerHTML="";
    
    let thead = document.createElement('thead');
    thead.classList.add('table-dark');
    thead.classList.add('text-center');
    
    let tbody = document.createElement('tbody');

    let row1 = document.createElement('tr');
    let hcolum1 = document.createElement('th');
    let hcolum2 = document.createElement('th');
    let hcolum3 = document.createElement('th');
    let hcolum4 = document.createElement('th');
    let hcolum5 = document.createElement('th');
    let hcolum6 = document.createElement('th');

    hcolum1.innerHTML = "MATRÍCULA";
    hcolum2.innerHTML = "MODELO";
    hcolum3.innerHTML = "MARCA";
    hcolum4.innerHTML = "DESCRIPCION";
    hcolum5.innerHTML = "KILOMETRAJE";
    hcolum6.innerHTML = "PRECIO";

    row1.appendChild(hcolum1);
    row1.appendChild(hcolum2);
    row1.appendChild(hcolum3);
    row1.appendChild(hcolum4);
    row1.appendChild(hcolum5);
    row1.appendChild(hcolum6);

    thead.appendChild(row1);
    for (coches of allCoches.keys()){
        let comprobar = document.getElementById('cargar').selectedIndex;
        if(comprobar == 0){
            document.getElementById('tabla').innerHTML="";
            console.log(comprobar);
        }else{
            let row2 = document.createElement('tr');
            let bColumn1 = document.createElement('td');
            bColumn1.innerHTML = allCoches.get(coches).matricula;
            let bColumn2 = document.createElement('td');
            bColumn2.innerHTML = allCoches.get(coches).matricula;
            let bColumn3 = document.createElement('td');
            bColumn3.innerHTML = allCoches.get(coches).matricula;
            let bColumn4 = document.createElement('td');
            bColumn4.innerHTML = allCoches.get(coches).matricula;
            let bColumn5 = document.createElement('td');
            bColumn5.innerHTML = allCoches.get(coches).matricula;
            let bColumn6 = document.createElement('td');
            bColumn6.innerHTML = allCoches.get(coches).matricula;
            row2.appendChild(bColumn1);
            row2.appendChild(bColumn2);
            row2.appendChild(bColumn3);
            row2.appendChild(bColumn4);
            row2.appendChild(bColumn5);
            row2.appendChild(bColumn6);
            tbody.appendChild(row2);
        }
       
        
    }
    document.getElementById('tabla').appendChild(thead);
    document.getElementById('tabla').appendChild(tbody);
}