import React from "react";
import '../../css/stylePersonnel.css';

export class CarteGroupeActif extends React.Component {

    render() {
        return (
            <>
                <div className="cadreStageActif">
                    <h2>groupe #1034</h2>
                    <h3>Génie mécanique NW.1045</h3>
                    <div className="stageActifAttribut">Début : <span className="stageActifValue">2015-02-25</span></div>
                    <div className="stageActifAttribut">Fin : <span className="stageActifValue">2015-03-25</span></div>
                    <div className="stageActifAttribut">Stagiaires : <span className="stageActifValue">17</span></div>
                    <div className="stageActifAttribut">Type : <span className="stageActifValue">Alternance travail-études</span></div>
                    <div className="stageActifAcceder">Accéder</div>

                </div>
                
       
            </>
        );
    
    }

}