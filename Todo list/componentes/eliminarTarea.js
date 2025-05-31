const eliminarTarea = document.createElement("button");
eliminarTarea.textContent = "🗑️ Eliminar";

eliminarTarea.style.cssText = `
  background-color: #f08080;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 8px 16px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 14px;
  cursor: pointer;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
`;

eliminarTarea.addEventListener("mouseenter", () => {
    eliminarTarea.style.backgroundColor = "#ffb6b6";
    eliminarTarea.style.transform = "scale(1.05)";
    eliminarTarea.style.boxShadow = "4px 4px 12px rgba(0, 0, 0, 0.25)";
});

eliminarTarea.addEventListener("mouseleave", () => {
    eliminarTarea.style.backgroundColor = "#f08080";
    eliminarTarea.style.transform = "scale(1)";
    eliminarTarea.style.boxShadow = "2px 2px 8px rgba(0, 0, 0, 0.2)";
});

export default eliminarTarea;
