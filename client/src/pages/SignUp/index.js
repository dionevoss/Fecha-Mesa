import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import api from '../../services/api';
import Logo from "../../assets/logo.svg";

import { Form, Container } from './styles';

class SignUp extends Component {
    state = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirmPassword: '',
        error: ''
    };

    handleSignUp = async e => {
        e.preventDefault();
        const { first_name, last_name, email, password, confirmPassword } = this.state;
        if (!first_name || !last_name || !email || !password || !confirmPassword) {
            this.setState({ error: "Preencha todos os campos!" });
        } else
            if (password.length < 8)
                this.setState({ error: 'Senha deve conter mais de 8 digitos!' })
            else
                if (password !== confirmPassword)
                    this.setState({ error: "Senhas não conferem!" })
                else {
                    try {
                        await api.post('/users', { first_name, last_name, email, password });
                        alert('Registrado com Sucesso!');
                        this.props.history.push("/");
                    } catch (err) {
                        console.log(err);
                        this.setState({ error: err.response.data })
                    }
                }
    };

    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignUp}>
                    <img src={Logo} alt="Fecha-Mesa Logo" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Nome"
                        onChange={e => this.setState({ first_name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Sobrenome"
                        onChange={e => this.setState({ last_name: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="E-Mail"
                        onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Confirme senha"
                        onChange={e => this.setState({ confirmPassword: e.target.value })}
                    />
                    <button type="submit">Finalizar Cadastro</button>
                    <hr />
                    <Link to="/">Fazer Login</Link>
                </Form>
            </Container>
        );
    }

}

export default withRouter(SignUp);