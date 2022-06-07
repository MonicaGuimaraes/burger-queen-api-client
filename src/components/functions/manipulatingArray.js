export function addProductToCart(arrList, product){
  let currentList
  const arrHaveProductID = arrList.filter((element) => element.id === product.id)
  if(arrHaveProductID.length === 0){
    product.qtd = 1
    currentList = [...arrList, product]
    console.log(product)
    console.log(currentList)
    return currentList
  } else {
    product.qtd += 1
    console.log(product)
    console.log(arrList)
    return [...arrList]
  }
}

export function sumTotalPrice(arrList){
  const initialValue = 0
  const currentList = [...arrList]
  return currentList.map(product => product.price*product.qtd).reduce((previousValue, currentValue) =>
    previousValue + currentValue, initialValue)
}

export function removeProductFromCart(arrList, product){
  let currentList = []
  if(product.qtd === 1){ 
    currentList = arrList.filter((element) => element.id !== product.id)
  } else {
    product.qtd -= 1
    currentList = [...arrList]
  }

  return currentList
}

export function deleteItemArray(arrList, product){
  const currentList = [...arrList]
  return currentList.filter((element) => element.id !== product.id)
}