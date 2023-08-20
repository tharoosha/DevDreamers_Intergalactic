import { config } from 'dotenv';
import { JwtPayload, sign, verify } from 'jsonwebtoken';

config();

const secretKey = process.env.SECRET_KEY; // Replace with your own secret key

export const generateToken = (payload: JwtPayload): string => {
    const token = sign(payload, secretKey);
    return token;
};

export const verifyToken = <T extends JwtPayload>(token: string): Promise<T> => {
    return new Promise((resolve, reject) => {
        verify(token, secretKey, (error, decoded) => {
            if (error) {
                reject(new Error('Invalid token'));
            } else {
                resolve(decoded as T);
            }
        });
    });
};
