import React ,{Component}from 'react';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import { Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import ResultData from './foodRecognition';
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';

// import axios from 'axios';

class UploadImage extends Component {
    constructor(props) {
     super(props);
    this.state = {
        selectedFile: null,
        imagePreview: "../../dist/Photo.png",
        resultDivState : false,
        maxPredictions : null,
        prediction : null,
        classPrediction : null, // 인식결과 통채로
        model : null,
        resultFoodIndex: '', //인식결과 위치확인
        resultFoodName:'', // 인식결과 재료 이름만
        resultFoodPercent:null, // 인식결과 확률만
        url : "https://teachablemachine.withgoogle.com/models/f6NBdJaqS/"
    };
  }

//마운트전에 resultDiveState 가 false인지 먼저 확인해야함

render(){
    let imagePreview = this.state.imagePreview;
    let isResultPageOn = this.state.resultDivState;

    return(
        <div className="uploadApp-page">

         <div className="uploadContainer">
                <h1 className="heading">음식 저장</h1>
                <div className="img-holder">
                    <img src={imagePreview} classname="img" id="img" alt="" width="200px" height="200px" ref={(ref) => {this.img =ref}} /> 
                    {/* ref 쓴이유 : img 태그 내용을 가져다 텐서플로우에 넣어줘야 동작해서 */}
                </div>
                  <input type="file" id="file" accept="image/*" name="image-upload"
                                    onChange={this.fileSelectedHandler} />

                  <div className="label">
                         <label className="image-upload" htmlFor="file">
                         <div className="upload-icon"><AddAPhotoIcon fontSize="large"></AddAPhotoIcon> </div>
                        </label>
                  </div>
 
             <div className="btn-send">
                   <Button variant="contained" color="primary"
                           onClick={this.sendTensorFlow} startIcon={<SaveIcon fontSize="large"/>}>
                       이미지 <br></br>인식
                  </Button>
             </div>
         </div>

         <div>
             { isResultPageOn ?   <ResultData src={this.state.imagePreview} 
                                                resultName={this.state.resultFoodName}
                                                func={this._setResultDiv}
                                                setDefaultImage={this._setDefaltImage}
                                                resultPercent={this.state.classPrediction}/> : console.log("사진이없습니다") }
         </div>
         {/* <Route path="/result" component={ResultData} /> */}
        </div>
    )
}

//하위 컴포넌트 ResultData 에서 상위의 resultDivState 상태를 false 로 설정하기 위한 함수
_setResultDiv = (res) => {
    this.setState({
        resultDivState:res
    })
}
_setDefaltImage = (res) => {
    this.setState({
        imagePreview:res
    })
}

setResultDiv = () => {
    console.log("div 이벤트 눌림");
    console.log(this.state.resultDivState);
    if(this.state.resultDivState == false){
        this.setState({resultDivState:true})
    }else{
        this.setState({resultDivState:false})
    }
}

imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
        if(reader.readyState === 2){
            this.setState({imagePreview: reader.result})
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

sendTensorFlow = () => {
    { this.state.selectedFile == null ? console.log("사진이 없습니다.") : this.setResultDiv() }
    this.init();
    console.log(this.state.selectedFile);
    console.log(this.state.resultDivState);
};
// 서버에 이미지업로드가 필요할 때 쓰는 함수 

// fileUploadHandler = () => {
//     const fd = new FormData();
//     fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
//     axios.post('http://127.0.0.1:3002/image', fd)
//     .then(res=>{
//         console.log(res);
//     });
// };

//학습모델 불러옴
async init() {
    console.log("init 이벤트 발생");
    const modelURL = this.state.url + "model.json";
    const metadataURL = this.state.url + "metadata.json";

    this.setState({model : await tmImage.load(modelURL, metadataURL)});
    this.setState({maxPredictions: this.state.model.getTotalClasses()});
    console.log(this.state.maxPredictions);
    this.predict();
}

//예측
async predict() {
    let image = this.img;
    this.setState({prediction: await this.state.model.predict(image , false)});
    console.log(this.searchCorrectImage());
    this.setState({classPrediction : this.state.prediction[this.state.resultFoodIndex].className + ": " + this.state.resultFoodPercent}) 
    this.setState({resultFoodName : this.state.prediction[this.state.resultFoodIndex].className})
    console.log(this.state.classPrediction);

}

// 확률 제일 높은 항목 찾는 함수
searchCorrectImage(){
    let index;
    let temp=0;
    let predictions = this.state.prediction;
    for(let i =0;i<predictions.length;i++){
        console.log("테스트 [" + i + "] : " + predictions[i].probability);
        if(temp < predictions[i].probability){
            temp = predictions[i].probability;
            index = i;
        }
    }
    temp = (temp * 100)
    console.log(index,temp)
    this.setState({resultFoodIndex:index , resultFoodPercent:temp})
    //결과값 state 에 저장 
}

}

export default UploadImage;