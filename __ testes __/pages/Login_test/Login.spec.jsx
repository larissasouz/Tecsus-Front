import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom'; // Se você estiver usando react-router
import { toast } from 'react-toastify';
import '@testing-library/jest-dom';
import Login from '../../../src/pages/Login'

jest.mock('react-toastify', () => ({
    toast: {
        success: jest.fn(),
        error: jest.fn()
    }
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Importa todas as funções originais exceto aquelas que serão sobrescritas
    useNavigate: jest.fn(),
}));


const mockNavigate = jest.fn();
useNavigate.mockImplementation(() => mockNavigate);

describe('Teste Renderização de Componentes do Login', () => {

    beforeEach(() => {
        render(<Router><Login /></Router>);
    });

    it('renderização do formulário', () => {
        const title = screen.getByTestId('formulario');
        expect(title).toBeInTheDocument();
    });


});


describe('Teste Função Login', () => {

    beforeEach(() => {
        render(<Router><Login /></Router>);
    });

    it('Validação de autenticação com campos vazios', () => {
        const buttonLogin = screen.getByTestId('buttonLogin');
        fireEvent.click(buttonLogin);
        expect(toast.error).toHaveBeenCalledWith('Preencha os campos vazios!');
    });

    it('Validação de autenticação bem sucedida', () => {
        const emailInput = screen.getByTestId('email');
        const passwordInput = screen.getByTestId('password');
        const buttonLogin = screen.getByTestId('buttonLogin');

        fireEvent.change(emailInput, { target: { value: 'admin' } });
        fireEvent.change(passwordInput, { target: { value: 'admin1' } });
        fireEvent.click(buttonLogin);

        expect(toast.success).toHaveBeenCalledWith('Bem vindo!');
        expect(mockNavigate).toHaveBeenCalledWith('/dashboard');
    });

    it('Validação de autenticação inválida', () => {
        const emailInput = screen.getByTestId('email');
        const passwordInput = screen.getByTestId('password');
        const buttonLogin = screen.getByTestId('buttonLogin');

        fireEvent.change(emailInput, { target: { value: 'administrador' } });
        fireEvent.change(passwordInput, { target: { value: 'administrador1' } });
        fireEvent.click(buttonLogin);

        expect(toast.error).toHaveBeenCalledWith('E-mail/Senha incorretos!');

    });

});
