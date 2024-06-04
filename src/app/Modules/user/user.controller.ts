import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { password, studentData } = req.body;

    const result = await UserServices.createStudentIntoDB(
      password,
      studentData
    );
    // res.status(200).json({
    //   success: true,
    //   message: "Stedent Created Successfully",
    //   data: result,
    // });

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Student is created successfully",
      data: result,
    });
  } catch (error) {
    // console.log(error);

    next(error);
  }
};

export const UserControllers = {
  createStudent,
};
