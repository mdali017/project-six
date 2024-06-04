import express from "express";
import { UserControllers } from "./user.controller";

const router = express.Router();

router.post("/create-student", UserControllers.createStudent); // create controllers

export const UserRoutes = router;
