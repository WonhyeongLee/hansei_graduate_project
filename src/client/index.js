import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
require('./App.css');

ReactDOM.render(
    // <MuiThemeProvider theme={theme}>
    <App />
    // </MuiThemeProvider>
    , document.getElementById('root'));
