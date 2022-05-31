import Vector from '../../assets/Vector.svg'
import Inputs from '../inputs'
import { useState, useRef, useEffect } from 'react'
import styles from './Cart.module.css'

export default function Cart({arrList, setArrList}) {
  const [name, setName] = useState('')
  const [total, setTotal] = useState(0)
  const [list, setList] = useState([])
  const [mesa, setMesa] = useState(1)
  const classOpenCart = useRef(null);
  
  useEffect(()=>{
    console.log(arrList)
  }, [arrList])
  

  // useEffect(()=>{
  //   arrList.map((product) => {
  //   console.log(product)
  //   setTotal(1)
  // });}, [arrList])

  
  function CloseAndOpenCart(){
    classOpenCart.current.classList.toggle(styles.sectionOpen)
  }

  return (
  <>
    
    <section ref={classOpenCart} className={styles.sectionClosed}> 
    <button className={styles.buttonOpenAndClosed} onClick={CloseAndOpenCart}><img className={styles.ImgOpenAndClosed} src={Vector} alt="CloseAndOpenCart" /></button>
      <div>
        <ul>
          {arrList.map(() => {
            <ProductsCart product={product} onClick/>
          })}
        </ul>
        <form className={styles.formCart}>
          <label className={styles.DivName}>Nome do Cliente
            <Inputs className={styles.InputName} maxLength='20' type='text' placeholder='Cliente' required autoComplete='off' value={name} onChange={(e) => setName(e.target.value.trim())} />
          </label>
          <label className={styles.DivName}>Número Mesa
            <Inputs className={styles.InputName} required max='10' min='1' type='number' placeholder='Mesa' autoComplete='off' value={mesa} onChange={(e) => setMesa(e.target.value)} />
          </label>
          <div className={styles.TotalDiv} >
          <p>Total:{total}</p>
          <button className={styles.BntPronto}>Pronto</button>
          </div>
        </form>
      </div>
    </section>
  </>
  )
}