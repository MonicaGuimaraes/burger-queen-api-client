import { menuAPI } from '../../API/MenuAPI'
import { useState, useEffect } from 'react'
import { getPersistedUser } from '../../components/localStorage'
import  Cart from '../../components/cart'
import ProductItem from '../../components/products'
import logo from '../../assets/Logo.svg'
import styles from './Menu.module.css'
import ButtonHome from '../../components/buttonHome'

export default function Menu(){
  const [list, setList] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    menuAPI(getPersistedUser()).then((response) => { 
      setList(response)
    })
  }, [])

  return(
    <section className={styles.menuSection}>
      <ButtonHome />
      <img className={styles.logoImgLogin} src={logo} alt="logo"/>
      <select  data-testid='selectMenu'>
        <optgroup label='Menu'>
          <option value='cafedamanha'>Atendimento</option>
          <option value='almoçoejantar'>Almoço e Jantar</option>
        </optgroup>
      </select>
      <ul className={styles.ulProduct} >
        {list.map((product) => (
          <ProductItem product={product} key={product.id} onClick={() => setCart((prev) => [...prev, product])}/>
          )
        )}
      </ul>
      <Cart arrList={cart} setArrList={setCart}/>
    </section>
  )
}