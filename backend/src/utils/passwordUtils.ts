import { hash, genSalt, compare } from "bcrypt"
const saltRounds = 10; // Number of salt rounds used for hashing

export const hashPassword = async (password: string): Promise<string> => {
    try {
        const salt = await genSalt(saltRounds);
        const hashedPassword = await hash(password, salt);
        return hashedPassword;
    } catch (error) {
        console.log(error);
        throw new Error('Error hashing password');
    }
};

export const comparePassword = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    try {
        const passwordMatch = await compare(password, hashedPassword);
        return passwordMatch;
    } catch (error) {
        throw new Error('Error comparing passwords');
    }
};
