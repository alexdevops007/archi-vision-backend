const app = require("./app");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`.yellow);
});
