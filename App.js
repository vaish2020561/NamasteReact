/*
  <div id = "parent">
    <div id= "child">
    <h1> i am h1 tag</h1>
    <h2>i am vaishnavi</h2>
    </div>
    <div id= "child2">
    <h1> i am h1 tag</h1>
    <h2>i am vaishnavi</h2>
    </div>
  </div>  


  reactElement(object => html(browser understand))
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am Vaishnavi"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h2", {}, "i am Vaishnavi"),
  ]),
]);

const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello world from react!"
);
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


//jsx