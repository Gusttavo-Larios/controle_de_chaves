import { LoginUseCase } from "app/core/use_cases/use_case.login";
import { NavigateUtil } from "app/utils/util.navigate";

export class LoginUseCaseImpl implements LoginUseCase {
  async authenticate(params: {email: string, password: string}): Promise<void> {
    if (params.email === "teste@email.com" && params.password === "12345") {
      NavigateUtil.go({ path: "/main" });
    } else throw new Error("Usuário ou senha inválidos.");
  }
}
