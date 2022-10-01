// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
// import dataList from './dataList.json';
// import * as randomData from './randomData.js';
import { Line } from 'react-chartjs-2';


function Chart() {


  return (

    <Line
      datasetIdKey='id'
      data={{
        labels: ['Jun', 'Jul', 'Aug'],
        datasets: [
          {
            id: 1,
            label: '',
            data: [5, 6, 7],
          },
          {
            id: 2,
            label: '',
            data: [3, 2, 1],
          },
        ],
      }}
    />
    // <LineChart width={500} height={300} data={dataList}>
    //   <XAxis dataKey="id" />
    //   <YAxis />
    //   <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
    //   <Line type="monotone" dataKey="first_name" stroke="#8884d8" />
    //   <Line type="monotone" dataKey="last_name" stroke="#82ca9d" />
    // </LineChart>
  );
}

export default Chart;