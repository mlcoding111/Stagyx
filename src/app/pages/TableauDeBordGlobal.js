import React from "react";
import { Row, Col } from 'react-bootstrap';
import { CarteGroupeActif } from "./composants/communs/CarteGroupeActif";


export class TableauDeBordGlobal extends React.Component {

    render() {
        
        return (
            <>
                <Row>
                    <Col><CarteGroupeActif /></Col>
                    <Col><CarteGroupeActif /></Col>
                    <Col><CarteGroupeActif /></Col>
                </Row>

         
        
            </>
        );
    }

}

