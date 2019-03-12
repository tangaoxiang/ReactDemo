import React from 'react'
import ReactDom from 'react-dom'
//import "css/index.css"

const input = React.createElement("input",{type:Text,width:200,height:30,id:'myInput'})
const div = React.createElement('div',{id:'mainDiv'},"",input);
ReactDom.render(div,document.getElementById("app"));
