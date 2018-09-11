import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './User.css';

class User extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div>
        <nav className="navbar navbar-light justify-content-end" >
        <img className="p-2 bd-highlight" id="brand-logo" src="whitecompusol.png" alt="" />
    </nav>
    <br/>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
                        aria-controls="v-pills-home" aria-selected="true">Planes</a>
                    <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
                        aria-controls="v-pills-profile" aria-selected="false">Suscripciones</a>
                    <button className="btn btn-secondary">Cerrar Sesión</button>
                </div>
            </div>
            <div className="col-lg-9 ">
                <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <h1>Planes</h1>
                        <hr/>
                        <br/>
                        <br/>
                        <div className="card shadow-lg p-3 mb-5 bg-white rounded ">
                            <div className="card-body">
                                <h5 className="card-title"> 3 MESES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Básico</h6>
                                <p className="card-text">USD$ 60.00</p>
                                <button type="button" className="suscribe-button  btn btn-primary" data-toggle="modal"
                                    data-target="#exampleModal">Suscribirse</button>
                            </div>
                        </div>
                        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="card-body">
                                <h5 className="card-title"> 6 MESES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Regular</h6>
                                <p className="card-text">USD$ 120.00</p>
                                <button type="button" className="suscribe-button btn btn-primary" data-toggle="modal"
                                    data-target="#exampleModal">Suscribirse</button>
                            </div>
                        </div>
                        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div className="card-body">
                                <h5 className="card-title"> 12 MESES</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Premium</h6>
                                <p className="card-text">USD$ 230.00</p>
                                <button type="button" className=" suscribe-button  btn btn-primary" data-toggle="modal"
                                    data-target="#exampleModal">Suscribirse</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <h1>Suscripciones</h1>
                        <hr/>
                        <br/>
                        <br/>
                        <div className="suscription-card shadow-lg p-3 mb-5 bg-white rounded" >
                            <div className="card-body">
                                <h3 className="card-title">Suscripción</h3>
                                    <h4 className="card-text">ID: 1234567890</h4>
                                    <h4 className="card-text">PLAN: 3 Meses</h4>
                                    <h4 className="card-text">Fecha de cobro: 15/09/2018</h4>
                                    <h4 className="card-text">Fecha de creación: 10/06/2016</h4>
                                    <br/>
                                    <button className="btn btn-danger">Cancelar Suscripción <i className="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer className="container-fluid">
        <div className="row">
            <div className="col-xs-8 col-sm-12 col-md-12 col-lg-12">
                <p className="textFooter text-white-50">Todos los derechos reservados CompuSoluciones 2018.</p>
            </div>
        </div>
    </footer>
            </div>
        )
    }

}

export default User;