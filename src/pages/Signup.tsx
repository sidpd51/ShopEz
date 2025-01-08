
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card } from "flowbite-react";
import { SubmitHandler, useForm } from "react-hook-form";
import Field from "../components/Field";
import HeaderWithSubHeader from "../components/HeaderWithSubHeader";
import RememberMe from "../components/RememberMe";
import { SignupForm, signupFormSchema } from "../validationSchemas/auth";
import ErrorMessage from "../components/ErrorMessage";

export function Signup() {

    const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
        resolver: zodResolver(signupFormSchema),
    });

    const onSubmit: SubmitHandler<SignupForm> = (data) => {
        console.log('form submitted')
        console.log(data);
    }

    return (
        <Card className="max-w-sm w-full">
            <HeaderWithSubHeader header="Signup" subheader="Create your account to get started" />
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <Field
                    fieldname="firstname"
                    label="First Name"
                    type="text"
                    placeholder="John"
                    registerField="firstname"
                    register={register} />
                {(errors.firstname && <ErrorMessage message={errors.firstname?.message} />)}
                <Field
                    fieldname="lastname"
                    label="Last Name"
                    type="text"
                    placeholder="Doe"
                    registerField={"lastname"}
                    register={register} />
                {(errors.lastname && <ErrorMessage message={errors.lastname?.message} />)}
                <Field
                    fieldname="email"
                    label="Email"
                    type="email"
                    placeholder="johndoe@gn.com"
                    registerField={"email"}
                    register={register} />
                {(errors.email && <ErrorMessage message={errors.email?.message} />)}
                <Field
                    fieldname="password"
                    label="Password"
                    type="password"
                    placeholder="Your Password"
                    registerField={"password"}
                    register={register} />
                {(errors.password && <ErrorMessage message={errors.password?.message} />)}
                {/* <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div> */}
                <RememberMe path="/signin" message="Already have an account?" />
                <Button type="submit">Signup</Button>
            </form>
        </Card>
    );
}
