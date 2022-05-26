import { Navigate } from "react-router-dom";

export function setUserLocalStorage(objUser){
  localStorage.setItem('user', JSON.stringify(objUser))
}

export function getPersistedUser() {
  const authUserKey = Object.keys(window.localStorage).find((item) => item.startsWith('user'));
  let user = localStorage.getItem(authUserKey);
  user = JSON.parse(user);
  return user;
}

export function PrivateRoute({children}) {
  const authUserKey = Object.keys(window.localStorage).find((item) => item.startsWith('user'));
  return authUserKey !== undefined ? children : <Navigate to="/" />
}

export function logoutUser() {
  localStorage.removeItem('user')
}