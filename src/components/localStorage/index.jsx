import { Navigate } from "react-router-dom";


export function setUserLocalStorage(objUser){
  if(typeof objUser === 'object' || Array.isArray(objUser)){
    localStorage.setItem('user', JSON.stringify(objUser))
  }
}

export function getPersistedUser() {
  let user = localStorage.getItem('user');
  user = JSON.parse(user)
  return user
}

export function PrivateRoute({children}) {
  const user = getPersistedUser()
  return user !== null ? children : <Navigate to="/" />
}

export function PrivateRouteWithRole({children}) {
  const user = getPersistedUser()
  if (user !== null){
    return user.role === 'atendimento' ? children : <Navigate to='/home' />
  } else {
    return ( <Navigate to='/' /> )
  }
}

export function logoutUser() {
  localStorage.removeItem('user')
}