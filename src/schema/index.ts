import * as z from "zod";

export const LoginSchema = z.object({
    username: z.string().email(),
    password: z.string(),
}).required()
