import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import api from '../../services/api';
import { login } from '../../services/auth';

import { Form, Container} from './styles';

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    handleSignIn = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: 'deo erro' });
        } else {
            try {
                const response = await api.post('/auth', { email, password });
                login(response.data.token);
                alert('Logado com Sucesso!');
                this.props.history.push('/app');
            } catch (err) {
                console.log(err);
                this.setState({ error: 'Não foi possivel realizar o login!' });
            }
        }
    };

    render() {
        return(
            <Container>
                <Form onSubmit={this.handleSignIn}>
                    <img src={Logo} alt="Logo Fecha-Mesa" />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input 
                    type="email"
                    placeholder="E-Mail"
                    onChange={e => this.setState({email: e.target.value})}
                    />
                    <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => this.setState({password: e.target.value})}
                    />
                    <button type="submit">Entrar</button>
                    <hr />
                    <Link to="/signup">Criar Conta</Link>
                </Form>
            </Container>
        );
    }
}

export default withRouter(SignIn);