import styles from './ButtonSubmit.module.css'
export default function ButtonSubmit({action, disabled}) {
  return ( 
    <> 
      <button className={styles.buttonSubmit} type='submit' disabled={disabled}>{action}</button>
    </>
  )
}