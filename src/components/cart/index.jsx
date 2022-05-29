import Vector from '../../assets/Vector.svg'
import Inputs from '../inputs'
import { useState, useRef, useEffect } from 'react'
import styles from './Cart.module.css'

export default function Cart({arrList}) {
  const [name, setName] = useState('')
  const [total, setTotal] = useState(0)
  const [list, setList] = useState([])
  const [mesa, setMesa] = useState(1)
  const classOpenCart = useRef(null);
  

  // arrList.map((product) => {
  //   setTotal((prev) => prev + product.price)
  // });

  
  function CloseAndOpenCart(){
    classOpenCart.current.classList.toggle(styles.sectionOpen)
  }

  return (
  <>
    
    <section ref={classOpenCart} className={styles.sectionClosed}> 
    <button className={styles.buttonOpenAndClosed} onClick={CloseAndOpenCart}>aaaaaa<img className={styles.ImgOpenAndClosed} src={Vector} alt="CloseAndOpenCart" /></button>
      <div>
        <ul>
          {list}
        </ul>
        <form className={styles.formCart}>
          <label>Nome do Cliente
            <Inputs className={styles.InputName} maxLength='20' type='text' placeholder='Cliente' required autoComplete='off' value={name} onChange={(e) => setName(e.target.value.trim())} />
          </label>
          <label>Número Mesa
            <Inputs className={styles.InputName} required max='10' min='1' type='number' placeholder='Mesa' autoComplete='off' value={mesa} onChange={(e) => setMesa(e.target.value)} />
          </label>
          <p>Total:{total}</p>
          <button>Pronto</button>
        </form>
      </div>
    </section>
  </>
  )
}