import MyComponent from "./MyComponent";
import MyFunctionComponent from "./MyFunctionComponent";
import FirstComponent from './components/FirstComponent';
import FirstFunctionComponent, { MyFirstComponent } from "./components/FirstFunctionComponent";
import { MultOne, MultTwo } from './components/MultipleComponents';
import FormClassComponent from "./components/FormClassComponent";
import FormFunctionComponent from "./components/FormFunctionComponent";

function App() {

  let name = "Userasdfasdfasdf";

  let students = [
    { id: 1, name: "Divesh" },
    { id: 2, name: "Parvej" },
    { id: 3, name: "Parasdfsadf" },
    { id: 4, name: "sdfasdfsafd" }
  ];




  return (
    <>
      <h1>Parent Compoen</h1>
      {/* <MyFirstComponent /> */}
      {/* <FirstComponent />
      <FirstFunctionComponent />
      <MultOne />
      <MultTwo /> */}
      {/* <MyComponent /> */}
      {/* <MyFunctionComponent /> */}

      {/* <FormClassComponent studentName={name} studentRollNumber="TETST12121" /> */}

      <FormFunctionComponent studentName={name} studentRollNumber={`ssssssssssss`} />

      {/* <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent /> */}
    </>
  );

}

export default App;


