import logo from '../../assets/Logo.svg'
import Hamburguer from '../../assets/Hamburguer.png'
import ButtonNav from '../../components/buttonsNavigate'
import styles from './Home.module.css'
import { logoutUser, getPersistedUser } from '../../components/localStorage'
import { useNavigate} from 'react-router-dom'
import { useState } from 'react'

export default function Home(){
  const navigateTo = useNavigate()
  
  const isUserAChef = getPersistedUser().role !== 'atendimento'

  async function logoutUserNav () {
    navigateTo('/')
    logoutUser()
  }

  return(
    <section className={styles.sectionHome}>
      <figure>
        <img className={styles.logo} src={logo} alt="logo" />
        <img className={styles.Hamburguer} src={Hamburguer} alt="logo" />
      </figure>
      <div className={styles.suggest} >
        <p>Sugestão do dia: Hamburguer de carne</p>
      </div>
      <nav>
        <ButtonNav disable={isUserAChef} onClick={() => navigateTo('/menu') }>{'Cardápio'}</ButtonNav>
        <ButtonNav onClick={() => navigateTo('/order') }>{'Pedidos'}</ButtonNav>
        <ButtonNav disable={isUserAChef} onClick={() => navigateTo('/order')}>{'Serviço'}</ButtonNav>
        <ButtonNav disable={isUserAChef} onClick={() => navigateTo('/finalized')} >{'Entregue'}</ButtonNav>
        <button className={styles.buttonLogout} onClick={logoutUserNav}>{'Sair'}</button>
      </nav>
    </section>
  )
}
