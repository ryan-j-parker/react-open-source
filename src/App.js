import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import DataTable from './DataTable';
import BarChart from './BarChart';

function App() {

  return (
    <div className="App">
      <nav>
        <Link to="/table"><button className='button has-text-light has-background-black is-rounded'>Table</button></Link>
        <Link to="/chart"><button className='button has-text-light has-background-black is-rounded'>Chart</button></Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1 className='title is-1 has-text-centered'>Table Libary</h1>
          <h2 className='title is-3 has-text-centered'>User Data</h2>
          <DataTable />
        </Route>
        <Route path="/chart">
          <h1 className='title is-1 has-text-centered'>Chart Library</h1>
          <h2 className='title is-3 has-text-centered'>Cost of airfare to tropical destinations</h2>
          <BarChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
