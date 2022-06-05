import React from 'react';
import '@testing-library/jest-dom';
import ProductItem from './index.jsx';
import {render, screen} from '@testing-library/react';
import user from '@testing-library/user-event';
import { standardizeName } from '../functions/standardizeName.js';

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

describe('standardizeName()', () => {

  it('Quando chamada standardizeName(obj) retorna "Hambúrguer simples frango com ovo"', () => {
    expect(standardizeName(obj)).toBe("Hambúrguer simples frango com ovo")
  })
  
})

describe("Product Item", () => {
 
  test('Quando renderizado Product Item tem um botão', () => {
    let num
    render(<ProductItem product={obj} onClick={(e) => num = 1 + 1}/>)
    const hasButton = screen.getAllByRole('button')
    const button = screen.getByRole('button')
    expect(hasButton).toHaveLength(1)
    user.click(button)
    expect(num).toBe(2)
  })
  
  test('Quando ProductItem é renderizado com obj deve haver um elemento com texto "R$:11.00"', () =>{
    render(<ProductItem product={obj} onClick={(e) => e.target}/>)
    expect(screen.getByText('R$:11.00')).toBeInTheDocument()
  })

})