import React from "react";

import Header from '../../components/header';
import Footer from '../../components/footer';

import WhatsappButton from "../../components/whatsappButton";

import planeta from '../../imgs/Planeta.png'

import './style.scss'

const services = () => {

    return (

        <div id="body">
            <Header />
                <section id="servicesPage">
                    <div className="headServices">
                        <img src={planeta} alt=""></img>
                        <div className="textHeadServices">
                            <h1>Conheça os nossos serviços!</h1>
                            <p>
                                A Aurea é uma empresa interdisciplinar que oferece uma vasta gama de serviços, realizados por uma equipe capacitada
                                que busca acima de tudo a qualidade do projeto e a experiência do cliente!
                            </p>
                        </div>
                    </div>
                    <div className="servicesBlock">
                        <div className="servicesCard">
                            <h2>Arquitetura & Urbanismo</h2>
                            <p>Projeto Arquitetônico</p>
                            <p>Projeto de Interiores</p>
                            <p>Projeto de Reforma</p>
                            <a href="http:/Servicos/Arquitetura"> E mais! </a>
                        </div>
                        <div className="servicesCard">
                            <h2>Engenharia de Computação</h2>
                            <p>Sites em geral</p>
                            <p>E-commerce</p>
                            <p>Aplicativos</p>
                            <a href="http:/Servicos/Computacao"> E mais! </a>
                        </div>
                        <div className="servicesCard">
                            <h2>Engenharia Elétrica</h2>
                            <p>Eficiência energética</p>
                            <p>Analise Tarifária</p>
                            <p>Projeto elétrico</p>
                            <a href="http:/Servicos/Eletrica"> E mais! </a>
                        </div>
                        <div className="servicesCard">
                            <h2>Eng. de Controle e Automação</h2>
                            <p>Bussines Inteligence</p>
                            <p>Controle de Acesso e Fechaduras Eletrônicas</p>
                            <p>Automação de Ambientes</p>
                            <a href="http:/Servicos/Automacao"> E mais! </a>
                        </div>
                    </div>
                </section>
                <WhatsappButton />
            <Footer />
        </div>

    )

}

export default services
