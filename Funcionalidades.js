console.log('Hola mundo');

let productos = []; // 🌍 Variable global que usaremos en todas las funciones

document.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("contenedor-productos");
  const botonBuscar = document.getElementById("Buscar");

  // 🚀 Cargar productos desde JSON
  fetch("productos.json")
    .then(res => res.json())
    .then(data => {
      productos = data;
      renderizarTarjetas(productos);
    })
    .catch(error => console.error("Error al cargar productos:", error));

  // 🔍 Buscar al hacer clic
  if (botonBuscar) {
    botonBuscar.addEventListener("click", picassoBuscarProducto);
  }

  // 🧠 También podrías hacer que busque en tiempo real:
  const inputBusqueda = document.getElementById("campo-busqueda");
  if (inputBusqueda) {
    inputBusqueda.addEventListener("input", picassoBuscarProducto);
  }

  // 🧱 Función para renderizar tarjetas
  function renderizarTarjetas(lista) {
    contenedor.innerHTML = ''; // Limpiamos el contenedor

    lista.forEach(producto => {
      const tarjeta = document.createElement("div");
      tarjeta.className = "tarjeta-producto";
      tarjeta.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}" />
        <h3>${producto.nombre}</h3>
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <p><strong>Tienda:</strong> ${producto.tienda}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
      `;
      contenedor.appendChild(tarjeta);
    });
  }

  // 📂 Filtro por categoría
  window.picassoFiltrarPorCategoria = function (categoriaSeleccionada) {
    if (categoriaSeleccionada === "Todos") {
      renderizarTarjetas(productos);
    } else {
      const filtrados = productos.filter(p => p.categoria === categoriaSeleccionada);
      renderizarTarjetas(filtrados);
    }
  }

  // 🔎 Búsqueda
  window.picassoBuscarProducto = function () {
    const input = inputBusqueda.value.toLowerCase();
    const filtrados = productos.filter(producto =>
      producto.nombre.toLowerCase().includes(input) ||
      (producto.descripcion && producto.descripcion.toLowerCase().includes(input)) ||
      producto.categoria.toLowerCase().includes(input)
    );
    renderizarTarjetas(filtrados);
  }
});

