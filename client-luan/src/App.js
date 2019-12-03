import React from 'react';
import './style-global.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Identification from './pages/Indetification'
import Post from './components/EditePost'
import { MuiThemeProvider } from '@material-ui/core/styles';
import color from './color'

const App = () => {
    return(
        <MuiThemeProvider theme={color}>
            <BrowserRouter>
                <Switch> 
                    <Route exact path='/' component={Home} />
                    <Route exact path='/login' component={Identification} />
                    <Route exact path='/post/:id' component={Post} />
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    )
}

export default App;
