import styles from './containerOrder.module.css'
import Vector from '../../assets/Vector.svg'
import Command from '../command'
import { callOrdersAPI } from '../../API/CallOrdersAPI'
import { useEffect, useState } from 'react'

export default function ContainerOrder({children, onclick, onClickStatus, ClassNameButton, orders}){
  
  return(
    <section className={styles.sectionOrder}>
      <h1>{children}</h1>
      <button className={styles.buttonOpenAndClosed} onClick={onclick}>
          <img className={styles.ImgOpenAndClosed} 
          src={Vector} 
          alt="CloseAndOpenCart"/>
        </button>
      <div className={styles.sectionOpenAndClosedOrder}>       
        <ul className={styles.ulOrder}>
          {orders.length !== 0 ? orders.map((order) => (
            <Command order={order} onClickStatus={onClickStatus} ClassNameButton={ClassNameButton}></Command>)
          ): (<p>Não há comandas aqui.</p>)}
        </ul>
      </div>
    </section>
  )
}
// npm install date-fns --save