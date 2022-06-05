import React from 'react';
import '@testing-library/jest-dom';
import HandlingErrors from './index.jsx';
import {render, screen } from '@testing-library/react'

describe('<HandlingErrors />', () => {
  test('O componente deve retornar (E-mail ou senha inválido)', () => {
    render(<HandlingErrors errorType='email/senha inválido' />);
    expect(screen.getByText('E-mail ou senha inválido')).toBeInTheDocument();
  });

  test('O componente deve retornar (Digite o e-mail ou a senha)', () => {
    render(<HandlingErrors errorType='email/senha não fornecido' />);
    expect(screen.getByText('Digite o e-mail ou a senha')).toBeInTheDocument();
  });

  test('O componente deve retornar (Digite o nome do cliente)', () => {
    render(<HandlingErrors errorType='nome/carrinho' />);
    expect(screen.getByText('Digite o nome do cliente')).toBeInTheDocument();
  });

  test('O componente deve retornar (Dados insuficientes, e-mail, senha, nome ou cargo não fornecido)', () => {
    render(<HandlingErrors errorType='email, password, role ou restaurant não fornecido' />);
    expect(screen.getByText('Dados insuficientes, e-mail, senha, nome ou cargo não fornecido')).toBeInTheDocument();
  });

  test('O componente deve retornar (E-mail já cadastrado)', () => {
    render(<HandlingErrors errorType='Email já cadastrado' />);
    expect(screen.getByText('E-mail já cadastrado')).toBeInTheDocument();
  });

  test('O componente deve retornar (Dados insuficientes)', () => {
    render(<HandlingErrors errorType='Dados insuficientes' />);
    expect(screen.getByText('Dados insuficientes')).toBeInTheDocument();
  });

})
