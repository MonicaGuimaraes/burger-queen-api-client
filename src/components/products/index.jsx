import { menuAPI } from '../../API/MenuAPI'
import { getPersistedUser } from '../localStorage'
import { useState } from 'react'
import styles from './Products.module.css'


export default function ProductItem ({product, id}) {
  let name = product.name
  if(product.flavor){
    name += ' ' + product.flavor
  }
  if(product.complement){
    name += ' com ' + product.complement
  }

  return(
    <>
      <img className={styles.imgProduct} src={product.image} alt={product.name}/>
      <h1 className={styles.nameProduct}>{name}</h1>
      <h2 className={styles.priceProduct}>R$:{product.price}</h2>
    </>
  )
}