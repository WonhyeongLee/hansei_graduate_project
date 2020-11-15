import React ,{Component} from 'react';
import {Route , Link} from 'react-router-dom';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import ShowDB from './showdb';
import UploadImage from './upload_image';
import { Button, IconButton } from "@material-ui/core";
class ResultData extends Component {

    handleGoHome = () => {
        this.props.history.push('/');
    };

    render(){
    return (
        <div className="resultPage">
            <div className="goToBack">
            <Link to ="/">
                <Button variant="contained" 
                        onClick={this.handleGoHome}
                        startIcon={<KeyboardBackspaceIcon fontSize="large"/>}>
                        뒤로가기
                </Button>
            </Link>
            </div>
        </div>
    )}
}


export default ResultData;