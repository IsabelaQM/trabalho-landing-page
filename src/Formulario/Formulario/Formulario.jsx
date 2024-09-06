import './Formulario.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import InputMask from 'react-input-mask';

function Formulario() {

	const [form, setForm] = useState({
		nome: "",
		email: "",
		telefone: "",
		assunto: ""
	});

	const [message, setMessage] = useState('');
    const [messageClass, setMessageClass] = useState('');


	function getData(e) { //e - disparado um evento, e pelo target sabe se é um ou outro (nome ou email)
		setForm({ ...form, [e.target.name]: [e.target.value] });
		console.log(form);
	}

	function validar() {
		if (form.nome === "" || form.email === "" || form.telefone === "" || form.assunto === "") {
			setMessage('Todos os campos devem ser preenchidos.');
			setMessageClass('error');
		} else {

			const templateParams = {
				from_name: form.nome,
				from_email: form.email,
				from_telefone: form.telefone,
				from_assunto: form.assunto
			};

			emailjs.send("service_99qwbme", "template_7xawvwc", templateParams, "5lkb3hoLNI_j4WRaa").then(
				(response) => {
					setMessage('Formulário enviado com sucesso');
					setMessageClass('success');
				},
				(error) => {
					setMessage('Erro no envio');
					setMessageClass('error');
				},
			);
			//emailjs.send(serviceID, templateID, templateParams, options(public key));
		}
	}

	return (
		<section className="formulario" id='faleConosco'>
			<form>
				<label htmlFor="">Nome</label>
				<input type="text" placeholder='Nome completo' name='nome' onChange={getData} />
				<label htmlFor="">E-mail</label>
				<input type="email" placeholder='exemplo@email.com' name='email' onChange={getData} />
				<label htmlFor="">Telefone</label>
                <InputMask 
                    mask="(99) 99999-9999" 
                    placeholder='(xx) xxxxx-xxxx' 
                    name='telefone' 
                    onChange={getData} 
                />
				<label htmlFor="">Assunto</label>
				<input type="text" placeholder='Informe aqui o motivo do seu contato' className='assunto' name='assunto' onChange={getData} />
				<input type="button" value={"ENVIAR"} className='btn-enviar' onClick={validar} />
				{message !== '' ? <p className={messageClass}>{message}</p> : <p className="placeholder-message"></p>}
			</form>
		</section>
	);
}

export default Formulario;