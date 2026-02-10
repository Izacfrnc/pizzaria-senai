const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

(async () => {
  try {
    const [rows] = await db.query("SELECT 1 AS ok");
    console.log("Banco OK:", rows);
  } catch (err) {
    console.error("Erro ao conectar no MySQL:", err);
  }
})();

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
