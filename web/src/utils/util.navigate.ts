import { router } from "app/router/router";

export class NavigateUtil {
  static go(params: { path: string, data?: any }): void {
    router.navigate(params.path, {state: params.  data});
  }
}
