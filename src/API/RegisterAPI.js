export default async function registerAPI(object){
  const header = new Headers()
  header.append('Content-Type', 'application/json') 
  header.append('Accept', 'application/json')

  const options = {
    method: 'POST',
    headers: header,
    body: JSON.stringify({
      name: object.name,
      email: object.email,
      password: object.password,
      role: object.role,
      restaurant: 'Kukki'
    })
  }
    
  return fetch('https://lab-api-bq.herokuapp.com/users', options)
    .then((response) => response.json()) 
    .then((response) =>  response)
};