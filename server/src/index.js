const server = require("./server"); // Asegurate de que la ruta es correcta

require('dotenv').config(); // Configuraciones de variables de entorno

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server up on port ${PORT}`);
});
