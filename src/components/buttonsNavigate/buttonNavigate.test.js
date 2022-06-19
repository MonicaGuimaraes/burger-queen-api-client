import React from 'react';
import '@testing-library/jest-dom';
import ButtonNav from "./index";
import {render, screen} from '@testing-library/react';

jest.mock('react-router-dom')
describe('Testando se a tag <button> existe no HTML.', () => {
    test('Deve existe um Button neste componente', () => {
        render(<ButtonNav disabled={false} onClick={jest.fn()} children={'oi'}/>)
     const Button = screen.getAllByRole('button')
     expect(Button).toHaveLength(1)
})
})