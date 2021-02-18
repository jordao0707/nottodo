import react from 'react';
import { TextField,Input,FormControl, InputLabel,Button } from '@material-ui/core';
export function FormCard(){
    function salvar(text){
        localStorage.setItem('nome',text)
    }
    return (
        <FormControl onSubmit = {e => salvar(e.target.value)}>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <Button type ="submit">Submter</Button>
      </FormControl>
        )

    
}