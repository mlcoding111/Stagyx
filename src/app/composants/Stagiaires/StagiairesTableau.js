import React from "react";
import { Col, Row, Container, Table } from "react-bootstrap";
export default function StagiairesTableau() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th></th>
          <th>Stagiaires</th>
          <th>Hôte</th>
          <th>Évaluation</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody>
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
          <td>******</td>
          <td>Modifier/Sup</td>
        </tr>
        <tr>
          <td>s</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </Table>
  );
}
