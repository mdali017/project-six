export type TUser = {
  // id: string;
  // password: string;
  // needsPasswordChange: boolean;
  // role: "admin" | "student" | "faculty";
  // isDeleted: boolean;
  // status: "in-progress" | "blocked";
  // ---------------------------------------------
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: "admin" | "student" | "faculty";
  status: "in-progress" | "blocked";
  isDeleted: boolean;
};

export type NewUser = {
  password: string;
  role: string;
  id: string;
};
