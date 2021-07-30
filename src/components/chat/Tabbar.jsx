import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Microchat from './MicroChat';
import "../../assets/Tabbar.css";
import Microfeedback from './Microfeedback';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '330px',
    height:"475px",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Tabbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          width="50px"
        
        >
          <Tab  width="50px" height="30px" icon={<div className="tabshead1"><img src="./Images/dialog_chat.png" width="25px" height="25px"/><p>Microchat</p></div>}{...a11yProps(0)} >Hiii</Tab>
          <Tab   icon={<div className="tabshead1"><img src="./Images/dialog_feedback.png" width="20px" height="20px"/><p>Microfeedback</p></div>} {...a11yProps(1)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      
       <Microchat/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Microfeedback/>
      </TabPanel>

    </div>
  );
}
