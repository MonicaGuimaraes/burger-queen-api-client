import React from 'react';
import '@testing-library/jest-dom';
import Order from './index.js';
import {
  waitForElementToBeRemoved,
  render,
  screen,
  waitFor
} from '@testing-library/react'
import user from '@testing-library/user-event';
import { callOrdersAPI } from '../../API/CallOrdersAPI.js'
import { changeStatusAPI } from '../../API/ChangeStatusAPI.js'
import { getPersistedUser } from '../../components/localStorage'

jest.mock('../../API/CallOrdersAPI.js')
jest.mock('../../API/ChangeStatusAPI.js')
jest.mock('react-router-dom')
jest.mock('../../components/localStorage')

const arrOrders = [{
  Products: [{
    complement: null,
    flavor: null,
    id: 29,
    name: "Café americano",
    qtd: 1
  }],
  client_name: "aaaa",
  createdAt: "2022-06-03T19:23:54.680Z",
  id: 5547,
  processedAt: "2022-06-11T01:26:59.454Z",
  status: "ready",
  table: 1,
  updatedAt: "2022-06-12T16:41:49.452Z",
  user_id: 4070,
},
{
  Products: [{
    complement: null,
    flavor: null,
    id: 29,
    name: "Café americano",
    qtd: 1
  }],
  client_name: "ccccc",
  createdAt: "2022-06-02T14:19:12.226Z",
  id: 5416,
  processedAt: "2022-06-09T01:25:05.587Z",
  status: "inPreparation",
  table: 1,
  updatedAt: "2022-06-12T16:20:43.678Z",
  user_id: 4070
},
{
  Products: [{
    complement: null,
    flavor: null,
    id: 29,
    name: "Café americano",
    qtd: 1
  }],
  client_name: "vip",
  createdAt: "2022-06-03T19:23:54.680Z",
  id: 5545,
  processedAt: "2022-06-11T01:26:59.454Z",
  status: "pending",
  table: 1,
  updatedAt: "2022-06-12T16:41:49.452Z",
  user_id: 4070,
}
]

describe('Order', () => {
  test('Interação com a pagina Order sendo da cozinha', async () => {
    getPersistedUser.mockReturnValue({
      role: 'cozinha'
    })
    callOrdersAPI.mockResolvedValue(arrOrders)
    changeStatusAPI.mockResolvedValueOnce({})
    render(<Order />)

    await waitFor(() => {
      expect(callOrdersAPI).toHaveBeenCalled()
    }) //Precisamos realmente disso?

    await waitFor(() => {
      const arrButton = screen.getAllByRole('button')
      expect(arrButton).toHaveLength(3)
    })

  })
  
  test('Interação com a pagina Order sendo do atendimento', async () => {
    getPersistedUser.mockReturnValue({
      role: 'atendimento'
    })
    callOrdersAPI.mockResolvedValueOnce(arrOrders)
    changeStatusAPI.mockResolvedValueOnce({})
    render(<Order />)

    await waitFor(() => {
      expect(callOrdersAPI).toHaveBeenCalled()
    })

    await waitFor(() => {
      const arrButton = screen.getAllByRole('button')
      expect(arrButton).toHaveLength(4)
    })

    const [, ...newOrders] = arrOrders
    callOrdersAPI.mockResolvedValueOnce(newOrders)
    const button = screen.getByText('Pronto')
    user.click(button)
    
    await waitForElementToBeRemoved(() => screen.queryByText('Pronto'))
    expect(changeStatusAPI).toHaveBeenCalledTimes(1)
    expect(callOrdersAPI).toHaveBeenCalledTimes(2)
    const client = screen.getByText('Cliente: vip')
    expect(client).toBeInTheDocument()

  })

})