import React from 'react';
import '@testing-library/jest-dom';
import HandlingApiStatus from './index.jsx';
import { render, screen } from '@testing-library/react'

const testCases = {
  'email/senha inválido': 'E-mail ou senha inválido',
  'email/senha não fornecido': 'Digite o e-mail ou a senha',
  'nome/carrinho': 'Digite o nome do cliente',
  'email, password, role ou restaurant não fornecido': 'Dados insuficientes, e-mail, senha, nome ou cargo não fornecido',
  'Email já cadastrado': 'E-mail já cadastrado',
  'Dados insuficientes': 'Dados insuficientes',
  'successRegister': 'Você foi registrado com sucesso.',
  'successOrder': 'Sua comanda foi enviada para cozinha.',
  'successStatus': 'O estado do pedido foi alterado.'
}

describe('<HandlingApiStatus />', () => {
  const errors = Object.keys(testCases)

  errors.forEach(error => {
    test(`O componente deve retornar ${testCases[error]}`, () => {
      render(<HandlingApiStatus message={error} />);
      expect(screen.getByText(testCases[error])).toBeInTheDocument();
    })
  })


  test('O componente deve retornar (Tente mais tarde! Estamos com alguns problemas!)', () => {
    render(<HandlingApiStatus message='error' />);
    expect(screen.getByText('Tente mais tarde! Estamos com alguns problemas! Também verifique sua conexão.')).toBeInTheDocument();
  });

})
