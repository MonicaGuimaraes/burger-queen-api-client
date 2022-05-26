import styles from './HandlingErrors.module.css';
export default function HandlingErrors({children}) {
  const text = {
    'email/senha inválido' : 'E-mail ou senha inválido',
    'email/senha não fornecido': 'Digite o e-mail ou a senha'
  }
  
  if(!text[children]){
    text[children] = "Tente mais tarde! Estamos com alguns problemas!"
  }

  return ( 
    <section className={styles.sectionMessageError}>
      <p className={styles.errorText}>{text[children]}</p>
    </section>
  )
}