import React from "react";
import { Button } from 'react-bootstrap';
import '../../../css/styleCarteStatistiques.css';

export class CarteStatistiques extends React.Component{

    render() {
        return (
          <>
            <div className="carteStatistique">
                <div>
                    <svg id="Group" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <rect id="Group_Background_" data-name="Group (Background)" width="32" height="32" fill="none"/>
                        <path id="Shape" d="M32,0V32H0V0Z" fill="none"/>
                        <path id="Combined_Shape" data-name="Combined Shape" d="M13.333,10.667a4,4,0,1,1,4,4A4,4,0,0,1,13.333,10.667ZM0,5.333a5.333,5.333,0,1,1,5.333,5.333A5.333,5.333,0,0,1,0,5.333Z" transform="translate(6.667 4)" fill="#663259" opacity="0.3"/>
                        <path id="Combined_Shape-2" data-name="Combined Shape" d="M26.133,10.667a13.217,13.217,0,0,0-2.666-8,9.637,9.637,0,0,1,5.864,1.8A7.1,7.1,0,0,1,32,9.867a.828.828,0,0,1-.179.6.716.716,0,0,1-.544.2Zm-25.163,0A1.476,1.476,0,0,1,0,9.6C.517,3.236,5.683,0,11.978,0,18.362,0,23.606,3.057,24,9.6a.916.916,0,0,1-1,1.067Z" transform="translate(0 17.333)" fill="#663259"/>
                    </svg>
                </div>
                <div className="nbreStageTuteur">
                    {this.props.nombre} {this.props.items}
                </div>
                <div className="numGroupe">
                    { this.props.numGroupe }
                </div>

            </div>
          </>
        );
    }
}
