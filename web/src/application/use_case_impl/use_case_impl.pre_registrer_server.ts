import { PreRegistrerServerUseCase } from "app/core/use_cases/use_case.pre_registrer_server"
import { api } from "app/service";


export class PreRegistrerServerUseCaseImpl implements PreRegistrerServerUseCase {
    async send(worksheet: File): Promise<void> {
        try {
            const form = new FormData()

            form.append('file', worksheet)

            const response = await api.post('/server/pre-registration', form);
            console.log(response)
        } catch (error: any) {
            console.error(error)
            throw new Error(error.message);
        }
    }
}