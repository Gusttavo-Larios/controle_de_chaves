import { z } from "zod";

export const mainFormRules = z.object({
  roomName: z.string(),
});

export type IConsultKeysForm = z.infer<typeof mainFormRules>;

