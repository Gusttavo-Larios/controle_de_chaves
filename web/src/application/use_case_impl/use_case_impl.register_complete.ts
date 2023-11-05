import { RegisterCompleteUseCase } from "app/core/use_cases/use_case.register_complete"
import { NavigateUtil } from "app/utils/util.navigate";

export class RegisterCompleteUseCaseImpl implements RegisterCompleteUseCase {
    async createPassword(params: {
        password: string;
        confirmationPassword: string
    }): Promise<void> {
        console.log(params)
        NavigateUtil.go({path: "/chaves"})
    }
}