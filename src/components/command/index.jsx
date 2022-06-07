import styles from './Command.module.css'
import { standardizeName } from '../functions/standardizeName'

export default function Command({ order, onClickStatus, ClassNameButton }) {

  return(
    <li className={styles.sectionCommand}>
      <h3>Cliente: {order.client_name}</h3>
      <h3>Tempo: {order.createdAt}</h3>
      {order.Products.map((product) => {
        const name = standardizeName(product)
        return ( <p>{product.qtd}X {name}</p> )
      })}
      <button className={ClassNameButton} onClick={onClickStatus}></button>
    </li>
  )
}