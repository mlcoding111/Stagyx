import React from 'react'

export default function ActivitesRecentes() {
    return (
        <div className="card card-custom card-stretch gutter-b">
            <div className="card-header align-items-center border-0 mt-4">
                <h3 className="card-title align-items-start flex-column">
                    <span className="font-weight-bolder text-dark">Mes activités</span>
                    <span className="text-muted mt-3 font-weig-bold font-size-sm">928,309 sales</span>
                    <div className="card-toolbar">
                        <div className="dropdown-inline dropdown"></div>
                    </div>
                </h3>
            </div>

            <div className="card-body pt-4">
                <div className="timeline timeline-6 mt-3">

                    {/* Cette partie de code représente une activité */}
                    <div className="timeline-item align-items-start">
                        <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">08:42</div>
                        <div className="timeline-badge">
                            <i className="fa fa-genderless text-warning icon-xl"></i>
                        </div>
                        <div className="font-weight-normal font-size-lg timeline-content text-muted pl-3">Ceci est une première activité</div>
                    </div>

                     {/* Deuxième activité */}
                    <div className="timeline-item align-items-start">
                        <div className="timeline-label font-weight-bolder text-dark-75 font-size-lg">08:42</div>
                        <div className="timeline-badge">
                            <i className="fa fa-genderless text-success icon-xl"></i>
                        </div>
                        <div className="font-weight-normal font-size-lg timeline-content text-muted pl-3">Ceci est une deuxième activité</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
