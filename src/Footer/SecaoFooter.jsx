import React from 'react';
import styles from './SecaoFooter.module.css';
import logo from './../assets/img/logo.png';
import localIcon from '../assets/img/local.png';
import telefoneIcon from '../assets/img/telefone.png';
import whatsappIcon from '../assets/img/IconWhatsapp.png';

function SecaoFooter() {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.descricaoLateral}>
                    <img src={logo} alt="" />
                    <p>Produto de qualidade e bom atendimento é o nosso forte. Nos postos JL estamos sempre prontos para te atender!</p>
                </div>
                <div className={styles.infoMatriz}>
                    <p>Rede de postos JL - XX.XXX.XXX/0001-XX</p>
                    <div className={styles.contatos}>
                        <img src={localIcon} alt="" />
                        <p>Av. Ver. Geraldo Teodoro da Silva, 290 - Bosque</p>
                    </div>
                    <ul>
                        <li>
                            <img src={telefoneIcon} alt="" />
                            <p>(34) 3215-6789</p>
                        </li>
                        <li>
                            <img src={whatsappIcon} alt="" />
                            <p>(34) 99999-9999</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.navLateral}>
                    <nav>
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Produtos</a>
                            </li>
                            <li>
                                <a href="">Benefícios</a>
                            </li>
                            <li>
                                <a href="">Quem somos</a>
                            </li>
                            <li>
                                <a href="">Localização</a>
                            </li>
                            <li>
                                <a href="">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
}

export default SecaoFooter;
