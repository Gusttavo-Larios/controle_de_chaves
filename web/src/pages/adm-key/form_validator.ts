import { z } from "zod";

export const admKeyFormRules = z.object({
  room_name: z.string(),
});

export type IConsultKeysForm = z.infer<typeof admKeyFormRules>;

