import styles from './ProductsCart.module.css'
import trash from '../../assets/trash.svg'
import  { standardizeName } from '../functions/standardizeName.js'

export default function ProductsCart({product, onClickPlus, number, onClickLess, onclickTrash}) {
  const name = standardizeName(product)

  return (
    <li className={styles.listProduct} data-id={product.id} key={product.id}>
      <img className={styles.imgProduct} src={product.image} alt={product.name}/>
      <button className={styles.trashBtn} onClick={onclickTrash}> <img className={styles.imgTrash} src={trash} alt='TrashBtn'/></button>
      <input value={number}></input>
      <h1 className={styles.nameProduct}> X {name}</h1>
      <h2 className={styles.priceProduct}>R$:{product.price}</h2>
      <button className={styles.buttonAdd} onClick={onClickLess}>
        -
      </button>
      <button className={styles.buttonAdd} onClick={onClickPlus}>
        +
      </button>
    </li>
  )
}