import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormRow from './FormRow';
import './Form.css';
import User from '..//User/User.js';
// import axios from 'axios';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        let email = this.refs.email.getValue();
        let password = this.refs.password.getValue();
        console.log(email);
        console.log(password);

        var data = JSON.stringify({
            "usuario": email,
            "contrasena": password
        });

        var xhr = new XMLHttpRequest();


        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
                var respo = JSON.parse(this.response);
                console.log(respo.AccessToken);
                var access = respo.TipoAcceso;

                if (access === "Administrador") {
                    alert("exitoso")
                } else if (access === "Suscriptor") {
                    alert('¿Qué pasa?');

                }

            }
        });

        xhr.open("POST", "https://ws.compusoluciones.com/RetoTalentFest/ComercioAPI/Accesos");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "AccessToken");
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Postman-Token", "48902808-941c-487a-b1a6-4a24ca1f50ad");

        xhr.send(data)

        // console.log("hola"+ data);

    }

    render() {
        return (

            <div className = "form-body">
            <nav className="navbar navbar-light justify-content-end">
                <img className="p-2 bd-highlight" id="brand-logo" src={"assets/images/whitecompusol.png"} alt=""/>
            </nav>
            
            <div className="Form">      
                    <form className="Form-body shadow-lg p-3 mb-5 bg-white rounded"
                        onSubmit={(ev) => this.onSubmit.bind(this)(ev, this.props.handleLogin)} >
                        <h2 className="Form-title" > Iniciar sesión </h2>

                        <FormRow inputType="email"
                            labelText="Email"
                            isRequired={true}
                            ref="email" />

                        <FormRow inputType="password"
                            labelText="Password"
                            isRequired={true}
                            ref="password" />

                        <button type="button" className="Form-button btn btn-primary"> Registro </button>
                        <label className="Form-labelLegend" > </label>
                    </form>
                </div>
                </div>
                );
            }
        
        }
                            
export default Form;