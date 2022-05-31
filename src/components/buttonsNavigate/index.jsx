import styles from './ButtonNav.module.css'
export default function ButtonNav({disable, children, onClick}){
   return(
     <button disabled={disable} onClick={onClick} className={styles.buttonNav}>{children}</button>
   )
}
