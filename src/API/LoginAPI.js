export function loginAPI(valueEmail, valuePass){
  const header = new Headers()
  header.append('Content-Type', 'application/json') 
  header.append('Accept', 'application/json')
 
  const options = {
    method: 'POST',
    headers: header,
    body: JSON.stringify({email: valueEmail, password: valuePass})
  }
    
  return fetch('https://lab-api-bq.herokuapp.com/auth', options)
    .then((response) => response.json())
}; 

// Bad request no console.log
 

// body: "email=" + "sample@mail.com" + "&password=" + "sample"


//   body: JSON.stringify({email: 'sample@mail.com', password:  'sample'})
// }; 
//Bad request no console.log
// fetch('https://lab-api-bq.herokuapp.com/auth', options)
//  .then((response) => response.json())
//  .then((response) => console.log(response))
//  .catch((err) => console.log(err));
// =======