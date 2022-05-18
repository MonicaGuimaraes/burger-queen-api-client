export default async function testeAPI(valueEmail, valuePass){
 
  const options = {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/x-www-form-urlencoded', 
      'accept' : 'application/json'
    },
    body: 'email=' + valueEmail + '&password=' + valuePass
  }
    
  return fetch('https://lab-api-bq.herokuapp.com/auth', options)
    .then((response) => response.json()) 
    .then((response) =>  response)
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