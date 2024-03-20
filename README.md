# NamasteReact

# Parcel

-dev build
-local build
-HMR = HOT MODULE REPALCEMENT
-file watching algorithm - written in c++
-faster build because of caching
-image optimization
-minification of file
-bundling
-compress
-consistent hashing
-code splitting
-diffrential bundling-support older browsers
-https
-tree shaking- remove unused code
-diffrent build for dev

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

// React Element => object => render the element on to the dom it will becomes the html element

// JSX => Javascript syntax to create react element

// jsx is not html inside javascript it is html like sysntax . lookslike xml

//js engine understands the ecmascript

//parcel will tanspiled the code before it reaches the javascript engines

// babels jobs to transpiled code .parcel give the job or transpilation to babel -

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); // core react

//attributes to jsx will use camelcase - find attributes of various tags

// console.log(heading);
// jsx

// REACT COMPONENET - component coposition
// class based componenets(old way) and functional components(new way)

//react functional component is just a normal javascript function - name it with capital letter
// const Header = () => <h1>Namaste react functional components</h1>;

//cross size scripting=> escape things by jsx .sanitize the data by jsx .

// confuig driven UI - very important

// header , body , footer //
// header - logo, nav items
// body - search input ,
// card conatiner(lot of restuarnts cards),
// -Img,Name of res, star rating, cuisines, deliverytimer
// footer - copyright,links ,adresse

// export / import 

- export default componenet;
  -import componnet fron path;
  -named export component;
  -with named import use {} ;

///React Hooks

-they are normal js functions .written by facebook developers.
-useState() function- superpowerful state variables in react components.
-useEffect() function

- whwenever a state variable changes react will re-render.

/////////Reconciliation Algorithm (react fibre) - virtual dom (not an actual dom but the representation of actual dom)
////diff algorithm - differs between virtual dom and new dom .

/////monolith,microservice architecture//////

monolith architecture - big bulky project in which there would be api, frontend backend, etc.
microservice architecture - diffrent services for diffrent jobs like backend, frontend , auth , etc. these servieces needs to interact with each other //port 1234 :ui services,port :1000 :backend - at the end they are deployed on same domain

////////// as soon as page loads we can make an api call and wait for api to come and then we render the ui--- approach 1
/////////// as soon as page loads we will render UI now make an api call then re render the UI with new data , in react 2nd approach and gies better UX

/// cors vedio , aysnc await

////recocialition cycle - react rerenders because of state change var

export default Body;

// createbrowser, routerprovider => study on this
// approuter gives object
/// children routes
//link
//outlet
//error page and its hooks
//two types routing - cleint sides routing, server side routing , dyanamic routing

     const { itemCards } =
    resInfo?.cards[2]?.groupedCards?.cardGroupedMap?.REGULAR?.cards[1]?.card
      ?.card;

// classBased componenet : super props
//use code and  explain all concept 
//lifecycle of react component
//react lifecycle diagram
//single resposiblity function
//custom hooks
//chunking
//code splitting
//dynamic bundling
//Lazy loading
//on demand loading
//suspense
//dynamic import
//SASS and SCSS
//styled components
//tailwind css - 
//material UI 
//react-bootstrap
//bootstrap
//HOC 
//pure functions 
//controlled and uncontrolled components 
//lifting up the state 
//data layer - state ,variables
//UI layer - powerd by Data layer

{
     <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" "}
            {item.card.info.price || item.card.info.defaultPrice}
          </li>
        ))}
      </ul>
}

//props drilling 
//context
//useContext 
//in class based component - <UserContext.consumer>
{(data => console.log(data))}

//UserContext.provider

//redux -
// redux toolkit
//  - install libraries - @reduxjs/toolkit , react- redux
    - Build our own store 
    -connect our store to our app 
    -create a slices of cart 
    -dispatch action 
    -selector
    -make sure u have subscribed to correct portion of store- beacause in 2 lines it will not efficeint 
    - in vanilla redux state should not mutate
    - immer js finding the diff bteween the state in newer state and old
    -console.log(current(state)) in redux it will create proxy object if you not use current
    - middlerware, and thunks read about that 
    - redux toolkit query 

// Testing - manual testing - 
// Unit testing 
// Integraation testing 
// End to End testing  - E2E, selenium,cyrus

//--> React testing library , for testing purposes
  --> jest - read documents
  --> Babel - read documents
  --> babel dependencies- babel.config.js
  --> babel.cofig and parcelrc files made to test  with jest library
  -->  configure parcel  to diable default babel tranpilaation 
  --> npx jest --init- command
  --> jsdom - read (npm install --save-dev jest-environment-jsdom)
  -->(__) --> known as dunder test meanns underscore 2 time
  -->  Assertion  (expect().tobe())
  --> install @babel/preset-react to make jsx  work in test cases
  -->Include the script in babel file so it can read and not give error-- presets read about it;
  --> Install @testing-library/jest-dom for the tobethedocument() function