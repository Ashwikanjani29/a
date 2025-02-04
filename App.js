// import React from "react";
// function App() {
//   // let e= React.createElement("div",{className:"App"}, 
//   //   React.createElement("h1",null,"hi"))
//   let u= "aaa";
//   return (
//     // <div className="App">
//     //   <h1>hello</h1>
//     // </div>
//     // <section>
//     //   <h1>hello</h1>
//     // </section>
//     <div>
//     <h1>{u}</h1>
//     <p>{100-9}</p>
//     </div>
    
//   );
// }

// export default App;

//cbc
// class App extends React.Component{
//   render(){
//     return(
//       <h1>hi</h1>
//     )
//   }
// }
// export default App();

//fbc
// function App(){
//   return(
//     <h1>hi</h1>
//   )
// }
// export default App();


// !component composition:

import React from "react";
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import Sidebar from './components/Sidebar';
// import Sidebar1 from'./components/Sidebar1';
// import Footer from './components/Footer';

// const App=()=>{
//   return(
//     <div className="app">
//       <Navbar/>
//       <Main/>
//       <div className="sidebar">
//         <Sidebar/>
//         <Sidebar1/>
//       </div>
//       <Footer/>
//     </div>
//   )
// }
// export default App

import CBCPropex from "./propex/CBCPropex";

const App=()=>{
  return (
    <div>
      <CBCPropex usename="hi"></CBCPropex>
    </div>
  )
}