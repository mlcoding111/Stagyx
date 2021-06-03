import React from "react";
import { CarteGroupeActif } from "../CarteGroupeActif/CarteGroupeActif";
import { ZoneEcrireMessage } from "../ZoneEcrireMessage/ZoneEcrireMessage";
import { ButtonSite } from '../../composants/communs/ButtonSite/ButtonSite';
import { Archives } from '../Archives/Archives';
import { Row, Col } from 'react-bootstrap';
import {API_LOGIN} from '../../../app/services_api.js';
import {API_GROUPS_LIST} from '../../../app/services_api.js';

import '../../css/styleTableauBordGlobal.css';

export class TableauDeBordGlobal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {dataReceived: [], apiError: ''};
    }

    async componentDidMount() {
        const userObj = {
            "email" : "hugo.cloutier@cegeptr.qc.ca",
            "password": "Admin123!"
        }
        const response = await fetch(API_LOGIN, {
            method: 'POST',
            body: new URLSearchParams({
                "email" : "hugo.cloutier@cegeptr.qc.ca",
                "password": "Admin123!"
            })
        })
        const responseAPI = await response.json();
        localStorage.setItem('token', responseAPI.token);

        const getListGroupe = await fetch(API_GROUPS_LIST, {
            method: 'GET',
            headers:{Authorization: localStorage.getItem('token') }
        });
        const getListGroupeJson = await  getListGroupe.json();
        this.setState({dataReceived: getListGroupeJson});
        console.log(getListGroupeJson);

    }




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
                <Row>
                    <Col sm={9}>
                        <div className="row">
                            <div className="col-6"><h2 className="h2StagiaireActif">Stages actifs</h2></div>
                            <div className="buttonMessage col-6" align="right"><ButtonSite
                                messageButton="Créer un nouveau message" messageButtonColor={messageButtonColor}
                                bgMessageButton={bgMessageButton}/></div>
                        </div>
                        <Row>
                            {
                                this.state.dataReceived.map((key,i) => (
                                <CarteGroupeActif groupeNumber={key.name} schedule={key.schedule} startDate={key.startDate} endDate={key.endDate}
                                type={key.type} />
                                ))
                            }

                        </Row>



                        <h2 class="h2StagiaireActif">Annonce rapide</h2>
                        <ZoneEcrireMessage ecrireA={'Ecrire à tous les stagiaires'} />
                    </Col>
                    <Col sm={3} className="sidebarGauche">
                        <Archives />
                    </Col>

                </Row>





            </>

        );
    }

}

