import Vector from '../../assets/Vector.svg'
import Inputs from '../inputs'
import { useState, useRef, useEffect } from 'react'
import styles from './Cart.module.css'
import ProductsCart from '../productsCart'
import { CreateOrderAPI } from '../../API/CreateOrder'
import { getPersistedUser }from '../localStorage/index'
import { deleteItemArray, numberOfRepeatedElements, onClickMinus, onClickPlus, sumTotalPrice } from '../../components/functions/manipulatingArray'
import HandlingErrors from '../handlingErrors'

export default function Cart({arrList, setArrList}) {
  const [name, setName] = useState('')
  const [total, setTotal] = useState(0)
  const [table, setTable] = useState(1)
  const [responseAPI, setResponseAPI] = useState('')
  const [showElement, setShowElement] = useState(false)
  const classOpenCart = useRef(null)
  const [arrWhitoutRepeat, setArrWhitoutRepeat] = useState([])
  
  useEffect(()=>{ 
    setTotal(sumTotalPrice(arrList))
    setArrWhitoutRepeat([...new Set([...arrList])])
  }, [total, arrList])

  function closeAndOpenCart(){
    classOpenCart.current.classList.toggle(styles.sectionOpen)
  }

  function sendOrder(e){
    e.preventDefault()
    
    const list = arrWhitoutRepeat.map((product) => {
       return {id: product.id, qtd: numberOfRepeatedElements(arrList, product)}
    })

    console.log(list)

    const obj = {
      inputName: name,
      inputTable: table,
      arrProducts: list,
    }
    
    const user = getPersistedUser() 
    
    CreateOrderAPI(obj, user)
    .then((response) => {
      console.log(response)
      const hasError = response.code
      let message = ''
      let show = false
      let resetName = name
      let resetTotal = total
      let resetTable = table
      let resetArrList = arrList

      if(hasError){
        message = response.message;
        show = true
      }

      setResponseAPI(message)
      setShowElement(show)
      setTimeout(() => {
        setShowElement(false)
      }, 5000)

      if(!hasError){
        resetName = ''
        resetTable = 1
        resetTotal = 0
        resetArrList = []
      }

      setArrList(resetArrList)
      setName(resetName)
      setTable(resetTable)
      setTotal(resetTotal)
    })
    
  }

  return (
  <> 
    <section ref={classOpenCart} 
    className={styles.sectionClosed}> 
    {showElement ? <HandlingErrors errorType={responseAPI}/> : null}
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
          { arrWhitoutRepeat.length !== 0 ? arrWhitoutRepeat.map((product, index) => {
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
            :
            <p className={styles.paragraph}>Ainda não tem nada no carrinho!</p> 
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
            <button disabled={name.length === 0 || arrList.length === 0} className={styles.BntPronto} onClick={sendOrder}>
              Pronto
            </button>
          </div>
        </form>
      </div>
    </section>
  </>
  )
}