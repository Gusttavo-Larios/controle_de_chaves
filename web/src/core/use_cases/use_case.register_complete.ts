export interface RegisterCompleteUseCase {
    createPassword(params: {
        password: string;
        confirmationPassword: string
    }): Promise<void>;
}