import { getPersistedUser } from '../components/localStorage/index.jsx'

export function changeOrderAPI(newStatus, endpoint){
  const header = new Headers()
  header.append('Authorization', getPersistedUser().token)
  header.append('Accept', 'application/json')

  const options = {
    method: 'PUT',
    headers: header,
    body: JSON.stringify({status: newStatus})
  }
    
  return fetch(`https://lab-api-bq.herokuapp.com/orders/${endpoint}`, options)
    .then((response) => response.json()) 
    .then((response) =>  response)
};