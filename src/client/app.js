import React, {Component} from 'react';
import ShowDB from './showdb';
import UploadImage from './upload_image';
import RecommandFood from './recommand_food';

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
            <div className="App">
              <header className="App-header">
                  <ShowDB />
                {/* {username ? `Hello ${username}` : 'Hello World'} */}
              </header>
              <article className="App-main">
                <UploadImage />
                <RecommandFood />
              </article>
            </div>
        );
    }
}

