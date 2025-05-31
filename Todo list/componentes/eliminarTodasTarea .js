const eliminarTodasTareas = document.createElement("button");
eliminarTodasTareas.textContent = "🧹 Eliminar todas las tareas";

eliminarTodasTareas.style.cssText = `
  background-color: #ffb6c1;
  color: #4b2e2e;
  border:2px dashed #dda0dd;
  border-radius: 12px;
  padding: 10px 18px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  margin-top: 12px;
`;

eliminarTodasTareas.addEventListener("mouseenter", () => {
  eliminarTodasTareas.style.backgroundColor = "#ffe4e1";
  eliminarTodasTareas.style.transform = "scale(1.05)";
  eliminarTodasTareas.style.boxShadow = "4px 4px 15px rgba(0, 0, 0, 0.25)";
});

eliminarTodasTareas.addEventListener("mouseleave", () => {
  eliminarTodasTareas.style.backgroundColor = "#ffb6c1";
  eliminarTodasTareas.style.transform = "scale(1)";
  eliminarTodasTareas.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
});

export default eliminarTodasTareas;
