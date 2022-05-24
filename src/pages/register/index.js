import Inputs from '../../components/inputs'
import ButtonSubmit from '../../components/buttons'
import { useState } from 'react'
import registerAPI from '../../API/RegisterAPI.js'
import HandlingErrors from '../../components/handlingErrors'
import styles from './register.module.css';
import logo from '../../assets/Logo.svg'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Navigate,
  } from "react-router-dom";

export default function Register(){
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [showElement, setShowElement] = useState(false)
  const [responseAPI, setResponseAPI] = useState('')
  
  
  function onSubmitForm(e) {
    e.preventDefault()
    const object = {
      email,
      name,
      role,
      password, 
    }

    registerAPI(object).then((response) => {
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
      <img src={logo} alt='logo'/>
      <form onSubmit={onSubmitForm} className={styles.FormLogin}>
        { showElement ? <HandlingErrors message={responseAPI}/> : null }   
        <h1>Register</h1>
        <Inputs type='text' placeholder='Nome' autoComplete='off' required value={name} onChange={(e) => setName(e.target.value)} />
        <Inputs type='email' placeholder='Email' autoComplete='off' required value={email} onChange={(e) => setEmail(e.target.value)} />
        <Inputs type='password' placeholder='Senha' autoComplete='current-password' required value={password} onChange={(e) => setPassword(e.target.value)} />
        <select defaultValue='Cargo' placeholder='Cargo' className={styles.select} onChange={(e) => setRole(e.target.value)}>
          <option value='Cargo'>Cargo</option>
          <option value='Atendimento'>Atendimento</option>
          <option value='Cozinha'>Cozinha</option>
        </select>
        <ButtonSubmit action={'Entrar'}/>
        <p className={styles.register}>Tem uma conta? <Link className={styles.link} to="/">Vá para o Login</Link></p>
      </form>
    </section>    
  )
}