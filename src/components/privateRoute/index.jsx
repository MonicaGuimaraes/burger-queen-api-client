import { Navigate } from "react-router-dom";
import { getPersistedUser } from "../localStorage";

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