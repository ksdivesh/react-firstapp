import MyComponent from "./MyComponent";
import MyFunctionComponent from "./MyFunctionComponent";

function App() {

  let name = "User";

  let students = [
    { id: 1, name: "Divesh" },
    { id: 2, name: "Parvej" },
    { id: 3, name: "Parasdfsadf" },
    { id: 4, name: "sdfasdfsafd" }
  ];




  return (
    <>

      {/* <MyComponent /> */}
      <MyFunctionComponent />

      {/* <MyComponent />
      <MyComponent />
      <MyComponent />
      <MyComponent /> */}
    </>
  );

}

export default App;


