import Inputs from "../../components/inputs" 
import ButtonSubmit from "../../components/buttons"
import testeAPI from "../../testeAPI.js"
import { useState } from "react"
export default function Login(){
   const [value,setValue] = useState()
    function onSubmitForm(e) {
      e.preventDefault()
      testeAPI()
      console.log(value)
    }
    
    return(
      <>
        <form onSubmit={onSubmitForm} >
          <label> 
            <h1>Login</h1>
            <Inputs tipoInput='email' placeholder='email'/>
            <Inputs tipoInput='password' placeholder='senha' value = {setValue} />
            <ButtonSubmit action={'Entrar'}/>
          </label>
        </form>
     </>    
    )
   }