import React from "react";
import {Row, Col} from 'react-bootstrap';
import {ButtonSite} from '../communs/ButtonSite/ButtonSite';
import {CarteInfo} from '../communs/CarteInfo/CarteInfo';
import {ListeStagiaires} from '../../composants/communs/ListeStagiaires/ListeStagiaires';
import {ProfilTuteurHote} from '../../composants/ProfilTuteurHote/ProfilTuteurHote';
import {DetailsDeLaTache} from '../DetailsDeLaTache/DetailsDeLaTache'

import '../../css/styleCarteEntreprise.css';


export class TachesDetails extends React.Component {
    render() {

        return (
            <>
                <Row>
                    <Col sm={3} className="sidebarGauche m-0 p-0">
                        <CarteInfo/>
                        <ListeStagiaires />
                    </Col>
                    <Col sm={6}>
                        <DetailsDeLaTache />

                    </Col>
                    <Col sm={3} className="sideBarRight">
                        <ProfilTuteurHote />
                    </Col>

                </Row>
            </>
        );
    }
}
