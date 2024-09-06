import React from 'react';
import styles from './Secao_Localizacao.module.css';
import Info_Unidade from '../InfoUnidade/Info_Unidade';
import Google_Maps_API from '../Google_Maps_API/Google_Maps_API';
import Titulo_Unidade from '../TituloUnidade/Titulo_Unidade';
import Titulo_Secao from '../TituloSecao/Titulo_Secao';

function Secao_Localizacao() {
    return (
        <section className={styles.secaoLocalizacao}>
            <div className={styles.corDeFundo}>
                <div className={styles.containerTitle} id='localizacao'>
                    <Titulo_Secao/>
                </div>
            </div>
            <div className={styles.containerUnidade}>
                <Titulo_Unidade nomeUnidade='Araguari' />
            </div>
            <div>
                <Google_Maps_API />
            </div>
            <div className={styles.containerInfo}>
                <Info_Unidade />
                <Info_Unidade />
                <Info_Unidade />
                <Info_Unidade />
            </div>
            <div className={styles.containerUnidade}>
                <Titulo_Unidade nomeUnidade='Uberlândia' />
            </div>
            <div>
                <Google_Maps_API />
            </div>
            <div className={styles.containerInfo}>
                <Info_Unidade />
            </div>
        </section>
    );
}

export default Secao_Localizacao;