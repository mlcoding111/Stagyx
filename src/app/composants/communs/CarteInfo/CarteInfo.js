import React from 'react';
import {Card} from 'react-bootstrap';
import '../../../css/styleCarteInfo.css';

// Le composant va prendre en props les données de l'api

export class CarteInfo extends React.Component {
    render() {
        return (
            <>
                {/*<Card bg="danger" text="white" className="p-0 m-0" style={{width: '100%'}}>
                    <Card.Body>
                        <Card.Title>Réseautique et support technique</Card.Title>
                        <Card.Text>
                            <ul>
                                <li>Début: </li>
                                <li>Fin: </li>
                                <li>Session: </li>
                                <li>Stagiaires: </li>
                                <li>Type: </li>
                            </ul>
                        </Card.Text>
                        <h2 className="float-right">#1017</h2>
                    </Card.Body>
                </Card>*/}
                <div className="divCarteInfo">
                    <div align="right">
                        <div className="ChangerGroupe btn">
                            Changer de groupe <span className="ml-5">v</span>
                        </div>
                    </div>
                    <div className="nomProgramme">
                        Réseautique et support technique
                    </div>

                    <div className="infoProgramme">Début: <span className="attributProgramme"></span></div>
                    <div className="infoProgramme">Fin: <span className="attributProgramme"></span></div>
                    <div className="infoProgramme">Session: <span className="attributProgramme"></span></div>
                    <div className="infoProgramme">Stagiaires: <span className="attributProgramme"></span></div>

                    <div className="numGroupeInfo" align="right">
                        #10725
                    </div>


                </div>

            </>
        )
    }
}
