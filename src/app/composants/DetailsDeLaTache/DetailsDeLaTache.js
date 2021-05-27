import React from "react";
import { Row, Col } from 'react-bootstrap';
import {Etoiles} from '../../composants/communs/Etoiles/Etoiles';
import {Commentaires} from '../../composants/Commentaires/Commentaires'
import {ZoneEcrireMessage} from '../ZoneEcrireMessage/ZoneEcrireMessage'
import '../../css/styleDetailsDeLaTache.css';

export class DetailsDeLaTache extends React.Component{

    render() {
        return (
            <>
                <div className="divDetailSDeLaTache">
                    <Row className="rowDetailDeLaTache">
                        <Col className="detailDelaTache" sm={8}>Détails de la tâche</Col>
                        <Col sm={1}>
                            courbe

                        </Col>
                        <Col sm={3} align="right">
                            <div className="nombreDeTaches">
                                15 tâches
                                <span className="flecheGauche">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                      <g id="Previos" transform="translate(-0.012)">
                                        <rect id="Rectangle_79" data-name="Rectangle 79" width="25" height="25" rx="4" transform="translate(0.012)" fill="#f3f6f9"/>
                                        <g id="Angle-left" transform="translate(4 4)">
                                          <rect id="Angle-left_Background_" data-name="Angle-left (Background)" width="16" height="16" transform="translate(0.012)" fill="none"/>
                                          <path id="Shape" d="M16,0V16H0V0Z" fill="none"/>
                                          <path id="Path_94" data-name="Path 94" d="M9.138,5.138a.667.667,0,0,0,0-.943l-4-4a.667.667,0,0,0-.922-.02l-4,3.667a.667.667,0,0,0,.9.983L4.647,1.589,8.2,5.138A.667.667,0,0,0,9.138,5.138Z" transform="translate(5.333 12.667) rotate(-90)" fill="#d6d6e0"/>
                                        </g>
                                      </g>
                                </svg>
                                </span>
                                <span className="flecheDroite">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                                      <g id="Next" transform="translate(-0.012)">
                                        <rect id="Rectangle_174" data-name="Rectangle 174" width="25" height="25" rx="4" transform="translate(0.012)" fill="#f3f6f9"/>
                                        <g id="Angle-right" transform="translate(4 4)">
                                          <rect id="Angle-right_Background_" data-name="Angle-right (Background)" width="16" height="16" transform="translate(0.012)" fill="none"/>
                                          <path id="Shape" d="M16,0V16H0V0Z" fill="none"/>
                                          <path id="Path_94" data-name="Path 94" d="M.2,5.138A.667.667,0,0,1,.2,4.2l4-4a.667.667,0,0,1,.922-.02l4,3.667a.667.667,0,0,1-.9.983L4.687,1.589,1.138,5.138A.667.667,0,0,1,.2,5.138Z" transform="translate(10.667 3.333) rotate(90)" fill="#d6d6e0"/>
                                        </g>
                                      </g>
                                  </svg>
                                </span>
                            </div>
                        </Col>
                    </Row>
                    <Row className="rowTitreDeLaTache">
                        <Col sm={6} className="titreDeLaTache">Trip Reminder.Thank you flying with us!</Col>
                        <Col sm={6} className="dateDeLaTache" align={"right"}>Jul 15,2019, 11:19 AM</Col>
                    </Row>
                    <Row className="texteDeLaTache">
                        <Col>
                            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il, diminue çà et là la qualité de son œuvre. Prouvez, beau juge, que le fameux sandwich au yak tue. L"île exiguë, Où l"obèse jury mûr Fête l"haï volapük, Âne ex æquo au whist, Ôtez ce vœu déçu. Vieux pelage que je modifie : breitschwanz ou yak ? Dès Noël où un zéphyr haï me vêt de glaçons würmiens, je dîne d’exquis rôtis de bœuf au kir à l’aÿ d’âge mûr & cætera ! Fougueux.
                        </Col>
                    </Row>
                    <Row className="evaluationEtoile">
                        <Col sm={9}>
                            <div className="divEvaluation"><Etoiles /><span className="evaluateur">Auto-Évalutation</span> </div>
                            <div className="divEvaluation"><Etoiles /><span className="evaluateur">Tuteur</span> </div>
                            <div className="divEvaluation"><Etoiles /><span className="evaluateur">Responsable du stage</span> </div>
                        </Col>
                        <Col sm={3} align="bottom" >
                            <div className="evaluationGlobale">
                                Évaluation globale
                            </div>
                            <div><Etoiles /></div>
                        </Col>
                    </Row>
                    <Commentaires />
                    <Commentaires />
                    <div className="divFormCommentaire">
                        <h2 className="laisserComment">Laisser un commentaire</h2>
                    <ZoneEcrireMessage ecrireA={'Envoyer'} />
                    </div>

                </div>
            </>
        );
    }
}
