import {useState, } from 'react'
import { CiUser } from "react-icons/ci";
import './login.css'

export default function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSignIn(e) {
        e.preventDefault();
        alert('Logado')
    }

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                <CiUser size={100} color='#FFFF'/>
                </div>

                <form onSubmit={handleSignIn}>
                    <h1>Entrar</h1>
                    <input
                        type="text"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Insira sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type='submit'>
                        Acessar
                    </button>

                </form>

            </div>
        </div>
    )
}