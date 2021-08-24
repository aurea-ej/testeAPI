import { React } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header'
import Footer from '../../components/footer'
import mascote1 from '../../imgs/Mascote1.png'
import Joelma from '../../imgs/Joelma.jpg'
import WhatsappButton from "../../components/whatsappButton"

import './style.scss'

function AboutUs() {

    return (
        <div id='mainAboutUs'>
            <Header />

            <section id='heroSectionAbout'>

                <div className='rowObjects'>
                    <div className='collumnObjects'>
                        <h1>Prazer, Aurea!</h1>
                        <p>Fundada no dia 9 de Agosto de 2016, a Aurea Soluções e Projetos deu os seus primeiros passos como uma Empresa Júnior no Instituto Federal Fluminense como uma empresa multidiciplinar que presta serviços nas áreas de 
                            <a>Engenharia de Computação</a>
                            <a>Engenharia Elétrica</a>
                            <a>Engenharia de Controle Computação</a>
                            <a>Arquitetura e Urbanismo.</a>
                        </p>
                        <p>No ano de 2018 a Aurea passou pelo processo de federação, que de fato a introduziu ao MEJ (Movimento Empresa Júnior) como uma Empresa Júnior. E com muito esforço e trabalho duro recebemos nos anos de 2019 e 2020 diversas premiações de visibilidade estadual, fazendo com que a Aurea fosse reconhecida como uma empresa "Bi Impacto", ou seja, uma Empresa Júnior capaz de bater todas as suas metas anuais em dois anos consecutivos. Dessa forma, em um cenário de maturidade ainda mais expressivo, atualmente, em 2021, a Aurea está atrás de sua próxima conquista em rede: Alcançar o "Tri Impacto", batendo todas as metas anuais por três anos consecutivos.</p>
                    </div>
                    <div className="heroImgWrapper">
                        <img draggable="false" src={mascote1} />
                    </div>
                </div>

            </section>

            <section id='sectionWhoWeAre' >

            <div className="missionValuesEyesight" >

                    <div className="cardM">

                        <h3>Missão</h3>

                        <div className="textBox"  >
                            <p>A missão da Aurea é <b>formar empreendedores de impacto</b> através do jeito Aureano de ser.</p>
                        </div>
                        
                    </div>

                    <div className="cardV1">
                        <h3>Visão</h3>

                        <div className="textBox"  >
                            <p>A visão da Aurea até 2023 é <b>ser referência</b> em projetos de excelência que contribuam para <b>formação de líderes atuantes e conectados</b> no MEJ Fluminense.</p>
                        </div>
                    </div>
                    
                    <div className="cardV2">
                        <h3>Valores</h3>

                        <div className="textBox"  >

                            <div className="tableAurea" >

                                <tr><td><b>A</b>paixonado</td></tr>
                                <tr><td><b>U</b>nido</td></tr>
                                <tr><td><b>R</b>esponsável</td></tr>
                                <tr><td><b>E</b>mpático</td></tr>
                                <tr><td><b>A</b>udacioso</td></tr>
                                <tr><td><b>N</b>otável</td></tr>
                                <tr><td><b>O</b>bstinado</td></tr>

                            </div>

                        </div>
                    </div>


            </div>

            </section>

            <section id="membersFeedback">

                <div className="membersCard">

                    <div className="membersImgWrapper">

                        <img draggable="false" src={Joelma} />

                    </div>

                    <div className="membersFeedbackText">

                        <h3>Fulano de tal</h3>

                        <p>Teste</p>

                    </div>

                </div>

            </section>

            <Footer />

        </div>
    )

}

export default AboutUs