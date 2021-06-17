import React from 'react';
import Box from '@material-ui/core/Box';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing(3),
      },
    
  }));

export function Tag(){
    const classes = useStyles();
    return(
        <Box className={classes.root}>
            <FormGroup >
                <FormControlLabel
                    control={<Checkbox name="checkedA" />}
                    label="Tag1"/>
                <FormControlLabel
                    control={<Checkbox name="checkedA" />}
                    label="Tag2"/>
                <FormControlLabel
                    control={<Checkbox name="checkedA" />}
                    label="Tag3"/>
            </FormGroup>
        </Box>
    )
};