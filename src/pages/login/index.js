import Inputs from '../../components/inputs'
import ButtonSubmit from '../../components/buttons'
import testeAPI from '../../LoginAPI.js'
import { useState } from "react"
import HandlingErrors from '../../components/handlingErrors'
import styles from './login.module.css';
import logo from '../../assets/Logo.svg'
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
        setTimeout(() => {
          setShowElement(false)
        }, 10000)
      } else {
        
      }
    })
  }
    
  return(
    <section className={styles.SectionLogin}>
      <img src={logo} alt="logo"/>
      <form onSubmit={onSubmitForm} className={styles.FormLogin}>
      { showElement ? <HandlingErrors message={responseAPI}/> : null }   
        <h1>Login</h1>
        <Inputs type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Inputs type='password' placeholder='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
        <ButtonSubmit action={'Entrar'}/>
        <p className={styles.register}>Não tem uma conta? <Link className={styles.link} to="/register">Cadastre-se</Link></p>
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
