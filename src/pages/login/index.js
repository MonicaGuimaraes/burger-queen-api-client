import Inputs from "../../components/inputs" 
import ButtonSubmit from "../../components/buttons"
import testeAPI from "../../testeAPI.js"
export default function Login(){

    function onSubmitForm(e) {
      e.preventDefault()
      testeAPI()
    }
    
    return(
      <>
        <form onSubmit={onSubmitForm}>
          <label> 
            <h1>Login</h1>
            <Inputs tipoInput='email' placeholder='email'/>
            <Inputs tipoInput='password' placeholder='senha'/>
            <ButtonSubmit action={'Entrar'}/>
          </label>
        </form>
     </>    
    )
   }