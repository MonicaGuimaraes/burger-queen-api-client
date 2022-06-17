import styles from './containerOrder.module.css'
import Command from '../command'
import { changeStatusAPI } from '../../api/changeStatusAPI'
import { callOrdersAPI } from '../../api/CallOrdersAPI'
import { useState } from 'react'
import HandlingResponseAPI from '../handlingResponseAPI'
export default function ContainerOrder({children, nameButton, onclick, classNameButton, ordersWithStatus, status, orders, setOrders, disabled}) {
  
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
    })
  }

  return(
    <>
      <section className={styles.sectionOrder}>
        <h1>{children}</h1>
        <div className={styles.sectionClosed}>     
          { showElement ? <HandlingResponseAPI message={responseAPI} /> : null } 
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
