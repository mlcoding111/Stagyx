import React from "react";
import '../../css/styleStageActif.css';
import { Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export class CarteGroupeActif extends React.Component {
    render() {
        return (
            <>

          {/*      <Row>
                    <Col sm={12} md={6} lg={4} className="mb-5" >
                        <Card>
                            <Card.Body>
                                <Card.Title><h2>GROUPE #1034</h2></Card.Title>
                                <Card.Subtitle className="mb-5 text-muted">Développement web M.W56</Card.Subtitle>
                                <Card.Text>
                                    <div className="stageActifAttribut">Début : <span className="stageActifValue">2015-02-25</span></div>
                                    <div className="stageActifAttribut">Fin : <span className="stageActifValue">2015-03-25</span></div>
                                    <div className="stageActifAttribut">Stagiaires : <span className="stageActifValue">17</span></div>
                                    <div className="stageActifAttribut">Type : <span className="stageActifValue">Alternance travail-études</span></div>
                                    <div className="stageActifAcceder">Accéder</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>*/}
                <Col sm={12} md={6} lg={4} className="mb-5" >
                    <Card>
                        <Card.Body>
                            <Card.Title><h2>GROUPE {this.props.groupeNumber}</h2></Card.Title>
                            <Card.Subtitle className="mb-5 text-muted">{this.props.schedule}</Card.Subtitle>
                            <Card.Text>
                                <div className="stageActifAttribut">Début : <span className="stageActifValue">{this.props.startDate}</span></div>
                                <div className="stageActifAttribut">Fin : <span className="stageActifValue">{this.props.endDate}</span></div>
                                <div className="stageActifAttribut">Stagiaires : <span className="stageActifValue">17</span></div>
                                <div className="stageActifAttribut">Type : <span className="stageActifValue">{this.props.type}</span></div>
                                <div className="stageActifAcceder"><NavLink to='/tableau-de-bord-groupe'>Accéder</NavLink> </div>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>



            </>
        );

    }

}
