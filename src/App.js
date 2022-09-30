import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import DataTable from './DataTable';
import Chart from './Chart';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Table</Link>
        <Link to="/chart">Chart</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Table Libary</h1>
          <DataTable />
        </Route>
        <Route path="/chart">
          <div style={{ textAlign: 'center' }}>12-month global means vs 1951-1980 Years (12 month running mean)</div>
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
