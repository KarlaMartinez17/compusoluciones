import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';

class Admin extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div>
    <nav class="navbar navbar-light justify-content-end">
        <img class="p-2 bd-highlight" id="brand-logo" src={"assets/images/whitecompusol.png"} alt=""/>
    </nav>
    <br/>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-3">
                <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab"
                        aria-controls="v-pills-home" aria-selected="true">Planes</a>
                    <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab"
                        aria-controls="v-pills-profile" aria-selected="false"> Clientes</a>
                        <button id="hide-button" className="btn btn-light text-white">boton escondido</button>
                    <button class="btn btn-secondary">Cerrar Sesión</button>
                </div>
            </div>
            <div class="col-lg-9 ">
                <div class="tab-content" id="v-pills-tabContent">
                    <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <h1>Planes</h1>
                        <hr/>
                        <button type="button" class="btn btn-success"><i class="fas fa-plus"></i> Agregar Plan</button>
                        <br/>
                        <br/>
                        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div class="card-body">
                                <h5 class="card-title">PREMIUM</h5>
                                <h6 class="card-subtitle mb-2 text-muted">ID PLAN: 098378674</h6>
                                <p class="card-text">USD$ 230.00</p>
                                <p class="card-text">12 PAGOS MENSUALES</p>
                                <h6 class="card-text">FECHA DE CREACIÓN: 17/07/2018</h6>
                                <button type="button" class="suscribe-button btn btn-danger">Eliminar <i class="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div class="card-body">
                                <h5 class="card-title">PREMIUM</h5>
                                <h6 class="card-subtitle mb-2 text-muted">ID PLAN: 098378674</h6>
                                <p class="card-text">USD$ 230.00</p>
                                <p class="card-text">12 PAGOS MENSUALES</p>
                                <h6 class="card-text">FECHA DE CREACIÓN: 17/07/2018</h6>
                                <button type="button" class="suscribe-button btn btn-danger">Eliminar <i class="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div class="card-body">
                                <h5 class="card-title">PREMIUM</h5>
                                <h6 class="card-subtitle mb-2 text-muted">ID PLAN: 098378674</h6>
                                <p class="card-text">USD$ 230.00</p>
                                <p class="card-text">12 PAGOS MENSUALES</p>
                                <h6 class="card-text">FECHA DE CREACIÓN: 17/07/2018</h6>
                                <button type="button" class="suscribe-button btn btn-danger">Eliminar <i class="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                        <h1>Clientes</h1>
                        <hr/>
                        <br/>
                        <br/>
                        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                            <div class="card-body">
                                <h5 class="card-title">PREMIUM</h5>
                                <h6 class="card-subtitle mb-2 text-muted">ID SUSCRIPCIÓN: 098378674</h6>
                                <h6 class="card-text">ID CLIENTE: 39748682873</h6>
                                <h6 class="card-text">NOMBRE CLIENTE: JUANA PEREZ</h6>
                                <h6 class="card-text">ID PLAN: 13978487</h6>
                                <h6 class="card-text">FECHA DE SUSCRIPCIÓN: 17/07/2018</h6>
                                <h6 class="card-text">FECHA DE COBRO: 17/07/2018</h6>
                                <button class="btn btn-danger">Eliminar Cliente <i class="far fa-trash-alt"></i></button>
                            </div>
                        </div>
                        <div class="card shadow-lg p-3 mb-5 bg-white rounded">
                        <div class="card-body">
                            <h5 class="card-title">PREMIUM</h5>
                            <h6 class="card-subtitle mb-2 text-muted">ID SUSCRIPCIÓN: 098378674</h6>
                            <h6 class="card-text">ID CLIENTE: 39748682873</h6>
                            <h6 class="card-text">NOMBRE CLIENTE: JUANA PEREZ</h6>
                            <h6 class="card-text">ID PLAN: 13978487</h6>
                            <h6 class="card-text">FECHA DE SUSCRIPCIÓN: 17/07/2018</h6>
                            <h6 class="card-text">FECHA DE COBRO: 17/07/2018</h6>
                            <button class="btn btn-danger">Eliminar Cliente <i class="far fa-trash-alt"></i></button>
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

export default Admin;