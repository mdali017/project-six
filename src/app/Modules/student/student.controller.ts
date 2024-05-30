import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: "Student Created Successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: "Student are retrieved Successfully !!!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

// get Single Student
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    console.log(studentId, 36);
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: "Student are retrieved Successfully !!!",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
};
