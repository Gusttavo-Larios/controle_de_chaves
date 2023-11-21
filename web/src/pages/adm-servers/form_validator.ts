import { z } from "zod";

export const admServerFormRules = z.object({
  server_name: z.string(),
});

export type IConsultPublicAgentForm = z.infer<typeof admServerFormRules>;

