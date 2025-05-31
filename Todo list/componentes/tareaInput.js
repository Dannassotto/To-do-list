const tareaInput = document.createElement("input");

tareaInput.type = "text";
tareaInput.placeholder = "📝 Ingresa tu tarea ";
tareaInput.style.cssText = `
  padding: 10px 14px;
  border-radius: 12px;
  border:2px dashed #dda0dd;
  font-family: 'Comic Sans MS', cursive, sans-serif;
  width: 100%;
  max-width: 400px;
  margin-bottom: 16px;
  outline: none;
  background-color: #fff0f5;
  color: #4b2e2e;
`;

export default tareaInput;
