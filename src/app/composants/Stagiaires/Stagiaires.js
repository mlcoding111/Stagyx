import React from "react";
import CarteInfo from "../communs/CarteInfo/CarteInfo";
import { Col, Row, Container } from "react-bootstrap";

import StagiairesTableau from "./StagiairesTableau";
import ListeEtoiles from './ListeEtoiles'
import SousTitreIcon from './SousTitreIcon'

export default function Stagiaires() {
  return (
    <Container fluid className="m-0 p-0">
      <Row no-gutters className="h-100">
        <Col md="12" lg="3">
          <CarteInfo />
        </Col>
        <Col lg="6" md="12" className="m-5">
          <div className="stagiaires-info">
            <h1>Stagiaires</h1>
            <span className="text-muted"> 28 stagiaires</span>

            {/* Button ajouter stagiaire  */}
            <button
              className="float-right d-flex justify-content-center text-center"
              id="nouveau-stagiaire-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20.492"
                height="20"
                viewBox="0 0 20.492 20"
                className="mr-3"
              >
                <g id="Add-user" transform="translate(0.336)">
                  <rect
                    id="Add-user_Background_"
                    data-name="Add-user (Background)"
                    width="20"
                    height="20"
                    transform="translate(-0.336)"
                    fill="none"
                  />
                  <path
                    id="Shape"
                    d="M20,0V20H0V0Z"
                    transform="translate(0.156)"
                    fill="none"
                  />
                  <path
                    id="Combined_Shape"
                    data-name="Combined Shape"
                    d="M10.833,5.834V4.167H9.167a.833.833,0,0,1,0-1.667h1.667V.833a.833.833,0,1,1,1.667,0V2.5h1.667a.833.833,0,0,1,0,1.667H12.5V5.834a.833.833,0,0,1-1.667,0ZM0,3.334A3.333,3.333,0,1,1,3.334,6.666,3.333,3.333,0,0,1,0,3.334Z"
                    transform="translate(4.323 2.5)"
                    fill="#fff"
                    opacity="0.3"
                  />
                  <path
                    id="Mask_Copy"
                    data-name="Mask Copy"
                    d="M7.486,0C11.476,0,14.754,1.911,15,6a.572.572,0,0,1-.626.667H.606A.923.923,0,0,1,0,6C.324,2.022,3.552,0,7.486,0Z"
                    transform="translate(0.156 10.833)"
                    fill="#fff"
                  />
                </g>
              </svg>
              Nouveau
            </button>
          </div>
          <StagiairesTableau />
        </Col>
        <Col lg="2" md="12" className="d-flex align-items-center justify-content-center flex-column">
          <h1 className="text-muted font-weight-light" id="filtre-header">
            Filtres
          </h1>
          <div className="mt-5 mx-auto">
              {/* Optiopn avec SVG */}
            <SousTitreIcon titre="Par moyenne" />
            <ListeEtoiles />
            <SousTitreIcon titre="Aucune tâche inscrite" />
            <SousTitreIcon titre="Non affecté à un stage" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
