import React from 'react';
import '@testing-library/jest-dom';
import Menu from './index.js';
import {
  render,
  screen,
  waitFor
} from '@testing-library/react'
import user from '@testing-library/user-event';
import MenuAPI from '../../API/MenuAPI.js'

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

describe('<Menu />', () => {
  beforeEach(() => {
    MenuAPI.mockClear()
  })

  // test('Deve haver elementos com função de lista', () => {
  //   MenuAPI.mockResolvedValueOnce(arrList)
  //   render(<Menu />)
  //   const  screen.getAllByRole('li')
  // })

  // test('', () => {
  //   render(<Menu />)
  // })

  // test('', () => {
  //   render(<Menu />)
  // })
})

// test('', () => {
// })