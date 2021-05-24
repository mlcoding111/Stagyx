import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { MyPage } from "./pages/MyPage";
import { DashboardPage } from "./pages/DashboardPage";
import  TableauDeBordGroupe from "./pages/TableauDeBordGroupe/TableauDeBordGroupe";
import { TableauDeBordGlobal } from "./composants/TableauDeBordGlobal/TableauDeBordGlobal";
import { Tuteurs } from "./composants/Tuteurs/Tuteurs";
import { Entreprises } from "./composants/Entreprises/Entreprises";
import { ListeTachesEtudiant } from "./composants/ListeTachesEtudiant/ListeTachesEtudiant";
import { TachesDetails } from "./composants/TachesDetails/TachesDetails";


const GoogleMaterialPage = lazy(() =>
  import("./modules/GoogleMaterialExamples/GoogleMaterialPage")
);
const ReactBootstrapPage = lazy(() =>
  import("./modules/ReactBootstrapExamples/ReactBootstrapPage")
);
const ECommercePage = lazy(() =>
  import("./modules/ECommerce/pages/eCommercePage")
);
const UserProfilepage = lazy(() =>
  import("./modules/UserProfile/UserProfilePage")
);

export default function BasePage() {
  // useEffect(() => {
  //   console.log('Base page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from="/" to="/dashboard" />
        }
        <ContentRoute path="/dashboard" component={DashboardPage} />
        <ContentRoute path="/builder" component={BuilderPage} />
        <ContentRoute path="/my-page" component={MyPage} />
        <ContentRoute path="/tableau-de-bord-groupe" component={TableauDeBordGroupe} />
        <ContentRoute path="/tableau-de-bord-global" component={TableauDeBordGlobal} />
        <ContentRoute path="/tuteurs" component={Tuteurs}  />
        <ContentRoute path="/entreprises" component={Entreprises}  />
        <ContentRoute path="/liste-taches-etudiant" component={ListeTachesEtudiant} />
        <ContentRoute path="/taches-details" component={TachesDetails} />

        <Route path="/google-material" component={GoogleMaterialPage} />
        <Route path="/react-bootstrap" component={ReactBootstrapPage} />
        <Route path="/e-commerce" component={ECommercePage} />
        <Route path="/user-profile" component={UserProfilepage} />
        <Route path="/my-age" component={MyPage} />
        <Redirect to="error/error-v1" />
      </Switch>
    </Suspense>
  );
}
