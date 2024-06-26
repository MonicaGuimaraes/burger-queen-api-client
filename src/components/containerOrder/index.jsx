import styles from './containerOrder.module.css'
import Command from '../command'
import { changeStatusAPI } from '../../API/ChangeStatusAPI'
import { callOrdersAPI } from '../../API/CallOrdersAPI'
import { useState } from 'react'
import HandlingApiStatus from '../handlingApiStatus'

export default function ContainerOrder({children, nameButton, classNameButton, ordersWithStatus, status,  setOrders, disabled}) {
  
  const [showElement, setShowElement] = useState(false)
  const [responseAPI, setResponseAPI] = useState('')

  function modifyStatusOrder(order, status) {
    
    changeStatusAPI(status, order.id.toString()).then((response)=>{
      let message = 'successStatus'
      const hasError = response.code
      
      if(hasError) {
        message = 'error'
      }
      
      setResponseAPI(message)
      setShowElement(true)
      setTimeout(() => {
        setShowElement(false)
      }, 5000)
      
      callOrdersAPI().then((updatedOrders) => {
        setOrders(updatedOrders)
      })
    }).catch(()=> {
      setResponseAPI('')
      setShowElement(true)
      setTimeout(() => {
        setShowElement(false)
      }, 10000)
    })
  }

  return(
    <>
      <section className={styles.sectionOrder}>
        <h1>{children}</h1>
        <div className={styles.sectionClosed}>     
          { showElement ? <HandlingApiStatus message={responseAPI} /> : null } 
          <ul className={styles.ulOrder}>  
            {ordersWithStatus.length !== 0 ? ordersWithStatus.map((order) => (
              <Command disabled={disabled} order={order} key={order.id} onClickStatus={() => modifyStatusOrder(order, status)} classNameButton={classNameButton}>{nameButton}</Command>)
            ): (<p>Não há comandas aqui.</p>)}
          </ul>
        </div>
      </section>
    </>
  )
}
