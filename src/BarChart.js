import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';


const data = [
  { Destination: 'Tahiti', 'Price': 1700 },
  { Destination: 'Fiji', 'Price': 1900 },
  { Destination: 'Bahamas', 'Price': 1600 },
  { Destination: 'Hawaii', 'Price': 1600 },
  { Destination: 'Curacao', 'Price': 1800 },
  { Destination: 'Bali', 'Price': 2400 },
  { Destination: 'Philippines', 'Price': 2200 },
];

export default function BarChart() {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20} padding={50} >
      <VictoryAxis
        style={{ tickLabels: { fontSize: 8, padding: 9 } }}
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={['Tahiti', 'Fiji', 'Bahamas', 'Hawaii', 'Curacao', 'Bali', 'Philippines']}
      />
      <VictoryAxis dependentAxis style={{ tickLabels: { fontSize: 8, padding: 9 } }}/>
      <VictoryBar data={data} x="Destination" y="Price" />
    </VictoryChart>
  );
}
