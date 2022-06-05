import styles from './HandlingErrors.module.css';
export default function HandlingErrors({errorType}) {
  const text = {
    'email/senha inválido': 'E-mail ou senha inválido',
    'email/senha não fornecido': 'Digite o e-mail ou a senha',
    'nome/carrinho': 'Digite o nome do cliente',
    'email, password, role ou restaurant não fornecido': 'Dados insuficientes, e-mail, senha, nome ou cargo não fornecido',
    'Email já cadastrado': 'E-mail já cadastrado',
    'Dados insuficientes': 'Dados insuficientes'
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