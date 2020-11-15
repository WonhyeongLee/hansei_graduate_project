import React ,{Component}from 'react';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { Typography, Button, IconButton } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import {Route , Link} from 'react-router-dom';
import ResultData from './foodRecognition';
import axios from 'axios';


class UploadImage extends Component {
    constructor(props) {
     super(props);
    this.state = {
        selectedFile: null,
        imagePreview: "../../dist/Photo.png"
    };
  }


render(){
    const imagePreview = this.state.imagePreview;
    return(
        <div className="uploadApp-page">

         <div className="uploadContainer">
                <h1 className="heading">음식 저장</h1>
                <div className="img-holder">
                    <img src={imagePreview} classname="img" id="img" alt="" width="200px" height="200px"/>
                </div>
                  <input type="file" id="file" accept="image/*" name="image-upload"
                                    onChange={this.fileSelectedHandler} />
                  <div className="label">
                         <label className="image-upload" htmlFor="file">
                         <div className="upload-icon"><AddAPhotoIcon fontSize="large"></AddAPhotoIcon> </div>
                        </label>
                  </div>

                
                
             <div className="btn-send">
             <Link to ="/result">  
                   <Button variant="contained" color="primary"
                           onClick={this.fileUploadHandler} startIcon={<SaveIcon fontSize="large"/>}>
                       Upload image
                  </Button>
            </Link>
             </div>
         </div>
         <Route path="/result" component={ResultData} />
        </div>

        
    )
}

imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
        if(reader.readyState === 2){
            this.setState({imagePreview: reader.result})
            console.log(this.state.imagePreview)
        }
    }
    reader.readAsDataURL(e.target.files[0])
};

fileSelectedHandler = (e) => {
    this.imageHandler(e)
    this.setState({
        selectedFile: e.target.files[0]
    })
};

fileUploadHandler = () => {
    
    const fd = new FormData();
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
    axios.post('http://127.0.0.1:3002/image', fd)
    .then(res=>{
        console.log(res);
    });
};

}

export default UploadImage;