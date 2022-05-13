export default function Inputs({typeInput,placeholder,value}) {
    return (
      <> 
        <input className='input'type={typeInput} placeholder={placeholder} id={placeholder} ></input>
      </>
    );
  }
// sugestão: colocar o input de email e senha dentro do inputs()
// Como usar parametros nas funções de react
// Só é necessário criar um input ? E chamar ele passando argumentos para diferenciar