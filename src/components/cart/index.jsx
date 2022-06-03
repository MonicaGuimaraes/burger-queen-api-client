import Vector from '../../assets/Vector.svg'
import Inputs from '../inputs'
import { useState, useRef, useEffect } from 'react'
import styles from './Cart.module.css'
import ProductsCart from '../productsCart'
import { CreateOrderAPI } from '../../API/CreateOrder'
import { getPersistedUser }from '../localStorage/index'
import { deleteItemArray, numberOfRepeatedElements, onClickMinus, onClickPlus, sumTotalPrice } from '../../components/functions/manipulatingArray'

export default function Cart({arrList, setArrList}) {
  const [name, setName] = useState('')
  const [total, setTotal] = useState(0)
  const [list, setList] = useState([])
  const [table, setTable] = useState(1)
  const classOpenCart = useRef(null)
  const [arrWhitoutRepeat, setArrWhitoutRepeat] = useState([])
  
  useEffect(()=>{ 
    setTotal(sumTotalPrice(arrList))
    setArrWhitoutRepeat([...new Set([...arrList])])
  }, [total, arrList])
  
  useEffect (()=> {
    arrWhitoutRepeat.map((product) => {
      return setList((prev) => [...prev, {id: product.id, qtd: numberOfRepeatedElements(arrList,product)}])
    })
  }, [arrWhitoutRepeat, arrList])
 

  function closeAndOpenCart(){
    classOpenCart.current.classList.toggle(styles.sectionOpen)
  }

  function sendOrder(e){
    e.preventDefault()

    const obj = {
      inputName: name,
      inputTable: table,
      arrProducts: list
    }
    console.log(obj)
    CreateOrderAPI(obj, getPersistedUser())
    .then((response) => {
      console.log(response)
    })
    
  }

  return (
  <> 
    <section ref={classOpenCart} 
    className={styles.sectionClosed}> 
      <button 
      className={styles.buttonOpenAndClosed} 
      onClick={closeAndOpenCart}>
        <img 
        className={styles.ImgOpenAndClosed} 
        src={Vector} 
        alt="CloseAndOpenCart" />
      </button>
      <div className={styles.divCart}>
        <ul className={styles.ulProducts}>
          {arrWhitoutRepeat.map((product, index) => {
              return ( 
              <ProductsCart 
              product={product} 
              key={index} 
              dataId={index}
              onClickPlus={() => setArrList(onClickPlus(arrList, product))}
              qtd={numberOfRepeatedElements(arrList, product)}
              onClickLess={() => setArrList(onClickMinus(product, arrList))}
              onclickTrash={() => setArrList(deleteItemArray(product, arrList))}/>   
            )}) 
          }
        </ul>
        <form className={styles.formCart}>
          <label className={styles.DivName}>Nome do Cliente
            <Inputs 
              className={styles.InputName} 
              maxLength='20' 
              type='text' 
              placeholder='Cliente' 
              required 
              autoComplete='off' 
              value={name} 
              onChange={(e) => setName(e.target.value.trim())} 
            />
          </label>
          <label className={styles.DivName}>Número Mesa
            <Inputs className={styles.InputName} 
              required 
              max='10' 
              min='1' 
              type='number' 
              placeholder='Mesa' 
              autoComplete='off' 
              value={table} 
              onChange={(e) => setTable(e.target.value)} 
            />
          </label>
          <div className={styles.TotalDiv} >
            <p>Total:{total.toFixed(2)}</p>
            <button className={styles.BntPronto} onClick={sendOrder}>
              Pronto
            </button>
          </div>
        </form>
      </div>
    </section>
  </>
  )
}