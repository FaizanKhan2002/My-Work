import "./App.css";
import { Card } from "./Card";

function App() {
  return (
    <>
      <Card
        userName="Faizan Khan"
        contain={
          "Actually the initial state has color Actually the initial state has color Actually the initial state has color Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi, debitis ?"
        }
      />
      <Card
        userName="Sajid Khan"
        contain={
          "To create a well-rounded and engaging introduction, you can consider including the following details:"
        }
      />
      <Card
        userName="Mustak Khan"
        contain={
          "Actually the initial state has color Actually the initial state has color Actually the initial state has color Lorem ipsum dolor sit amet consectetur adipisicing elit.Excepturi, debitis ?"
        }
      />
    </>
  );
}

export default App;
