const botonenviar = document.createElement("button");
botonenviar.textContent = "📩 Enviar";

botonenviar.style.cssText = `
  background-color: #ffc0cb;
  color: #4b2e2e;
  border: 2px dashed #dda0dd;
  padding: 10px 18px;
  margin-top: 12px;
  border-radius: 12px;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  width: 100%;
  max-width: 180px;
`;

botonenviar.addEventListener("mouseenter", () => {
  botonenviar.style.backgroundColor = "#ffe4e1";
  botonenviar.style.transform = "scale(1.05)";
  botonenviar.style.boxShadow = "4px 4px 12px rgba(0, 0, 0, 0.25)";
});

botonenviar.addEventListener("mouseleave", () => {
  botonenviar.style.backgroundColor = "#ffc0cb";
  botonenviar.style.transform = "scale(1)";
  botonenviar.style.boxShadow = "2px 2px 8px rgba(0, 0, 0, 0.2)";
});

export default botonenviar;
