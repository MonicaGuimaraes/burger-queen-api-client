export function CreateOrderAPI(inputValue,user){
    const header = new Headers()
    header.append('Authorization', user.token)
    header.append('Accept', 'application/json')
    header.append('Content-Type', 'application/json')
  
    const options = {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        name: inputValue,
        table: inputValue,
        products: []
      })
    }
      
    return fetch('https://lab-api-bq.herokuapp.com/orders', options)
      .then((response) => response.json()) 
      .then((response) =>  response)
  };