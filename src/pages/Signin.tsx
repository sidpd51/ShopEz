
"use client";

import { Button, Card, Checkbox, Label } from "flowbite-react";
import Field from "../components/Field";
import HeaderWithSubHeader from "../components/HeaderWithSubHeader";

export function Signin() {
    return (
        <Card className="max-w-sm w-full">
            <HeaderWithSubHeader header="Signin" />
            <form className="flex flex-col gap-4">
                <Field label="Email" fieldname="email" type="email" placeholder="your email" />
                <Field label="Password" fieldname="password" type="password" placeholder="your password" />
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Remember me</Label>
                </div>
                <Button type="submit">Signin</Button>
            </form>
        </Card>
    );
}
