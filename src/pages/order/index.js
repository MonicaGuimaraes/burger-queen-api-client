import styles from './order.module.css'
import ContainerOrder from '../../components/containerOrder'
import logo from '../../assets/Logo.svg'
import ButtonHome from '../../components/buttonHome'
import { callOrdersAPI } from '../../API/CallOrdersAPI'
import { useEffect, useState } from 'react'
import {organizingArray} from '../../components/functions/manipulatingArray'
import { getPersistedUser } from '../../components/localStorage'

export default function Order() {

  const user = getPersistedUser()
  console.log(user)
  console.log(user.role)
  
  const userRole = user.role
  
  const [listPendingCommand, setListPendingCommand] = useState([])
  const [listInPeparationCommand, setListInPreparationCommand ] = useState([])
  const [listReadyOrderCommand, setListReadyOrderCommand ] = useState([])
  const [orders, setOrders] = useState([])
  
  useEffect(()=>{
    callOrdersAPI().then((response) => setOrders(response))

    setInterval(() => {
      callOrdersAPI().then((response) => {
        setOrders(response)
      })
    }, 50000 );
  }, [])

  useEffect(()=>{
    setListPendingCommand(orders.filter((product) => product.status === 'pending'))
    setListInPreparationCommand(orders.filter((product) => product.status === 'inPreparation'))
    setListReadyOrderCommand(orders.filter((product) => product.status === 'ready'))
  }, [orders])

  return (
    <main className={styles.MainOrder}>
      <ButtonHome />
      <img className={styles.LogoImg} src={logo} alt='logo' />
      <div className={styles.divContainersOrder}>
        <ContainerOrder 
          ordersWithStatus={organizingArray(listPendingCommand)}
          disabled={user.role !== 'cozinha'}
          orders={orders} 
          status={'inPreparation'} 
          nameButton={'Pendente'} 
          classNameButton={styles.buttonPending} 
          setOrders={setOrders}>
          Pedidos pendentes
        </ContainerOrder>
        <ContainerOrder 
          ordersWithStatus={organizingArray(listInPeparationCommand)} 
          disabled={user.role !== 'cozinha'}
          orders={orders} 
          status={'ready'}
          nameButton={'Em preparo'} 
          classNameButton={styles.buttonPreparation} 
          setOrders={setOrders}>
          Pedidos em preparo
        </ContainerOrder>
        { userRole === 'atendimento' ?
          <ContainerOrder 
            ordersWithStatus={organizingArray(listReadyOrderCommand)}
            disabled={user.role === 'cozinha'}
            orders={orders}
            status={'delivered'} 
            nameButton={'Pronto'} 
            classNameButton={styles.buttonReady} 
            setOrders={setOrders}>
            Pedidos para entrega
          </ContainerOrder> :
           null
        }
        
      </div>
    </main>
  )
}