import MyComponent from "./MyComponent";
import MyFunctionComponent from "./MyFunctionComponent";
import FirstComponent from './components/FirstComponent';
import FirstFunctionComponent, { MyFirstComponent } from "./components/FirstFunctionComponent";
import { MultOne, MultTwo } from './components/MultipleComponents';
import FormClassComponent from "./components/FormClassComponent";
import FormFunctionComponent from "./components/FormFunctionComponent";
import TestLifeCycle from "./components/LifeCycle/TestLifeCycle";
import LifeCycleMethod from "./components/LifeCycle/LifeCycleMethod";
import LifeCycleMethodFunc from "./components/LifeCycle/LifeCycleMethodFunc";
import ParentClassComp from "./components/DataShare/ParentClassComp";
import ParentFuncComp from "./components/DataShare/ParentFuncComp";
import RouteDev from "./RouteDev";
import "./App.css";


function App() {





  return (
    <>



      <RouteDev />


      {/* <ParentClassComp />

      <ParentFuncComp /> */}


      {/* <TestLifeCycle />  */}

      {/* <LifeCycleMethod /> */}
      {/* <LifeCycleMethodFunc /> */}


      {/* <h1>Parent Compoen</h1> */}



      {/* <MyFirstComponent /> */}
      {/* <FirstComponent />
      <FirstFunctionComponent />
      <MultOne />
      <MultTwo /> */}
      {/* <MyComponent /> */}
      {/* <MyFunctionComponent /> */}

      {/* <FormClassComponent studentName={name} studentRollNumber="TETST12121" /> */}

      {/* <FormFunctionComponent studentName={name} studentRollNumber={`ssssssssssss`} /> */}

      {/* <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent /> */}
    </>
  );

}

export default App;


