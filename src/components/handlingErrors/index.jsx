import styles from './HandlingErrors.module.css';
export default function HandlingErrors({message}) {
  const text = {
    'email/senha inválido' : 'E-mail ou senha inválido.',
    'email/senha não fornecido': 'Digite o e-mail ou a senha.'
  }
  return ( 
    <section className={styles.sectionMessageError}>
      <p className={styles.errorText}>{text[message]}</p>
    </section>
  )
}

//code: 400
//message: "email/senha inválido"

//code: 400
//message: "email/senha não fornecido"