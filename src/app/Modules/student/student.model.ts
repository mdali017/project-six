import { Schema, model, connect } from "mongoose";
import {
  Guardian,
  Student,
  UserName,
  localGuardian,
} from "./student.interface";

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true, "Father's name is required"],
  },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required"],
  },
  fatherOccupation: {
    type: String,
    required: [true, "Father's occupation is required"],
  },
  motherName: {
    type: String,
    required: [true, "Mother's name is required"],
  },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required"],
  },
  motherOccupation: {
    type: String,
    required: [true, "Mother's occupation is required"],
  },
});

const localGuardianSchema = new Schema<localGuardian>({
  name: {
    type: String,
    required: [true, "Local guardian's name is required"],
  },
  occupation: {
    type: String,
    required: [true, "Local guardian's occupation is required"],
  },
  contactNo: {
    type: String,
    required: [true, "Local guardian's contact number is required"],
  },
  address: {
    type: String,
    required: [true, "Local guardian's address is required"],
  },
});

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: userNameSchema,
  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "Gender must be either 'male' or 'female'",
    },
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/.+@.+\..+/, "Please enter a valid email address"],
  },
  dateOfBirth: {
    type: String,
  },
  contactNo: {
    type: String,
    required: [true, "Contact number is required"],
  },
  emergencyContactNo: {
    type: String,
    required: [true, "Emergency contact number is required"],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      message:
        "Blood group must be one of 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'",
    },
  },
  presentAddress: {
    type: String,
    required: [true, "Present address is required"],
  },
  permanentAddress: {
    type: String,
    required: [true, "Permanent address is required"],
  },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
});

export const StudentModel = model<Student>("Student", studentSchema);
