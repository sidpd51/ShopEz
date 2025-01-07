import { Label, TextInput } from 'flowbite-react'

type fieldProps = {
    fieldname: string,
    label: string,
    type: string,
    placeholder: string,
    required?: boolean
}

const Field = ({ fieldname, label, type, placeholder, required = false }: fieldProps) => {
    return (
        <div>
            <div className="mb-2 block">
                <Label htmlFor={fieldname} value={label} />
            </div>
            <TextInput required={required} id={fieldname} type={type} placeholder={placeholder} />
        </div>
    )
}

export default Field
