import { useState, } from 'react'
import { CiUser } from "react-icons/ci";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import './login.css'

export default function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    function handleSignIn(e) {
        e.preventDefault();
        if (email === '' || password === '') {
            toast.error('Preencha os campos vazios!')
        }
        else {
            if (email === 'admin' && password === '12345') {
                toast.success('Bem vindo!')
                navigate("/dashboardAgua")
            }
            else {
                toast.error('E-mail/Senha incorretos!')
            }
        }
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <CiUser size={100} color='#FFFF' />
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