import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../../utils/tokenUtils'

import { UserRepository } from '../../repositories/UserRepository';
import { User } from '../../entity/User';

declare module 'express' {
    interface Request {
        userObj?: User;
    }
}

export const authMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        // Extract the token from the request headers, query parameters, or cookies
        const token = req.headers.authorization?.split(' ')[1] || req.query.token || req.cookies.token;

        if (!token) {
            throw new Error('No token provided');
        }

        // Verify the token
        const decodedToken = await verifyToken(token);

        const userRepo = new UserRepository();

        const userObj = await userRepo.getUserById(decodedToken.id)

        // Attach the decoded token to the request object for further use
        req.userObj = userObj;

        next();
    } catch (error) {
        res.status(401).json({ error: 'Unauthorized' });
    }
};