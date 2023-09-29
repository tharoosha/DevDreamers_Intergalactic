import { Request, Response } from 'express';
import { AuthService } from './AuthService';
import { UserNotMatchError } from '../Exceptions/UserNotMatchError';
import { UserAlreadyExistsError } from '../Exceptions/UserAlreadyExistsError';

export class AuthController {
    private authService: AuthService;

    constructor() {
        this.authService = new AuthService();
    }

    public register = async (req: Request, res: Response): Promise<void> => {
        try {
            const { firstname, lastname, email, password } = req.body;
            await this.authService.register(firstname, lastname, email, password);
            res.status(201).json({ success: true, message: 'Registration Successful!' });
        } catch (error) {
            if (error instanceof UserAlreadyExistsError) {
                res.status(400).json({ success: false, message: error.message });
            } else {
                console.error('Error during user registration:', error);
                res.status(500).json({ success: false, error: error.message });
            }
            return
        };
    }

    public login = async (req: Request, res: Response): Promise<void> => {
        try {

            console.log(req.body)
            const { email, password } = req.body;

            const token = await this.authService.login(email, password);
            res.json({ success: true, token });
        } catch (error) {
            if (error instanceof UserNotMatchError) {
                res.status(400).json({ success: false, message: error.message });
            } else {
                console.error('Error during user login:', error);
                res.status(500).json({ success: false, message: error.message });
            }
        }
        return
    };

    public logout = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            await this.authService.logout(token);
            res.sendStatus(204);
        } catch (error) {
            console.error('Error during user logout:', error);
            res.status(500).json({ error: 'Failed to logout' });
        }
        return
    };
}