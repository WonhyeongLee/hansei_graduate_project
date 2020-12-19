
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
import RecommandFood from './RecommandFood';




class ShowDB extends Component{
    constructor(props){
        super(props);
        this.state = {
            dbdatas:"",
            openL:false,
            openR:false,
        }
        this.handleClickOpenL = this.handleClickOpenL.bind(this);
        this.handleClickOpenR = this.handleClickOpenR.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.stateRefresh = this.stateRefresh.bind(this);
    }

    stateRefresh(){
        console.log("stateRefresh");
        this.setState({
            dbdatas:""
        });
        this.getDatas();
    }
    // "https://hansei-project.herokuapp.com/db"
    getDatas = async () =>{
        const foods = await fetch("https://project-server-pdopf.run.goorm.io/db",{
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

    handleClickOpenL(){
        this.stateRefresh()
        this.setState({openL:true})
        //누르는 시점에서 DB 다시 조회 , 내냉장고 모달 컨트롤
    }

    handleClickOpenR(){
        console.log("R눌림");
        this.stateRefresh()
        this.setState({openR:true})
        //누르는 시점에서 DB 다시 조회 , 음식추천 모달 컨트롤
    }
    handleClose() {
            if(this.state.openL === true) 
                this.setState({openL : false})
            else
                this.setState({openR : false})
        }

    render(){
        return(
           <div className="btn-showDB">
                <Button variant="contained" className="btn-db" onClick={this.handleClickOpenL}> 
                <StorefrontIcon fontSize="large" className="btn-db-icon"></StorefrontIcon>내 냉장고
                </Button>
                <Dialog open ={this.state.openL} onClose={this.handleClose }>
                    <DialogTitle>냉장고 조회</DialogTitle>
                    <DialogContent>
                           <TableHead>
                                <TableRow>
                                    <TableCell>번호</TableCell>
                                    <TableCell>이름</TableCell>
                                    <TableCell>수량</TableCell>
                                    <TableCell>옵션</TableCell>
                                </TableRow>
                           </TableHead>
                           <TableBody>
                                {this.state.dbdatas ? this.state.dbdatas.map(c=>{
                                    return <ShowData stateRefresh={this.stateRefresh} id={c.id} food={c.food} quantity={c.quantity} /> 
                                }):""}
                           </TableBody>
                    </DialogContent>
                </Dialog>
                <RecommandFood dbdatas={this.state.dbdatas} openR={this.state.openR} handleClose={this.handleClose}
                                handleClickOpenR={this.handleClickOpenR}
                />
           </div>
        )
    }
}

export default ShowDB;