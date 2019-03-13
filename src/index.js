import React from 'react'
import ReactDom from 'react-dom'
//import "css/index.css"

//const input = React.createElement("input",{type:Text,width:200,height:30,id:'myInput'})
//const div = React.createElement('div',{id:'mainDiv'},"",input);
let arr = [1,2,3,4,5]; 
const div = <div id='div1'>
{
    <div>{arr.map(c=><h5 key={c}>{c}</h5>)}</div>
}
</div>;
ReactDom.render(div,document.getElementById("app"));
