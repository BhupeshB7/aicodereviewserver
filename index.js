import express from "express";
import aiRouter from "./src/routes/ai.routes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(
  cors({
    origin: ["https://aicodereviewb7.netlify.app", "http://localhost:5173"],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
  })
);
app.use("/api", aiRouter);
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
