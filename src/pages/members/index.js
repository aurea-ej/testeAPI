import { React } from 'react';

import Header from '../../components/header'
import Footer from '../../components/footer'
import oPai from '../../imgs/oPai.jpeg'
import Gui from '../../imgs/Gui.jpeg'
import Micaella from '../../imgs/Micaella.jpg'
import Linkedin from "../../imgs/linkedinLogo2.svg"
import Instagram from "../../imgs/instagramLogo2.svg"


import './style.scss'

function Members() {

    return (

        <div id="mainOurMembers">

            <Header />

            <section id="membersFeedbackSection">

                <div className="membersFeedbackIntro">

                    <h1>Conheça nossas lideranças</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iste facilis eligendi tempore neque, totam quo doloribus deserunt optio unde veritatis? Repudiandae voluptatibus minima delectus iusto aliquid, mollitia amet quidem. Eligendi, vitae! Beatae quisquam, sequi at dolorem voluptas modi temporibus consequatur rem nobis saepe recusandae tempore possimus in quos id et exercitationem aut fugiat expedita nisi nam? Quas animi vel dolores laborum sit voluptatem, recusandae nam officiis. Quis debitis magnam eius repellat asperiores, molestias neque fuga ex quas facere sint eveniet dolorem obcaecati, quibusdam ipsum enim natus? Nam assumenda repellat vel nulla vero dignissimos, explicabo doloribus quaerat, reiciendis ab quos.</p>

                </div>

                <h1>Diretoria Executiva</h1>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Guiguibas</h3>

                            <h5>Pai do Discord</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Gui} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>The only one 💯</h3>

                            <h5>Norte Fluminense tem IFF?</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={oPai} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <h1>Coordenadoria do Comercial</h1>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Guiguibas</h3>

                            <h5>Pai do Discord</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Gui} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>The only one 💯</h3>

                            <h5>Norte Fluminense tem IFF?</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={oPai} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <h1>Coordenadoria de Gente e Gestão</h1>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>The only one 💯</h3>

                            <h5>Norte Fluminense tem IFF?</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={oPai} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <h1>Coordenadoria de Marketing 🤢🤢</h1>

                <div className="membersFeedback">

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Guiguibas</h3>

                            <h5>Pai do Discord</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Gui} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper" target="_blank" rel="noreferrer">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper" target="_blank" rel="noreferrer">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper" target="_blank" rel="noreferrer">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <h1>Coordenadoria de Projetos</h1>

                <div className="membersFeedback">

                    <div id="cardProjects" className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Guiguibas</h3>

                            <h5>Pai do Discord</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Gui} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div id="cardProjects" className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>The only one 💯</h3>

                            <h5>Norte Fluminense tem IFF?</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={oPai} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="https://www.linkedin.com/in/higor-brandao" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="https://instagram.com/higorgbrandao" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div id="cardProjects" className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div id="cardProjects" className="membersCard">

                        <div className="membersFeedbackText">

                            <h3>Micaella Condoiselle</h3>

                            <h5>Viciada em Bis</h5>

                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis minus commodi, eius sed aliquid dolorum sapiente obcaecati accusamus quae possimus voluptatum nisi, tempora aperiam quos cupiditate fugiat ut reiciendis, totam neque fugit? Veritatis, architecto aliquam!"</p>

                            <img draggable="false" src={Micaella} alt=""/>

                            <div className="socialMediaMembers">

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Linkedin} alt="LinkedIn"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                                <a href="http://www.siscomex.gov.br/" className="socialMediaWrapper">

                                    <img src={Instagram} alt="Instagram"/>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </div>

    )

}

export default Members