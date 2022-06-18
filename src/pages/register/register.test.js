import React from 'react';
import '@testing-library/jest-dom';
import  Register from './index.js';
import {render, screen, waitFor} from '@testing-library/react';
import user from '@testing-library/user-event';
import { registerAPI } from '../../API/RegisterAPI';

jest.mock('react-router-dom')
jest.mock('../../API/RegisterAPI');

 describe("RegisterPage", () => {

    test('Deverá autenticar um usuário com sucesso', async () =>{
      registerAPI.mockResolvedValueOnce({})
      render(<Register />)
      const objUser = {
      email: 'sample@mail.com', 
      name: 'João', 
      password: 'sample', 
      role: 'cozinha' }
      
      const inputName = screen.getByPlaceholderText(/Nome/i)
      user.type(inputName, objUser.name)
      const inputEmail = screen.getByPlaceholderText(/Email/i)
      user.type(inputEmail, objUser.email)
      const inputPassword = screen.getByPlaceholderText(/Senha/i)
      user.type(inputPassword, objUser.password)
      const inputSelect = screen.getByTestId('select')
      user.selectOptions(inputSelect, objUser.role)
      const button = screen.getByRole('button')
      user.click(button)
  
      await waitFor(() =>{
        expect(registerAPI).toHaveBeenCalledWith(objUser)
      });
      expect(registerAPI).toHaveBeenCalledTimes(1)
    })

    test('Verificando se a senha possui mais de 6 digitos',() =>{
      render(<Register />)
      const password = '12345'
      const inputPassword = screen.getByPlaceholderText(/Senha/i)
      user.type(inputPassword, password)

      expect(registerAPI).toHaveBeenCalledTimes(0)
    })
  
//     test('Não deverá chamar a API se o email estiver errado', () =>{
//       loginAPI.mockClear()
//       render(<Login />)
//       const email = 'samplemail.com';
//       const password = 'sample';
//       const inputEmail = screen.getByPlaceholderText(/Email/i)
//       user.type(inputEmail, email)
//       const inputPassword = screen.getByPlaceholderText(/Senha/i)
//       user.type(inputPassword, password)
//       const button = screen.getByRole('button')
//       user.click(button)
//       expect(loginAPI).toHaveBeenCalledTimes(0)
//     })
   })