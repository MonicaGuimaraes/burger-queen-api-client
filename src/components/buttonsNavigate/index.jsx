import styles from './buttonNav.module.css'
export default function ButtonNav({disable, children, onClick}){
   return(
      <button disabled={disable} onClick={onClick} className={styles.buttonNav}>{children}</button>
   )
}
