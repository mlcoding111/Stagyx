import React from 'react'
import {Card} from 'react-bootstrap'

// Le composant va prendre en props les données de l'api

export default function CarteInfo(props) {
    return (
        <Card bg="danger" text="white" className="p-0 m-0" style={{width: '100%'}}>
        <Card.Body>
          <Card.Title>Réseautique et support technique</Card.Title>
          <Card.Text>
            <ul>
              <li>Début: </li>
              <li>Fin: </li>
              <li>Session: </li>
              <li>Stagiaires: </li>
              <li>Type: </li>
            </ul>
          </Card.Text>
          <h2 className="float-right">#1017</h2>
        </Card.Body>
      </Card>
    )

}
