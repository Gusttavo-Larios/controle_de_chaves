import { z } from "zod";

export const registerCompleteFormRules = z.object({
  password: z.string().nonempty("A senha é requirida.").min(8),
  confirmationPassword: z.string().nonempty("Confirme a senha.")
}).refine(({password, confirmationPassword}) => password === confirmationPassword, {
  message: "As senhas devem ser iguais.",
  path: ["confirmationPassword"]
});

export type IRegisterCompleteForm = z.infer<typeof registerCompleteFormRules>;

