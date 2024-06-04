import { z } from "zod";

// const userValidationSchema = z.object({
//   id: z.string(),
//   password: z
//     .string()
//     .max(20, { message: "Password can not be more than 20 characters" }),
//   needsPasswordChange: z.boolean().optional(),
//   role: z.enum(["student", "faculty", "admin"]),
//   status: z.enum(["in-progress", "blocked"]).default("in-progress"),
//   isDeleted: z.boolean().optional().default(false),
// });

// export const UserValidation = {
//   userValidationSchema,
// };

const userValidationSchema = z.object({
  // id: z.string(), // auto generate
  password: z
    .string({ invalid_type_error: "password must be string" })
    .max(20, { message: "password can not 20 characters" })
    .optional(),
  // needsPasswordChange: z.boolean().optional().default(true),
  // role: z.enum(["student", "faculty", "admins"]),
  // status: z.enum(["in-progress", "blocked"]).default("in-progress"),
  // isDeleted: z.boolean().optional().default(false),
});

export const UserValidation = {
  userValidationSchema,
};
