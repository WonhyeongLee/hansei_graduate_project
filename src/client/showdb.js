
import React ,{Component}from 'react';
import Button from '@material-ui/core/Button';
import StorefrontIcon from '@material-ui/icons/Storefront';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContentText, TableBody, TableHead } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import ShowData from './showdb_body';
import axios from "axios";

require("@babel/polyfill");



class ShowDB extends Component{
    constructor(props){
        super(props);
        this.state = {
            dbdatas:"",
            open:false
        }
        this.handleClickOpen = this.handleClickOpen.bind(this)
        this.handleClose = this.handleClose.bind(this);
        this.stateRefresh = this.stateRefresh.bind(this);
    }

    stateRefresh(){
        this.setState({
            dbdatas:""
        });
        this.getDatas();
    }

    getDatas = async () =>{
        const foods = await fetch("http://localhost:3002/db",{
            method: "get", 
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(),

        })
        .then((res)=>res.json())
        .then((json)=>{
            console.log(json);
            this.setState({dbdatas: json});
        });
    };
    componentDidMount(){
        this.getDatas()
    }

    handleClickOpen(){
        this.setState({
            open:true
        });
    }
    handleClose() {
        this.setState({
            open:false
        })
        }

    render(){
        return(
           <div className="btn-showDB">
                <Button variant="contained" className="btn-db" onClick={this.handleClickOpen}> 
                <StorefrontIcon fontSize="large" className="btn-db-icon"></StorefrontIcon>내 냉장고
                </Button>
                <Dialog open ={this.state.open} onClose={this.handleClose}>
                    <DialogTitle>냉장고 조회</DialogTitle>
                    <DialogContent>
                           <TableHead>
                                <TableRow>
                                    <TableCell>번호</TableCell>
                                    <TableCell>이름</TableCell>
                                    <TableCell>종류</TableCell>
                                    <TableCell>수량</TableCell>
                                    <TableCell>옵션</TableCell>
                                </TableRow>
                           </TableHead>
                           <TableBody>
                                {this.state.dbdatas ? this.state.dbdatas.map(c=>{
                                    return <ShowData stateRefresh={this.stateRefresh} id={c.id} food={c.food} type={c.type} quantity={c.quantity} /> 
                                }):""}
                           </TableBody>
                    </DialogContent>
                </Dialog>
           </div>
        )
    }


}


export default ShowDB;