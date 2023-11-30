import { PreRegistrerKeyUseCase } from "app/core/use_cases/use_case.pre_registrer_key"
import { api } from "app/service";


export class PreRegistrerKeyUseCaseImpl implements PreRegistrerKeyUseCase {
    async send(worksheet: File): Promise<void> {
        try {
            const form = new FormData()

            form.append('file', worksheet)

            const response = await api.post('/key/pre-registration', form);
            console.log(response)
        } catch (error: any) {
            console.error(error)
            throw new Error(error.message);
        }
    }
}