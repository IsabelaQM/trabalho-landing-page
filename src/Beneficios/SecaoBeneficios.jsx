import Beneficios from './Beneficios';
import styles from './SecaoBeneficios.module.css'; // Importar estilos da seção

// Importar imagens corretamente
import imgPremmiaReduzida from '../assets/img/imgPremmiaReduzida.png';
import imgCelularReduzida from '../assets/img/imgCelularReduzida.png';

const Secao_Beneficios = () => {
    return (
        <section className={styles.secaoBeneficios}>
            <div id='beneficios'>
                <h2 className={styles.tituloBeneficios}>Benefícios</h2>
                <div className={styles.containerBeneficios}>
                    <div className={styles.beneficio1}>
                        <Beneficios
                            titulo="Programa de Fidelidade Premmia"
                            subtitulo="O programa de pontos"
                            descricao="Com o Premmia, você se cadastra, acumula pontos e pode trocá-los por ofertas incríveis, produtos, serviços e descontos em diversos parceiros."
                            imagem={imgPremmiaReduzida}
                        />
                    </div>
                    <div className={styles.beneficio2}>
                        <Beneficios
                            titulo="Cashback e Acúmulo de Pontos"
                            subtitulo="vários benefícios"
                            descricao="Pague seu abastecimento pelo App Premmia com PIX ou cartão de crédito e ganhe até 6% de cashback, também acumule pontos."
                            imagem={imgCelularReduzida}
                            invertido
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Secao_Beneficios;
