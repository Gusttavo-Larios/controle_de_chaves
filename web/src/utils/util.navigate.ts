import { router } from "app/router/router";

export class NavigateUtil {
  static go(params: { path: string }): void {
    router.navigate(params.path);
  }
}
