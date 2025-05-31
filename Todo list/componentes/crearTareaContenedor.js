import tareaInput from "./tareaInput.js";
import botonenviar from "./botonenviar.js";
import { agregarTarea } from "./funcionesTareas.js";

const crearTareacontenedor = document.createElement("div");

crearTareacontenedor.style.cssText = `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: #ffeef8;
  border-radius: 16px;
  border: 2px dotted #dda0dd;
  box-shadow: 3px 3px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

botonenviar.addEventListener("click", () => {
    if (tareaInput.value.trim() !== "") {
        agregarTarea(tareaInput);
    }
});

crearTareacontenedor.append(tareaInput, botonenviar);

export default crearTareacontenedor;
