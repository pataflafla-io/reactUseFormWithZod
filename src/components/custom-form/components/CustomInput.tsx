import { Controller, type Control, type FieldError, type Path } from 'react-hook-form';
import type { CustomFormValues } from '../CustomForm';

interface Props {
    control: Control<CustomFormValues>;
    error?: FieldError; 
    label: string;
    // Unión estricta al CustomFormValues definido en Zod schema
    // De ésta forma se asegura que sólo admite aquellos
    // fields defindos en el schema.
    name: Path<CustomFormValues>;
    type?: string;
}

export const CustomInput = ({control, error, label, name, type}: Props) => {
    console.log(error)
    return (
        <div className='customFormGroup'>
            <label htmlFor={name}>{label}</label>
            <Controller 
                name={name}
                control={control} 
                render={
                    ({field}) => 
                        <input 
                            className={`customInput ${error ? 'inputError' : ''}`}
                            id={name} 
                            type={type}
                            {...field}
                        />
                }
            />
            { error && <p className='error'>* {error.message}</p>}
        </div>
  )
}
