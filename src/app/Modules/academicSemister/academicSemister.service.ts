import { AcademicSemister } from "./academicSemister.interface";
import { AcademicSemisterModel } from "./academicSemister.model";

const createAcademicSemesterIntoDB = async (payload: AcademicSemister) => {
  const result = await AcademicSemisterModel.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createAcademicSemesterIntoDB,
};
