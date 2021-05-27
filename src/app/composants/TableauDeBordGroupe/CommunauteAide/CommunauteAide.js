import React from "react";

export default function CommunauteAide() {
  return (
    <div className="card card-custom card-stretch gutter-b w-100">
      <div className="card-header border-0 pt-5">
        <div className="d-flex align-items-center mb-10">
          <div className="symbol symbol-40 symbol-light-success mr-5">
            <span className="symbol-label">
            <img className="avatarTuteur" src={require('../../../assets/svg/avatars/007-boy-2.svg')} alt=""/>        
            </span>
          </div>
          <div className="d-flex flex-column flex-grow-1 font-weight-bold">
            <h6>Michael Lacroix</h6>
            <span className="text-muted">Front end dev</span>
          </div>
        </div>
      </div>

      <div className="card-body">
        <p className="mb-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters.{" "}
        </p>

        <div className="row p-5 mt-5 d-flex ml-auto ">
          <div className="symbol symbol-40 symbol-light-success mr-5 d-flex">
            <span className="symbol-label mr-2">
            <img className="avatarTuteur" src={require('../../../assets/svg/avatars/007-boy-2.svg')} alt=""/>        
            </span>
          </div>
          <b>Michael Lacroix</b>
          <div className="col-9 d-flex justify-content-around">
            <span className="text-muted">Il y a 2 jours</span>
            <span className="text-muted">Répondre</span>
          </div>
          <div className="col-10">
            <p> It is a long established fact that a reader, lorem Ipsum is that it has a more-or-less normal distribution of
          letters.</p>
          </div>
        </div>

        <div className="row p-5 mt-5 d-flex ml-auto">
          <div className="symbol symbol-40 symbol-light-success mr-5 d-flex">
            <span className="symbol-label mr-2">
            <img className="avatarTuteur" src={require('../../../assets/svg/avatars/007-boy-2.svg')} alt=""/>        
            </span>
          </div>
          <b>Michael Lacroix</b>
          <div className="col-9 d-flex justify-content-around">
            <span className="text-muted">Il y a 2 jours</span>
            <span className="text-muted">Répondre</span>
          </div>
          <div className="col-10">
            <p> It is a long established fact that a reader, lorem Ipsum is that it has a more-or-less normal distribution of
          letters.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
