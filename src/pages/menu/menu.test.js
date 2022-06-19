import React from 'react';
import '@testing-library/jest-dom';
import Menu from './index.js';
import {
  render,
  screen,
  waitFor
} from '@testing-library/react'
import user from '@testing-library/user-event';
import { menuAPI } from '../../API/MenuAPI.js'
import { createOrderAPI } from '../../API/CreateOrder.js'


jest.mock('../../API/CreateOrder.js')
jest.mock('../../API/MenuAPI.js')
jest.mock('react-router-dom')

const arrList = [{
  complement: "ovo",
  createdAt: "2021-02-16T13:11:54.173Z",
  flavor: "carne",
  id: 43,
  image: "https://www.perdigao.com.br/assets/_images/4850f411315852efc87363480bd7a63fb96da849.png",
  name: "Hambúrguer duplo",
  price: 11,
  sub_type: "hamburguer",
  type: "breakfast",
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
},
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
}
]

const order = {
  inputName: 'Carla',
  inputTable: "10",
  arrProducts: [{qtd:2, id: 43}],
}

describe('<Menu />', () => {
  beforeEach(() => {
    menuAPI.mockClear()
  })

  test('Deve haver elementos que chegam do array que a API traz, de 6 botões passarão para 9', async () => {
    menuAPI.mockResolvedValueOnce(arrList)
    render(<Menu />)

    const arrButtonsAfter = screen.getAllByRole('button')
    expect(arrButtonsAfter).toHaveLength(6)

    await waitFor(() => {
      const arrButtonsBefore = screen.getAllByRole('button')
      expect(arrButtonsBefore).toHaveLength(9)
    })
  })


  test('Deve barrar o click e não chamar o createOrderAPI, pois não preencheu todos os dados', async () => {
    menuAPI.mockResolvedValueOnce(arrList)
    render(<Menu />)

    await waitFor(()=>{
      const arrButtons = screen.getAllByRole('button')
      expect(arrButtons).toHaveLength(9)
    })

    const inputName = screen.getByPlaceholderText('Cliente')
    user.type(inputName, 'v')
    const inputTable = screen.getByPlaceholderText('Mesa')
    user.type(inputTable, '0')
    const buttonPronto = screen.getByText('Pronto')
    user.click(buttonPronto)
    
    await waitFor(() => {
      expect(createOrderAPI).toHaveBeenCalledTimes(0)
    })

  })


  test('Testando o caminho de compra', async () => {
    menuAPI.mockResolvedValueOnce(arrList)
    createOrderAPI.mockResolvedValueOnce({
      certo: 'certo'
    })
    render(<Menu />)

    await waitFor(() => {
      const arrButtons = screen.getAllByRole('button')
      expect(arrButtons).toHaveLength(9)
    })

    const buttonAdicionar = screen.getAllByText('Adicionar')
    user.click(buttonAdicionar[0])
    const buttonPlus = screen.getByText('+')
    expect(buttonPlus).toBeInTheDocument()

    user.click(buttonPlus)
    const productOnScreen = screen.getByText(/2X/)
    expect(productOnScreen).toBeInTheDocument()

    const inputName = screen.getByPlaceholderText('Cliente')
    user.type(inputName, 'Carla')
    const inputTable = screen.getByPlaceholderText('Mesa')
    user.type(inputTable, '0')
    const buttonPronto = screen.getByText('Pronto')
    user.click(buttonPronto)
    await waitFor(() => {
      expect(createOrderAPI).toHaveBeenCalledWith(order)
    })

    await waitFor(() => {
      expect(screen.getByText('Sua comanda foi enviada para cozinha.')).toBeInTheDocument()
    })
  })

  test('Testando o caminho de compra dando erro', async () => {
    menuAPI.mockResolvedValueOnce(arrList)
    createOrderAPI.mockResolvedValueOnce({
      code: 'l'
    })
    render(<Menu />)

    await waitFor(() => {
      const arrButtons = screen.getAllByRole('button')
      expect(arrButtons).toHaveLength(9)
    })

    const buttonAdicionar = screen.getAllByText('Adicionar')
    user.click(buttonAdicionar[0])
    const buttonPlus = screen.getByText('+')
    expect(buttonPlus).toBeInTheDocument()

    user.click(buttonPlus)
    const productOnScreen = screen.getByText(/2X/)
    expect(productOnScreen).toBeInTheDocument()

    const inputName = screen.getByPlaceholderText('Cliente')
    user.type(inputName, 'Carla')
    const inputTable = screen.getByPlaceholderText('Mesa')
    user.type(inputTable, '0')
    const buttonPronto = screen.getByText('Pronto')
    user.click(buttonPronto)
    await waitFor(() => {
      expect(createOrderAPI).toHaveBeenCalledWith(order)
    })

    await waitFor(() => {
      expect(screen.getByText('Tente mais tarde! Estamos com alguns problemas!')).toBeInTheDocument()
    })
  })
})
