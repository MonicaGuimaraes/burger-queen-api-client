import React from 'react';
import '@testing-library/jest-dom';
import HandlingResponseAPI from './index.jsx';
import {render, screen } from '@testing-library/react'

describe('<HandlingResponseAPI />', () => {
  test('O componente deve retornar (E-mail ou senha inválido)', () => {
    render(<HandlingResponseAPI message='email/senha inválido' />);
    expect(screen.getByText('E-mail ou senha inválido')).toBeInTheDocument();
  });

  test('O componente deve retornar (Digite o e-mail ou a senha)', () => {
    render(<HandlingResponseAPI message='email/senha não fornecido' />);
    expect(screen.getByText('Digite o e-mail ou a senha')).toBeInTheDocument();
  });

  test('O componente deve retornar (Digite o nome do cliente)', () => {
    render(<HandlingResponseAPI message='nome/carrinho' />);
    expect(screen.getByText('Digite o nome do cliente')).toBeInTheDocument();
  });

  test('O componente deve retornar (Dados insuficientes, e-mail, senha, nome ou cargo não fornecido)', () => {
    render(<HandlingResponseAPI message='email, password, role ou restaurant não fornecido' />);
    expect(screen.getByText('Dados insuficientes, e-mail, senha, nome ou cargo não fornecido')).toBeInTheDocument();
  });

  test('O componente deve retornar (E-mail já cadastrado)', () => {
    render(<HandlingResponseAPI message='Email já cadastrado' />);
    expect(screen.getByText('E-mail já cadastrado')).toBeInTheDocument();
  });

  test('O componente deve retornar (Dados insuficientes)', () => {
    render(<HandlingResponseAPI message='Dados insuficientes' />);
    expect(screen.getByText('Dados insuficientes')).toBeInTheDocument();
  });

})
