import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './User.css';
//import $ from 'jquery';
//import 'https://openpay.s3.amazonaws.com/openpay.v1.min.js';

class User extends Component {
    constructor(){
        super();
    }

    render() {
        return(
            <div>
        <nav className="navbar navbar-light justify-content-end" >
        <img className="p-2 bd-highlight" id="brand-logo" src={"assets/images/whitecompusol.png"} alt="" />
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
                        <button id="hide-button" className="btn btn-light text-white">boton escondido</button>
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
                    <div className="modal-dialog modal-lg modal-notify modal-warning" role="document">
                        <div className="modal-content">
                            <div className="modal-header text-justify>">
                                <h4 className="modal-title white-text w-100 font-weight-bold py-2">Tarjeta de crédito o débito</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true" className="white-text">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form action="#" method="POST" id="payment-form">
                                        <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <h6>Tarjetas de crédito</h6>
                                                        <img src={"assets/images/cards1.png"} alt="credit cards" />
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <h6>Tarjetas de débito</h6>
                                                        <img src={"assets/images/cards2.png"} alt="debit cards" />
                                                    </div>
                                                    </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <label>Nombre del titular</label>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <label>Número de tarjeta</label>
                                                            </div>
                                                                </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <input className="form-control input-lg" type="text" placeholder="Como aparece en la tarjeta" autocomplete="off" data-openpay-card="holder_name" />
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input className="form-control input-lg" type="text" autocomplete="off" data-openpay-card="card_number" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <label>Fecha de expiración</label>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <label>Código de seguridad</label>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-inline">
                                                                    <input type="text" placeholder="Mes" data-openpay-card="expiration_month" />
                                                                    <input type="text" placeholder="Año" data-openpay-card="expiration_year" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <input type="text" placeholder="3 dígitos" autocomplete="off" data-openpay-card="cvv2" />
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-4">
                                                                <p>Transacciones realizadas vía:</p>
                                                                <img src={"assets/images/openpay.png"} alt="openPay" />
                                                            </div>
                                                            <div className="col-sm-5">
                                                                <p><img src={"assets/images/security.png"} alt="security" />Tus pagos se realizan de forma segura con encriptación de 256 bits</p>
                                                            </div>
                                                        </div>
                                                            <div className="row">
                                                                <button onClick={clickBtn} id="pay-button" type="button" className="btn btn-light-green">PAGAR</button>
                                                            </div>
                                                        </div>
                                                    </form>
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



function clickBtn(event) {
    event.preventDefault();
    const $ = window.$;
    $("#pay-button").prop( "disabled", true);
    const OpenPay = window.OpenPay;
    OpenPay.setApiKey('pk_6ed4884b2ada4537b5eab9109b2f69d8');
    OpenPay.setId('miuvrjojulgnqqak0smx');
    OpenPay.setSandboxMode(true);
    OpenPay.token.extractFormAndCreate('payment-form', success_callbak, error_callbak);
}

function success_callbak(response) {
    const $ = window.$;
    var token_id = response.data.id;
    $('#token_id').val(token_id);
    alert('¡¡Suscripción exitosa!!')
    /*$('#payment-form').submit();*/
    
}

function error_callbak(response) {
    const $ = window.$;
    var desc = response.data.description != undefined ?
    response.data.description : response.message;
    alert("ERROR [" + response.status + "] " + desc);
    $("#pay-button").prop("disabled", false);
}

export default User;