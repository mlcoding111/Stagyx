import React from "react";
import {Row, Col} from 'react-bootstrap';
import {ButtonSite} from '../communs/ButtonSite/ButtonSite';
import {CarteInfo2} from '../communs/CarteInfo2/CarteInfo2';
import {ListeStagiaires2} from '../../composants/communs/ListeStagiaires2/ListeStagiaires2';
import {ProfilTuteurHote} from '../../composants/ProfilTuteurHote/ProfilTuteurHote';
import {DetailsDeLaTache} from '../DetailsDeLaTache/DetailsDeLaTache'

import '../../css/styleCarteEntreprise.css';


export class TachesDetails extends React.Component {
    render() {

        return (
            <>
                <Row>
                    <Col sm={3} className="sidebarGauche m-0 p-0">
                        <CarteInfo2 />
                        <ListeStagiaires2 />
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
