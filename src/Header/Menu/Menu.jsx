import React from 'react';
import './Menu.css';

function Menu() {
    return (
        <section className='menu'>
            <div>
                <img src="Logo.png" alt="logo" className='imagem da Logo'/>
            </div>
            <div>
                <nav>
                    <ul>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#beneficios">Benefícios</a></li>
                        <li><a href="#localizacao">Localização</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}

export default Menu;