import React from 'react';
import '@testing-library/jest-dom';
import  Login from './index.js';
import {render, screen, waitFor} from '@testing-library/react'
import user from '@testing-library/user-event';
import { loginAPI } from '../../API/LoginAPI' 

jest.mock('react-router-dom')
jest.mock('../../API/LoginAPI')

describe("LoginPage", () => {
  beforeEach(() => {
    loginAPI.mockClear()
    // jest.clearAllMocks()
  })

  test('Deverá autenticar um usuário com sucesso', async () =>{
    loginAPI.mockResolvedValueOnce({code : '',})
    render(<Login />)

    const email = 'sample@mail.com';
    const password = 'sample';
    const inputEmail = screen.getByPlaceholderText(/Email/i)
    user.type(inputEmail, email)
    const inputPassword = screen.getByPlaceholderText(/Senha/i)
    user.type(inputPassword, password)
    const button = screen.getByRole('button')
    user.click(button)

    await waitFor(() =>{
      expect(loginAPI).toHaveBeenCalledWith(email, password)
    });
    expect(loginAPI).toHaveBeenCalledTimes(1)
  })

  test('Não deverá chamar a API se o email estiver errado', () =>{

    render(<Login />)
    const email = 'samplemail.com';
    const password = 'sample';
    const inputEmail = screen.getByPlaceholderText('seuemail@email.com')
    user.type(inputEmail, email)
    const inputPassword = screen.getByPlaceholderText(/Senha/i)
    user.type(inputPassword, password)
    const button = screen.getByRole('button')
    user.click(button)
    expect(loginAPI).toHaveBeenCalledTimes(0)
  })

  test('Deverá chamar o componente HandlingErrors quando a API trouxer um obj com uma key code', async () =>{
    
    loginAPI.mockResolvedValueOnce({
      code : '4',
      message: 'email/senha inválido'
    })
    render(<Login />)
    const email = 'sample@mail.com';
    const password = 'samplexxxx';
    const inputEmail = screen.getByPlaceholderText(/Email/i)
    user.type(inputEmail, email)
    const inputPassword = screen.getByPlaceholderText(/Senha/i)
    user.type(inputPassword, password)
    const button = screen.getByRole('button')
    user.click(button)
    
    await waitFor(() => {
      expect(loginAPI).toHaveBeenCalledWith(email, password) 
    });
    expect(loginAPI).toHaveBeenCalledTimes(1)
    await waitFor(() => {
      expect(screen.getByText('E-mail ou senha inválido')).toBeInTheDocument()
    });
  })
})

