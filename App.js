// const heading = React.createElement("h1", {}, "Hello World from React JS");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{/* <div id="parent">
    <div id="child">
        <h1>This is heading</h1>
    </div>
</div> */}
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "This is heading")
  )
);

{/* <div id="parent">
<div id="child-1">this os child-1</div>
<div id="child-2">this os child-2</div>   
</div> */}

const parentOne=React.createElement("div",{id:"parent"},["this is parent",React.createElement("div",{id:"child-1"},"This is child-1"),
React.createElement("div",{id:"child-2"},"This is child-2")])


const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parentOne);