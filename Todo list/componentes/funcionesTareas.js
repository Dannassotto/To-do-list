import contenedorTareas from "./contenedorTareas.js";

function agregarTarea(input) {
  const texto = input.value.trim();
  if (texto === "") return;

  const tarjeta = document.createElement("div");
  tarjeta.style.cssText = `
    margin: 12px;
    padding: 12px;
    display: flex;
    gap: 8px;
    align-items: center;
    background-color: #fff0f5;
    border: 2px dashed #dda0dd;
    border-radius: 12px;
    box-shadow: 2px 2px 10px rgba(0,0,0,0.1);
    font-family: 'Comic Sans MS', cursive, sans-serif;
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform: scale(0.9);
    opacity: 0;
  `;

  setTimeout(() => {
    tarjeta.style.transform = "scale(1)";
    tarjeta.style.opacity = "1";
  }, 10);

  const parrafoTarea = document.createElement("p");
  parrafoTarea.textContent = texto;
  input.value = "";

  const botonCompletar = document.createElement("button");
  botonCompletar.textContent = "✅ Completar";
  botonCompletar.style.cssText = `
    color: white;
    background-color: #f9a825;
    border: none;
    border-radius: 8px;
    padding: 6px 12px;
    cursor: pointer;
  `;
  botonCompletar.addEventListener("click", () => {
    const completada = parrafoTarea.style.textDecoration === "line-through";
    parrafoTarea.style.textDecoration = completada ? "none" : "line-through";
    botonCompletar.textContent = completada ? "✅ Completar" : "↩️ Descompletar";
  });

  const botonActualizar = document.createElement("button");
  botonActualizar.textContent = "✏️ Actualizar";
  botonActualizar.style.cssText = `
    color: white;
    background-color: #81c784;
    border: none;
    border-radius: 8px;
    padding: 6px 12px;
    cursor: pointer;
  `;
  botonActualizar.addEventListener("click", () => actualizarTarea(parrafoTarea));

  const botonEliminar = document.createElement("button");
  botonEliminar.textContent = "🗑️ Eliminar";
  botonEliminar.style.cssText = `
    color: white;
    background-color: #e57373;
    border: none;
    border-radius: 8px;
    padding: 6px 12px;
    cursor: pointer;
  `;
  botonEliminar.addEventListener("click", () => eliminarTarea(tarjeta));

  tarjeta.append(parrafoTarea, botonCompletar, botonActualizar, botonEliminar);
  contenedorTareas.appendChild(tarjeta);
}

function actualizarTarea(parrafoTarea) {
  const nuevaTarea = prompt("📝 Escribe la nueva tarea:", parrafoTarea.textContent);
  if (nuevaTarea !== null && nuevaTarea.trim() !== "") {
    parrafoTarea.textContent = nuevaTarea.trim();
  }
}

function eliminarTarea(tarjetaTarea) {
  tarjetaTarea.remove();
}

const botonBorrarTodas = document.createElement("button");
botonBorrarTodas.textContent = "🧹 Borrar todas";
botonBorrarTodas.style.cssText = `
  color: white;
  background-color: #ba68c8;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  margin-top: 16px;
  cursor: pointer;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
`;

botonBorrarTodas.addEventListener("click", () => {
  contenedorTareas.innerHTML = "";

  const mensaje = document.createElement("p");
  mensaje.textContent = "🌼 Lista vacía, ¡hora de nuevos comienzos!";
  mensaje.style.cssText = `
    margin-top: 12px;
    color: #9c27b0;
    font-family: 'Comic Sans MS', cursive;
    font-size: 16px;
    animation: aparecer 1s ease forwards;
  `;

  contenedorTareas.appendChild(mensaje);
  setTimeout(() => mensaje.remove(), 3000);
});

contenedorTareas.appendChild(botonBorrarTodas);

export { agregarTarea, eliminarTarea };
