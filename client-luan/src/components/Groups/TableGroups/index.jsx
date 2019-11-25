import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete'
import ExitToApp from '@material-ui/icons/ExitToApp'
import {Paper} from '@material-ui/core'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import {TableTitleStyle, TableRowStyle} from './style'

export default () => {

    const groups = [
        {id: 1, name: 'us guri'},
        {id: 2, name: 'network'},
        {id: 3, name: 'gurizada do tsi'}
    ]

    return(
        <Paper>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableTitleStyle>ID</TableTitleStyle>
                        <TableTitleStyle>NOME DO GRUPO</TableTitleStyle>
                        <TableTitleStyle>AÇÕES</TableTitleStyle>
                    </TableRow>
                </TableHead>

                <TableBody>
                {groups.map(row => (
                    <TableRowStyle key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>
                            <DeleteIcon />
                            <ExitToApp />
                        </TableCell>
                    </TableRowStyle>
                ))}
                </TableBody>
            </Table>
        </Paper>
    )
}