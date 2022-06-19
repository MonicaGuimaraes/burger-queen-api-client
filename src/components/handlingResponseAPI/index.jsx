import styles from './HandlingResponseAPI.module.css';
export default function HandlingResponseAPI({message}) {
  const text = {
    'email/senha inválido': 'E-mail ou senha inválido',
    'email/senha não fornecido': 'Digite o e-mail ou a senha',
    'nome/carrinho': 'Digite o nome do cliente',
    'email, password, role ou restaurant não fornecido': 'Dados insuficientes, e-mail, senha, nome ou cargo não fornecido',
    'Email já cadastrado': 'E-mail já cadastrado',
    'Dados insuficientes': 'Dados insuficientes',
    'successRegister': 'Você foi registrado com sucesso.',
    'successOrder': 'Sua comanda foi enviada para cozinha.',
    'successStatus': 'O estado do pedido foi alterado.'
  }
  
  if(!text[message]){
    text[message] = "Tente mais tarde! Estamos com alguns problemas! Também verifique sua conexão."
  }

  return ( 
    <section className={styles.sectionMessageError}>
      <p className={styles.errorText}>{text[message]}</p>
    </section>
  )
}