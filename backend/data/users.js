import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Obiwan",
    email: "obiwan@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Anakin",
    email: "anakin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
];
