import express from "express";
import todoRoutes from "./routes/todo.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(
  cors({
    origin: "*",
  }),
);
app.use(bodyParser.json());

// ROUTES
app.use("/todos", todoRoutes);

//Middleware to handle error any other request
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    nest: express.NextFunction,
  ) => {
    res.status(500).json({
      message: err.message,
    });
  },
);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
