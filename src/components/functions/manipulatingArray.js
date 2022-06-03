export function onClickPlus(arrList, product){
  const currentList = [...arrList, product]
  return currentList
}

export function sumTotalPrice(arrList){
  const initialValue = 0
  const currentList = [...arrList]
  return currentList.map(product => product.price).reduce((previousValue, currentValue) =>
    previousValue + currentValue, initialValue)
}

export function onClickMinus(product, arrList){
  const currentList = [...arrList]
  const index = currentList.indexOf(product)
  console.log(index)
  const productSelected = currentList.splice(index, 1)
  return currentList.filter((element) => element !== productSelected)
}

export function numberOfRepeatedElements(arrList, product) {
  return arrList.filter(food => food === product).length
}

export function deleteItemArray(product, arrList){
  const currentList = [...arrList]
  return currentList.filter((element) => element !== product)
}
