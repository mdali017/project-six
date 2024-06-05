import { Schema, model } from "mongoose";
import { AcademicSemister } from "./academicSemister.interface";
import {
  AcademicSemesterCode,
  AcademicSemesterName,
  months,
} from "./academicSemester.constanse";

const academicSemisterSchema = new Schema<AcademicSemister>({
  name: {
    type: String,
    enum: AcademicSemesterName,
    required: true,
  },
  code: {
    type: String,
    enum: AcademicSemesterCode,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },

  startMonth: {
    type: String,
    enum: months,
    required: true,
  },
  endMonth: {
    type: String,
    enum: months,
    required: true,
  },
});

export const AcademicSemisterModel = model<AcademicSemister>(
  "AcademicSemisterModel",
  academicSemisterSchema
);
