import React from 'react';

let Sum = function(props){
  var sum =props.nums.reduce((a,b) => a+b)
  return(
    <div>
    <h1>Sum ={sum}</h1>
    </div>
  )
}
export default Sum;
