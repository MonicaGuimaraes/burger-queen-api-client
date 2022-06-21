import styles from './orderFinalized.module.css'
import {callOrdersAPI} from '../../API/CallOrdersAPI.js'
import ContainerOrder from '../../components/containerOrder'
import logo from '../../assets/Logo.svg'
import ButtonHome from '../../components/buttonHome'
import { useEffect, useState } from 'react'
import { sortOrderItems } from '../../components/functions/changesOnCart.js'

export default function OrderFinalized () {
  const [orders, setOrders] = useState([])
  const [listFinalizedCommand, setlistFinalizedCommand ] = useState([])
  useEffect(()=>{
    callOrdersAPI().then((response) => setOrders(response))
    
  },[])
   
  useEffect(()=>{
    setlistFinalizedCommand(orders.filter((product) => product.status === 'delivered'))
  }, [orders])


  return (
    <main className={styles.MainOrder}>
     <ButtonHome />
     <img className={styles.LogoImg} src={logo} alt='logo' />
     <ContainerOrder 
      ordersWithStatus={sortOrderItems(listFinalizedCommand)}
      disabled={true}
      orders={orders}
      status={'delivered'} 
      nameButton={'Pedido Entregue'} 
      classNameButton={styles.buttonReady} 
      setOrders={setOrders}>Pedidos Finalizados</ContainerOrder>
    </main>
  )
}