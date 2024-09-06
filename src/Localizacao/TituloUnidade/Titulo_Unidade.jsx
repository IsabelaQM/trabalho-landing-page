import React from 'react';
import localIcon from '../../assets/img/local2.png';
import styles from './Titulo_Unidade.module.css';

function Titulo_Unidade(props) {
    return (
        <div className={styles.unidades}>
            <img src={localIcon} alt="" />
            <h2>Unidades {props.nomeUnidade}</h2>
        </div>
    );
}

export default Titulo_Unidade;