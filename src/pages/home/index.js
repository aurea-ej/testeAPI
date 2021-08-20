import { React } from 'react';
import { useState, useEffect } from 'react';

import Header from '../../components/header'
import Footer from '../../components/footer'
import WhatsappButton from "../../components/whatsappButton"

import Astronauta1 from '../../imgs/Astronauta1.png'
import casaArq from '../../imgs/CasaArq1.gif'
import pcComp from '../../imgs/PcComp.gif'
import astronauta from '../../imgs/astronauta.png'
import LuaRoxo from '../../imgs/luaRoxa.png'
import testes from '../../imgs/testes.png'

import './style.scss'

import { Link } from 'react-router-dom';

function Home(){

    return (

        <div id="mainHome">
            
            <Header />

                <section id="heroSection">
                    
                    <div className="heroWrapper">

                        <div className="heroTitle">
                            
                                <h1> O QUE PODEMOS ALCANÇAR JUNTOS? </h1>
                                {/* <h1> ALCANÇAR JUNTOS? </h1> */}
                            
                            
                            <h2> A empresa júnior que mais cresce no Norte Fluminense. </h2>

                            <div className="heroData">
                                <div className="heroCard"> 
                                    <p> +70 </p>
                                    <a>Vidas impactadas</a> 
                                </div>
                                <div className="heroCard"> 
                                    <p> +70 </p>
                                    <a> Sonhos realizados </a>
                                </div>
                                <div className="heroCard"> 
                                    <p> 100% </p>
                                    <a> Clientes satisfeitos </a>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="heroImgWrapper">

                            <img src={Astronauta1} />

                        </div>

                    </div>

                </section>

                <section id="services">

                    <h1> CONHEÇA NOSSOS SERVIÇOS </h1>

                    <div className="rowObjects">

                        <div className="heroImgWrapper">

                            <img src={astronauta} />

                        </div>

                        <div className="collumnObjects">
                            <div className="sectorServicearq">
                                <h2> Arquitetura e Urbanismo </h2>
                                <h3> Projetando o melhor para sua vida </h3>

                            </div>

                            <div className="sectorServicecomp">
                                <h2> Engenharia de Computação </h2>
                                <h3> O impacto da tecnologia na sua vida </h3>

                            </div>

                            <div className="sectorServiceele">
                                <h2> Engenharia Elétrica </h2>
                                <h3> Economizando para você e para o planeta </h3>

                            </div>

                            <div className="sectorServiceauto">
                                <h2> Engenharia de Controle e Automação </h2>
                                <h3> Facilitando a sua vida </h3>

                            </div>
                        </div>

                    </div>
                    

                </section>

                <section id="whyChooseUs">

                    <div className="chooseTextWrapper">

                        <div className="chooseText">

                            <h1>Acelere <br/> a realização dos seus sonhos</h1>

                            <p>A Aurea é uma empresa sem fins lucrativos, composta 100% por estudantes graduandos do IFF Centro. Toda renda é reinvestida em conhecimento para nossos membros, através de cursos, equipamentos, infraestrutura e etc. Todos são voluntários e estão aqui para se desenvolver profissionalmente e realizar sonhos. Todos os nossos projetos são supervisionados por professores orientadores, que garantem a qualidade do mesmo! são 5 anos de existência realizando sonhos. E aí, o que podemos alcançar juntos?</p>

                        </div>

                        <div className="chooseImgWrapper">

                            <img src={LuaRoxo} />

                        </div>

                    </div>

                </section>

                <section id="feedbackCards">

                    <div className="feedbackCardsWrapper">

                        <div className="feedbackCards">
                            
                            <div className="feedbackImgWrapper"></div>
                            <h2>Fulano de tal</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                        <div className="feedbackCards">

                            <div className="feedbackImgWrapper"></div>
                            <h2>Fulano de tal</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                        <div className="feedbackCards">

                            <div className="feedbackImgWrapper"></div>
                            <h2>Fulano de tal</h2>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>

                    </div>

                </section>
                
                <section id="ourPartners">

                    <h1> Nossos parceiros </h1>
                    <div className="partnersCardsWrapper">

                        <div className="partnersCards">
                            
                            <div className="partnersImgWrapper"></div>
                            <h1> IFF </h1>
                            <h2> Fonseca </h2>

                        </div>

                        <div className="partnersCards">

                            <div className="partnersImgWrapper">
{/*                                 <img src={logoRioJunior} alt="RioJunior"> */}
                            </div>
                            <h1> RioJunior </h1>
                            <h2> Aline </h2>

                        </div>

                        <div className="partnersCards">

                            <div className="partnersImgWrapper"></div>
                            <h1> BrasilJúnior </h1>
                            <h2> Felix </h2>

                        </div>

                        <div className="partnersCards">

                            <div className="partnersImgWrapper"></div>
                            <h1> TélosConecta </h1>
                            <h2> Felix </h2>

                        </div>

                        <div className="partnersCards">

                            <div className="partnersImgWrapper"></div>
                            <h1> Motim </h1>
                            <h2> Felix </h2>

                        </div>

                    </div>

                </section>

            <WhatsappButton />

            <Footer />

        </div>
        
    )
}

export default Home;