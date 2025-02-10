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

// import React,{Component} from "react";
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

//props

// import React,{Component} from "react";
// import CBCPropex from "./propex/CBCPropex";
// import FBCpropex from "./propex/FBCpropex";

// export default class App extends Component{
//   render(){
//     return(
//       // <div>
//       //   <CBCPropex 
//       //   username="hi"
//       //   age={20}
//       //   hobbies={["playing","reading"]}
//       //   address={{city:"sricilla",area:"gandinagar"}}
//       //   sendFun={function(){alert("hello i am aa")}}
//       //   />
//       // </div>
//       <div>
//         <FBCpropex name="Abhinay" 
//         isMarried={true}
//         hobbies={["chatting","reading","playing"]}
//         />
//       </div>
//     )
//   }
// }

// import React from 'react'
// import PropChildex from './propex/PropChildex'
// import SubChild from './propex/SubChild'
// import Child from './propex/Child'


// const App = () => {
//   return (
//     <div>App
//       <PropChildex num={1000}>
//       <h1>hello</h1>
//       <SubChild/>
//       <Child/>
//       </PropChildex>

//     </div>
//   )
// }

// export default App

// import React from 'react'
// import CBCStateex from './stateexample/CBCStateex'
// import FBCStateex from './stateexample/FBCStateex'
// import Functional from './components/Functional'
// import './components/Styles.css'
// import Assignment from './components/Assignment'
// import MyForm from './components/MyForm'

// const App = () => {
//   return (
//     <div>
//       {/* <CBCStateex/> */}
//       {/* <FBCStateex class='heading'/> */}
//       {/* <h1 class='heading'>Ashwikanjani</h1>
//       <Functional clgName='MRU ' city='Hyd' apply={true}/>
//       <h1>hello </h1> */}
//       <MyForm/>
//     </div>
//   )
// }
import React from 'react'
import UseEffectex from './HookEx/UseEffectex'

const App = () => {
  return (
    <div>
      <UseEffectex/>
    </div>
  )
}

export default App