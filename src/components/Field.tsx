import { Label } from "flowbite-react";
import { UseFormRegister } from "react-hook-form";

type fieldProps = {
    fieldname: string,
    label: string,
    type: string,
    placeholder: string,
    required?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void,
    registerField: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: UseFormRegister<any>
}

const Field = ({ fieldname, label, type, placeholder, registerField, register, required }: fieldProps) => {
    return (
        <div>
            <Label htmlFor={fieldname} value={label} />
            <input {...register(registerField)}
                type={type}
                name={fieldname}
                id={fieldname}
                className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder={placeholder} required={required} />
        </div>
    )
}

export default Field
