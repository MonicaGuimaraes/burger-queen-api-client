import React from 'react';
import '@testing-library/jest-dom';
import ButtonSubmit from "./index";
import {render, screen} from '@testing-library/react';


describe('Testando se a tag <button> existe no HTML.', () => {
    test('Deve existe um Button neste componente', () => {
        render(<ButtonSubmit/>)
     const Button = screen.getAllByRole('button')
     expect(Button).toHaveLength(1)
})
})