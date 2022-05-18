import Inputs from "../../components/inputs" 
import ButtonSubmit from "../../components/buttons"
import testeAPI from "../../LoginAPI.js"
import { useState } from "react"
import HandlingErrors from "../../components/handlingErrors"
import styles from './HandlingErrors.module.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function Login(){
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [showElement, setShowElement] = useState(false)
  const [responseAPI, setResponseAPI] = useState('')

  function onSubmitForm(e) {
    e.preventDefault()
    testeAPI(email, password).then((response) => {
      console.log(response.code, response.message)
      if(response.code){
        setResponseAPI(response.message)
        setShowElement(true)
      }
    })
  }
    
  return(
    <section className={styles.Inputs}>
      { showElement ? <HandlingErrors message={responseAPI}/> : null }
      <form onSubmit={onSubmitForm} >
        <label> 
          <h1>Login</h1>
          <Inputs type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}  />
          <Inputs type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
          <ButtonSubmit action={'Entrar'}/>
        </label>
      </form>
    </section>    
  )
}

function checkUser(ObjUser){
  if(ObjUser.uid){
    return(
    <Router>
    <Link to="/"></Link>
   </Router> )
  }
}
