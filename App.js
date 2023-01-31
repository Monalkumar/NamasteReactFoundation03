import React from "react";
import ReactDOM from "react-dom/client";
import { createElement as A } from "react";
import reactLogo from "./assets/Images/apple.png";
import foodLogo from "./assets/Images/fork.png";

// Create a nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")



// const header = React.createElement("h1",{id:"h2"}, "Hello world" )

// const header2= React.createElement("h2",{id:"h2"}, "Namaste React")
// const header3= React.createElement("h3",{id:"h3"},"Hello React Js")
// const container = React.createElement("div",{class:"title"}, [header,header2,header3]);

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(container)

// others way of writing this like


// const container = A("div",{class:"title"}, 
// [A("h1",{id:"h2"}, "Hello world" ),
// A("h2",{id:"h2"}, "Namaste React"),
// A("h3",{id:"h3"},"Hello React Js")]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container)

// Create the same element using JSX

const heading= (
    
    <div><img  src={reactLogo} alt="apple logo" /></div>
    
    
)

const Heading2= ()=>(
    
   
    <div><img src={foodLogo} alt="food logo" /></div>
    
)

const Heading=()=>{
    return (
    <div>
    
   <input type="text" placeholder="search here......"></input> 
    </div>
)}

// Create the same element using functional component


const HeaderComponent=()=>{
    return(
        <div className="flex-container">
        
       {heading}
       <Heading/>
       <Heading2/>
       
     
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>)
























