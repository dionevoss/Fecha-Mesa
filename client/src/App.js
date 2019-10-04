import React, { Component } from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333'
});

class App extends Component{
  state = {
    users: []
 };

 async componentDidMount() {
   const { data: users } = await api.get('/users')

   this.setState('users');
 }

 render() {
   return (
     <h1>Ola, Mundo</h1>
   );
 }
};

export default App;
