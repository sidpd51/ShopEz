
"use client";

import { Button, Card, Checkbox, Label } from "flowbite-react";
import Field from "../components/Field";
import HeaderWithSubHeader from "../components/HeaderWithSubHeader";

export function Signup() {
    return (
        <Card className="max-w-sm w-full">
            <HeaderWithSubHeader header="Signup" subheader="Create your account to get started"/>
            <form className="flex flex-col gap-4">
                <Field label="First Name" fieldname="firstname" type="text" placeholder="John" />
                <Field label="Last Name" fieldname="lastname" type="text" placeholder="Doe" />
                <Field label="Email" fieldname="email" type="email" placeholder="your email" />
                <Field label="Password" fieldname="password" type="password" placeholder="your password" />
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </Card>
    );
}
