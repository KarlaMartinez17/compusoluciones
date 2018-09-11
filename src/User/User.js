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
        <nav class="navbar navbar-light justify-content-end" >
        <img class="p-2 bd-highlight" id="brand-logo" src="whitecompusol.png" alt="" />
    </nav>
    <br/>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
                        aria-controls="v-pills-home" aria-selected="true">Planes</a>
                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
                        aria-controls="v-pills-profile" aria-selected="false">Suscripciones</a>
                    <button class="btn btn-secondary">Cerrar Sesión</button>
                </div>
            </div>
            <div class="col-lg-9 ">
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <h1>Planes</h1>
                        <hr/>
                        <br/>
                        <br/>
                        <div class="card shadow-lg p-3 mb-5 bg-white rounded ">
                            <div class="card-body">
                                <h5 class="card-title"> 3 MESES</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Básico</h6>
                                <p class="card-text">USD$ 60.00</p>
                                <button type="button" class="suscribe-button  btn btn-primary" data-toggle="modal"
                                    data-target="#exampleModal">Suscribirse</button>
                            </div>
                        </div>
                        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div class="card-body">
                                <h5 class="card-title"> 6 MESES</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Regular</h6>
                                <p class="card-text">USD$ 120.00</p>
                                <button type="button" class="suscribe-button btn btn-primary" data-toggle="modal"
                                    data-target="#exampleModal">Suscribirse</button>
                            </div>
                        </div>
                        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div class="card-body">
                                <h5 class="card-title"> 12 MESES</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Premium</h6>
                                <p class="card-text">USD$ 230.00</p>
                                <button type="button" class=" suscribe-button  btn btn-primary" data-toggle="modal"
                                    data-target="#exampleModal">Suscribirse</button>
                            </div>
                        </div>
                    </div>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <h1>Suscripciones</h1>
                        <hr/>
                        <br/>
                        <br/>
                        <div class="suscription-card shadow-lg p-3 mb-5 bg-white rounded" >
                            <div class="card-body">
                                <h3 class="card-title">Suscripción</h3>
                                    <h4 class="card-text">ID: 1234567890</h4>
                                    <h4 class="card-text">PLAN: 3 Meses</h4>
                                    <h4 class="card-text">Fecha de cobro: 15/09/2018</h4>
                                    <h4 class="card-text">Fecha de creación: 10/06/2016</h4>
                                    <br/>
                                    <button class="btn btn-danger">Cancelar Suscripción <i class="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer class="container-fluid">
        <div class="row">
            <div class="col-xs-8 col-sm-12 col-md-12 col-lg-12">
                <p class="textFooter text-white-50">Todos los derechos reservados CompuSoluciones 2018.</p>
            </div>
        </div>
    </footer>
            </div>
        )
    }

}

export default User;