import styles from './containerOrder.module.css'
import Vector from '../../assets/Vector.svg'
import Command from '../command' 
import { changeStatusAPI } from '../../API/ChangeStatusAPI'
import { useEffect, useState } from 'react'
import { callOrdersAPI } from '../../API/CallOrdersAPI'
export default function ContainerOrder({children, nameButton, onclick, classNameButton, ordersWithStatus, status, orders, setOrders}) {

  async function modifyStatusOrder(arrOrder, order, modifiedStatus) {
    console.log('apertei', status, order.id.toString())
    
    changeStatusAPI(status, order.id.toString()).then((response)=>{
      console.log(response)
      // const orders = [...arrOrder]
      // let res = []
      // if(!response.code){
      //   callOrdersAPI().then((response) => {
      //     console.log(response)
      //   })
        // const orderIndexOnArrOrder = orders.findIndex((element) => element.id === order.id)
        // const orderOnArrOrder =  orders[orderIndexOnArrOrder]
        // const currentOrder = {...orderOnArrOrder, status: modifiedStatus}
        // orders[orderIndexOnArrOrder] = currentOrder
      // }
      callOrdersAPI().then((response) => {
        console.log(response)
        setOrders(response)
      })
      console.log(orders)
    })
  }


  return(
    <section className={styles.sectionOrder}>
      <h1>{children}</h1>
      <button className={styles.buttonOpenAndClosed} onClick={onclick}>
        <img className={styles.ImgOpenAndClosed} 
          src={Vector} 
          alt="CloseAndOpenCart"
        />
      </button>
      <div className={styles.sectionOpenAndClosedOrder}>       
        <ul className={styles.ulOrder}>
          {ordersWithStatus.length !== 0 ? ordersWithStatus.map((order) => (
            <Command order={order} key={order.id} onClickStatus={() => modifyStatusOrder(orders, order, status)} classNameButton={classNameButton}>{nameButton}</Command>)
          ): (<p>Não há comandas aqui.</p>)}
        </ul>
      </div>
    </section>
  )
}
