import React from "react";
import TestimonyContainer from "./components/TestimonyContainer";
import "./styles/Testimony.css";

const App = () => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((value) => setData(value))
      .catch((err) => console.error(err));
  }, []);
  return (
    <React.Fragment>
      <TestimonyContainer testimonies={data} />
    </React.Fragment>
  );
};

export default App;
