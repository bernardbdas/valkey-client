// import { Request, Response } from "express";
// import jwt, { Jwt } from "jsonwebtoken";
// import process from 'dotenv/config'

// const getUser = async (username: string) => {
//   return { userId: 123, password: "123456", username };
// };

// export const loginUser = async (req: Request, res: Response) => {
//   const { username, password } = req.body;

//   const user = await getUser(username);

//   if (user.password !== password) {
//     return res.status(403).json({
//       error: "invalid login",
//     });
//   }

//   // delete user.password;

//   const token = jwt.sign(user, process.env.MY_SECRET, { expiresIn: "1h" });

//   res.cookie("token", token);

//   return res.redirect("/welcome");
// };
