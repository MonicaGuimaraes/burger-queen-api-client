export default function Inputs({typeInput,placeholder,value}) {
    return (
      <> 
        <input className='input'type={typeInput} placeholder={placeholder} id={placeholder} value={value}></input>
      </>
    );
  }
// sugestão: colocar o input de email e senha dentro do inputs()
