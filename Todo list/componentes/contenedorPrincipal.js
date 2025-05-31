import titulo from "./titulo.js";
import crearTareacontenedor from "./crearTareaContenedor.js";
import contenedorTareas from "./contenedorTareas.js";

const contenedorPrincipal = document.createElement("div");

contenedorPrincipal.style.cssText = `
  max-width: 500px;
  margin: 0 auto;
  background-color: #fffafc;
  padding: 30px;
  border-radius: 18px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

contenedorPrincipal.append(
    titulo,
    crearTareacontenedor,
    contenedorTareas
);

export default contenedorPrincipal;
