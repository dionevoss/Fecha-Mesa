import React, { useState, useEffect } from 'react'
import './style.css'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import api from '../../services/api'

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
    const [data, setData] = useState([]);
    const [image, setImage] = useState([]);

    useEffect(() => {
      async function fetchData() {
        await api
          .get(`/users`)
          .then(result =>{
            setImage(result.data.images)
            setData(result.data)
          } )
      }
      fetchData();
        }, []);

    return(
        <div className='main-user'>
            <div className='user'>
                <Grid>
                  {
                    image != null ? 
                    <Avatar src={image.url} alt={image.path}  className={classes.bigAvatar} />
                    : 
                    <Avatar className={classes.bigAvatar} />
                  }
                </Grid>
                <label>
                  {data.first_name} {data.last_name}
                </label>
                <div className='logo'>
                    FECHA-MESA
                </div>
            </div>
            
        </div>
    )
}