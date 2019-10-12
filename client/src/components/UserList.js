import React, { Component } from 'react';
import API from '../utils/api';
import Moment from 'react-moment';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {
    Paper,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@material-ui/core';



export default class UserList extends Component {
    state = {
        users: [],
    };


    componentDidMount() {
        API.get('/users').then(res =>{
            console.log(res.data)
            this.setState({ users: res.data });
            });
    }

    render() {
        return(
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nome</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell>Data de Registro</TableCell>
                            <TableCell align="justify">Ação</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.users.map(users => (
                            <TableRow key={ users.id }>
                                <TableCell>{ users.first_name + " " + users.last_name }</TableCell>
                                <TableCell>{ users.email }</TableCell>
                                <TableCell><Moment format="DD/MM/YYYY">{ users.created_at }</Moment></TableCell>
                                <TableCell>
                                    <IconButton color="primary"><EditIcon></EditIcon></IconButton>
                                    <IconButton color="secondary"><DeleteIcon></DeleteIcon></IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }


}