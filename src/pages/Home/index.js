import React, { useState } from 'react';

import Slide from '../../components/Slide';

export default function Home() {

    const [nomeEmpresa, setNomeEmpresa] = useState('');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [observacao, setObservacao] = useState('');

    return (
        <div>
            <section className="topo">
            </section>
            <section className="quem-somos">
                <h1>Quem somos ?</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum cursus urna id varius. Praesent ligula arcu, eleifend quis finibus quis, interdum at odio. Curabitur posuere blandit quam eget tempus. In posuere lacinia enim. In non quam vitae nulla suscipit lobortis quis ac enim.
                    </p>
            </section>
            <section className="equipe">
                <div className="item-1">
                    <img src={require('../../images/thiago-farias.jpg')} alt="Thiago Farias" />
                    <h1>Thiago Farias</h1>
                    <p>Designer Visual</p>
                </div>
                <div className="item-2">
                    <img src={require('../../images/lucas-silva.jpg')} alt="Lucas Silva" />
                    <h1>Lucas Silva</h1>
                    <p>Designer Visual</p>
                </div>
                <div className="item-3">
                    <img src={require('../../images/wilck-gomes.jpg')} alt="Wilck Gomes" />
                    <h1>Wilck Gomes</h1>
                    <p>Desenvolvedor</p>
                </div>
            </section>
            <section className="templates">
                <h1>Templates</h1>
                <div className="conteudo">
                    <div className="item-texto">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum cursus urna id varius. Praesent ligula arcu, eleifend quis finibus quis, interdum at odio. Curabitur posuere blandit quam eget tempus. In posuere lacinia enim. In non quam vitae nulla suscipit lobortis quis ac enim.</p>
                    </div>
                    <div className="item-imagem">
                        <img className="laptop-templates" src={require('../../images/laptop_templates.png')} alt="Laptop com templates" />
                        <Slide /> 
                    </div>
                </div>
            </section>
            <section className="solicite">
                <h1>Solicite o seu</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum cursus urna id varius. Praesent ligula arcu, eleifend quis finibus quis, interdum at odio. Curabitur posuere blandit quam eget tempus. In posuere lacinia enim. In non quam vitae nulla suscipit lobortis quis ac enim.</p>
                <form onSubmit={() => { }} className="form-solicite" >
                    <div className="div-input-empresa">
                        <input type="text" value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} placeholder="Nome da sua empresa" />
                    </div>
                    <div className="div-input-nome">
                        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Seu nome" />
                    </div>
                    <div className="div-input-email">
                        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Seu e-mail" />
                    </div>
                    <div className="div-input-observacao">
                        <textarea value={observacao} onChange={(e) => setObservacao(e.target.value)} placeholder="Conte um pouco sobre o seu negócio"></textarea>
                    </div>
                    <div className="div-button">
                        <button type="button">Enviar</button>
                    </div>
                </form>
            </section>
            <footer className="footer">
                <img className="logo-footer" src={require('../../images/logo_footer.png')} alt="Logo Footer" />
                <div className="contatos">
                    <p>example@example.com</p>
                    <div className="redes-sociais">
                        <a href="/">
                            <img src={require('../../images/facebook-icon.png')} alt="link facebook" />
                        </a>
                        <a href="/">
                            <img src={require('../../images/whatsapp-icon.png')} alt="link whatsapp" />
                        </a>
                        <a href="/">
                            <img src={require('../../images/instagram-icon.png')} alt="link instagram" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}