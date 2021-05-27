import React from "react";

// Ce composant représente une activité

export default function Activite() {
  return (
    <div className="timeline-item align-items-start">
      <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">
        08:42
      </div>
      <div className="timeline-badge">
        <i className="fa fa-genderless text-warning icon-xl"></i>
      </div>
      <div className="font-weight-normal font-size-lg timeline-content text-muted pl-3">
        Ceci est une deuxième activité
      </div>
    </div>
  );
}
