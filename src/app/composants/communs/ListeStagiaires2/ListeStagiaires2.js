import React from 'react';
import {ButtonSite} from '../../communs/ButtonSite/ButtonSite';
import {Row, Col} from 'react-bootstrap';
import '../../../css/styleListeStagiaires.css'


export class ListeStagiaires2 extends React.Component {
    render() {

        const messageButtonColor = {
            color: "#8950FC",
            fontSize: "#810px",
            fontWeight: "600",

        };

        const bgMessageButton = {
            background: "#EEE5FF",
            border: "1px solid rgb(238, 229, 255)",
        }


        return (
            <>
                <div className="divListeStagaires">
                    <Row className="titreListeStagiaire">
                        <Col sm={8}><h3>Stagiaires</h3></Col>
                        <Col sm={4} align="right">
                            <ButtonSite messageButton="Ajouter" messageButtonColor={messageButtonColor}
                                        bgMessageButton={bgMessageButton}/>
                        </Col>
                    </Row>
                    <Row className="ligneStagiaire">
                        <Col sm={2}>
                             <div className="bgAvatar">
                                <img className="avatarStagiaire" src={require('../../../assets/svg/avatars/009-boy-4.svg')} alt=""/>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="nomStagaire">Michael Lacroix</div>
                            <span className="nomProgramme">Développeur Frontend</span>
                        </Col>
                        <Col sm={2} align="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.079" height="18.079" viewBox="0 0 18.079 18.079">
                                <path id="Icon_material-stars" data-name="Icon material-stars" d="M12.03,3a9.04,9.04,0,1,0,9.049,9.04A9.035,9.035,0,0,0,12.03,3Zm3.833,14.463L12.04,15.158,8.216,17.463l1.012-4.348L5.856,10.2l4.447-.38,1.736-4.1,1.736,4.095,4.447.38-3.372,2.92,1.012,4.357Z" transform="translate(-3 -3)" fill="#43b800"/>
                            </svg>
                        </Col>
                    </Row>
                    <Row className="ligneStagiaire">
                        <Col sm={2}>
                            <div className="bgAvatar">
                                <img className="avatarStagiaire" src={require('../../../assets/svg/avatars/011-boy-5.svg')} alt=""/>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="nomStagaire">Michael Lacroix</div>
                            <span className="nomProgramme">Développeur Frontend</span>
                        </Col>
                        <Col sm={2} align="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.079" height="18.079" viewBox="0 0 18.079 18.079">
                                <path id="Icon_material-stars" data-name="Icon material-stars" d="M12.03,3a9.04,9.04,0,1,0,9.049,9.04A9.035,9.035,0,0,0,12.03,3Zm3.833,14.463L12.04,15.158,8.216,17.463l1.012-4.348L5.856,10.2l4.447-.38,1.736-4.1,1.736,4.095,4.447.38-3.372,2.92,1.012,4.357Z" transform="translate(-3 -3)" fill="#e63946"/>
                            </svg>
                        </Col>
                    </Row>
                    <Row className="ligneStagiaire">
                        <Col sm={2}>
                            <div className="bgAvatar">
                                <img className="avatarStagiaire" src={require('../../../assets/svg/avatars/009-boy-4.svg')} alt=""/>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="nomStagaire">Michael Lacroix</div>
                            <span className="nomProgramme">Développeur Frontend</span>
                        </Col>
                        <Col sm={2} align="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.079" height="18.079" viewBox="0 0 18.079 18.079">
                                <path id="Icon_material-stars" data-name="Icon material-stars" d="M12.03,3a9.04,9.04,0,1,0,9.049,9.04A9.035,9.035,0,0,0,12.03,3Zm3.833,14.463L12.04,15.158,8.216,17.463l1.012-4.348L5.856,10.2l4.447-.38,1.736-4.1,1.736,4.095,4.447.38-3.372,2.92,1.012,4.357Z" transform="translate(-3 -3)" fill="#43b800"/>
                            </svg>
                        </Col>
                    </Row>
                    <Row className="ligneStagiaire">
                        <Col sm={2}>
                            <div className="bgAvatar">
                                <img className="avatarStagiaire" src={require('../../../assets/svg/avatars/011-boy-5.svg')} alt=""/>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="nomStagaire">Michael Lacroix</div>
                            <span className="nomProgramme">Développeur Frontend</span>
                        </Col>
                        <Col sm={2} align="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.079" height="18.079" viewBox="0 0 18.079 18.079">
                                <path id="Icon_material-stars" data-name="Icon material-stars" d="M12.03,3a9.04,9.04,0,1,0,9.049,9.04A9.035,9.035,0,0,0,12.03,3Zm3.833,14.463L12.04,15.158,8.216,17.463l1.012-4.348L5.856,10.2l4.447-.38,1.736-4.1,1.736,4.095,4.447.38-3.372,2.92,1.012,4.357Z" transform="translate(-3 -3)" fill="#e5d757"/>
                            </svg>
                        </Col>
                    </Row>
                    <Row className="ligneStagiaire">
                        <Col sm={2}>
                            <div className="bgAvatar">
                                <img className="avatarStagiaire" src={require('../../../assets/svg/avatars/009-boy-4.svg')} alt=""/>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="nomStagaire">Michael Lacroix</div>
                            <span className="nomProgramme">Développeur Frontend</span>
                        </Col>
                        <Col sm={2} align="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.079" height="18.079" viewBox="0 0 18.079 18.079">
                                <path id="Icon_material-stars" data-name="Icon material-stars" d="M12.03,3a9.04,9.04,0,1,0,9.049,9.04A9.035,9.035,0,0,0,12.03,3Zm3.833,14.463L12.04,15.158,8.216,17.463l1.012-4.348L5.856,10.2l4.447-.38,1.736-4.1,1.736,4.095,4.447.38-3.372,2.92,1.012,4.357Z" transform="translate(-3 -3)" fill="#43b800"/>
                            </svg>
                        </Col>
                    </Row>
                    <Row className="ligneStagiaire">
                        <Col sm={2}>
                            <div className="bgAvatar">
                                <img className="avatarStagiaire" src={require('../../../assets/svg/avatars/011-boy-5.svg')} alt=""/>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="nomStagaire">Michael Lacroix</div>
                            <span className="nomProgramme">Développeur Frontend</span>
                        </Col>
                        <Col sm={2} align="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.079" height="18.079" viewBox="0 0 18.079 18.079">
                                <path id="Icon_material-stars" data-name="Icon material-stars" d="M12.03,3a9.04,9.04,0,1,0,9.049,9.04A9.035,9.035,0,0,0,12.03,3Zm3.833,14.463L12.04,15.158,8.216,17.463l1.012-4.348L5.856,10.2l4.447-.38,1.736-4.1,1.736,4.095,4.447.38-3.372,2.92,1.012,4.357Z" transform="translate(-3 -3)" fill="#e5d757"/>
                            </svg>
                        </Col>
                    </Row>
                    <Row className="ligneStagiaire">
                        <Col sm={2}>
                            <div className="bgAvatar">
                                <img className="avatarStagiaire" src={require('../../../assets/svg/avatars/009-boy-4.svg')} alt=""/>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="nomStagaire">Michael Lacroix</div>
                            <span className="nomProgramme">Développeur Frontend</span>
                        </Col>
                        <Col sm={2} align="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.079" height="18.079" viewBox="0 0 18.079 18.079">
                                <path id="Icon_material-stars" data-name="Icon material-stars" d="M12.03,3a9.04,9.04,0,1,0,9.049,9.04A9.035,9.035,0,0,0,12.03,3Zm3.833,14.463L12.04,15.158,8.216,17.463l1.012-4.348L5.856,10.2l4.447-.38,1.736-4.1,1.736,4.095,4.447.38-3.372,2.92,1.012,4.357Z" transform="translate(-3 -3)" fill="#e5d757"/>
                            </svg>
                        </Col>
                    </Row>
                    <Row className="ligneStagiaire">
                        <Col sm={2}>
                            <div className="bgAvatar">
                                <img className="avatarStagiaire" src={require('../../../assets/svg/avatars/011-boy-5.svg')} alt=""/>
                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="nomStagaire">Michael Lacroix</div>
                            <span className="nomProgramme">Développeur Frontend</span>
                        </Col>
                        <Col sm={2} align="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18.079" height="18.079" viewBox="0 0 18.079 18.079">
                                <path id="Icon_material-stars" data-name="Icon material-stars" d="M12.03,3a9.04,9.04,0,1,0,9.049,9.04A9.035,9.035,0,0,0,12.03,3Zm3.833,14.463L12.04,15.158,8.216,17.463l1.012-4.348L5.856,10.2l4.447-.38,1.736-4.1,1.736,4.095,4.447.38-3.372,2.92,1.012,4.357Z" transform="translate(-3 -3)" fill="#e63946"/>
                            </svg>
                        </Col>
                    </Row>
                </div>


            </>
        );
    }
}
