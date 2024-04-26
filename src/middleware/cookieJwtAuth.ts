// import jwt from "jsonwebtoken";

// export function cookieJwtAuth(req: any, res: any, next: any) {
//   const token = req.cookies.token;
//   try {
//     const user = jwt.verify(token, process.env.MY_SECRET);
//     req.user = user;
//     next();
//   } catch (err) {
//     res.clearCookie("token");
//     return res.redirect("/");
//   }
// }
