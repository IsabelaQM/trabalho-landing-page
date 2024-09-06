import { useEffect, useState } from 'react';
import styles from './SecaoFAQ.module.css';

function Secao_FAQ() {
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
            <div id='faq'>
                <div className={styles.containerFAQ}>
                    <h2 className={styles.subtituloFaq}>Tem alguma dúvida?</h2>
                    <h2 className={styles.subtituloFaq}>A gente te ajuda</h2>
                    <p className={styles.paragrafo}>Separamos aqui as dúvidas mais
                        comuns sobre as nossas unidades para
                        que você possa se manter informado!</p>
                </div>

                <div className={styles.perguntas}>
                    {getPerguntas()}
                </div>
            </div>

        </section>
    );
}

export default Secao_FAQ;