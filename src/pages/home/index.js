import logo from '../../assets/Logo.svg'
import ButtonNav from '../../components/buttonsNavigate'
import styles from './Home.module.css'
import { logoutUser, getPersistedUser } from '../../components/localStorage'
import { useNavigate } from 'react-router-dom'
import CarouselComponente from '../../components/Carrossel'

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
        <CarouselComponente/>
      </figure>
      <nav>
        {!isUserAChef? 
        <> 
          <ButtonNav disable={isUserAChef} onClick={() => navigateTo('/Menu') }>{'Cardápio e Carrinho'}</ButtonNav>
          <ButtonNav disable={isUserAChef} onClick={() => navigateTo('/order')}>{'Serviço'}</ButtonNav>
          <ButtonNav disable={isUserAChef} onClick={() => navigateTo('/finalized')}>{'Entregue'}</ButtonNav>    
        </> : <ButtonNav onClick={() => navigateTo('/order') }>{'Pedidos'}</ButtonNav>  }
        <button className={styles.buttonLogout} onClick={logoutUserNav}>{'Sair'}</button> 
      </nav>
    </section>
  )
}
