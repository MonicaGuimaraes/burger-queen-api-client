import { getPersistedUser } from '../components/localStorage'

export function changeStatusAPI(newStatus, idOrder){

  const options = {
    method: 'PUT',
    headers: {
      'Authorization': getPersistedUser().token,
     
      'Content-Type': 'application/json',
 
    },
    body: JSON.stringify({
      status: newStatus
    })
  }
    
  return fetch(`https://lab-api-bq.herokuapp.com/orders/${idOrder}`, options)
    .then((response) => response.json()) 
};