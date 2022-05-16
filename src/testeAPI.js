export default async function testeAPI(){
  const options = {
      method: 'POST',
      Headers: { 
        "Content-Type": "application/x-www-form-urlencoded", 
        "accept" : "application/json"
      },
      body: JSON.stringify({email: 'sample@mail.com', password:  'sample'})
    }; 
    //Bad request no console.log
    fetch('https://lab-api-bq.herokuapp.com/auth', options)
     .then((response) => response.json())
     .then((response) => console.log(response))
     .catch((err) => console.log(err));
}
