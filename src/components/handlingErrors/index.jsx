import styles from './HandlingErrors.module.css';
export default function HandlingErrors({message}) {
  const text = {
    'email/senha inválido' : 'E-mail ou senha inválido',
    'email/senha não fornecido': 'Digite o e-mail ou a senha'
  }
  
  if(!text.message){
    text.message = "Tente mais tarde! Estamos com alguns problemas!"
  }

  const children = text[message]

  return ( 
    <section className={styles.sectionMessageError}>
      <p className={styles.errorText}>{children}</p>
    </section>
  )
}