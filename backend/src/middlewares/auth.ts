import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/tokenUtils";

export default function verifyAndDecodeJWT(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.headers.authorization?.substring("Bearer ".length);

    console.log(token);

    if (!token) {
      return res.status(401).json({
        error: "Authorization Token Not Provided.",
      });
    }

    const decoded = verifyToken(token);

    console.log(decoded);

    req.body.userObj = decoded;

    next();
  } catch (e) {
    console.log(e.toString());

    return res.status(500).json({
      error: "Something went wrong.",
    });
  }
}
