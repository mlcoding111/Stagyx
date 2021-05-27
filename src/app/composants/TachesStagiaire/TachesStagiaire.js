import React from 'react';
import {ButtonSite} from '../../composants/communs/ButtonSite/ButtonSite';
import {Row, Col} from 'react-bootstrap';
import {Etoiles}  from '../../composants/communs/Etoiles/Etoiles'
import '../../css/styleTachesStagiaire.css';

export class TachesStagiaire extends React.Component {
    render() {

        const messageButtonColor = {
            color: "#8950FC",
            fontSize: "#810px",
            fontWeight: "600",

        };

        const bgMessageButton = {
            background: "#EEE5FF",
            border: "1px solid rgb(238, 229, 255)",
        }

        return (
            <>
                <h2 className="h2Tache">Tâches</h2>
                <div className="divTachesStagiaire">
                    <Row>
                        <Col sm={2}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="46"
                                 height="46" viewBox="0 0 46 46">
                                <defs>
                                    <clipPath id="clip-path">
                                        <rect id="Icon_Background_Mask_" data-name="Icon (Background/Mask)" width="46"
                                              height="46" rx="12" transform="translate(-0.365)" fill="#f3f6f9"/>
                                    </clipPath>
                                </defs>
                                <g id="Icon" transform="translate(0.365)">
                                    <rect id="Icon_Background_Mask_2" data-name="Icon (Background/Mask)" width="46"
                                          height="46" rx="12" transform="translate(-0.365)" fill="#f3f6f9"/>
                                    <g id="Icon-2" data-name="Icon" clip-path="url(#clip-path)">
                                        <g id="Clipboard" transform="translate(9 9)">
                                            <rect id="Clipboard_Background_" data-name="Clipboard (Background)"
                                                  width="28"
                                                  height="28" transform="translate(-0.365)" fill="none"/>
                                            <rect id="bound" width="28" height="28" transform="translate(-0.365)"
                                                  fill="none"/>
                                            <path id="Combined_Shape" data-name="Combined Shape"
                                                  d="M16.667,23.333H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H4.667V.583a1.752,1.752,0,0,0,1.75,1.751H12.25A1.752,1.752,0,0,0,14,.583V0h2.667a2,2,0,0,1,2,2V21.334A2,2,0,0,1,16.667,23.333Z"
                                                  transform="translate(4.667 3.5)" fill="#3699ff" opacity="0.3"/>
                                            <path id="Combined_Shape-2" data-name="Combined Shape"
                                                  d="M.5,3.5A.5.5,0,0,1,0,3V1.667a.5.5,0,0,1,.5-.5H2.333a1.167,1.167,0,0,1,2.334,0H6.5a.5.5,0,0,1,.5.5V3a.5.5,0,0,1-.5.5Z"
                                                  transform="translate(10.5 1.167)" fill="#3699ff"/>
                                            <rect id="Rectangle_152" data-name="Rectangle 152" width="5.833"
                                                  height="2.333"
                                                  rx="1.167" transform="translate(8.167 11.667)" fill="#3699ff"/>
                                            <rect id="Rectangle_152_Copy" data-name="Rectangle 152 Copy" width="10.5"
                                                  height="2.333" rx="1.167" transform="translate(8.167 16.333)"
                                                  fill="#3699ff"/>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                        </Col>
                        <Col sm={8}>
                            <div className="titreTache">
                                Exploration du milieu de stage
                            </div>
                            <div className="dateTache">
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="20" viewBox="0 0 35 20">
                                    <g id="Clock" transform="translate(0.385)">
                                        <rect id="Clock_Background_" data-name="Clock (Background)" width="35"
                                              height="20"
                                              transform="translate(-0.385)"
                                              fill="none"/>
                                        <rect id="bound" width="35" height="20" transform="translate(-0.385)"
                                              fill="none"/>
                                        <path id="Mask"
                                              d="M0,7.5C0,3.358,5.749,0,12.841,0S25.683,3.358,25.683,7.5,19.934,15,12.841,15,0,11.642,0,7.5Z"
                                              transform="translate(4.28 3.333)" fill="#3699ff" opacity="0.3"/>
                                        <path id="Path_107" data-name="Path 107"
                                              d="M1.38,0c.4,0,.744.179.784.415l.642,3.752L7.369,5.689c.267.089.431.255.431.434V6.25c0,.21-.342.362-.688.307L.636,5.525C.24,5.462-.024,5.244.008,5L.612.415C.643.181.978,0,1.38,0Z"
                                              transform="translate(15.741 6.25)" fill="#3699ff"/>
                                    </g>
                                </svg>
                                <span>04 Sep 2021</span>
                            </div>
                        </Col>
                        <Col sm={2} align="right">
                            <ButtonSite messageButton="Voir" messageButtonColor={messageButtonColor}
                                        bgMessageButton={bgMessageButton}/>
                        </Col>
                    </Row>
                    <Row className="resumeTache">
                        <Col>
                            Voyez ce jeu exquis wallon, de graphie en kit mais bref. Portez ce vieux whisky au juge blond qui fume sur son île intérieure, à côté de l"alcôve ovoïde, où les bûches se consument dans l"âtre, ce qui lui permet de penser à la cænogenèse de l"être dont il est question dans la cause ambiguë entendue à Moÿ, dans un capharnaüm qui, pense-t-il, diminue çà et là la qualité de son œuvre.
                        </Col>
                    </Row>
                    <Row className="commentairesEtoiles">
                        <Col sm={6}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="17" viewBox="0 0 29 17">
                                <g id="Group-chat" transform="translate(0.365)">
                                    <rect id="Group-chat_Background_" data-name="Group-chat (Background)" width="29" height="17" transform="translate(-0.365)" fill="none"/>
                                    <rect id="bound" width="29" height="17" transform="translate(-0.365)" fill="none"/>
                                    <path id="Combined_Shape" data-name="Combined Shape" d="M19.582,10.623a1.2,1.2,0,0,1-.6-.148L16.367,8.948H11.932V7.25a3,3,0,0,0-3-3H0V1.789C0,.8,1.374,0,3.064,0h14.3c1.69,0,3.064.8,3.064,1.789V7.158l.018,2.963a.35.35,0,0,1-.113.253A1.092,1.092,0,0,1,19.582,10.623Z" transform="translate(7.472 2.125)" fill="#d6d6e0"/>
                                    <path id="Combined_Shape-2" data-name="Combined Shape" d="M.893,7.122a1.283,1.283,0,0,1-.6-.138.434.434,0,0,1-.266-.363V5.188A.86.86,0,0,1,0,4.958V1.417C0,.635,1.088,0,2.426,0h9.7c1.337,0,2.425.635,2.425,1.417V4.958c0,.781-1.088,1.417-2.425,1.417H2.566L1.48,6.982A1.2,1.2,0,0,1,.893,7.122Zm7.968-3.58a.354.354,0,0,0,0,.708h2.93a.354.354,0,0,0,0-.708ZM5.224,2.125a.354.354,0,1,0,0,.708h6.568a.354.354,0,0,0,0-.708Z" transform="translate(2.408 7.792)" fill="#d6d6e0" opacity="0.3"/>
                                </g>
                            </svg>
                            <span className="nombreCommentaires">
                                107 Comments
                            </span>

                        </Col>
                        <Col sm={6} align="right">
                               <Etoiles />
                        </Col>
                    </Row>

                </div>


            </>
        );
    }
}
