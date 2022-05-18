
export default function Inputs({typeInput,placeholder}) {
    return (
      <> 
        <input className='input'type={typeInput} placeholder={placeholder} id={placeholder}></input>
      </>
    );
  }
// import { useState } from 'react';

// export default function Inputs({typeInput,placeholder}) {
//   const [name, setName] = useState('')
//   console.log(name)
//   return (
//     <>
//       <input className='input'type={typeInput} placeholder={placeholder} id={placeholder} value={name} onChange={(e) => setName(e.target.value)}></input>
//     </>
//   );
// }
// sugestão: colocar o input de email e senha dentro do inputs()
