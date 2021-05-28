import React from 'react';
import {Card} from 'react-bootstrap';
import {ButtonSite} from '../communs/ButtonSite/ButtonSite';
import {CarteEntreprise} from '../CarteEntreprise/CarteEntreprise'
import '../../css/styleProfiTuteurHote.css';


export class ProfilTuteurHote extends React.Component {
    render() {
        const modifierButtonColor = {
            color: "#8950FC",
            fontSize: "#810px",
            fontWeight: "600",

        };

        const bgModifierButton = {
            background: "#EEE5FF",
            border: "1px solid rgb(238, 229, 255)",
        }

        const messageButtonColor = {
            color: "#fff",
            fontSize: "#810px",
            fontWeight: "600",

        };

        const bgMessageButton = {
            background: "#6C63FF",
            border: "1px solid rgb(238, 229, 255)",
        }
        return (
            <>
            <div className="divProfilTuteurHote">
                <div className="titreProfilTuteurHote">
                    Profil
                </div>
                <div className="nomDuStagiaire">
                    Ginette le brun
                </div>
                <div className="btnContacterModifier">
                    <ButtonSite messageButton="Contacter" messageButtonColor={messageButtonColor}
                                bgMessageButton={bgMessageButton}/>
                    <span className="ml-5">
                          <ButtonSite messageButton="Modifier" messageButtonColor={modifierButtonColor}
                                      bgMessageButton={bgModifierButton}/>
                    </span>
                </div>
                <div className="titreProfilTuteurHote">
                    Tuteur
                </div>
                <div className="d-flex flex-row divTuteurEntrepriseProfil">
                    <div>
                        <div className="nomTuteur">Known Expers</div>
                        <div className="solganTuteur">amar@queb.ca</div>
                        <div className="btnContacterModifier">
                            <ButtonSite messageButton="Contacter" messageButtonColor={messageButtonColor}
                                        bgMessageButton={bgMessageButton}/>
                        </div>
                    </div>
                    <div className="divAvatarTuteur">
                        <img className="avatarTuteur" src={require('../../assets/svg/avatars/004-boy-1.svg')} alt=""/>
                    </div>
                </div>
                <div className="titreProfilTuteurHote">
                    Hôte
                </div>
                <div className="divTuteurEntrepriseProfil">
                    <div className="d-flex flex-column">
                        <div>
                            <div className="nomTuteur">
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="264" height="54" viewBox="0 0 264 54">
                                    <defs>
                                        <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 300 61">
                                            <image width="300" height="61" xlinkHref="data:image/png;base64,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"/>
                                        </pattern>
                                    </defs>
                                    <g id="Groupe_37" data-name="Groupe 37" transform="translate(-876 -218)">
                                        <rect id="logo_PhenixWeb" width="264" height="54" transform="translate(876 218)" fill="url(#pattern)"/>
                                    </g>
                                </svg>
                            </div>
                            <div className="infoEntreprise">
                                481 Saint-Joseph Est - 3e étage <br />
                                Québec QC G1K 3B6
                            </div>
                            <div className="infoEntreprise">
                                (+1) 581-701-8272 <br />
                                www.phenixweb.com
                            </div>
                            <div className="responsable">
                                Responsable
                            </div>
                            <div className="infoEntreprise">
                                Samuel Caron <br />
                                s.caron@gmail.com
                            </div>

                        </div>

                    </div>
                </div>

            </div>


            </>
        )
    }
}
