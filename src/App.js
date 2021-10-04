import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Routing } from './RoutingModule/Routing';
import { Comp1 } from './UseContext/Comp1/Comp1';
// import Drawer from './UseContext/Comp4/Comp4';



//step 1
export const userDetailContext = React.createContext(null);


function App() {
  //step 2 contextAPI
  const [userDetails, setuserDetails] = useState({
    name:"ABCD",
    age:30
  }) ;
  return (
    // Step 3 contextAp1
    <div className="App">
      {/* <Routing/> */}
      <userDetailContext.Provider value={userDetails}> 
      <Comp1/>
      </userDetailContext.Provider>
      {/* <Drawer/> */}
    </div>
  );
}

export default App;
