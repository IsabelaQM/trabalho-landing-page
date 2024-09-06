import React from 'react';
import './SecaoFormulario.css';
import ComunicadoFormulario from '../ComunicadoFormulario/ComunicadoFormulario';
import Formulario from '../Formulario/Formulario';


function SecaoFormulario() {
    return (
        <section className='section-formulario-background'>
            <div>
            <ComunicadoFormulario/>
            <Formulario/>
            </div>
        </section>
    );
}

export default SecaoFormulario;