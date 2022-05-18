import styles from './inputs.module.css';
export default function Inputs(props) {
    return (
      <>
        <input className={styles.Inputs} {...props}></input>
      </>
    );
  }
// import { useState } from 'react';

// export default function Inputs({typeInput,placeholder}) {
//  
// }
// sugestão: colocar o input de email e senha dentro do inputs()
