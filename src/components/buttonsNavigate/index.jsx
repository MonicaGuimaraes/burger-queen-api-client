import styles from './ButtonNav.module.css'
export default function buttonNav({disable, children, onClick}){
   return(
     <button disabled={disable} onClick={onClick} className={styles.buttonNav}>{children}</button>
   )
}