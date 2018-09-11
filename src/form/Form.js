import React, { Component } from 'react';
import './Form.css';
import Admin from '../Admin/Admin.js';
import User from '../User/User.js';


class Form extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: '',
            administrador: false,
            logged: false,
            password: '',
            rLogin: true,

        }

        
        this.onHandleSubmit = this.onHandleSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }


    onHandleSubmit(e) {
        e.preventDefault();
        console.log('this.state', this.state);
        var reqHeaders = new Headers();
        reqHeaders.append('Content-Type', 'application/json');
        var reqInit = {
            method: 'POST',
            headers: reqHeaders,
            body:  JSON.stringify({
                "usuario": this.state.user,
                "contrasena": this.state.password,
            })
        };

        const req = new Request('https://ws.compusoluciones.com/RetoTalentFest/ComercioAPI/Accesos', reqInit);

        fetch(req).then((response) => {

            return response.json();

        })
        .then(response => {
            const { TipoAcceso, AccessToken } = response
            this.setState({ TipoAcceso, AccessToken, rLogin: false });
            console.log(response);
        });

    }

    onHandleChange(e) {
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        this.setState({user: email, password: password});

    }

    handleLoginClick = () => {
        const {rLogin} = this.state;
        this.setState({rLogin: !rLogin})
    }

    renderLogin = () => (
        <div classNAme="form-body">
                <nav className="navbar navbar-light justify-content-end">
                    <img className="p-2 bd-highlight" id="brand-logo" src={"assets/images/whitecompusol.png"} alt=""/>
                </nav>

        <div className="Form" >
            <form className="Form-body" onSubmit={this.onHandleSubmit} >
                <h2 className="Form-title" > Iniciar sesión </h2>
                <label >Email</label>
                <input className="input1" type="email"
                    name="email"
                    required
                    onChange={this.onHandleChange}
                    ref="email"
                    value={this.state.user} />
                <label >Password</label>
                <input className="input1" type="password"
                    name="password"
                    required
                    onChange={this.onHandleChange}
                    value={this.state.password}
                    ref="password" />
                < button className="Form-button btn  btn-primary"> Log In </button>
                <label className="Form-labelLegend" > </label>
            </form>
        </div>
    </div>    
    )

    render() {
        const { rLogin } = this.state;
        const cond = this.state.TipoAcceso === "Suscriptor";
        return (
            <div>
                {
                    rLogin ? this.renderLogin() : cond ? <User /> : <Admin />
                }
            </div>

        );
    }

}

export default Form;