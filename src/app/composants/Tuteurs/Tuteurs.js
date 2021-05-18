import React from "react";
import { CarteTuteur } from "../../composants/CarteTuteur/CarteTuteur"
import { Row, Col } from 'react-bootstrap';
import { ButtonSite } from '../communs/ButtonSite/ButtonSite'
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
                  <Col sm={2}>

                  </Col>
                  <Col sm={8}>
                      <div className="tuteurDeStage">Tuteurs de stage</div>
                      <div className="buttonNouveau mb-3" align="right">
                            <ButtonSite messageButton="Nouveau" messageButtonColor={associerStagiaireButtonColor} bgMessageButton={bgAssocierButton} />
                      </div>
                      <CarteTuteur />
                      <CarteTuteur />
                      <CarteTuteur />
                  </Col>
                  <Col sm={2}>

                  </Col>

              </Row>



          </>
        );
    }
}
