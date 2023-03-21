import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./common/header/Header";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
