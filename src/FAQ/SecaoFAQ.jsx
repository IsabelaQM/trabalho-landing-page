import { useEffect, useState } from 'react';
import styles from './SecaoFAQ.module.css';

function SecaoFAQ() {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        fetch('https://isabelaqm.github.io/json-files/faq.json')
        //fetch('/faq.json')
            .then(file => file.json())
            .then(info => setFaqs(info.faqs))
            .catch(error => console.error('Erro ao carregar o JSON:', error));
    }, []);

    function getPerguntas() {
        if (faqs.length > 0) {
            return (
                faqs.map((faq, index) => (
                    <details key={index} className={styles.details}>
                        <summary className={styles.summary}>{faq.pergunta}</summary>
                        <p>{faq.resposta}</p>
                    </details>
                ))
            );
        }
    }

    return (
        <section className={styles.secao_FAQ}>
            <div className={styles.cabecalhoFAQ}>
            <div className={styles.containerFAQ}>
				<h2 className={styles.subtituloFAQ}>Tem alguma dúvida?</h2>
                <h2 className={styles.subtituloFAQ}>A gente te ajuda</h2>
				<p className={styles.paragrafoFAQ}>Separamos aqui as dúvidas mais
comuns sobre as nossas unidades para
que você possa se manter informado!</p>
            </div>
            </div>
			
            <div className={styles.perguntas}>
            {getPerguntas()}
            </div>
           
        </section>
    );
}

export default SecaoFAQ;