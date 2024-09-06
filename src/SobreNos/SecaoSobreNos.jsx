import React from 'react';
import Carrossel from './Carrossel';
import Funcionalidade from './Funcionalidade';

import qualidadeImg from '../assets/img/qualidade.jpg';
import agilidadeImg from '../assets/img/agilidade.jpg';
import confiancaImg from '../assets/img/confianca.jpg';

import './SecaoSobreNos.css';

const SecaoSobreNos = () => {
    return (
        <section className="sobre-nos" id='quemSomos'>
            <div>
                <h1 className="sobre-nos-titulo">
                    HÁ <span className="destaque">20 ANOS</span> OFERECENDO QUALIDADE E <br /> CONFIANÇA PARA VOCÊ E SEU VEÍCULO
                </h1>
                <p className="sobre-nos-descricao">
                    A <strong>equipe de postos JL </strong>equipe de postos JL sabe da importância de construir uma <strong>empresa <br /> sólida</strong>,
                    comprometida com o trabalho que desempenha e com a qualidade <br /> dos produtos que oferece aos seus clientes.
                </p>
                <Carrossel />
                <div className="sobre-nos-funcionalidades">
                    <Funcionalidade
                        imagem={qualidadeImg}
                        titulo="QUALIDADE"
                        descricao="Há 20 anos com a bandeira BR, oferecemos combustíveis de alta qualidade e confiabilidade para seu veículo."
                    />
                    <Funcionalidade
                        imagem={agilidadeImg}
                        titulo="AGILIDADE"
                        descricao="Atendimento rápido e eficiente para quem precisa de agilidade no dia a dia. Valorize seu tempo conosco."
                    />
                    <Funcionalidade
                        imagem={confiancaImg}
                        titulo="CONFIANÇA"
                        descricao="A confiança de nossos clientes é nosso maior prêmio. Fomos reconhecidos com o Prêmio Top Off Mind Araguari 2023."
                    />
                </div>
            </div>

        </section>
    );
}

export default SecaoSobreNos;
