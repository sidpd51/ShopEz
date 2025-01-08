
"use client";

import { Button, Card } from "flowbite-react";
import HeaderWithSubHeader from "../components/HeaderWithSubHeader";
import Field from "../components/Field";
import { SigninForm, signinFormSchema } from "../validationSchemas/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "../components/ErrorMessage";
import RememberMe from "../components/RememberMe";

export function Signin() {

    const { register, handleSubmit, formState: { errors } } = useForm<SigninForm>({
        resolver: zodResolver(signinFormSchema),
    });

    const onSubmit: SubmitHandler<SigninForm> = (data) => {
        console.log('form submitted')
        console.log(data);
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <Card className="max-w-sm w-full">
                <HeaderWithSubHeader header="Signin" subheader="Enter your account details" />
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <Field
                        fieldname="email"
                        label="Email"
                        type="email"
                        placeholder="john@gmail.com"
                        registerField="email"
                        register={register}
                    />
                    {(errors.email && <ErrorMessage message={errors.email?.message} />)}
                    <Field
                        fieldname="password"
                        label="Password"
                        type="password"
                        placeholder="your password"
                        registerField="password"
                        register={register}
                    />
                    {(errors.password && <ErrorMessage message={errors.password?.message} />)}
                    <RememberMe path="/signup" message="Create an account?" />
                    <Button type="submit">Signin</Button>
                </form>
            </Card>
        </div >
    );
}
