import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { Doughnut } from 'react-chartjs-2';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/charts">Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
          <Doughnut data={...} />
        </Route>
        <Route path="/charts">
          <h1>Chart Library</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
