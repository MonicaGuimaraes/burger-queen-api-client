import styles from './ButtonSubmit.module.css'

export default function ButtonSubmit({children, disabled}) {
  return ( 
    <> 
      <button className={styles.buttonSubmit} type='submit' disabled={disabled}>{children}</button>
    </>
  )
}