import React ,{Component}from "react";
import ImageUploader from "react-images-upload";

class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles, pictureBase64) {
    // picutreFiles에 boundery 정보가 return 되고,
    // pictureBase64 에 base64 정보가 return 된다. 기본 array로 return
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
    //ajax 넣는부분
    console.log(pictureBase64);
  };
  
  render() {
    return (<div className="upload-image">
        <h1> 이미지 업로드 테스트</h1>
        <div
          style={{
            display: "flex",
            border: "1px solid red"
          }}
        >
    
        <div style={{marginRight: "15px"}}>

          <ImageUploader
            withIcon={false}
            withPreview={false}
            buttonText="Choose images"
            onChange={this.onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
            singleImage={true}
          />
        </div>
        
        </div>

     </div>
    );

  }

}

export default UploadImage;