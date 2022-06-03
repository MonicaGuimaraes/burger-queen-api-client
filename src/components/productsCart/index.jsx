import styles from './ProductsCart.module.css'
import trash from '../../assets/trash.svg'
import  { standardizeName } from '../functions/standardizeName.js'

export default function ProductsCart({product, onClickPlus, qtd, onClickLess, onclickTrash, dataId}) {
  const name = standardizeName(product)
  
  return (
    <li className={styles.listProduct} data-id={dataId} key={product.id}>
      <img className={styles.imgProduct} src={product.image} alt={product.name}/>
      <div className={styles.divPriceAndName}>
        <h1 className={styles.nameProduct}>{qtd}X {name}</h1>
        <h2 className={styles.priceProduct}>R$:{product.price.toFixed(2)}</h2>
      </div>
      <button className={styles.trashBtn} onClick={onclickTrash}>
        <img className={styles.imgTrash} src={trash} alt='TrashBtn'/>
      </button>
      <div className={styles.divButtons}>
        <button className={styles.buttonAdd} onClick={onClickLess}>
          -
        </button>
        <button className={styles.buttonAdd} onClick={onClickPlus}>
          +
        </button>
      </div>
    </li>
  )
}