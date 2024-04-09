import React, { useState } from 'react';
import './sidebar.css';

const Sidebar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleItemClick = (item) => {
    // Adicione aqui o redirecionamento para a página correspondente ao item clicado
    console.log(`Redirecionando para ${item}`);
  };

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <ul>
          <li
            onClick={() => handleItemClick('dashboard')}
            onMouseEnter={() => handleMouseEnter('dashboard')}
            onMouseLeave={handleMouseLeave}
            className={hoveredItem === 'dashboard' ? 'menu-item active' : 'menu-item'}
          >
            Dashboard
          </li>
          <li
            onClick={() => handleItemClick('relatorio')}
            onMouseEnter={() => handleMouseEnter('relatorio')}
            onMouseLeave={handleMouseLeave}
            className={hoveredItem === 'relatorio' ? 'menu-item active' : 'menu-item'}
          >
            Relatório
          </li>
          <li
            onClick={() => handleItemClick('configuracoes')}
            onMouseEnter={() => handleMouseEnter('configuracoes')}
            onMouseLeave={handleMouseLeave}
            className={hoveredItem === 'configuracoes' ? 'menu-item active' : 'menu-item'}
          >
            Configurações
          </li>
          <li
            onClick={() => handleItemClick('sair')}
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
