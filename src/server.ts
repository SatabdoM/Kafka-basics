import express from "express";
import dotenv from "dotenv"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello from Server ");
});
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
