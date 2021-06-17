import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    profile: {
        color: 'black',
        height: 48,
        padding: '0 30px',
        display:'flex',
        alignItems:'center' ,
        marginTop:"10%"
    },

    avatarStyle:{
        backgroundColor:"black",
        margin:"5%"
    },

    linearStyle:{
        width:"80%",
        backgroundColor:"black",
        margin:"5%",
        marginTop:"10%"
    }
  }));

export function User(){
    const classes = useStyles();
    return(
        <Box>
            <Box m={2} className={classes.profile}>
                <Avatar className={classes.avatarStyle} alt="your icon" src={`${process.env.PUBLIC_URL}/logo192.png`} />
                <Typography gutterBottom display="inline" >Junki Itagaki</Typography>
            </Box>
        </Box>
    )
};