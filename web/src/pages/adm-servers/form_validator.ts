import { z } from "zod";

export const publicAgentFormRules = z.object({
  name: z.string(),
});

export type IConsultPublicAgentForm = z.infer<typeof publicAgentFormRules>;

