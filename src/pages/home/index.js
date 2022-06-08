import logo from '../../assets/Logo.svg'
import Hamburguer from '../../assets/Hamburguer.png'
import ButtonNav from '../../components/buttonsNavigate'
import styles from './Home.module.css'
import { logoutUser, getPersistedUser } from '../../components/localStorage'
import { useNavigate } from 'react-router-dom'

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
     
      <nav>
        <ButtonNav onClick={() => navigateTo('/order') }>{'Pedidos'}</ButtonNav>   
        {!isUserAChef? 
        <> 
          <ButtonNav disable={isUserAChef} onClick={() => navigateTo('/menu') }>{'Cardápio e Carrinho'}</ButtonNav>
          <ButtonNav disable={isUserAChef} onClick={() => navigateTo('/order')}>{'Serviço'}</ButtonNav>
          <ButtonNav disable={isUserAChef} onClick={() => navigateTo('/finalized')}>{'Entregue'}</ButtonNav>    
        </> : null }
        <button className={styles.buttonLogout} onClick={logoutUserNav}>{'Sair'}</button> 
      </nav>
    </section>
  )
}
