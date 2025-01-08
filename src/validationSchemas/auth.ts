import { z } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signUpSchema = z.object({
    firstname: z.string().min(2).max(255),
    lastname: z.string().min(2).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(255),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(255),
});


export type SignUpType = z.infer<typeof signUpSchema>;
export type SignInType = z.infer<typeof signInSchema>;

