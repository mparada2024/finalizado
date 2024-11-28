import React, { useState } from 'react';
import '../../index.css'; // Importando o arquivo de estilo CSS

const Contato = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode processar os dados do formulário
    console.log({ nome, email, mensagem });
    // Aqui você pode fazer o envio dos dados ou validações adicionais
    alert('Mensagem enviada com sucesso!'); // Exibe o alert
    
    // Redireciona para a página inicial (home)
    window.location.href = '/'; // Isso redireciona para a home
  };


  return (
    
    <div className="contato-container">
      <h2>Entre em Contato</h2>
      <form onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="campo">
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;