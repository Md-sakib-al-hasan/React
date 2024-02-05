import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
let renderCount = 0;

type FormValues = {
    username: string,
    email: string,
    channel: string,
}

export const YouTubeForm = () => {
   const form = useForm<FormValues>()
   const {register,control,handleSubmit} = form;
    renderCount++;
    const onSubmit = (data: FormValues) => {
            console.log(data)
    }
    return(
        <div>
            <h1>Youtube Form ({renderCount}) </h1>
             <form  onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="username">UserName</label>
            <br />
            <input type="text" id="username" {...register('username')}></input>
            <br />
            <label htmlFor="email">E-mail</label>
            <br />
            <input type="email" id="email" {...register('email')}></input>
            <br />
            <label htmlFor="channel">E-mail</label>
            <br />
            <input type="text" id="channel" {...register('channel')}></input>
            <br />

            <button>Submit</button>
            
        </form>
        <DevTool control = {control} />
        </div>
    )
}