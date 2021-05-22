import React from "react";
import { CarteGroupeActif } from "../CarteGroupeActif/CarteGroupeActif";
import { ZoneEcrireMessage } from "../ZoneEcrireMessage/ZoneEcrireMessage";
import { ButtonSite } from '../../composants/communs/ButtonSite/ButtonSite';
import { Archives } from '../Archives/Archives';
import { Row, Col } from 'react-bootstrap';
import '../../css/styleTableauBordGlobal.css';

export class TableauDeBordGlobal extends React.Component {

    render() {

        const messageButtonColor = {
            color: "#8950FC",
            fontSize: "12px",
            fontWeight: "600",
                
        };
        
        const bgMessageButton = {
            background: "#EEE5FF",
            border: "1px solid rgb(238, 229, 255)",
        }
        

        return (
            <>
        {/*        <div className="main">
                    <div className="row">
                        <div className="col-6"><h2 class="h2StagiaireActif">Stages actifs</h2></div>
                        <div className="buttonMessage col-6" align="right"><ButtonSite messageButton="Créer un nouveau message" messageButtonColor={messageButtonColor} bgMessageButton={bgMessageButton} /></div>
                    </div>
                    <CarteGroupeActif />
                    <h2 class="h2StagiaireActif">Annonce rapide</h2>
                    <ZoneEcrireMessage />
                </div>
                <div className="sidebar">
                    <Archives />
                </div>*/}

                <Row>
                    <Col sm={9}>
                        <div className="row">
                            <div className="col-6"><h2 className="h2StagiaireActif">Stages actifs</h2></div>
                            <div className="buttonMessage col-6" align="right"><ButtonSite
                                messageButton="Créer un nouveau message" messageButtonColor={messageButtonColor}
                                bgMessageButton={bgMessageButton}/></div>
                        </div>
                        <CarteGroupeActif />
                        <h2 class="h2StagiaireActif">Annonce rapide</h2>
                        <ZoneEcrireMessage />
                    </Col>
                    <Col sm={3} className="sidebarGauche">
                        <Archives />
                    </Col>

                </Row>





            </>

        );
    }

}

