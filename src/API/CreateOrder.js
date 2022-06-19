import { getPersistedUser } from '../components/localStorage/index.jsx'
export function createOrderAPI(obj){
  const header = new Headers()
  header.append('Authorization', getPersistedUser().token)
  header.append('Accept', 'application/json')
  header.append('Content-Type', 'application/json')
  
  const options = {
    method: 'POST',
    headers: header,
    body: JSON.stringify({
      client: obj.inputName,
      table: obj.inputTable,
      products: obj.arrProducts
    })
  }
      
  return fetch('https://lab-api-bq.herokuapp.com/orders', options)
    .then((response) => response.json()) 
    .then((response) =>  response)
};