import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home () {
    return (
        <HomeContainer>
            <form action= "">
                <FormContainer>
                    <label htmlFor="">Vou trabalhar em</label>
                    <TaskInput id="task" placeholder="De um nome para o seu projeto"/>

                    <label htmlFor= "">Durante</label>
                    <MinutesAmountInput 
                        type="number" 
                        id= "minutesAmount"
                        placeholder="00"
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

                <StartCountdownButton disabled type="submit">
                    <Play size={24}/>
                    Comecar
                </StartCountdownButton>
            </form>
        </HomeContainer>
    )
}