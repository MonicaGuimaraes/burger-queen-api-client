import React from 'react';
import '@testing-library/jest-dom';
import  Login from './index.js';
import {render, screen} from '@testing-library/react'
import {BrowserRouter as Router} from 'react-router-dom';
describe("LoginPage", () => {
  test('Testando se o componente do button está na pagina de login', () => {
    render(<Router><Login /></Router>);
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  });
  
  test('Testando se o componente do input está na página de login com placeholder email', () => {
    render(<Router><Login /></Router>);
    const input = screen.getByPlaceholderText(/Email/i)
    expect(input).toBeInTheDocument()
  })

  test('Testando se o componente do input está na página de login com placeholder senha', () => {
    render(<Router><Login /></Router>);
    const input = screen.getByPlaceholderText(/Senha/i)
    expect(input).toBeInTheDocument()
  })
    // const inputEmail = screen.getByPlaceholderText(/Email/i)
    // const inputSenha = screen.getByPlaceholderText(/Senha/i)
    // inputEmail.value = 'sample@mail.com'
    // inputSenha.value = 'sample'
    // expect(screen.toBeInTheDocument())
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