import React from 'react';
import '@testing-library/jest-dom';
import ContainerOrder from "./index";
import { render, screen, waitFor } from '@testing-library/react';
import { changeStatusAPI } from '../../API/ChangeStatusAPI';
import { callOrdersAPI } from '../../API/CallOrdersAPI';
import user from '@testing-library/user-event';

jest.mock('../../API/ChangeStatusAPI')
jest.mock('../../API/CallOrdersAPI')

const props = {
  child: 'Pedidos Pendentes',
  nameButton: 'Pendente',
  classNameButton: 'class',
  ordersWithStatus: [
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
      processedAt: "2022-06-02T14:19:12.226Z",
      status: "pending",
      table: 1,
      updatedAt: "2022-06-02T14:19:12.226Z",
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
      client_name: "aaaa",
      createdAt: "2022-06-03T19:23:54.680Z",
      id: 5545,
      processedAt: "2022-06-03T19:23:54.680Z",
      status: "pending",
      table: 1,
      updatedAt: "2022-06-03T19:23:54.680Z",
      user_id: 4070,
    }
  ],
  status: 'InPreparation',
  setOrders: jest.fn,
  disabled: false
}

describe('Componente ConatinerOrder', () => {
  beforeEach(() => {
    changeStatusAPI.mockClear()
    callOrdersAPI.mockClear()
  })

  test('Fluxo de troca de status em ContainerOrder dando certo', async () => {
    changeStatusAPI.mockResolvedValueOnce({})
    callOrdersAPI.mockResolvedValueOnce({})
    render(<ContainerOrder
      children={props.child}
      nameButton={props.nameButton}
      classNameButton={props.classNameButton}
      ordersWithStatus={props.ordersWithStatus}
      status={props.status}
      setOrders={props.setOrders}
      disabled={props.disabled} />
    )

    const buttonPending = screen.getAllByRole('button')
    expect(buttonPending).toHaveLength(2)

    user.click(buttonPending[0])

    await waitFor(() => {
      const message = screen.getByText('O estado do pedido foi alterado.')
      expect(message).toBeInTheDocument()
    })
    expect(changeStatusAPI).toHaveBeenCalledWith(props.status, '5416')
    
    await waitFor(() => {
      expect(callOrdersAPI).toHaveBeenCalledTimes(1)
    })
  })

  test('Fluxo de troca de status em ContainerOrder com erro entrando em catch', async () => {
    changeStatusAPI.mockRejectedValueOnce({})
    render(<ContainerOrder
      children={props.child}
      nameButton={props.nameButton}
      classNameButton={props.classNameButton}
      ordersWithStatus={props.ordersWithStatus}
      status={props.status}
      setOrders={props.setOrders}
      disabled={props.disabled} />
    )

    const buttonPending = screen.getAllByRole('button')
    expect(buttonPending).toHaveLength(2)

    user.click(buttonPending[0])

    await waitFor(() => {
      const message = screen.getByText("Tente mais tarde! Estamos com alguns problemas! Também verifique sua conexão.")
      expect(message).toBeInTheDocument()
    })

    expect(changeStatusAPI).toHaveBeenCalledWith(props.status, '5416')
    expect(callOrdersAPI).toHaveBeenCalledTimes(0)

  })

  test('Fluxo de troca de status em ContainerOrder com erro entrando em then retornando code', async () => {
    changeStatusAPI.mockResolvedValueOnce({
      code: 1
    })
    callOrdersAPI.mockResolvedValueOnce({})
    render(<ContainerOrder
      children={props.child}
      nameButton={props.nameButton}
      classNameButton={props.classNameButton}
      ordersWithStatus={props.ordersWithStatus}
      status={props.status}
      setOrders={props.setOrders}
      disabled={props.disabled} />
    )

    const buttonPending = screen.getAllByRole('button')
    expect(buttonPending).toHaveLength(2)

    user.click(buttonPending[0])

    await waitFor(() => {
      const message = screen.getByText("Tente mais tarde! Estamos com alguns problemas! Também verifique sua conexão.")
      expect(message).toBeInTheDocument()
    })

    expect(changeStatusAPI).toHaveBeenCalledWith(props.status, '5416')
    expect(callOrdersAPI).toHaveBeenCalledTimes(1)

  })
})