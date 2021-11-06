const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/routes");
require("./db/connection");

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log("Listening on port http://localhost:" + process.env.PORT);
});
