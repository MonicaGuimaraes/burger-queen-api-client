import styles from './ButtonSubmit.module.css'
export default function ButtonSubmit({action}) {
  return ( 
    <> 
      <button className={styles.buttonSubmit} type='submit'>{action}</button>
    </>
  )
}