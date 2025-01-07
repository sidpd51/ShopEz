import { Label, TextInput } from 'flowbite-react'

type fieldProps = {
    fieldname: string,
    label: string,
    type: string,
    placeholder: string,
    required?: boolean,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Field = ({ fieldname, label, type, placeholder, required = false, onChange }: fieldProps) => {
    return (
        <div>
            <div className="mb-2 block">
                <Label htmlFor={fieldname} value={label} />
            </div>
            <TextInput required={required} id={fieldname} type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    )
}

export default Field
