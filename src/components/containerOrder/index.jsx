import styles from './containerOrder.module.css'
import Vector from '../../assets/Vector.svg'
import Command from '../command'

export default function ContainerOrder({children, onclick, onClickStatus, ClassNameButton}){
  const obj = {
    id: 0,
    client_name: "string",
    user_id: 0,
    table: 0,
    status: "string",
    processedAt: "2022-06-05",
    createdAt: "2022-06-05",
    updatedAt: "2022-06-05",
    Products: [
      {
        id: 0,
        name: "string",
        flavor: "string",
        complement: "string",
        qtd: 0
      }
    ]
  }
  
  return(
    <section className={styles.sectionOrder}>
      <h1>{children}</h1>
      <button className={styles.buttonOpenAndClosed} onClick={onclick}>
          <img className={styles.ImgOpenAndClosed} 
          src={Vector} 
          alt="CloseAndOpenCart"/>
        </button>
      <div className={styles.sectionOpenAndClosedOrder}>       
        <ul className={styles.ulOrder}>
         <Command order={obj} onClickStatus={onClickStatus} ClassNameButton={ClassNameButton} />
        </ul>
      </div>
    </section>
  )
}