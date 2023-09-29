import { User } from "../entity/User";
import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    public async getAllUsers(): Promise<User[]> {
        return await this.userRepository.getAllUsers();
    }

    public async getUserById(id: number): Promise<User | undefined> {
        return await this.userRepository.getUserById(id);
    }
}