import React from 'react'
import './style.css'
import {Paper} from '@material-ui/core'

export default () => {
    return (
        <Paper>
            <div className='groups-table-main'>
                <table className='groups-table'>
                    <tr>
                        <th>
                            Grupos
                        </th>
                        <th>
                            Ações
                        </th>
                    </tr>
                    <tr>
                        <td>
                            É US guri
                        </td>
                        <td className='actions'>
                            Agua
                        </td>
                    </tr>

                    <tr>
                        <td>
                            É US guri
                        </td>
                    </tr>

                    <tr>
                        <td>
                            É US guri
                        </td>
                    </tr>
                </table>
            </div>
        </Paper>
    )
}