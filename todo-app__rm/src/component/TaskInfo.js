import React from 'react';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    linearStyle:{
        width:"80%",
        backgroundColor:"black",
        margin:"5%",
        marginTop:"10%"
    },
    gridStyle:{
        alignItems:"center",
        justify:"center",
    },
    itemStyle:{
        textAlign:"center"

    }
  }));

export function Task(){
    const [tasks,setTasks]=React.useState(0)
    const classes = useStyles();
    return(
        <Box>
            <Box className={classes.linearStyle}>
                <LinearProgress value="20" variant="determinate"/>
            </Box>
            <Box className={classes.gridStyle}>
                <Grid container>
                    <Grid className={classes.itemStyle} item xs={4}>
                        <Typography gutterBottom display="box" >{tasks}</Typography>
                        <Typography gutterBottom display="inline" >Completed</Typography>
                        <Typography gutterBottom display="box" >tasks</Typography>
                    </Grid>
                    <Grid className={classes.itemStyle} item xs={4}>
                        <Typography gutterBottom display="box" >{tasks}</Typography>
                        <Typography gutterBottom display="inline" >To Do</Typography>
                        <Typography gutterBottom display="box" >tasks</Typography>
                    </Grid>
                    <Grid className={classes.itemStyle} item xs={4}>
                        <Typography gutterBottom display="box" >{tasks}</Typography>
                        <Typography gutterBottom display="inline" >ALL</Typography>
                        <Typography gutterBottom display="box" >tasks</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};