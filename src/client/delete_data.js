import React ,{Component} from 'react';

class DBDelete extends Component {
    deleteData(id){
        const url = "http://localhost:3002/db/" +id;
        fetch(url,{
            method: 'DELETE'
        });
        this.props.stateRefresh();
    }

    render(){
        return(
            <button onClick={(e)=>{this.deleteData(this.props.id)}}>삭제</button>
        )
    }
}

export default DBDelete;