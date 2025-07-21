console.log ('hola mundo')

document.addEventListener("DOMContentLoaded", function () {

const botonBuscar = document.getElementById("Buscar");

 botonBuscar.addEventListener("click", function () {
    alert("Función de búsqueda en desarrollo...");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("lista-productos");

  fetch("productos.json")
    .then(res => res.json())
    .then(productos => {
      productos.forEach(producto => {
        const tarjeta = document.createElement("div");
        tarjeta.className = "tarjeta-producto";
        tarjeta.innerHTML = `
          <img src="${producto.imagen}" alt="${producto.nombre}">
          <h3>${producto.nombre}</h3>
          <p><strong>Precio:</strong> $${producto.precio}</p>
          <p><strong>Tienda:</strong> ${producto.tienda}</p>
        `;
        contenedor.appendChild(tarjeta);
      });
    })
    .catch(error => console.error("Error al cargar productos:", error));
});
