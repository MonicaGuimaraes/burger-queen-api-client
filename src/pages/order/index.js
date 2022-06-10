import styles from './order.module.css'
import ContainerOrder from '../../components/containerOrder'
import logo from '../../assets/Logo.svg'
import ButtonHome from '../../components/buttonHome'
import { callOrdersAPI } from '../../API/CallOrdersAPI'
import { useEffect, useState } from 'react'

export default function Order() {
  const [listPendingCommand, setListPendingCommand] = useState([])
  const [listInPeparationCommand, setListInPreparationCommand ] = useState([])
  const [listReadyOrderCommand, setListReadyOrderCommand ] = useState([])

  useEffect(()=>{
    callOrdersAPI().then((response) => {
      console.log(response)
      setListPendingCommand(response.filter((product) => product.status === 'pending'))
      setListInPreparationCommand(response.filter((product) => product.status === 'inPreparation'))
      setListReadyOrderCommand(response.filter((product) => product.status === 'ready'))
    })
  }, [])

  function modifyStatusOrder(arrOrder, order) {
    const orders = [...arrOrder]
    const orderOnArrOrder = orders.findIndex((element) => element.id === order.id)
    
    
    
  }

  return (
    <main className={styles.MainOrder}>
      <ButtonHome />
      <img className={styles.LogoImg} src={logo} alt='logo' />
      <ContainerOrder orders={listPendingCommand} onClickStatus={() => { }} ClassNameButton={styles.buttonPending}>Pedidos pendentes</ContainerOrder>
      <ContainerOrder orders={listInPeparationCommand} onClickStatus={() => { }} ClassNameButton={styles.buttonPreparation}>Pedidos em preparo</ContainerOrder>
      <ContainerOrder orders={listReadyOrderCommand} onClickStatus={() => { }} ClassNameButton={styles.buttonReady}>Pedidos para entrega</ContainerOrder>
    </main>
  )
}