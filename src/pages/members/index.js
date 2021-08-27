import { React } from 'react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header'
import Footer from '../../components/footer'
import mascote1 from '../../imgs/Mascote1.png'
import Joelma from '../../imgs/Joelma.jpg'
import oPai from '../../imgs/oPai.jpeg'
import Gui from '../../imgs/Gui.jpeg'
import Micaella from '../../imgs/Micaella.jpg'
import Linkedin from "../../imgs/linkedinLogo2.svg"
import Instagram from "../../imgs/instagramLogo2.svg"

import WhatsappButton from "../../components/whatsappButton"

import './style.scss'

function Members() {

    return(

        <div id="mainOurMembers">

            <Header />

            <section id="membersFeedbackSection">

                <div className="membersFeedbackIntro">

                    <h1>Conheça nossas lideranças</h1>

                </div>

                <h2>Diretoria Executiva</h2>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Guiguibas</h3>

                            <h5>Pai do Discord</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Gui} />

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>The only one 💯</h3>

                            <h5>Norte Fluminense tem IFF?</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={oPai} />

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} />

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <h2>Coordenadoria do Comercial</h2>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Guiguibas</h3>

                            <h5>Pai do Discord</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Gui} />

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>The only one 💯</h3>

                            <h5>Norte Fluminense tem IFF?</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={oPai} />

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} />

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <h2>Coordenadoria de Gente e Gestão</h2>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Guiguibas</h3>

                            <h5>Pai do Discord</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Gui} />

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>The only one 💯</h3>

                            <h5>Norte Fluminense tem IFF?</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={oPai} />

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} />

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <h2>Coordenadoria de Marketing</h2>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Guiguibas</h3>

                            <h5>Pai do Discord</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Gui} />

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>The only one 💯</h3>

                            <h5>Norte Fluminense tem IFF?</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={oPai} />

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} />

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper" target="_blank">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper" target="_blank">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper" target="_blank">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <h2>Coordenadoria da Projetos</h2>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Guiguibas</h3>

                            <h5>Pai do Discord</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Gui} />

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>The only one 💯</h3>

                            <h5>Norte Fluminense tem IFF?</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={oPai} />

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} />

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram" />

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </div>

    )

}

export default Members