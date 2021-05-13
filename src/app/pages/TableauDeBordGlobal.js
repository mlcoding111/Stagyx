import React from "react";
// import { Card } from 'react-bootstrap';
import { CarteGroupeActif } from "./composants/communs/CarteGroupeActif";
import { ZoneEcrireMessage } from "./composants/communs/ZoneEcrireMessage";
import { ButtonSite } from './composants/communs/ButtonSite';
import { Archives } from './composants/communs/Archives';
import './css/styleTableauBordGlobal.css';

export class TableauDeBordGlobal extends React.Component {

    render() {

        const messageButtonColor = {
            color: "#8950FC",
            fontSize: "12px",
            fontWeight: "600",
                
        };
        
        const bgMessageButton = {
            background: "#EEE5FF",
            border: "1px solid rgb(238, 229, 255)",
        }
        

        return (
            <>
{/*                 <div className="d-flex flex-column flex-xl-row ">
                    <div className="">
                        <div className="row">
                        <div className="col-6"><h2 class="h2StagiaireActif">Stages actifs</h2></div>
                        <div className="buttonMessage col-6" align="right"><ButtonSite messageButton="Créer un nouveau message" messageButtonColor={messageButtonColor} bgMessageButton={bgMessageButton} /></div>
                        </div>
                        <CarteGroupeActif />
                        <h2 class="h2StagiaireActif">Annonce rapide</h2>
                        <ZoneEcrireMessage />
                        
                        <div className="cadreMessage bg-info">
                          
                        </div>

                    </div>
                    <div className=" w-400px ">
                        <Archives />
         
                    </div>

                </div> */}

                <div className="main">
                    <div className="row">
                        <div className="col-6"><h2 class="h2StagiaireActif">Stages actifs</h2></div>
                        <div className="buttonMessage col-6" align="right"><ButtonSite messageButton="Créer un nouveau message" messageButtonColor={messageButtonColor} bgMessageButton={bgMessageButton} /></div>
                    </div>
                    <CarteGroupeActif />
                    <h2 class="h2StagiaireActif">Annonce rapide</h2>
                    <ZoneEcrireMessage />

                </div>
                <div className="sidebar">
                    <Archives />
                
                </div>





            </>
        );
    }

}

