import textotarea from "./textoTarea.js";

const contenedorTareas = document.createElement("div");

contenedorTareas.style.cssText = `
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 20px;
  background-color: #fff0f5;
  border-radius: 16px;
  border: 2px dashed #dda0dd;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.1);
  font-family: 'Comic Sans MS', cursive, sans-serif;
`;


export default contenedorTareas;
