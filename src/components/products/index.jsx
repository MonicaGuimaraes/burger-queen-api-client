import styles from './Products.module.css'
import { standardizeName } from '../functions/standardizeName'


export default function ProductItem ({product, onClick}) {
  const name = standardizeName(product)

  return(
    <li className={styles.listProduct} data-id={product.id} key={product.id}>
      <img className={styles.imgProduct} src={product.image} alt={product.name}/>
      <h1 className={styles.nameProduct}>{name}</h1>
      <h2 className={styles.priceProduct}>R$:{product.price}</h2>
      <button className={styles.buttonAdd} onClick={onClick}>
        Adicionar
      </button>
    </li>
  )
}