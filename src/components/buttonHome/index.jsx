import { useNavigate } from 'react-router-dom'
import styles from './ButtonHome.module.css'
import Home from '../../assets/Home.svg'

export default function ButtonHome () {
  const navigateTo = useNavigate() 
  return (
    <button className={styles.HomeButton} onClick={() => navigateTo('/home')} >
      <img className={styles.HomeImg} src={Home} alt="home"/>
    </button>
  )
}