import { Request, Response } from "express";

export const addUser = (req: Request, res: Response) => {
  console.log(req.body.user);
  res.redirect("/welcome");
};
