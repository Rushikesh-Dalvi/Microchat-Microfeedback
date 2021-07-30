import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/microchat.css";
import eventBus from "../../services/Dataholding";

export default class Microchat extends Component {

  // acessing session data from mobile data using data object
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  

  //display fn
   display = (prdname) => ()=> {
     console.log(prdname);
    this.setState({ name: prdname })
    eventBus.dispatch("productname", { name: prdname });
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  render() {
    const data = JSON.parse(sessionStorage.getItem('dataobject'));
  return (<div >
    <div className="deal">
      <div></div><img src="./Images/offer_tag.jpg" alt="deal image" width="25" height="25"></img>

      <div className="offertext">{data.dealText} </div>

    </div>
    <div id="btmbdr"></div>
    <hr className="hr1"></hr>
    <div className="para"><div className="question">What do I Need to do?</div>
      But Two of these {data.productName}. One has to be a on a new line. Of course you’ll need to pay the taxes and
      the $30 Activation Charges or Upgrade Charges upfront. And the minimum plan has to be unlimited for $125/Mo.
      Based on your Credit Score however a down payment might be required.
      And you’ll need to sign a 0% APR installment agreement (30-mo. term at up to $40/mo.).</div>
    <div className="chatb">
      <button className="chatbox1">+?Clarify before I Buy </button>
      <button className="chatbox2" onClick={this.display(data.productName)}>  Clarify Now</button>
    </div>
    <div id="btmbdrcommon"></div>
    <hr className="hr1"></hr>
    <div className="para"><div className="question">What will I get after that?</div>
      {data.productName} 256GB for over 75% off after up to $750 in bill credits—sweet!
      {data.productName} will be up to $750 off.
    </div>

    <div className="chatb">
      <button className="chatbox1">+?Clarify before I Buy </button>
      <button className="chatbox2" onClick={this.display(data.productName)}>  Clarify Now</button>
    </div>

    <hr className="hr2"></hr>

    <div>
      <textarea placeholder="Ask a Question (Optional)" className="textareaa" ></textarea>

      <img className="enterimage" src="./Images/entericon.png" alt="Entericon image" width="30px" height="30px"></img>
    </div>
    <Link className="searchspt">Search in Support</Link>
   
  </div>)
}
}
