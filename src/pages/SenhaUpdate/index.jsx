import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Title from '../../components/title/title'
import { BsBarChart } from "react-icons/bs";
import Sidebar from '../../components/sidebar/sidebar'
import './update.css';

export default function UpdatePassword() {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    function handleUpdatePassword(e) {
        e.preventDefault();
        if (currentPassword === '' || newPassword === '' || confirmPassword === '') {
            toast.error('Preencha todos os campos!');
        } else if (newPassword !== confirmPassword) {
            toast.error('As senhas não coincidem!');
        } else {
            // Verificar se a senha atual inserida pelo usuário corresponde à senha armazenada
            const storedCurrentPassword = localStorage.getItem('newPassword');
            if (currentPassword !== storedCurrentPassword) {
                toast.error('Senha atual incorreta!');
                return; // Encerrar a função caso a senha atual seja incorreta
            }
    
            // Atualizar a nova senha no localStorage
            localStorage.setItem('newPassword', newPassword);
            toast.success('Senha atualizada com sucesso!');
    
            // Limpar os campos após a atualização
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
        }
    }
    

    return (
        <div classname='sidebar'>
            <Sidebar/>
            <main className='page-container'>
            <Title name={"Redefinir Senha"}>
                    <BsBarChart size={25} />
                </Title>
            <div className="update-password">
                <form onSubmit={handleUpdatePassword}>
                    <input
                        type="password"
                        placeholder="Senha atual"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Nova senha"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirmar nova senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit">Redefinir Senha</button>
                </form>
                </div>
            </main>
        </div>
    );
}
