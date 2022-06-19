import React from 'react';
import '@testing-library/jest-dom';
import Inputs from './index.jsx';
import {render, screen} from '@testing-library/react';

describe('Inputs Componente', () => {
  test('Deve haver um elemento com role "textbox"', ()=> {
    render(<Inputs />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })
})