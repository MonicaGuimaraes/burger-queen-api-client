import React from 'react';
import '@testing-library/jest-dom';
import Cart from './index.jsx';
import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event';
import { createOrderAPI } from '../../API/CreateOrder';

jest.mock('react-router-dom')
jest.mock('../../API/CreateOrder')

const productsCart = [
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
    qtd: 3
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
    qtd: 1
  }
]

const order = {
  inputName: 'test',
  inputTable: 1,
  arrProducts: [
    { id: 40, qtd: 3 },
    { id: 31, qtd: 1 }
  ]
}

describe('Cart', () => {
  beforeEach(() => {
    createOrderAPI.mockClear()
  })

  test('Quando renderizado Cart, deve aparecer apenas um componente com o texto (Hambúrguer vegetariano) e um componente (Hambúrguer Frango)', async () => {
    render(<Cart arrList={productsCart} setArrList={jest.fn} />)
    await waitFor(() =>
      expect(screen.getAllByText('1X Hambúrguer simples vegetariano com queijo')).toHaveLength(1)
    )
    expect(screen.getAllByText('3X Hambúrguer simples frango com ovo')).toHaveLength(1)
    expect(screen.getByText('Total:45.00')).toBeInTheDocument()
  })

  test('Deve chamar CreateOrderAPI com o objeto order', async () => {
    createOrderAPI.mockResolvedValueOnce({})
    render(<Cart arrList={productsCart} setArrList={jest.fn} />)
    const inputClient = screen.getByLabelText('Nome do Cliente')
    user.type(inputClient, 'test')
    const buttonOrder = screen.getByText('Pronto')
    user.click(buttonOrder)
    await waitFor(() =>
      expect(createOrderAPI).toHaveBeenCalledWith(order)
    )
    expect(createOrderAPI).toHaveBeenCalledTimes(1)
  })

  test('Não deve chamar CreateOrderAPI', () => {
    render(<Cart arrList={productsCart} setArrList={jest.fn} />)
    const buttonOrder = screen.getByText('Pronto')
    user.click(buttonOrder)
    expect(createOrderAPI).toHaveBeenCalledTimes(0)
  })

  test('Esperamos que a frase "Ainda não tem nada no carrinho!" apareça', () => {
    render(<Cart arrList={[]} setArrList={jest.fn} />)
    expect(screen.getByText('Ainda não tem nada no carrinho!')).toBeInTheDocument()
  })

})