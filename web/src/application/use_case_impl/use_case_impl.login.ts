import { LoginUseCase } from "app/core/use_cases/use_case.login";
import { api } from "app/service";
import { NavigateUtil } from "app/utils/util.navigate";

export class LoginUseCaseImpl implements LoginUseCase {
  async authenticate(params: { email: string, password: string }): Promise<void> {
    try {

      const response = await api.post('/login', {
        ...params
      });

      if (response.data.status === 'INCOMPLETE_REGISTRATION') {

        NavigateUtil.go({
          path: "/completar-cadastro", data: {
            email: params.email
          }
        });
      } else {
        sessionStorage.setItem("@token", response.data.token);
        sessionStorage.setItem("@server", JSON.stringify(response.data.server));
        NavigateUtil.go({ path: "/chaves" });
      }

    } catch (error: any) {
      console.error(error)
      throw new Error(error.message);
    }
  }
}
