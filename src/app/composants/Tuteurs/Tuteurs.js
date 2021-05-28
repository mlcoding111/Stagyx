import React from "react";
import { CarteTuteur } from "../../composants/CarteTuteur/CarteTuteur"
import { Row, Col } from 'react-bootstrap';
import { ButtonSite } from '../communs/ButtonSite/ButtonSite';
import { CarteStatistiques } from '../communs/CarteStatistiques/CarteStatistiques';
import { CarteInfo2 } from '../communs/CarteInfo2/CarteInfo2';
import '../../css/styleCarteTuteur.css';


export class Tuteurs extends React.Component{
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
              <Row>
                  <Col sm={3} className="sidebarGauche m-0 p-0">
                      <CarteInfo2 />

                  </Col>
                  <Col sm={6}>
                      <div className="tuteurDeStage">Tuteurs de stage</div>
                      <div className="buttonNouveau mb-3" align="right">
                          <ButtonSite messageButton="Nouveau" messageButtonColor={associerStagiaireButtonColor} bgMessageButton={bgAssocierButton} />
                      </div>
                      <CarteTuteur />
                      <CarteTuteur />
                      <CarteTuteur />
                  </Col>
                  <Col sm={3} className="sideBarRight">
                      <CarteStatistiques nombre={3} items={"Tuteurs"} numGroupe={'#1080'}/>
                      <CarteStatistiques nombre={9} items={"Stagiaires"} numGroupe={'#1080'}/>
                  </Col>

              </Row>



          </>
        );
    }
}
