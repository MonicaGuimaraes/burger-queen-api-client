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