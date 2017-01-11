import React from 'react';
import Box from './Box';

export default class Boxes extends React.Component{
  constructor(props){
    super(props);
    this.state = {action:"start"};
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    this.setState({action:"value"})
  }
  getColors(){
     const r = Math.floor(Math.random()*256);
     const g = Math.floor(Math.random()*256);
     const b = Math.floor(Math.random()*256);
     const a = Math.random();
    //  let start = +this.num.value;
    //  var update=this.setState.bind(this)
    //  this.timer = setInterval(function(){
    //    start -= 1;
    //    if(start < 0){
    //      clearInterval(this.timer);
    //    }
    //    else
    //      update({counter:start});
    //  },1000)

    return {r, g, b, a};
  }
  onClick(){


  }

  render(){

    switch(this.state.action){
              case "start": return(
                                  <div>
                                    <h1>Boxes Games</h1>
                                    <input ref="input"  type = "text"  />
                                    <button onClick={this.onChange}>Generate</button>

                                  </div>
                                  )
     case  "value":  var num = this.refs.input.value

                  return(<div>
                         <h1>Boxes Games</h1>
                         <input type = "text" ref={node => this.num = node}  onChange={this.onChange} />
                         <button >Generate</button>
                              {
                                 Array(num).fill(null).map((_,i) =>{
                                 return <Box key={i} colors={this.getColors()}/>;
                               })
                             }
                       </div>
                     )



    }

  }
}
