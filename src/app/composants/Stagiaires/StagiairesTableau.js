import React from "react";
import { Col, Row, Container, Table } from "react-bootstrap";
export default function StagiairesTableau() {
  return (
    <Table responsive id="staigaires-tableau">
      <thead>
        <tr className="text-muted">
          <th></th>
          <th>Stagiaires</th>
          <th>Hôte</th>
          <th>Évaluation</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>

        {/* ******************************************* */}
        <tr>
          <td>
            <img
              className=" mt-1"
              src={require("../../assets/svg/avatars/004-boy-1.svg")}
              alt=""
              height="25px"
            />
          </td>
          <td>
            <b>Michael Lacroix</b>
            <br></br>
            <span className="text-muted">HTML, JS, ReactJS</span>
          </td>
          <td>
            <b>Intertico</b>
            <br></br>
            <span className="text-muted">HTML, JS, ReactJS</span>
          </td>
          <td>
          <svg id="Groupe_21" data-name="Groupe 21" xmlns="http://www.w3.org/2000/svg" width="132.206" height="20.624" viewBox="0 0 132.206 20.624">
  <path id="Icon_ionic-ios-star" data-name="Icon ionic-ios-star" d="M23.618,10.514H16.325L14.109,3.9a.8.8,0,0,0-1.507,0l-2.216,6.614H3.043a.8.8,0,0,0-.793.793.583.583,0,0,0,.015.134A.762.762,0,0,0,2.6,12l5.994,4.224-2.3,6.688a.8.8,0,0,0,.273.892A.767.767,0,0,0,7.009,24a.972.972,0,0,0,.5-.178l5.85-4.169,5.85,4.169a.929.929,0,0,0,.5.178.712.712,0,0,0,.441-.193.786.786,0,0,0,.273-.892l-2.3-6.688,5.944-4.264.144-.124a.832.832,0,0,0,.258-.53A.84.84,0,0,0,23.618,10.514Z" transform="translate(-2.25 -3.375)" fill="#fb0"/>
  <path id="Icon_ionic-ios-star-2" data-name="Icon ionic-ios-star" d="M23.618,10.514H16.325L14.109,3.9a.8.8,0,0,0-1.507,0l-2.216,6.614H3.043a.8.8,0,0,0-.793.793.583.583,0,0,0,.015.134A.762.762,0,0,0,2.6,12l5.994,4.224-2.3,6.688a.8.8,0,0,0,.273.892A.767.767,0,0,0,7.009,24a.972.972,0,0,0,.5-.178l5.85-4.169,5.85,4.169a.929.929,0,0,0,.5.178.712.712,0,0,0,.441-.193.786.786,0,0,0,.273-.892l-2.3-6.688,5.944-4.264.144-.124a.832.832,0,0,0,.258-.53A.84.84,0,0,0,23.618,10.514Z" transform="translate(25.249 -3.375)" fill="#fb0"/>
  <path id="Icon_ionic-ios-star-3" data-name="Icon ionic-ios-star" d="M23.618,10.514H16.325L14.109,3.9a.8.8,0,0,0-1.507,0l-2.216,6.614H3.043a.8.8,0,0,0-.793.793.583.583,0,0,0,.015.134A.762.762,0,0,0,2.6,12l5.994,4.224-2.3,6.688a.8.8,0,0,0,.273.892A.767.767,0,0,0,7.009,24a.972.972,0,0,0,.5-.178l5.85-4.169,5.85,4.169a.929.929,0,0,0,.5.178.712.712,0,0,0,.441-.193.786.786,0,0,0,.273-.892l-2.3-6.688,5.944-4.264.144-.124a.832.832,0,0,0,.258-.53A.84.84,0,0,0,23.618,10.514Z" transform="translate(52.748 -3.375)" fill="#fb0"/>
  <path id="Icon_ionic-ios-star-half" data-name="Icon ionic-ios-star-half" d="M23.618,10.514H16.325L14.109,3.9a.8.8,0,0,0-1.507,0l-2.216,6.614H3.043a.8.8,0,0,0-.793.793.583.583,0,0,0,.015.134A.762.762,0,0,0,2.6,12l5.994,4.224-2.3,6.688a.8.8,0,0,0,.273.892A.767.767,0,0,0,7.009,24a.972.972,0,0,0,.5-.178l5.85-4.169,5.85,4.169a.929.929,0,0,0,.5.178.712.712,0,0,0,.441-.193.786.786,0,0,0,.273-.892l-2.3-6.688,5.944-4.264.144-.124a.832.832,0,0,0,.258-.53A.84.84,0,0,0,23.618,10.514Zm-2.35,1.745L17.312,15.1a1.392,1.392,0,0,0-.506,1.577L18.3,21.024a.2.2,0,0,1-.3.228l-3.837-2.737,0,0a1.849,1.849,0,0,1-.8-1.512V6.612a.1.1,0,0,1,.188-.03h0l1.467,4.373a1.386,1.386,0,0,0,1.314.947h4.824A.2.2,0,0,1,21.268,12.259Z" transform="translate(80.246 -3.375)" fill="#fb0"/>
  <path id="Icon_ionic-ios-star-outline" data-name="Icon ionic-ios-star-outline" d="M23.618,10.514H16.325L14.109,3.9a.8.8,0,0,0-1.507,0l-2.216,6.614H3.043a.8.8,0,0,0-.793.793.583.583,0,0,0,.015.134A.762.762,0,0,0,2.6,12l5.994,4.224-2.3,6.688a.8.8,0,0,0,.273.892A.767.767,0,0,0,7.009,24a.972.972,0,0,0,.5-.178l5.85-4.169,5.85,4.169a.929.929,0,0,0,.5.178.712.712,0,0,0,.441-.193.786.786,0,0,0,.273-.892l-2.3-6.688,5.944-4.264.144-.124a.832.832,0,0,0,.258-.53A.84.84,0,0,0,23.618,10.514ZM17.312,15.1a1.392,1.392,0,0,0-.506,1.577L18.3,21.024a.2.2,0,0,1-.3.228l-3.837-2.737a1.385,1.385,0,0,0-.808-.258,1.359,1.359,0,0,0-.8.258L8.71,21.248a.2.2,0,0,1-.3-.228L9.9,16.672a1.4,1.4,0,0,0-.511-1.586L5.373,12.254a.2.2,0,0,1,.114-.362h4.893a1.386,1.386,0,0,0,1.314-.947l1.467-4.373a.2.2,0,0,1,.377,0l1.467,4.373a1.386,1.386,0,0,0,1.314.947h4.824a.2.2,0,0,1,.114.357Z" transform="translate(107.745 -3.375)" fill="#fb0"/>
</svg>

          </td>
          <td>Modifier/Sup</td>
        </tr>

        {/* ******************************************* */}
        
      </tbody>
    </Table>
  );
}
