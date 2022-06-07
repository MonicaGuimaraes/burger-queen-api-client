import { Navigate } from "react-router-dom";

export function setUserLocalStorage(objUser){
  if(typeof objUser === 'object'){
    localStorage.setItem('user', JSON.stringify(objUser))
  }
}

export function getPersistedUser() {
  let user = localStorage.getItem('user');
  user = JSON.parse(user);
  return user;
}

export function PrivateRoute({children}) {
  const user = getPersistedUser();
  return user !== undefined ? children : <Navigate to="/" />
}

export function logoutUser() {
  localStorage.removeItem('user')
}