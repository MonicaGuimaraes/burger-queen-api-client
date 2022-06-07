import styles from './order.module.css'
import ContainerOrder from '../../components/containerOrder'
import logo from '../../assets/Logo.svg'
import ButtonHome from '../../components/buttonHome'

export default function Order(){
    return(
        <main className={styles.MainOrder}>
            <ButtonHome />
            <img className={styles.LogoImg} src={logo} alt='logo'/>
            <ContainerOrder onclick={() => {}} onClickStatus={() => {}} ClassNameButton={styles.buttonPendent}>Pedidos pendentes</ContainerOrder>
            <ContainerOrder onclick={() => {}} onClickStatus={() => {}} ClassNameButton={styles.buttonPreparation}>Pedidos em preparo</ContainerOrder>
            <ContainerOrder onclick={() => {}} onClickStatus={() => {}} ClassNameButton={styles.buttonFinalized}>Pedidos para entrega</ContainerOrder>
        </main>
    )
   }