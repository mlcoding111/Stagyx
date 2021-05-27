import React from "react";
import CarteInfo from "../../composants/communs/CarteInfo/CarteInfo";
import ListeStagiaires from "../../composants/communs/ListeStagiaires/ListeStagiaires";
import TachesChart from "./Charts/TachesChart";
import ActivitesRecentes from './ActivitesRecentes/ActivitesRecentes'
import ListeTuteurs from './Tuteurs/ListeTuteurs'

import CommunauteAide from './CommunauteAide/CommunauteAide'

export default function TableauDeBordGroupe() {
  return (
    <section id="tableau">
      <div className="row">
        {/* Composant carte d'info avec la liste des stagiaires */}
        <div className="col-lg-12 col-md-12 col-xxl-3 ">
          <CarteInfo />
          <ListeStagiaires />
        </div>
        
        {/* Message important */}
        <div className="col-lg-12 col-md-12 col-xxl-9 d-flex flex-column flex-end pt-5">
          <h1>Message</h1>
          <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper enim quis consectetur volutpat. Curabitur cursus metus nisi,<br></br> in blandit ligula ornare a. Fusce facilisis, enim sit amet finibus suscipit, mi mi efficitur diam, a vulputate ante enim nec orci. Maecenas at dolor nec ligula auctor imperdiet id ut quam.</p>
         
          {/* Graphiques */}
          <div className="chart-wrapper d-flex flex-wrap mt-5">
            <div className="col-xxl-4 col-lg-6">
              <h3>Tâches</h3>
              <TachesChart />
            </div>
            <div className="col-xxl-4 col-lg-6">
              <h3>Santé du groupe</h3>
              <TachesChart />
            </div>
            <div className="col-xxl-4 col-lg-6">
              <ActivitesRecentes />
            </div>
            <div className="col-xxl-8 col-lg-6">
              <h1 className="text-muted mb-3">Communauté d'aide</h1>
              <CommunauteAide />
            </div>
          </div>
        </div>

        <div className="col-lg-12 col-xxl-12 offset-3 text-muted m-4">
          <h1 className="mb-5 p-5 m-5">Tuteurs du groupe 1017</h1>
          <ListeTuteurs />
        </div>
      </div>
    </section>
  );
}
