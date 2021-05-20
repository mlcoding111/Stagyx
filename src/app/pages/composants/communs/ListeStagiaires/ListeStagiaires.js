import React from 'react'

export default function ListeStagiaires() {
    return (
        <div>
            <div className="card card-custom card-stretch gutter-b">
                <div className="card-header border-0">
                    <h3 className="card-title font-weight-bolder text-dark">Stagiaires</h3>
                    <div className="card-toolbar">
                        <button type="button">Ajouter</button>
                    </div>
                </div> 
                <div className="card-body pt-2">
                    {/* Cette ligne représente un utilisateur */}
                    <div className="d-flex align-items-center mb-10">
                        <div className="symbol symbol-40 symbol-light-success mr-5">
                            <span className="symbol-label">
                               <img src="user.svg" alt="user"/>                            
                            </span>                            
                        </div>
                        <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                            <h4>Michael Lacroix</h4>
                            <span className="text-muted">Front end dev</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center mb-10">
                        <div className="symbol symbol-40 symbol-light-success mr-5">
                            <span className="symbol-label">
                               <img src="user.svg" alt="user"/>                            
                            </span>                            
                        </div>
                        <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                            <h4>Michael Lacroix</h4>
                            <span className="text-muted">Front end dev</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center mb-10">
                        <div className="symbol symbol-40 symbol-light-success mr-5">
                            <span className="symbol-label">
                               <img src="user.svg" alt="user"/>                            
                            </span>                            
                        </div>
                        <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                            <h4>Michael Lacroix</h4>
                            <span className="text-muted">Front end dev</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center mb-10">
                        <div className="symbol symbol-40 symbol-light-success mr-5">
                            <span className="symbol-label">
                               <img src="user.svg" alt="user"/>                            
                            </span>                            
                        </div>
                        <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                            <h4>Michael Lacroix</h4>
                            <span className="text-muted">Front end dev</span>
                        </div>
                    </div>

                    <div className="d-flex align-items-center mb-10">
                        <div className="symbol symbol-40 symbol-light-success mr-5">
                            <span className="symbol-label">
                               <img src="user.svg" alt="user"/>                            
                            </span>                            
                        </div>
                        <div className="d-flex flex-column flex-grow-1 font-weight-bold">
                            <h4>Michael Lacroix</h4>
                            <span className="text-muted">Front end dev</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
