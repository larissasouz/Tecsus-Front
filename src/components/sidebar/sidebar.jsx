import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './sidebar.css';

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleItemClick = (path) => {
    navigate(path);
  };

  return (
    <div className="sidebar-container" data-testid="sidebar">
      <div className="sidebar">
        <ul>
          <li
            onClick={() => handleItemClick('/dashboard')}
            onMouseEnter={() => handleMouseEnter('dashboard')}
            onMouseLeave={handleMouseLeave}
            className={hoveredItem === 'dashboard' ? 'menu-item active' : 'menu-item'}
          >
            Dashboard
          </li>
          <li
            onClick={() => handleItemClick('/updateDados')}
            onMouseEnter={() => handleMouseEnter('update')}
            onMouseLeave={handleMouseLeave}
            className={hoveredItem === 'update' ? 'menu-item active' : 'menu-item'}
          >
            Atualizar Dados
          </li>
          <li
            onClick={() => handleItemClick('/senhaUpdate')}
            onMouseEnter={() => handleMouseEnter('senhaUpdate')}
            onMouseLeave={handleMouseLeave}
            className={hoveredItem === 'senhaUpdate' ? 'menu-item active' : 'menu-item'}
          >
            Redefinir Senha
          </li>
          <li
            onClick={() => handleItemClick('/')}
            onMouseEnter={() => handleMouseEnter('sair')}
            onMouseLeave={handleMouseLeave}
            className={hoveredItem === 'sair' ? 'menu-item active' : 'menu-item'}
          >
            Sair
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
