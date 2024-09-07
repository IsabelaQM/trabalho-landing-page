import styles from './SecaoBeneficios.module.css'; 

// eslint-disable-next-line react/prop-types
const Beneficios = ({ titulo, subtitulo, descricao, imagem, invertido }) => {
  return (
    <div className={`${styles.beneficio} ${invertido ? styles.invertido : ''}`}>
      <div className={styles.textoBeneficios}>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        <p>{descricao}</p>
      </div>
      <div className={styles.imagemBeneficios}>
        <img src={imagem} alt={titulo} className={styles.imagemBeneficios}/>
      </div>
    </div>
  );
};

export default Beneficios;