import { getPersistedUser } from '../components/localStorage'

export function changeStatusAPI(newStatus, idOrder){

  const options = {
    method: 'PUT',
    headers: {
      'Authorization': getPersistedUser().token,
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', 
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Methods': 'GET, OPTIONS, PATCH, DELETE, POST, PUT'
    },
    body: JSON.stringify({
      status: newStatus
    })
  }
    
  return fetch(`https://lab-api-bq.herokuapp.com/orders/${idOrder}`, options)
    .then((response) => response.json()) 
};