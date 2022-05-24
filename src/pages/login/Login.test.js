import React from 'react';
import '@testing-library/jest-dom';
import  Login from './index.js';
import {render, screen, waitFor} from '@testing-library/react'
import user from '@testing-library/user-event';
import { loginAPI } from '../../API/LoginAPI' 

jest.mock('react-router-dom')
jest.mock('../../API/LoginAPI')

describe("LoginPage", () => {

  test('Deverá autenticar um usuário com sucesso', async () =>{
    loginAPI.mockResolvedValueOnce({})
    // const navigate = jest.fn()
    // navigate.mockReturnValueOnce()
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
    // await waitFor(() => expect().toHaveBeenCalledTimes(1))
  })

  test('Não deverá chamar a API se o email estiver errado', async () =>{
    // loginAPI. clear
    // loginAPI.mockResolvedValueOnce({})
    // // const navigate = jest.fn()
    // // navigate.mockReturnValueOnce()
    // render(<Login />)

    // const email = 'samplemail.com';
    // const password = 'sample';
    // const inputEmail = screen.getByPlaceholderText(/Email/i)
    // user.type(inputEmail, email)
    // const inputPassword = screen.getByPlaceholderText(/Senha/i)
    // user.type(inputPassword, password)
    // const button = screen.getByRole('button')
    // user.click(button)

    // await waitFor(() =>{
    //   expect(loginAPI).toHaveBeenCalledWith(email, password)
    // });
    // expect(loginAPI).toHaveBeenCalledTimes(1)
    // await waitFor(() => expect().toHaveBeenCalledTimes(1))
  })
})






// function getExampleDOM() {
//   // This is just a raw example of setting up some DOM
//   // that we can interact with. Swap this with your UI
//   // framework of choice 😉
//   const div = document.createElement('div')
//   div.innerHTML = `
//     <label for="username">Username</label>
//     <input id="username" />
//     <button>Print Username</button>
//   `
//   const button = div.querySelector('button')
//   const input = div.querySelector('input')
//   button.addEventListener('click', () => {
//     // let's pretend this is making a server request, so it's async
//     // (you'd want to mock this imaginary request in your unit tests)...
//     setTimeout(() => {
//       const printedUsernameContainer = document.createElement('div')
//       printedUsernameContainer.innerHTML = `
//         <div data-testid="printed-username">${input.value}</div>
//       `
//       div.appendChild(printedUsernameContainer)
//     }, Math.floor(Math.random() * 200))
//   })
//   return div
// }

// test('examples of some things', async () => {
//     const container = getExampleDOM()
    
//     // Get form elements by their label text.
//     // An error will be thrown if one cannot be found (accessibility FTW!)
//     const input = getByLabelText(container, 'Username')
//     const famousProgrammerInHistory = 'Ada Lovelace'
//     input.value = famousProgrammerInHistory

//   // Get elements by their text, just like a real user does.
//   getByText(container, 'Print Username').click()

//   await waitFor(() =>
//     expect(queryByTestId(container, 'printed-username')).toBeTruthy(),
//   )

//   // getByTestId and queryByTestId are an escape hatch to get elements
//   // by a test id (could also attempt to get this element by its text)
//   expect(getByTestId(container, 'printed-username')).toHaveTextContent(
//     famousProgrammerInHistory,
//   )
//   // jest snapshots work great with regular DOM nodes!
//   expect(container).toMatchSnapshot()
// })