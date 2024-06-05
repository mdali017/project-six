import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import catchAsync from "../../utils/catchAsync";

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { student: studentData } = req.body;

//     const result = await StudentServices.createStudentIntoDB(studentData);
//     res.status(200).json({
//       success: true,
//       message: "Student Created Successfully",
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// const cathAsync = fn => {};

// ====================== normal get all user
// const getAllStudent = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const result = await StudentServices.getAllStudentFromDB();
//     res.status(200).json({
//       success: true,
//       message: "Student are retrieved Successfully !!!",
//       data: result,
//     });
//   } catch (error) {
//     next(error);
//   }
// };
// ====================== normal get all user
// ====================== catchAsync using get all user
const getAllStudent = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentFromDB();
  res.status(200).json({
    success: true,
    message: "Student are retrieved Successfully !!!",
    data: result,
  });
});

// get Single Student
const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    // console.log(error);
    next(error);
  }
};

export const StudentControllers = {
  // createStudent,
  getAllStudent,
  getSingleStudent,
};
