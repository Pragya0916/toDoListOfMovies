import React, { useState } from "react";
import List from "./List/List";
import "./App.css";

const App = () =>{
const [inputlist, setInputList] = useState("");
const [showallelem , setShowAllElem] = useState([]);


  function showInputElem(e){
setInputList(e.target.value);
  }

  function allElem(){
setShowAllElem( (prevElem) => {
  return [...prevElem , inputlist]
});
setInputList('');
  }

  function delItems(id) {
    console.log("deleted")

    setShowAllElem( (prevElem) => {
      return prevElem.filter( (arrElem , index) =>{
        return index !== id ;
      })
    }
    )
}
return(
<>
<div className="main_div">
  <div className="center_div">
    <br/>
<h1 className="heading">Enter Movies...</h1>
<br/>
<input 
type= "text"
value={inputlist}
placeholder="Enter Movies.."
onChange={showInputElem}/>
<button 
className="btn1"
onClick={allElem}>+</button>


{showallelem.map( (elem , index) =>{
  return (
<List 
key ={index}
id={index}
text = {elem}
onSelect={delItems}/>
  )
})
}
</div>
</div>
</>
)
}
export default App;