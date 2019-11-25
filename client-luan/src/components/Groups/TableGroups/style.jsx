import styled from 'styled-components'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export const TableRowStyle = styled(TableRow)`
    && {
        :hover {
            cursor: pointer;
            background: #eeeeee;
        }
    }
`

export const TableTitleStyle = styled(TableCell)`
    && {
        font-weight: 700;
        font-size: 1.2em;
    }
`