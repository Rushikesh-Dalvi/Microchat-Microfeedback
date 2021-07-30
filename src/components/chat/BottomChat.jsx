import React, { Component ,useState} from 'react';
import ReactDOM from 'react-dom';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
 import "../../assets/bottomchat.css";
 import  '../../services/Dataholding';
 import eventBus from "../../services/Dataholding";

 
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: 'orange',
  headerFontColor: 'white',
  headerFontSize: '15px',
  botBubbleColor: 'grey',
  botFontColor: 'black',
  userBubbleColor: 'black',
  userFontColor: 'white',
  
  
};


class BottomChat extends Component {
 
//export default function  BottomChat (){
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    
  }
 
  componentDidMount() {
    eventBus.on("productname", (data) =>{
     
      this.setState({ name: data.name });
     
  });
  
  }
  componentWillUnmount() {
    eventBus.remove("productname");
    
  }

   display = () => {
    
    var x = document.getElementById("myDIV");
   
    if (x.style.display === "none") {
      
      x.style.display = "block";
      
    } else {
     
      x.style.display = "none";
     
     
    }
   
    
  }

   // const[name,setState] = useState();
  // const[print,setPrint]=useState(false);
  //const chatdata = this.dataHolding.getData(data);
 // if(this.dataHolding){console.log(this.dataHolding.getData(data));}
 
 steps = 
    [
        {
          id: '1',
          message: 'Hi, How are you? Hope you are having a wonderful day! I’m just going through your query, give me a few seconds and I’ll definitely help you out!',
          trigger: '4',
        },
        {
          id: '4',
          message: 'I want to know more about',
          trigger: 'name',
        },
        {
          id: 'name',
          user: true,
          trigger: '2',
        },
        
        {
          id: '2',
          message: 'we are working on your concern please wait!!',
          trigger: 'wait',
        },
        {
          id: 'wait',
          user: true,
          trigger: '3',
        },
       
        {
          id: '3',
          message: 'Great! thank u',
          
        },
      
      ]
  

  render() {
  console.log(this.state.name);
  let prdname;
  prdname=this.state.name;
  return (<div className="bottomchat" id="myFirstDialog"  >
 
 <div className="closechatbtn">
   <button className="closechatbot" onClick={this.display}>close</button>
   </div>

 
    <ThemeProvider theme={theme}>
      <ChatBot 
       steps={this.steps}
      >
 
      </ChatBot>
        
      </ThemeProvider>
    {prdname}
      </div>
      )
}
}

export default BottomChat;