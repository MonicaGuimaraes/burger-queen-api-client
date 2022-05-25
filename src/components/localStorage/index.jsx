export function setUserLocalStorage(objUser){
  localStorage.setItem('user', JSON.stringify(objUser))
}

export function getPersistedUser() {
  const authUserKey = Object.keys(window.localStorage).find((item) => item.startsWith('user'));
  let user = localStorage.getItem(authUserKey);
  user = JSON.parse(user);
  return user;
}