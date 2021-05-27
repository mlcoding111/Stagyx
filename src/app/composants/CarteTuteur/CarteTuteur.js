import React from "react";
import '../../css/styleCarteTuteur.css';
import { ButtonSite } from '../communs/ButtonSite/ButtonSite'
import {Row, Col, Card} from 'react-bootstrap';

export class CarteTuteur extends React.Component {

    render() {

        const associerStagiaireButtonColor = {
            color: "#fff",
            fontSize: "12px",
            fontWeight: "600",

        };

        const bgAssocierButton = {
            background: "#1BC5BD",
            border: "1px solid #1BC5BD",
        }
        return (
            <>
                <Card className="mb-5">
                    <Card.Body>
                        <Card.Text>
                            <Row>
                                <Col sm={6}>
                                    <div className="d-flex flex-row">
                                        <div>
                                            <div className="nomTuteur">Known Expers</div>
                                            <div className="solganTuteur">Ask Everythink you wish</div>
                                            <div className="nombreStagiares">3 stagiaires</div>
                                        </div>
                                        <div className="divAvatarTuteur">
                                            <img className="avatarTuteur" src={require('../../assets/svg/avatars/004-boy-1.svg')} alt=""/>
                                        </div>
                                    </div>
                                    <div className="buttonAssocierStagiaire" align="left"><ButtonSite messageButton="Associer un nouveau stagiaire" messageButtonColor={associerStagiaireButtonColor} bgMessageButton={bgAssocierButton} /></div>
                                </Col>
                                <Col sm={4}>
                                    <div className="sesStagiaires">Ses stagiaires</div>
                                    <div className="d-flex flex-row mt-5">
                                        <div className="divAvatarStagiaire">
                                            <img className="avatarStagiaire" src={require('../../assets/svg/avatars/009-boy-4.svg')} alt=""/>
                                        </div>
                                        <div className="ml-5">
                                            <div className="nomStagiaire">Marc Tremblay</div>
                                            <div className="entrepriseHote">Entreprise hôte</div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mt-5">
                                        <div className="divAvatarStagiaire">
                                            <img className="avatarStagiaire" src={require('../../assets/svg/avatars/010-girl-4.svg')} alt=""/>
                                        </div>
                                        <div className="ml-5">
                                            <div className="nomStagiaire">Jessica Dumond</div>
                                            <div className="entrepriseHote">Entreprise hôte</div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row mt-5">
                                        <div className="divAvatarStagiaire">
                                            <img className="avatarStagiaire" src={require('../../assets/svg/avatars/021-boy-8.svg')} alt=""/>
                                        </div>
                                        <div className="ml-5">
                                            <div className="nomStagiaire">André Michel</div>
                                            <div className="entrepriseHote">Entreprise hôte</div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={2}>
                                    <div align="right">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="78" height="32" viewBox="0 0 78 32">
                                            <g id="Row_2" data-name="Row 2" transform="translate(0 0.482)">
                                                <g id="Button_Trash" data-name="Button Trash" transform="translate(46)">
                                                    <rect id="Background" width="32" height="32" rx="6" transform="translate(0 -0.482)" fill="#f3f6f9"/>
                                                    <g id="Trash" transform="translate(7 7)">
                                                        <rect id="Trash_Background_" data-name="Trash (Background)" width="18" height="18" transform="translate(0 -0.482)" fill="none"/>
                                                        <rect id="bound" width="18" height="18" transform="translate(0 -0.482)" fill="none"/>
                                                        <path id="round" d="M0,9a1.5,1.5,0,0,0,1.5,1.5h6A1.5,1.5,0,0,0,9,9V0H0Z" transform="translate(4.584 6)" fill="#3699ff"/>
                                                        <path id="Shape" d="M6.75,1a1,1,0,0,0-1-1h-1a1,1,0,0,0-1,1v.125H.5a.5.5,0,0,0-.5.5V1.75a.5.5,0,0,0,.5.5H10a.5.5,0,0,0,.5-.5V1.625a.5.5,0,0,0-.5-.5H6.75Z" transform="translate(3.834 2.25)" fill="#3699ff" opacity="0.3"/>
                                                    </g>
                                                </g>
                                                <g id="Button_Edit" data-name="Button Edit">
                                                    <rect id="Background-2" data-name="Background" width="32" height="32" rx="6" transform="translate(0 -0.482)" fill="#f3f6f9"/>
                                                    <g id="Write" transform="translate(8 8)">
                                                        <rect id="Write_Background_" data-name="Write (Background)" width="16" height="16" transform="translate(0 -0.482)" fill="none"/>
                                                        <rect id="bound-2" data-name="bound" width="16" height="16" transform="translate(0 -0.482)" fill="none"/>
                                                        <path id="Path_11" data-name="Path 11" d="M0,2.711A1.5,1.5,0,0,1,.417,1.643L1.992,0,3.578,1.654A1.5,1.5,0,0,1,4,2.7L3.973,10.5a1.5,1.5,0,0,1-1.5,1.5H1.659a1.5,1.5,0,0,1-1.5-1.47Z" transform="translate(7.615 12.644) rotate(-135)" fill="#3699ff"/>
                                                        <path id="Path_57" data-name="Path 57" d="M7.933.667a.667.667,0,0,1-.667.667h-4.6A1.333,1.333,0,0,0,1.333,2.667v8A1.333,1.333,0,0,0,2.667,12h8A1.333,1.333,0,0,0,12,10.667V7.333a.667.667,0,1,1,1.333,0v3.333a2.667,2.667,0,0,1-2.667,2.667h-8A2.667,2.667,0,0,1,0,10.667v-8A2.667,2.667,0,0,1,2.667,0h4.6A.667.667,0,0,1,7.933.667Z" transform="translate(2.123 1.333)" fill="#3699ff" opacity="0.3"/>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
}
