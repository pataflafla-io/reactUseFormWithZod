import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {z} from 'zod';
import { CustomInput } from './components/CustomInput';

import'./customForm.css'

const schema = z.object({
  username: z.string({
              error: (wtf) => wtf.input === undefined ? "El nombre es requerido." : "Nombre inválido."
            }).min(3, "Nombre incorrecto"),
  email: z.email({
              error: (wtf) => wtf.input === undefined ? "El email es requerido." : "Email inválido."
            }).min(1, "Email incorrecto."),
  password: z.string({
              error: (wtf) => wtf.input === undefined ? "La contraseña es requerida." : ""
            }).min(6, "La contraseña debe de contener al menos 6 caracteres."),
  verifyPassword: z.string({
              error: (wtf) => wtf.input === undefined ? "Por favor, comfirme la contraseña." : ""
            }).min(6, "La verificación de la contraseña debe de contener al menos 6 caracteres"),
})
.refine(
  (data)=> data.password === data.verifyPassword, {
    message: "Las contraseñas no coinciden",
    path: ['verifyPassword']
  }
)

// Gracias a la inferencia que nos brinda Zod,
// ahora tenemos un type en Typescript basado
// en el schema 💣💣💣
export type CustomFormValues = z.infer<typeof schema>;

export const CustomForm = () => {

  const {control, handleSubmit, formState: {errors}} = useForm<CustomFormValues>(
    {
      // Con resolver le decimos a useForm 
      // como vamos a validar el formulario.
      // ¡Una hermosura!
      resolver: zodResolver(schema)
    }
  )

  const onSubmit:SubmitHandler<CustomFormValues> = (data) => {
    // Si pasa la validación de Zod; entonces, haremos
    // lo que debamos hacer con la información del form.
    // NOTA: Deberíamos tener una validación en el backend.
    // Ya sea que enviemos el formulario a una RestAPI o a 
    // un ServerAction. 
    // while(true){print(¡No confiar en lo que llega desde el frontend!)}

    console.log({data});
  }

  return (
    <form className='customForm' onSubmit={handleSubmit(onSubmit)}>

      <CustomInput control={control} error={errors.username} label="Nombre" name="username" type="text" />
      <CustomInput control={control} error={errors.email} label="Email" name="email" type="email" />
      <CustomInput control={control} error={errors.password} label="Password" name="password" type="password" />
      <CustomInput control={control} error={errors.verifyPassword} label="Confirmar password" name="verifyPassword" type="password" />

      <button type="submit">Enviar</button>

    </form>
  )
}
