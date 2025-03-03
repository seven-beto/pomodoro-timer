import { Play } from "phosphor-react";
import { useForm } from 'react-hook-form';
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from "zod";
import { data } from "react-router-dom";


const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    owner:zod.string(),
    minutesAmount: 
        zod.number()
        .min(5, 'O ciclo precisa ser de no minimo 5 minutos')
        .max(60, 'O intervalo precisa ser de no maximo 60 minutos'),
})

//interface NewCycleFormData {
//    task: string
//    minutesAmount: number
//}

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>



export function Home () {
    const { register, handleSubmit,  watch, formState, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,       
        },
    })

    function handleCreateNewCycle(data: NewCycleFormData) {
        console.log(data)
        reset()
    }

    console.log(formState.errors)

    const task = watch('task')
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)} action= "">
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <TaskInput 
                        id="task" 
                        list="task-suggestions" 
                        placeholder="De um nome para o seu projeto"
                        {...register('task')}
                                                />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1" />
                        <option value="Projeto 2" />
                        <option value="Projeto 3" />
                        <option value="Banana" />
                    </datalist>

                    <label htmlFor= "">Durante</label>
                    <MinutesAmountInput 
                        type="number" 
                        id= "minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                        {...register('minutesAmount', {valueAsNumber : true})}
                    />

                    <span>minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                <StartCountdownButton disabled={!isSubmitDisabled} type="submit">
                    <Play size={24}/>
                    Comecar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}