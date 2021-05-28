import React from "react";
import {CarteEntreprise} from "../../composants/CarteEntreprise/CarteEntreprise"
import {Row, Col} from 'react-bootstrap';
import {ButtonSite} from '../communs/ButtonSite/ButtonSite';
import {CarteStatistiques} from '../communs/CarteStatistiques/CarteStatistiques';
import {CarteInfo2} from '../communs/CarteInfo2/CarteInfo2';
import {ListeStagiaires2} from '../communs/ListeStagiaires2/ListeStagiaires2';
import {TachesStagiaire} from '../../composants/TachesStagiaire/TachesStagiaire';
import { ProfilTuteurHote } from '../../composants/ProfilTuteurHote/ProfilTuteurHote'
import '../../css/styleCarteEntreprise.css';


export class ListeTachesEtudiant extends React.Component {
    render() {

        return (
            <>
                <Row>
                    <Col sm={3} className="sidebarGauche m-0 p-0">
                        <CarteInfo2 />
                        <ListeStagiaires2 />
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
