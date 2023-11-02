import { z } from "zod";

const mainFormRules = z.object({
  room_name: z.string(),
});

type TMainForm = z.infer<typeof mainFormRules>;

export { mainFormRules, TMainForm };
