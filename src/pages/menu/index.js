import { menuAPI } from '../../API/MenuAPI'
import { useState, useEffect } from 'react'
import { getPersistedUser } from '../../components/localStorage'
import  Cart from '../../components/cart'
import ProductItem from '../../components/products'
import logo from '../../assets/Logo.svg'
import styles from './Menu.module.css'
import ButtonHome from '../../components/buttonHome'
import { addProductToCart } from '../../components/functions/manipulatingArray'


export default function Menu(){
  const [list, setList] = useState([])
  const [filterArr, setFilterArr] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    menuAPI(getPersistedUser()).then((response) => { 
      setList(response)
    })
  }, [])

  function filterMenu(menu) {
    console.log(menu)
    const typeMenu = {
      'all-day' :  () => {
        setFilterArr((list.filter((products) => products.type === 'all-day' ? true : false)))
        console.log(filterArr)
        return filterArr},
      'breakfast' : () => {
        setFilterArr(list.filter((products) => products.type === 'breakfast' ? true : false))
        console.log(filterArr)
        return filterArr},
      'list' : () =>{
        setFilterArr([])
        return list} 
    }
    return typeMenu[menu]()
  }

  return(
    <section className={styles.menuSection}>
      <ButtonHome />
      <img className={styles.logoImgLogin} src={logo} alt="logo"/>
      <div className={styles.containerBtnOptionsMenu}>
        <button className={styles.btnOptionsMenu} onClick={() => filterMenu('breakfast')}>Café da Manhã</button>
        <button className={styles.btnOptionsMenu} onClick={() => filterMenu('list')}>Cardápio</button>
        <button className={styles.btnOptionsMenu} onClick={()=> filterMenu('all-day')}>Almoço e Jantar</button>
      </div>
      <ul className={styles.ulProduct} >
        {filterArr.length >= 2 ? filterArr.map((product) => (
            <ProductItem product={product} key={product.id} onClick={() => {setCart(addProductToCart(cart, product))}} />
          )) : list.map((product) => (
            <ProductItem product={product} key={product.id} onClick={() => {setCart(addProductToCart(cart, product))}} />
          ))
        }
      </ul>
      <Cart arrList={cart} setArrList={setCart} />
    </section>
  )
}