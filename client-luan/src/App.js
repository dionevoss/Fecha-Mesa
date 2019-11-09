import React from 'react';
import './style-global.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/index'
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import { MuiThemeProvider } from '@material-ui/core/styles';
import Color from './color'

const theme = Color

const App = () => {
    return(
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch> 
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    )
}

export default App;
