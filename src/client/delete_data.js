import React ,{Component} from 'react';
import axios from 'axios';

class DBDelete extends Component {
    async deleteData(id){
        console.log("삭제버튼 눌림 : " + id);
        const url = "http://localhost:3002/db/" +id;
        //await axios 이용 , 삭제버튼 누를 때 데이터를 받기전에 화면이 새로고침되는 문제 해결 
        await axios({
            method: 'DELETE',
            url: url
        })
        .then(function(res){
            //나중에 주석처리 
            console.log("비동기반응");
            console.log(res);
            
        })
        this.props.stateRefresh();
    }

    render(){
        return(
            <button onClick={(e)=>{this.deleteData(this.props.id)}}>삭제</button>
        )
    }
}

export default DBDelete;