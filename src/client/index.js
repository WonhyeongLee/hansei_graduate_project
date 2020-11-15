import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
require('./App.css');

const theme = createMuiTheme({
    typography: {
        fontFamily: ('spoqa Han Sans'),
    },
});

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </MuiThemeProvider>
    , document.getElementById('root'));
