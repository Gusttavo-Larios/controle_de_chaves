export interface LoginUseCase {
    authenticate(params: {email: string, password: string}): void;
}