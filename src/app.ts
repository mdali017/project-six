import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { StudentRoute } from "./app/Modules/student/student.route";
import { UserRoutes } from "./app/Modules/user/user.route";
import globalErrorHandler from "./app/middleware/globalErrorHandling";
import notFound from "./app/middleware/notFound";
// import router from "./app/routes";
const app: Application = express();
const port = 3000;

// parser
app.use(express.json());
app.use(cors());

// Application Routes
app.use("/api/v1/students", StudentRoute);
app.use("/api/v1/users", UserRoutes);
// app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// global error handling
app.use(globalErrorHandler);

// Not Found Middleware
app.use(notFound);

export default app;
