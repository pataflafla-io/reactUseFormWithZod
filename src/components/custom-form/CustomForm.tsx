import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import {z} from 'zod';

const schema = z.object({
  name: z.string().min(3, "Name is mandatory."),
  email: z.email("Invalid email").min(1, "Email is mandatory."),
  password: z.string().min(6, "Password must have 6 characters at least."),
  verifyPassword: z.string().min(6, "Confirmation must have 6 characters at least."),
})
.refine(
  (data)=> data.password === data.verifyPassword, {
    message: "Password are not equals",
    path: ['verifyPassword']
  }
)

// Gracias a la inferencia que nos brinda Zod,
// ahora tenemos un type en Typescript basado
// en el schema 💣💣💣
type FormValues = z.infer<typeof schema>;

export const CustomForm = () => {

  const {control, handleSubmit, formState: {errors}} = useForm<FormValues>(
    {
      // Con resolver le decimos a useForm 
      // como vamos a validar el formulario.
      // ¡Una hermosura!
      resolver: zodResolver(schema)
    }
  )

  const onSubmit:SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <Controller 
          name='name' 
          control={control} 
          render={
            ({field}) => <input id="name" type="string" {...field} />
          } />
          { errors.name && <p>{errors.name.message}</p>}
    </form>
  )
}
