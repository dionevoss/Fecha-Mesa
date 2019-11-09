import React from 'react';
import './style-global.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/index'
import Identification from './components/Indetification/index'
import { MuiThemeProvider } from '@material-ui/core/styles';
import color from './color'

const App = () => {
    return(
        <MuiThemeProvider theme={color}>
            <BrowserRouter>
                <Switch> 
                    <Route exact path='/' component={Home} />
                    <Route path='/login' component={Identification} />
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    )
}

export default App;
