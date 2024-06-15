import React, { useState, useEffect } from 'react';
import { BsFillPersonFill } from 'react-icons/bs'; // Importe o ícone BsFillPersonFill
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import './login.css'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Removido o estado inicial de senha aqui
    const navigate = useNavigate();

    useEffect(() => {
        // Verificar se há uma nova senha armazenada
        const storedNewPassword = localStorage.getItem('newPassword');
        if (storedNewPassword) {
            setPassword('');
        } else {
            // Caso não haja nova senha, manter o campo de senha vazio
            setPassword('');
        }
    }, []);

    function handleSignIn(e) {
        e.preventDefault();
        if (email === '' || password === '') {
            toast.error('Preencha os campos vazios!');
        } else {
            // Verificar se há uma nova senha armazenada
            const storedNewPassword = localStorage.getItem('newPassword');
            if (storedNewPassword && password === storedNewPassword && email == 'admin')  {
                toast.success('Bem vindo!');
                navigate("/dashboard");
            } else {
                toast.error('E-mail/Senha incorretos!');
            }
        }
    }
    

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <BsFillPersonFill size={100} color='#FFFF' />
                </div>

                <form onSubmit={handleSignIn} data-testid="formulario">
                    <h1>Entrar</h1>
                    <input
                        data-testid="email"
                        type="text"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        data-testid="password"
                        type="password"
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type='submit' data-testid="buttonLogin">
                        Acessar
                    </button>

                </form>

            </div>
        </div>
    )
}
