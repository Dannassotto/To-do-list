import { eliminarTodasTareas } from "../funciones/funcionesTareas.js";

const botonEliminarTodas = document.createElement("button");
botonEliminarTodas.textContent = "🧹 Eliminar todas las tareas";

contenedorPrincipal.style.cssText = `
  width: 100%;
  max-width: 500px;
  margin: 20px auto;
  background-color: #fffafc;
  padding: 30px 20px;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-sizing: border-box;
`;


botonEliminarTodas.addEventListener("mouseenter", () => {
    botonEliminarTodas.style.backgroundColor = "#ffe4e1";
    botonEliminarTodas.style.transform = "scale(1.05)";
    botonEliminarTodas.style.boxShadow = "4px 4px 15px rgba(0, 0, 0, 0.25)";
});

botonEliminarTodas.addEventListener("mouseleave", () => {
    botonEliminarTodas.style.backgroundColor = "#ffb6c1";
    botonEliminarTodas.style.transform = "scale(1)";
    botonEliminarTodas.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
});

botonEliminarTodas.addEventListener("click", eliminarTodasTareas);

export default botonEliminarTodas;
