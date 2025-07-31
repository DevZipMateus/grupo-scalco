
import React from 'react';
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  DiscreteColorLegend,
  Hint
} from 'react-vis';
import 'react-vis/dist/style.css';

const data = [
  { x: 'Salário Pago', y: 100, color: 0 },
  { x: 'Entrega Real', y: 75, color: 1 }
];

const colorRange = ['#DC2626', '#F59E0B']; // red-600, amber-500

const SalaryDeliveryChart = () => {
  const [hoveredValue, setHoveredValue] = React.useState(null);

  return (
    <div className="bg-white p-6 rounded-lg shadow-2xl">
      <div className="mb-6 text-center">
        <h3 className="text-xl font-bold text-brand-dark-blue mb-2">
          A Realidade da Sua Empresa
        </h3>
        <p className="text-gray-600 text-sm">
          Comparação entre investimento e retorno
        </p>
      </div>
      
      <div className="flex justify-center">
        <XYPlot
          width={400}
          height={300}
          xType="ordinal"
          colorType="category"
          colorRange={colorRange}
          margin={{ left: 60, right: 30, top: 30, bottom: 80 }}
        >
          <XAxis 
            tickLabelAngle={-45}
            style={{
              text: { fontSize: '12px', fill: '#374151' }
            }}
          />
          <YAxis 
            tickFormat={v => `${v}%`}
            style={{
              text: { fontSize: '12px', fill: '#374151' }
            }}
          />
          <VerticalBarSeries
            data={data}
            colorType="category"
            stroke="white"
            strokeWidth={2}
            onValueMouseOver={(value) => setHoveredValue(value)}
            onValueMouseOut={() => setHoveredValue(null)}
            style={{
              rx: 4,
              ry: 4
            }}
          />
          {hoveredValue && (
            <Hint value={hoveredValue}>
              <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                <p className="text-brand-dark-blue font-semibold">{hoveredValue.x}</p>
                <p className="text-brand-dark-blue">
                  <span className="font-medium">{hoveredValue.y}%</span>
                </p>
              </div>
            </Hint>
          )}
        </XYPlot>
      </div>
      
      <div className="mt-4 flex justify-center gap-6 text-sm">
        <DiscreteColorLegend
          items={[
            { title: 'Você investe 100%', color: colorRange[0] },
            { title: 'Sua equipe entrega 75%', color: colorRange[1] }
          ]}
          orientation="horizontal"
          className="flex gap-4"
        />
      </div>
      
      <div className="mt-4 text-center">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r">
          <p className="text-red-800 font-semibold text-sm">
            🚨 Diferença de 25% = Prejuízo direto no seu resultado
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalaryDeliveryChart;
