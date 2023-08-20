import { UserRepository } from '../repositories/UserRepository'
import { User } from '../entity/User';
import { generateToken } from '../utils/tokenUtils';
import { hashPassword, comparePassword } from '../utils/passwordUtils';
import { UserAlreadyExistsError } from '../Exceptions/UserAlreadyExistsError';
import { UserNotMatchError } from '../Exceptions/UserNotMatchError';

export class AuthService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async register(
        firstname: string,
        lastname: string,
        email: string,
        password: string,
    ): Promise<void> {

        const isUserExists = await this.userRepository.getUserByEmail(email);

        if (isUserExists) {
            throw new UserAlreadyExistsError('User already exists');
        }

        const hashedPassword = await hashPassword(password);

        const user = new User(firstname, lastname, email, hashedPassword);


        await this.userRepository.createUser(user);
    }

    public async login(email: string, password: string): Promise<string> {
        const user = await this.userRepository.getUserByEmail(email);

        if (!user) {
            throw new UserNotMatchError('Invalid email or password');
        }

        const passwordMatch = await comparePassword(password, user.password);

        if (!passwordMatch) {
            throw new UserNotMatchError('Invalid email or password');
        }

        const token = generateToken({ id: user.id, username: user.email });
        return token;
    }

    public async logout(token: string): Promise<void> {
        // Perform any necessary logic for logging out the user, such as invalidating the token or updating the user's session status.
        // You can also handle token blacklisting or token revocation if required.
        // This example assumes a stateless JWT-based authentication system where logout is not explicitly handled on the server-side.
        // If you have specific logout requirements, customize this method accordingly.
    }
}