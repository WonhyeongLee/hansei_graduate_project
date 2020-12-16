import React, {Component} from 'react';
import ShowDB from './showdb';
import UploadImage from './UploadImage';




export default class App extends Component{
constructor(props){
    super(props);
    this.state = { name: "" };
}
// componentDidMount(){
//     fetch('http://localhost:3002/api1')
//     .then(res=>res.json())
//     .then(data=>this.setState({username:data.username}));
// }
    render(){
        //const {username} = this.state;
        return (
            <div className="container">

            <div className="showApp">
                <ShowDB />

            </div>
            <div className="uploadApp">
                <UploadImage />
                </div>
                <div className="recommandApp">
                {/* <RecommandFood /> 음식추천 , 어디에 넣지 ? */}
                </div>
            </div>
        );
    }
}



