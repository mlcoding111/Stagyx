import React from "react";
import { CarteEntreprise }  from "../../composants/CarteEntreprise/CarteEntreprise"
import { Row, Col } from 'react-bootstrap';
import { ButtonSite } from '../communs/ButtonSite/ButtonSite';
import { CarteStatistiques } from '../communs/CarteStatistiques/CarteStatistiques';
import '../../css/styleCarteEntreprise.css';


export class Entreprises extends React.Component{
    render(){

        const associerStagiaireButtonColor = {
            color: "#fff",
            fontSize: "12px",
            fontWeight: "600",

        };

        const bgAssocierButton = {
            background: "#1BC5BD",
            border: "1px solid #1BC5BD",
        }

        return(
          <>
              <div className="d-flex flex-row pageTuteur">
                  <div className="sidebarGauche">

                  </div>
                  <div className="divCarteTuteur">
                      <div className="tuteurDeStage">Tuteurs de stage</div>
                      <div className="buttonNouveau mb-3" align="right">
                          <ButtonSite messageButton="Nouveau" messageButtonColor={associerStagiaireButtonColor} bgMessageButton={bgAssocierButton} />
                      </div>
                      <CarteEntreprise />
                      <CarteEntreprise />
                      <CarteEntreprise />
                  </div>
                  <div className="sideBarDroite">
                      <CarteStatistiques nombre={3} items={"Entreprises"} numGroupe={'#1080'}/>
                      <CarteStatistiques nombre={9} items={"Stagiaires"} numGroupe={'#1080'}/>
                  </div>

              </div>



          </>
        );
    }
}
