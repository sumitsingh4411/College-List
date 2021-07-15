import { useEffect, useState } from 'react';
import axios from 'axios';
import NavbarStyle from './component/NavbarStyle';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AddCollege from './component/AddCollege';
import AddStudent from './component/AddStudent';
import Home from './component/Home';
function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/api/college/').then((result) => {
      const arr = result.data.data;
      setdata(arr);
    })
  }, [])
  return (
    <>
      <NavbarStyle />
      <Router>
        <Switch>
          <Route path="/addcollege">
            <AddCollege />
          </Route>
          <Route path="/addstudent">
            <AddStudent />
          </Route>
          <Route path="/">
            <Home data={data}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
