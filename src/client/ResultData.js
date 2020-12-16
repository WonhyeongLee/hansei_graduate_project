import React , { useState,useRef }from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { Button } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { post } from 'axios';
import SaveIcon from '@material-ui/icons/Save';
import photo from './Photo.png';

// 나중에 contextAPI 적용해서 DB에 저장하는 부분을 SaveData.js 로 분리해야함
// DB 조회 (리셋) 하는걸 최상위 컴포넌트로 옮겨서 리덕스를 사용해서 분리해야함
// 이유는 삭제와 추가가 서로 다른 컴포넌트에서 이루어지고 두 컴포넌트가 계단식이라 ..
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    button: {
        margin: theme.spacing(1),
      },
  }));

//   class ResultData extends Component {
export default function ResultData(props) {
        const [value , setValue] = useState(0);
        const [name,setName] = useState('');
        const classes = useStyles();
        const insertData = useRef();
        let imagePreview = props.src; // upload_image 컴포넌트에서 받은 이미지 정보(base64)
        let resultFoodName = props.resultName;
        let resultPercent = props.resultPercent;
        let setResultDiv = props.setResultDiv;
        let setDefaultImage = props.setDefaultImage;
        
        const func = props.func;

    //버튼누르면 작동 
    const handleSubmit= (e) => {
        e.preventDefault()
        addItems()
        .then((res)=> {
            console.log("INSERT SUCCESS");
        })
        .then(()=>{
            changeDivState()
            resetImage()
        })
    };
    //DB에 INSERT 하는 함수 
    const addItems = () => {
        const url = "https://hansei-project.herokuapp.com/db/items";
        const formData = new FormData();
        formData.append('name',name)
        formData.append('value',value)

        const config = {
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }
        return post(url,formData,config)
    };    
    const showNumber = (e) => {
        console.log("showNumber 함수");
        setValue(e.target.value);
        setName(resultFoodName);
        console.log(e.target.value);
    };

    const changeDivState = () => {
        let state = false
        func(state)
    }
    const resetImage = () => {
        let img = photo;
        setDefaultImage(img)
    }

    return (
        <div className="resultPage resultPageOut">
            <div className="goToBack">

                <Button variant="contained" 
                        onClick={setResultDiv}
                        startIcon={<KeyboardBackspaceIcon fontSize="large"/>}>
                        뒤로가기
                </Button>

            </div>
            <img src={imagePreview} className="result-img" alt="" width="200px" height="200px"/>
            <div className="result-div">
                <div className="result-percentation">
                    <div>{resultPercent}</div>
                </div>

                <div className="result-buttons">
                <form className={classes.root} noValidate autoComplete="off">
                    <div className="insert-num">
                    <TextField
                        ref ={insertData}
                        id="outlined-number"
                        label="수량"
                        type="number"
                        InputLabelProps={{
                                shrink: true,
                            }}
                        variant="outlined"
                        onChange={showNumber}
                    />
                </div>
                </form>
                    {/* <div className="re-upload">
                        재촬영
                    </div> */}
                </div>
                <div className="save-db">
                        <Button variant="contained"
                                type="submit"
                                onClick={handleSubmit}
                                color="primary"
                                size="large"
                                className={classes.button}
                                startIcon={<SaveIcon />}>
                                Save
                        </Button>
                        
                </div>
                {/* <p> 인식결과 : {resultFoodName} 수량 : {value} </p> */}
            </div>
        </div>
    );
}