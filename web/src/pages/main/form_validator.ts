import { z } from "zod";

export const mainFormRules = z.object({
  room_name: z.string(),
});

export type IConsultKeysForm = z.infer<typeof mainFormRules>;

