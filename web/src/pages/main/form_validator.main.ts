import { z } from "zod";

const mainFormRules = z.object({
  roomName: z.string(),
});

type TMainForm = z.infer<typeof mainFormRules>;

export { mainFormRules, TMainForm };
