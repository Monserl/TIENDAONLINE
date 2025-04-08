document.addEventListener('DOMContentLoaded', function() {
    // arreglo productos
    const productos = [
        { nombre: "Laptop", precio: 1200, categoria: "Electrónicos" },
        { nombre: "Teléfono", precio: 599, categoria: "Electrónicos" },
        { nombre: "Auriculares", precio: 99, categoria: "Accesorios" },
        { nombre: "Mouse", precio: 25, categoria: "Accesorios" },
        { nombre: "Tablet", precio: 299, categoria: "Electrónicos" },
        { nombre: "Teclado", precio: 45, categoria: "Accesorios" },
        { nombre: "Monitor", precio: 350, categoria: "Electrónicos" },
        { nombre: "Altavoz", precio: 75, categoria: "Accesorios" },
        { nombre: "Camiseta", precio: 15, categoria: "Ropa" },
        { nombre: "Pantalón", precio: 80, categoria: "Ropa" },
        { nombre: "Libro", precio: 12, categoria: "Educación" },
        { nombre: "Zapatos", precio: 50, categoria: "Ropa" },
        { nombre: "Celular", precio: 600, categoria: "Electrónicos" },
    ];

    const productosRopa = productos.filter(p => p.categoria === "Ropa");

    // que se vean los productos
    displayProducts(productos, 'all-products');

    // productos de ropa 
    displayProducts(productosRopa, 'ropa-products')

    // filtrar productos menores a $100
    const productosBaratos = productos.filter(producto => producto.precio < 100);
    displayProducts(productosBaratos, 'filtered-products');

    // alfabéticamente por nombre con sort
    const productosOrdenados = [...productosBaratos].sort((a, b) => 
        a.nombre.localeCompare(b.nombre)
    );
    displayProducts(productosOrdenados, 'sorted-products');

    // mapear para solo los nombres
    const nombresProductos = productosOrdenados.map(producto => producto.nombre);
    displayNames(nombresProductos, 'names-only');

    // extra con reduce y every
    const optionalResults = document.getElementById('optional-results');
    
    // total con reduce
    const totalBaratos = productosBaratos.reduce((sum, producto) => sum + producto.precio, 0);
    const totalElement = document.createElement('p');
    totalElement.innerHTML = `<strong>Total de productos baratos:</strong> $${totalBaratos}`;
    optionalResults.appendChild(totalElement);
    
    // verificar con every
    const todosAccesorios = productosBaratos.every(
        producto => producto.categoria === "Accesorios"
    );
    const everyElement = document.createElement('p');
    everyElement.innerHTML = `<strong>¿Todos los productos baratos son accesorios?</strong> ${todosAccesorios ? 'Sí' : 'No'}`;
    optionalResults.appendChild(everyElement);


  // verificar con some si hay productos de educación
  const hayEducacion = productosBaratos.some(
    producto => producto.categoria === "Educación"
);
const someElement = document.createElement('p');
someElement.innerHTML = `<strong>¿Hay productos baratos de educación?</strong> ${hayEducacion ? 'Sí' : 'No'}`;
optionalResults.appendChild(someElement);
});

// mostrar productos en html
function displayProducts(products, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    container.innerHTML = '';
    
    products.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p class="price">Precio: $${producto.precio}</p>
            <p class="category">${producto.categoria}</p>
        `;
        container.appendChild(card);
    });
}

// mostrar solo nombres
function displayNames(names, elementId) {
    const container = document.getElementById(elementId);
    if (!container) return;
    container.innerHTML = '';
    
    names.forEach(name => {
        const tag = document.createElement('div');
        tag.className = 'name-tag';
        tag.textContent = name;
        container.appendChild(tag);
    });
}