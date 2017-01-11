import React from 'react';
import "./timer.css"

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter:0};
    this.go = this.go.bind(this);
  }
  go(){
    let start = +this.num.value;
    var update=this.setState.bind(this)
    this.timer = setInterval(function(){
      start -= 1;
      if(start < 0){
        clearInterval(this.timer);
      }
      else
        update({counter:start});
    },1000)
  }
  render(){
     return(
       <div>
       <h1>Timer</h1>
       <br></br>
       <input ref={node => this.num = node} type ='text'/>   <button onClick={this.go}>Go</button>
       <br></br><br></br>
       <label>{this.state.counter}</label>
       </div>
     )
  }
}
export default Timer;
