import React from "react";
import { Row, Col } from 'react-bootstrap';
import '../../css/styleDetailsDeLaTache.css';

export class Commentaires extends React.Component{

    render() {
        return (
            <>
                <div className="commentaire">
                    <Row>
                        <Col ><span className="nomCommentateur">Lina Nilson</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="4" height="6" viewBox="0 0 4 6">
                                <ellipse id="Ellipse_12" data-name="Ellipse 12" cx="2" cy="3" rx="2" ry="3" fill="#1bc5bd"/>
                            </svg>
                            <span className="dureeCommentaire">2 jours</span>
                        </Col>
                    </Row>
                    <Row className="divCommentaire">
                        <Col sm={8} className="textCommentaire">Jornalists call the critical, introductory saction the “Lede,” and when bridge properly executed...</Col>
                        <Col sm={3} align="right" className="textCommentaire">Jul 20,2019, 03:20 PM</Col>
                        <Col sm={1} align="right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                                <g id="Other_1" data-name="Other#1" transform="translate(-0.08)">
                                    <rect id="Other_1_Background_" data-name="Other#1 (Background)" width="12" height="16" transform="translate(0.08)" fill="none"/>
                                    <rect id="bound" width="12" height="16" transform="translate(0.08)" fill="none"/>
                                    <path id="Oval_67" data-name="Oval 67" d="M2.07,1.333A1.213,1.213,0,0,0,1.035,0,1.213,1.213,0,0,0,0,1.333,1.213,1.213,0,0,0,1.035,2.667,1.213,1.213,0,0,0,2.07,1.333Z" transform="translate(5.932 2)" fill="#d6d6e0"/>
                                    <path id="Oval_67_Copy" data-name="Oval 67 Copy" d="M2.07,1.333A1.213,1.213,0,0,0,1.035,0,1.213,1.213,0,0,0,0,1.333,1.213,1.213,0,0,0,1.035,2.667,1.213,1.213,0,0,0,2.07,1.333Z" transform="translate(5.932 6.667)" fill="#d6d6e0"/>
                                    <path id="Oval_67_Copy_2" data-name="Oval 67 Copy 2" d="M2.07,1.333A1.213,1.213,0,0,0,1.035,0,1.213,1.213,0,0,0,0,1.333,1.213,1.213,0,0,0,1.035,2.667,1.213,1.213,0,0,0,2.07,1.333Z" transform="translate(5.932 11.333)" fill="#d6d6e0"/>
                                </g>
                            </svg>

                        </Col>
                    </Row>
                </div>

            </>
        );
    }
}
