export function menuAPI(user){
    const header = new Headers()
    header.append('Authorization', user.token)
    header.append('Accept', 'application/json')

    const options = {
      method: 'GET',
      headers: header,
    }
      
    return fetch('https://lab-api-bq.herokuapp.com/products', options)
      .then((response) => response.json()) 
      .then((response) =>  response)
};