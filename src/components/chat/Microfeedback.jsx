import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Checkbox from '@material-ui/core/Checkbox';
import "../../assets/microfeedback.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
     
    },
    formControl: {
      margin: theme.spacing(),
      height:"100px"
    },
   
  }));

  const StyledRating = withStyles({
    iconFilled: {
      color: '#ff6d75',
     
    },
    iconHover: {
      color: '#ff3d47',
    },
    
  })(Rating);
  
  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon />,
      label: 'Very Satisfied',
    },
  };
  
  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  











export default function Microfeedback() {
    
    const classes = useStyles();
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  function myFunction() {
    alert("feedback submitted successfully!");
  }
  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const data = JSON.parse(sessionStorage.getItem('dataobject'));
  return (<div >
                 <div className="deal">
           <div></div><img src="./Images/offer_tag.jpg" alt="deal image" width="25" height="25"></img>
           
           <div className="offertext">{data.dealText}  </div>
           
        </div>
        <hr className="hr1"></hr>
        <div >
        <Box component="fieldset" mb={3} borderColor="transparent">
        
        <Rating
          name="customized-icons"
          defaultValue={2}
          getLabelText={(value) => customIcons[value].label}
          IconContainerComponent={IconContainer}
          className="smiles"
        />
      </Box>
        </div>
        <div className="selectbox">
        <FormControl component="fieldset" className={classes.formControl}>
      
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Feature / Promotion Not Understandable" style={{height: "1vh"}}/>
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="FAQs not Good Enough"style={{paddingTop: "5px"}}
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Support Results not Sufficient"style={{height: "1vh"}} />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Other"/>
        </FormGroup>
        </FormControl>
        </div >

        
       <div style={{posotion:"absolute",marginTop:"-70px"}}>
       {/* <hr className="hr3"></hr> */}
       <textarea placeholder={transcript} className="text_feedback"style={{height: "14vh"}} ></textarea>
      </div>
       <div><button  className="speakbutton1" onClick={SpeechRecognition.startListening}> <img src="./Images/mike.png" height="30px"style={{posotion:"absolute",marginTop: "-5px"}}></img></button></div>
<div ><button className="speakbutton2" onClick={myFunction} >Submit Feedback</button></div>
      </div>)
}