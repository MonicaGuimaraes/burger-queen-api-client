export function addProductToCart(cart, product){
  const newCart =[...cart]
  const productIndexOnCart = cart.findIndex((element) => element.id === product.id)
  const hasProductOnCart = productIndexOnCart < 0
  if(hasProductOnCart){
    const currentProduct ={...product, qtd: 1}
    newCart.push(currentProduct)
  } else {
    const productOnCart = newCart[productIndexOnCart]
    const currentProduct ={...productOnCart, qtd: productOnCart.qtd + 1}
    newCart[productIndexOnCart] = currentProduct
  }
  return newCart
}

export function sumTotalPrice(cart){
  const initialValue = 0
  return cart.reduce((sum, product) => sum + (product.price * product.qtd), initialValue)
}

export function removeProductFromCart(cart, product){
  let newCart = [...cart]
  if(product.qtd === 1){
    newCart = cart.filter((element) => element.id !== product.id)
  } else {
    const productIndexOnCart = cart.findIndex((element) => element.id === product.id)
    const productOnCart = newCart[productIndexOnCart]
    const currentProduct = {...productOnCart, qtd: productOnCart.qtd - 1}
    newCart[productIndexOnCart] = currentProduct
  }
  return newCart
}

export function deleteItemArray(arrList, product){
  const currentList = [...arrList]
  return currentList.filter((element) => element.id !== product.id)
}

export function organizingArray(arr){
  return arr.sort((a,b)=>{
    if (a.createdAt > b.createdAt) {
      return -1;
    }
    if (a.createdAt < b.createdAt) {
      return 1;
    }
    return 0;
  })
}