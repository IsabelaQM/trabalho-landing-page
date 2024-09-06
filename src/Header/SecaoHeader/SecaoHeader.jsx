import React from 'react';
import './SecaoHeader.css';
import Menu from '../Menu/Menu';
import Titulo from '../Titulo/Titulo';

function SecaoHeader() {
    return (
        <section className='section-header-background'>
            <div>
                <Menu className="menu"/>
                <div>
                <Titulo className="titulo" />
                </div>
            </div>
        </section>
    );
}

export default SecaoHeader;