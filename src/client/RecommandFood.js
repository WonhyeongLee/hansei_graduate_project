import React from'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Selects from './checkbox';
import { Dialog} from '@material-ui/core';

//버튼 커스텀 CSS 
const StyledButton = withStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      borderRadius: 3,
      border: 0,
      color: 'black',
      height: 45,
      padding: '0 30px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

const RecommandFood = (props) => {
    let openR = props.openR;
    let dbdatas = Array.from(props.dbdatas);
    //json 형식 db데이터를 배열로 만듬 
    const handleClose = props.handleClose;
    const handleClickOpenR = props.handleClickOpenR;

    let foodValue = [...new Set(dbdatas.map(it => it.food))];
    //배열로 바꾼 데이터를 food 만 추출해서 foodValue 로 저장 



    console.log("food 전달 DB data :" + dbdatas);
    console.log("value : " + foodValue);
    return (
        <div className="recommand-food">
            <StyledButton variant="contained" className="btn-food" onClick={handleClickOpenR}> 
            음식 추천 
            </StyledButton>

            <Dialog open={openR} onClose={handleClose} fullWidth={true} maxWidth={'md'} >
                    <Selects foodValue = {foodValue}/>
                    {/* foodValue 값넘김 */}
            </Dialog>

        </div>
    );  


};

export default RecommandFood;