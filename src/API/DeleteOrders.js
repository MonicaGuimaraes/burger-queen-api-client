import { getPersistedUser } from '../components/localStorage/index.jsx'

export function deleteOrderAPI(idOrder){

  const options = {
    method: 'DELETE',
    headers: {
      'Authorization': getPersistedUser().token
    },
  }

  return fetch(`https://lab-api-bq.herokuapp.com/orders/${idOrder}`, options)
    .then((response) => response.json()) 
};