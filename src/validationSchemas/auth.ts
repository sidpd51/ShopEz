import { z } from 'zod';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const signupFormSchema = z.object({
    firstname: z.string().min(2).max(255),
    lastname: z.string().min(2).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(255),
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const signinFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(255),
});


export type SignupForm = z.infer<typeof signupFormSchema>;
export type SigninForm = z.infer<typeof signinFormSchema>;

