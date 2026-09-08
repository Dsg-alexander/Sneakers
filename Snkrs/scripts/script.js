const seleccionadas = [];

function comprado(){
    alert("Comprado Con exito");
}

function tallaSeleccionadaK(talla){
    seleccionadas.push('Par de Zapatillas karl talla: ' + talla);
    alert('Tallas seleccionadas: ' +talla+' Agregado al carrito Con exito');

    const tbody = document.querySelector('#tablaProductos tbody');
    const nuevaFila = `<tr>
                        <td>${seleccionadas.length}</td>
                        <td>Karl Lagerfeld Sneak</td>
                        <td>${talla}</td><td>$160</td>
                        </tr>`;
    tbody.insertAdjacentHTML('beforeend', nuevaFila);
    
}

function tallaSeleccionadaJ(talla){
    seleccionadas.push('Par de Zapatillas jordan talla: ' + talla);
    alert('Tallas seleccionadas: ' +talla+' Agregado al carrito Con exito');
    
    const tbody = document.querySelector('#tablaProductos tbody');
    const nuevaFila = `<tr>
                        <td>${seleccionadas.length}</td>
                        <td>Jordan Sneak</td>
                        <td>${talla}</td><td>$140</td>
                        </tr>`;
    tbody.insertAdjacentHTML('beforeend', nuevaFila);
    
}
function tallaSeleccionadaM(talla){
    seleccionadas.push('Par de Zapatillas michael kors talla: ' + talla);
    alert('Tallas seleccionadas: ' +talla+' Agregado al carrito Con exito');
    
    const tbody = document.querySelector('#tablaProductos tbody');
    const nuevaFila = `<tr>
                        <td>${seleccionadas.length}</td>
                        <td>Michael Kors Sneak</td>
                        <td>${talla}</td><td>$120</td>
                        </tr>`;
    tbody.insertAdjacentHTML('beforeend', nuevaFila);
    
}