import React, { Component } from 'react';
import axios from 'axios';

import AppHeader from './components/AppHeader'

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
    <AppHeader />
   );
 }
};

export default App;
