import logo from '../../assets/Logo.svg'
import Hamburguer from '../../assets/Hamburguer.png'
import ButtonNav from '../../components/buttonsNavigate'
import styles from './Home.module.css'
import { logoutUser } from '../../components/localStorage'
import { Navigate, useNavigate} from 'react-router-dom'
import { useState } from 'react'

 
export default function Home(){
  const [navigate, setNavigate] = useState(false)
  const [route, setRoute] = useState('')
  const navigateTo = useNavigate()
  function logoutUserNav () {
    logoutUser()
    setRoute('/')
    setNavigate(true)
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
        <ButtonNav onClick={() => navigateTo('/menu') }>{'Cardápio'}</ButtonNav>
        <ButtonNav onClick={() => navigateTo('/order') }>{'Pedidos'}</ButtonNav>
        <ButtonNav onClick={() => navigateTo('/order')}>{'Serviço'}</ButtonNav>
        <ButtonNav onClick={() => navigateTo('/finalized')} >{'Entregue'}</ButtonNav>
        <button onClick={logoutUserNav}>{'Sair'}</button>
      </nav>
      { navigate ? <Navigate to={route} /> : null }
    </section>
  )
}
