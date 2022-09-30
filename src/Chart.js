import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import * as tempData from './tempData';

function Chart() {
  return (
    <>
      <LineChart width={800} height={500} data={tempData} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} margin={{ top: 5, left: 20 }}>
        <Line type="monotone" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5 5 5"/>
        <XAxis dataKey="x" />
        <YAxis dataKey="y" />
      </LineChart>
    </>
  );
}

export default Chart;