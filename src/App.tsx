import React, { useEffect, useContext } from 'react';

// Components
import Navigation from "./Components/Navigation";

// Pages
import Charts from "./Pages/Charts";
import TablePage from "./Pages/TablePage";
import Prediction from "./Pages/Prediction";

// Utils
import { BrowserRouter as Router, Route  } from "react-router-dom";
import { Context as TitanicContext } from "./Context/titanic";

const App = () => {
  const { actions } = useContext(TitanicContext);

  useEffect(() => {
    actions.getData();
  }, [actions])

  return (
    <Router>
      <Route path="/">
        <Navigation />
      </Route>

      <Route path="/" exact>
        <Charts />
      </Route>

      <Route path="/TablePage" exact>
        <TablePage />
      </Route>

      <Route path="/Prediction" exact>
        <Prediction />
      </Route>
    </Router>
  )
}

export default App;
