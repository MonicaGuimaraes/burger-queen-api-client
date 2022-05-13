export default function Inputs(tipoInput,placeholder) {
    return (
      <> 
      <input className='input'type={tipoInput} placeholder={placeholder} id={placeholder}></input>
      </>
        
 
    );
  }

// Como usar parametros nas funções de react
// Só é necessário criar um input ? E chamar ele passando argumentos para diferenciar