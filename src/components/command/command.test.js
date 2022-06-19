import React from 'react';
import '@testing-library/jest-dom';
import Command from "./index";
import { render, screen} from '@testing-library/react';

const order = {
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
}


describe('Testando se a comanda está na tela.', () => {
  test('Quando renderizado Command Item tem um botão, com class buttonPending e com texto Pendente.', () => {

    render(<Command order={order} onClickStatus={jest.fn} classNameButton={'buttonPending'} children={'Pendente'} disabled={false} />)
    const buttonPendente = screen.getByRole('button') 
    expect(buttonPendente).toBeInTheDocument()
    
    const buttonPendenteText = screen.getByText('Pendente')
    expect(buttonPendente).toBe(buttonPendenteText)

    expect(buttonPendente.classList.contains('buttonPending')).toBe(true)
  })

  test('Quando renderizado Command Item tem as informações da const order na tela.', () => {
  render(<Command order={order} onClickStatus={jest.fn} classNameButton={'buttonPending'} children={'Pendente'} disabled={false} />)
    const nomeProdutoComanda = screen.getByText(/Café americano/)
    expect(nomeProdutoComanda).toBeInTheDocument()
  })
})
