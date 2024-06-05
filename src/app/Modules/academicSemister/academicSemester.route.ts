import express from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import { validateReuest } from "../../middleware/validRequest";
import { AcademicSemesterValidation } from "./academicSemester.validation";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateReuest(
    AcademicSemesterValidation.createAcademicSemesterValidationSchema
  ),
  AcademicSemesterController.createAcademicSemester
);

export const AcademicSemesterRoute = router;
