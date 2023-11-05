import { LoginUseCase } from "app/core/use_cases/use_case.login";
import { NavigateUtil } from "app/utils/util.navigate";

export class LoginUseCaseImpl implements LoginUseCase {
  async authenticate(params: { email: string, password: string }): Promise<void> {

    switch (params.email) {
      case "cadastrado@exemplo.com":
        NavigateUtil.go({ path: "/chaves" });
        break;
      case "novo@exemplo.com":
        NavigateUtil.go({ path: "/completar-cadastro" });
        break;
      default:
        throw new Error("Usuário ou senha inválidos.");
    }
  }
}
