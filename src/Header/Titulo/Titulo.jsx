import React from 'react';
import './Titulo.css';
import CallToAction from '../CallToAction/CallToAction';
function Titulo() {
    return (
        <section className='titulo'>
        <div>
        <h1>REDE DE POSTOS JL</h1>
        <div className='subtitulo'>
        <p>QUALIDADE <span style={{ fontWeight: 520 }}>E</span> ATENDIMENTO</p>
        <p>É O NOSSO</p>
        <p>FORTE</p>
        </div>
        <CallToAction /></div>
        </section>
    );
}

export default Titulo;