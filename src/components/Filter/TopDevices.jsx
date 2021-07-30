import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import  './FeaturedStyle.css';
import '../../assets/topdevices.css';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function TopDevices() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      
      <FormControl variant="outlined" className={classes.formControl} style={{ color: 'black', position: 'absolute', float: 'right', right: '15px', paddingLeft: '0px', paddingRight: '30px', textAlign: 'center',minWidth:"200px" }}>
        <InputLabel id="demo-simple-select-outlined-label">Top Devices</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Top Devices"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Apple</MenuItem>
          <MenuItem value={20}>Samsung</MenuItem>
          <MenuItem value={30}>Pixel</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
