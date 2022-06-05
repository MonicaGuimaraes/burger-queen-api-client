import React from 'react';
import { useState } from 'react';
import '@testing-library/jest-dom';
import Cart from './index.jsx';
import {render, screen, waitFor} from '@testing-library/react'
import user from '@testing-library/user-event';
import { CreateOrderAPI } from '../../API/CreateOrder';
import { getPersistedUser } from '../localStorage/index.jsx'

jest.mock('react-router-dom')
jest.mock('../../API/CreateOrder')

const productsCart =[
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
    updatedAt: "2021-02-16T13:11:54.173Z"
  }
]

// const order = {
//   inputName: 'test',
//   inputTable: 1,
//   arrProducts: [
//     {id: 40, qtd: 1},
//     {id: 31, qtd: 1}
//   ]
// }

describe('Cart', () => {
  beforeEach(() => {
    CreateOrderAPI.mockClear()
  })

  test('Quando renderizado Cart, deve aparecer apenas um componente com o texto (Hambúrguer vegetariano) e um componente (Hambúrguer Frango)', async () => {
    render(<Cart arrList={productsCart} setArrList={jest.fn}/>)
    await waitFor(() => 
      expect(screen.getAllByText('1X Hambúrguer simples vegetariano com queijo')).toHaveLength(1)
    )
    expect(screen.getAllByText('1X Hambúrguer simples frango com ovo')).toHaveLength(1)
    expect(screen.getByText('Total:23.00')).toBeInTheDocument()
  })

  // test('Deve chamar CreateOrderAPI com o objeto order', async () => {
  //   // mockar localStorage
  //   CreateOrderAPI.mockResolvedValueOnce({})
  //   render(<Cart arrList={productsCart} setArrList={jest.fn}/>)
  //   const inputClient = screen.getByLabelText('Nome do Cliente')
  //   user.type(inputClient, 'test')
  //   const buttonOrder = screen.getByText('Pronto')
  //   user.click(buttonOrder)
  //   await waitFor(() => 
  //     expect(CreateOrderAPI).toHaveBeenCalledWith(order, null)
  //   )
  //   expect(CreateOrderAPI).toHaveBeenCalledTimes(1)
  // })

  test('Não deve chamar CreateOrderAPI', async () => {
    render(<Cart arrList={productsCart} setArrList={jest.fn}/>)
    const buttonOrder = screen.getByText('Pronto')
    user.click(buttonOrder)
    expect(CreateOrderAPI).toHaveBeenCalledTimes(0)
  })

})