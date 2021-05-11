import React from "react";
import { Card } from 'react-bootstrap';
import { CarteGroupeActif } from "./composants/communs/CarteGroupeActif";
import { ZoneEcrireMessage} from  "./composants/communs/ZoneEcrireMessage"
import './css/styleTableauBordGlobal.css';






export class TableauDeBordGlobal extends React.Component {

    render() {

        return (
            <>
                <div className="d-flex flex-column flex-xl-row ml-5">
                    <div className="flex-lg-row-fluid ">
                        <h2 class="h2StagiaireActif">Stages actifs</h2>
                        <CarteGroupeActif />
                        <h2 class="h2StagiaireActif">Annonce rapide</h2>
                        <ZoneEcrireMessage />
                        
                        <div className="cadreMessage bg-info">
                          
                        </div>

                    </div>
                    <div className="flex-column flex-lg-row-auto w-400px ">
                        <Card>
                            <Card.Body>
                                <h2 className="h2Archive">Archives</h2>
                            
                  
                            </Card.Body>
                        </Card>
                    </div>

                </div>





            </>
        );
    }

}

