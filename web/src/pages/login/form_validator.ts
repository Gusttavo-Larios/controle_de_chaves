import { z } from "zod";

import {EMAIL_REGEX} from 'app/utils/util.regex'

export const loginFormRules = z.object({
  email: z
    .string()
    .nonempty("O E-Mail é requirido.")
    .regex(EMAIL_REGEX, "Formato inválido."),
  password: z.string().nonempty("A senha é requirida."),
});

export type IAuthenticateForm = z.infer<typeof loginFormRules>