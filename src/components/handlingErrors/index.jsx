import styles from './HandlingErrors.module.css';
export default function HandlingErrors({errorType}) {
  const text = {
    'email/senha inválido': 'E-mail ou senha inválido',
    'email/senha não fornecido': 'Digite o e-mail ou a senha'
  }
  
  if(!text[errorType]){
    text[errorType] = "Tente mais tarde! Estamos com alguns problemas!"
  }

  return ( 
    <section className={styles.sectionMessageError}>
      <p className={styles.errorText}>{text[errorType]}</p>
    </section>
  )
}