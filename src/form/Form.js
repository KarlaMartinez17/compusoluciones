import React, { Component } from 'react';
import FormRow from './FormRow';
import './Form.css';
// import axios from 'axios';

class Form extends Component {

    constructor() {
        super();

        this.state = {
             user:''
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

            <div className="Form" >


                <form className="Form-body"
                    onSubmit={this.onSubmit} >
                    <h2 className="Form-title" > REGISTRO </h2>

                    <FormRow inputType="email"
                        labelText="Email"
                        isRequired={true}
                        ref="email" />

                    <FormRow inputType="password"
                        labelText="Password"
                        isRequired={true}
                        ref="password" />

                    < button className="Form-button"> Registro </button>
                    <label className="Form-labelLegend" > </label>
                </form>
            </div>
        );
    }

}
                    
export default Form;