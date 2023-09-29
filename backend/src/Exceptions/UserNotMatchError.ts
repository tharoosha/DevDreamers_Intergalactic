export class UserNotMatchError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserNotMatchError';
    }
}