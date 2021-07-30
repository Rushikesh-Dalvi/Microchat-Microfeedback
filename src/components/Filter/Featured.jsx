import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Featured() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      
      <FormControl variant="outlined" className={classes.formControl} style={{ color: 'black', position: 'absolute', float: 'right', right: '200px', paddingLeft: '0px', paddingRight: '40px', textAlign: 'center',minWidth:"200px" }}>
        <InputLabel id="demo-simple-select-outlined-label">Featured</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Featured"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Under $100</MenuItem>
          <MenuItem value={20}>Under $75</MenuItem>
          <MenuItem value={30}>Under $50</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
