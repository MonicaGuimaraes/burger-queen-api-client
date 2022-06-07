import {
  removeProductFromCart,
  sumTotalPrice,
  addProductToCart,
  numberOfRepeatedElements,
  deleteItemArray
} from './manipulatingArray.js'
import '@testing-library/jest-dom';

const arrList = [
  {
    complement: "ovo",
    createdAt: "2021-02-16T13:11:54.173Z",
    flavor: "frango",
    id: 40,
    image: "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
    name: "Hambúrguer simples",
    price: 11,
    sub_type: "hamburguer",
    type: "all-day",
    updatedAt: "2021-02-16T13:11:54.173Z",
    qtd: 1
  },
  {
    complement: "queijo",
    createdAt: "2021-02-16T13:11:54.173Z",
    flavor: "vegetariano",
    id: 31,
    image: "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
    name: "Hambúrguer simples",
    price: 12,
    sub_type: "hamburguer",
    type: "all-day",
    updatedAt: "2021-02-16T13:11:54.173Z",
    qtd: 2
  },
]

const product =  
{
  complement: "queijo",
  createdAt: "2021-02-16T13:11:54.173Z",
  flavor: "vegetariano",
  id: 31,
  image: "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
  name: "Hambúrguer simples",
  price: 12,
  sub_type: "hamburguer",
  type: "all-day",
  updatedAt: "2021-02-16T13:11:54.173Z",
  qtd: 2
}

describe('removeProductFromCart()', () => {
  it('Devera diminuir 1 em qtd no array', () => {
    expect(removeProductFromCart(arrList, arrList[1])[1].qtd).toBe(1)
  })
})

describe('addProductToCart()', () => {
  it('Deverá adicionar mais um item no array', () => {
    expect(addProductToCart(arrList, product)[1].qtd).toBe(3)
  })

})

describe('sumTotalPrice()', () => {
  it('Deverá retornar a quantidade de um produto epsecífico repetido', () => {
    expect(sumTotalPrice(arrList)).toBe(35)
  })
})

describe('deleteItemArray()', () => {
  it('Devera excluir o item do array', () => {
    expect(deleteItemArray(arrList, product)).toEqual([{
        "complement": "ovo",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "flavor": "frango",
        "id": 40,
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "name": "Hambúrguer simples",
        "price": 11,
        "sub_type": "hamburguer",
        "type": "all-day",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      },
      {
        "complement": "ovo",
        "createdAt": "2021-02-16T13:11:54.173Z",
        "flavor": "frango",
        "id": 40,
        "image": "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
        "name": "Hambúrguer simples",
        "price": 11,
        "sub_type": "hamburguer",
        "type": "all-day",
        "updatedAt": "2021-02-16T13:11:54.173Z"
      }
    ])
  })
});