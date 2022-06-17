import React from 'react';
import '@testing-library/jest-dom';
import  ProductsCart from './index.jsx';
import {render, screen} from '@testing-library/react';

const obj = {
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
}

describe('Product Cart', () => {
  test('Quando renderiza ProductsCart ele tem 3 botões', () => {
    render(<ProductsCart product={obj} onClickPlus={(e) => 1 + 1} qtd={3} onClickLess={(e) => 1 + 1} onclickTrash={(e) => 1 + 1}/>)
    const buttons = screen.getAllByRole('button')
    expect(buttons).toHaveLength(3)
  })
})