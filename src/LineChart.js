import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart({ tempData }) {
  return <Line data={tempData} />;
}

export default LineChart;