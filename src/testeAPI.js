export default async function testeAPI(){
  let h = new Headers()
  h.append('Accept', 'application/json')

  const options = {
      method: 'POST',
      headers: h,
      body: `{'email':'sample@mail.com', 'password':'sample'}`,
    }; 

    //Bad request no console.log
    fetch('https://lab-api-bq.herokuapp.com/auth', options)
     .then((response) => response.json())
     .then((response) => console.log(response))
     .catch((err) => console.log(err));
}
