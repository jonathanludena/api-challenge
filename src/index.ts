import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";

import routes from "./routes/items";
dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/items", routes);

app.listen(PORT, () =>
  console.log(`Server listen on http://localhost:${PORT}`)
);
