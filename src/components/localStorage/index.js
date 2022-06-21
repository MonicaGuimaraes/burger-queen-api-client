export function setUserLocalStorage(objUser){
  if(typeof objUser === 'object' && Array.isArray(objUser) === false){
    localStorage.setItem('user', JSON.stringify(objUser))
  }
}

export function getPersistedUser() {
  let user = localStorage.getItem('user')
  user = JSON.parse(user)
  return user
}

export function logoutUser() {
  localStorage.removeItem('user')
}