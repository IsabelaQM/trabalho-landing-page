import React from 'react';
import styles from './Info_Unidade.module.css';
import infoIcon from '../../assets/img/info.png';
import localIcon from '../../assets/img/local.png';
import phoneIcon from '../../assets/img/telefone.png';
import hourIcon from '../../assets/img/horario.png';

function Info_Unidade() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <img src={infoIcon} alt="" />
                <h5>Nome da Unidade</h5>
            </div>
                <div className={styles.info}>
                    <ul>
                        <li>
                            <img src={localIcon} alt="" />
                            <p>Av. Ver. Geraldo Teodoro da Silva, 290 - Bosque / 38.400-000</p>
                        </li>
                        <li>
                            <img src={phoneIcon} alt="" />
                            <p>(34) 3215-6789 / (34) 99999-9999</p>
                        </li>
                        <li>
                            <img src={hourIcon} alt="" />
                            <p>Seg à Seg - 24h</p>
                        </li>
                    </ul>
                </div>
        </div>
    );
}

export default Info_Unidade;