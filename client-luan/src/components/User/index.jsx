import React from 'react'
import './style.css'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 90,
    height: 90,
    backgroundColor: '#f2f2f2',
    border: '#BDBDBD solid 1px'
  },
});

export default () => {
    const classes = useStyles();

    return(
        <div className='main-user'>
            <div className='user'>
                <Grid>
                    <Avatar alt="" src="" className={classes.bigAvatar} />
                </Grid>
                <label>
                    Nome
                </label>
                <div className='logo'>
                    FECHA-MESA
                </div>
            </div>
            
        </div>
    )
}