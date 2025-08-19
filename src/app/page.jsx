import Image from "next/image";

export default function Home() {

  const name = "Juan";
  var num = 1;
  
  function suma(a, b) {
    return a + b;
  }

  const resta = (a, b) => {
    return a - b;
  }

  // Arreglos segunda clase 
  const nums = [1, 2, 3, 4, 5, 6];
  const nombre = ["juan", "pedro", "lucas", "luis", "laura"];
  const personas = [{ "nombre": "juan", "apellido": "Mendez" }];
  const animales = [
    {
      "nombre": "Xeus",
      "raza": "Golden",
      "categoria": { "nombre": "Belleza", "calificacion": 10 }
    },
    {
      "nombre": "Lucas",
      "raza": "taza de té",
      "categoria": { "nombre": "tamaño", "calificacion": 1 }
    }
  ];

  // Taller punto 1 - Lista de productos con categoría
  const productos = [
    { id: 1, nombre: "Camiseta", precio: 25, categoria: { id: 1, nombre: "Ropa" } },
    { id: 2, nombre: "Zapatos deportivos", precio: 60, categoria: { id: 2, nombre: "Calzado" } },
    { id: 3, nombre: "Gorra", precio: 15, categoria: { id: 1, nombre: "Ropa" } },
    { id: 4, nombre: "Pantalón", precio: 40, categoria: { id: 1, nombre: "Ropa" } },
    { id: 5, nombre: "Bolso", precio: 30, categoria: { id: 3, nombre: "Accesorios" } },
  ];

  // Taller punto 2 - Lista de usuarios con direcciones
  const usuarios = [
    { id: 1, nombre: "Ana", direccion: { calle: "Calle 10", ciudad: "Bogotá", pais: "Colombia" } },
    { id: 2, nombre: "Luis", direccion: { calle: "Av. Reforma", ciudad: "Ciudad de México", pais: "México" } },
    { id: 3, nombre: "Marta", direccion: { calle: "Gran Vía", ciudad: "Madrid", pais: "España" } },
    { id: 4, nombre: "John", direccion: { calle: "Main St", ciudad: "New York", pais: "USA" } },
    { id: 5, nombre: "Pedro", direccion: { calle: "Rua Augusta", ciudad: "Lisboa", pais: "Portugal" } },
  ];

  // Taller punto 3 - Lista de cursos con módulos
  const cursos = [
    { id: 1, nombre: "React", modulos: [{ nombre: "Componentes" }, { nombre: "Hooks" }] },
    { id: 2, nombre: "Next.js", modulos: [{ nombre: "SSR" }, { nombre: "Static Props" }] },
    { id: 3, nombre: "Node.js", modulos: [{ nombre: "Express" }, { nombre: "Middlewares" }] },
    { id: 4, nombre: "Django", modulos: [{ nombre: "Modelos" }, { nombre: "Templates" }] },
    { id: 5, nombre: "Flutter", modulos: [{ nombre: "Widgets" }, { nombre: "State Management" }] },
  ];

  // Taller punto 4 - Lista de pedidos con productos 
  const pedidos = [
    { id: 1, cliente: "Ana", productos: [{ nombre: "Camiseta", cantidad: 2 }, { nombre: "Gorra", cantidad: 1 }] },
    { id: 2, cliente: "Luis", productos: [{ nombre: "Zapatos", cantidad: 1 }, { nombre: "Bolso", cantidad: 2 }] },
    { id: 3, cliente: "Marta", productos: [{ nombre: "Pantalón", cantidad: 3 }] },
    { id: 4, cliente: "John", productos: [{ nombre: "Sudadera", cantidad: 1 }, { nombre: "Gorra", cantidad: 2 }] },
    { id: 5, cliente: "Pedro", productos: [{ nombre: "Camiseta", cantidad: 5 }] },
  ];

  // Taller punto 5 - Lista de blogs con estructura profundamente anidada
  const blogs = [
    {
      id: 1,
      titulo: "Aprendiendo React",
      autor: { nombre: "Ana", pais: "Colombia" },
      categorias: ["JavaScript", "Frontend"],
      comentarios: [
        {
          usuario: "Luis",
          texto: "Muy útil",
          respuestas: [
            {
              usuario: "Marta",
              texto: "Totalmente de acuerdo",
              reacciones: [
                { tipo: "like", usuario: { nombre: "Pedro", rol: "Estudiante" } },
                { tipo: "love", usuario: { nombre: "John", rol: "Desarrollador" } }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      titulo: "Next.js SSR",
      autor: { nombre: "Luis", pais: "México" },
      categorias: ["JavaScript", "SSR"],
      comentarios: [
        {
          usuario: "Marta",
          texto: "Interesante",
          respuestas: [
            {
              usuario: "Ana",
              texto: "Lo probaré",
              reacciones: [
                { tipo: "like", usuario: { nombre: "Luis", rol: "Frontend Dev" } }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      titulo: "Node.js API",
      autor: { nombre: "John", pais: "USA" },
      categorias: ["Backend", "API"],
      comentarios: [
        {
          usuario: "Pedro",
          texto: "Me sirvió mucho",
          respuestas: [
            {
              usuario: "Luis",
              texto: "Gracias por compartir",
              reacciones: [
                { tipo: "clap", usuario: { nombre: "Ana", rol: "Fullstack Dev" } }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      titulo: "Django ORM",
      autor: { nombre: "Marta", pais: "España" },
      categorias: ["Backend", "Python"],
      comentarios: [
        {
          usuario: "Ana",
          texto: "Claro y conciso",
          respuestas: [
            {
              usuario: "John",
              texto: "Lo usaré en mi proyecto",
              reacciones: [
                { tipo: "like", usuario: { nombre: "Luis", rol: "Backend Dev" } }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 5,
      titulo: "Flutter Widgets",
      autor: { nombre: "Pedro", pais: "Portugal" },
      categorias: ["Mobile", "UI"],
      comentarios: [
        {
          usuario: "Luis",
          texto: "Genial explicación",
          respuestas: [
            {
              usuario: "Marta",
              texto: "Muy claro todo",
              reacciones: [
                { tipo: "love", usuario: { nombre: "Ana", rol: "UI Designer" } }
              ]
            }
          ]
        }
      ]
    }
  ];

  // return de todo lo llamado en const
  return (
    <div className="p-6">
      <p className="text-red-500">Hola</p>
      <h1 className="text-2xl font-bold">Nombre</h1>
      <img 
        src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRIOWX-41syp4c2OU8JH4bNW139mmqQmYNlIHTYU4k213JktKInLLztdvLA3QHRq3X1HC9IxIBdUrpYW3IOJI2lrb0t1dZAiNdsbjcfnw"
        alt="Imagen"
        className="rounded-lg shadow-md w-64 my-3"
      />
      <p>{num}</p>
      <p>{name}</p>
      <p>{1 + 2}</p>
      <p>Suma de 5 + 3 = {suma(5, 3)}</p>
      <p>Resta de 10 - 4 = {resta(10, 4)}</p>

      {/* Arreglos segunda clase */}
      <div className="container mt-6">
        <div className="card">
          <h1>Numeros</h1>
          {nums.map((v, i) => <h2 key={i}>{v}</h2>)}
        </div>

        <div className="card">
          <h1>Nombres</h1>
          {nombre.map((v, i) => <h2 key={i}>{v}</h2>)}
        </div>

        <div className="card">
          <h1>Personas</h1>
          {personas.map((v, i) => <h2 key={i}>{v.nombre}, {v.apellido}</h2>)}
        </div>

        <div className="card">
          <h1>Animales</h1>
          {animales.map((animal, i) =>
            <h2 key={i}>{animal.nombre} - {animal.raza} - {animal.categoria.nombre} - {animal.categoria.calificacion}</h2>
          )}
        </div>

        {/*Taller impresión en html*/}  

        {/* Productos */}
        <div className="card">
          <h1>Lista de Productos</h1>
          <ul>
            {productos.map((p) => (
              <li key={p.id}>
                {p.nombre} - ${p.precio} ({p.categoria.nombre})
              </li>
            ))}
          </ul>
        </div>

        {/* Usuarios */}
        <div className="card">
          <h1>Lista de Usuarios</h1>
          <ul>
            {usuarios.map((u) => (
              <li key={u.id}>
                {u.nombre} - {u.direccion.calle}, {u.direccion.ciudad}, {u.direccion.pais}
              </li>
            ))}
          </ul>
        </div>

        {/* Cursos */}
        <div className="card">
          <h1 className="font-bold">Lista de Cursos</h1>
          <ul className="list-disc list-inside">
            {cursos.map((c) => (
              <li key={c.id} className="mb-2">
                <span className="font-semibold">{c.nombre}</span>
                <ul className="list-disc list-inside ml-6 text-sm text-gray-300">
                  {c.modulos.map((m, i) => (
                    <li key={i}>{m.nombre}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Pedidos */}
        <div className="card">
          <h1 className="font-bold">Lista de Pedidos</h1>
          <ul className="list-disc list-inside">
            {pedidos.map((p) => (
              <li key={p.id} className="mb-4">
                <span className="font-semibold">Cliente: {p.cliente}</span>
                <ul className="list-disc list-inside ml-6 text-sm text-gray-300">
                  {p.productos.map((prod, i) => (
                    <li key={i}>
                      {prod.nombre} <span className="text-gray-400">(x{prod.cantidad})</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>

        {/* Blog */}
        <div className="card">
          <h1>Lista de Blogs</h1>
          {blogs.map((b) => (
            <div key={b.id} className="mb-4">
              <h2 className="text-lg font-bold">{b.titulo}</h2>
              <p>Autor: {b.autor.nombre} ({b.autor.pais})</p>
              <p>Categorías: {b.categorias.join(", ")}</p>

              <h3 className="mt-2 font-semibold">Comentarios:</h3>
              {b.comentarios.map((c, i) => (
                <div key={i} className="ml-4 border-l pl-3">
                  <p><strong>{c.usuario}:</strong> {c.texto}</p>

                  {/* Respuestas */}
                  {c.respuestas.map((r, j) => (
                    <div key={j} className="ml-6 border-l pl-3">
                      <p><strong>{r.usuario}:</strong> {r.texto}</p>

                      {/* Reacciones */}
                      <ul className="ml-6 list-disc">
                        {r.reacciones.map((rea, k) => (
                          <li key={k}>
                            {rea.tipo} - {rea.usuario.nombre} ({rea.usuario.rol})
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
