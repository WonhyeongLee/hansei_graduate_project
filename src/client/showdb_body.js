import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DBDelete from './delete_data';

class ShowData extends React.Component {
    render() {
    return (
    <TableRow>
    <TableCell>{this.props.id}</TableCell>
    <TableCell>{this.props.food}</TableCell>
    <TableCell>{this.props.type}</TableCell>
    <TableCell>{this.props.quantity}</TableCell>
    <TableCell><DBDelete stateRefresh={this.props.stateRefresh} id={this.props.id}/></TableCell>
    </TableRow>
    )
    }
    }
    
    export default ShowData;
    
    