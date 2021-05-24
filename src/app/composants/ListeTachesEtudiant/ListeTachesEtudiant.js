import React from "react";
import {CarteEntreprise} from "../../composants/CarteEntreprise/CarteEntreprise"
import {Row, Col} from 'react-bootstrap';
import {ButtonSite} from '../communs/ButtonSite/ButtonSite';
import {CarteStatistiques} from '../communs/CarteStatistiques/CarteStatistiques';
import {CarteInfo} from '../communs/CarteInfo/CarteInfo';
import {ListeStagiaires} from '../communs/ListeStagiaires/ListeStagiaires';
import {TachesStagiaire} from '../../composants/TachesStagiaire/TachesStagiaire';
import { ProfilTuteurHote } from '../../composants/ProfilTuteurHote/ProfilTuteurHote'
import '../../css/styleCarteEntreprise.css';


export class ListeTachesEtudiant extends React.Component {
    render() {

        return (
            <>
                <Row>
                    <Col sm={3} className="sidebarGauche m-0 p-0">
                        <CarteInfo/>
                        <ListeStagiaires />
                    </Col>
                    <Col sm={6}>
                        <TachesStagiaire />
                    </Col>
                    <Col sm={3} className="sideBarRight">
                        <ProfilTuteurHote />
                    </Col>

                </Row>
            </>
        );
    }
}
