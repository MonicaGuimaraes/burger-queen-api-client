import styles from './Command.module.css'
import { standardizeName } from '../functions/standardizeName'
import { comparingTheTime, formatHour  } from '../functions/tempCommand'

export default function Command({order, onClickStatus, classNameButton, children}) {
  
  return(
    <li key={order.id} className={styles.sectionCommand}>
      <h3>Cliente: {order.client_name}</h3>
      <h3>Este pedido foi feito em {formatHour(order.createdAt)}</h3>
      <h3>{order.status === 'ready' ? comparingTheTime(order.createdAt, order.updatedAt) : ""}</h3>
      <h3>Mesa: {order.table}</h3>
      {order.Products.map((product, index) => {
        const name = standardizeName(product)
        return ( <p key={index}>{product.qtd}X {name}</p> )
      })}
      <button className={classNameButton} disabled={order.status === 'delivered'} onClick={onClickStatus}>{children}</button>
    </li>
  )
}