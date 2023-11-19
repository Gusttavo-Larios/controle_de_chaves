import { RegisterCompleteUseCase } from "app/core/use_cases/use_case.register_complete"

import { NavigateUtil } from "app/utils/util.navigate";

import { api } from "app/service";

export class RegisterCompleteUseCaseImpl implements RegisterCompleteUseCase {
    async createPassword(params: {
        email: string;
        password: string;
        confirmationPassword: string
    }): Promise<void> {
        try {
            await api.post('/server/complete-register', {
                ...params
            });

            NavigateUtil.go({ path: "/" })
        } catch (error: any) {
            console.error(error)
            throw new Error(error.message);
        }
    }
}