
import React, { useState, useEffect } from 'react';
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

const colorRange = ['#16A34A', '#DC2626']; // green-600, red-600

const SalaryDeliveryChart = () => {
  const [hoveredValue, setHoveredValue] = React.useState(null);
  const [chartDimensions, setChartDimensions] = useState({
    width: 400,
    height: 300,
    margin: { left: 60, right: 30, top: 30, bottom: 80 }
  });

  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      
      if (screenWidth < 640) { // sm breakpoint
        setChartDimensions({
          width: Math.min(screenWidth - 80, 280),
          height: 280,
          margin: { left: 50, right: 20, top: 20, bottom: 90 }
        });
      } else if (screenWidth < 768) { // md breakpoint
        setChartDimensions({
          width: 320,
          height: 290,
          margin: { left: 55, right: 25, top: 25, bottom: 85 }
        });
      } else {
        setChartDimensions({
          width: 400,
          height: 300,
          margin: { left: 60, right: 30, top: 30, bottom: 80 }
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-2xl">
      <div className="mb-4 sm:mb-6 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-brand-dark-blue mb-2">
          A Realidade da Sua Empresa
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm">
          Comparação entre investimento e retorno
        </p>
      </div>
      
      <div className="flex justify-center overflow-hidden">
        <XYPlot
          width={chartDimensions.width}
          height={chartDimensions.height}
          xType="ordinal"
          colorType="category"
          colorRange={colorRange}
          margin={chartDimensions.margin}
        >
          <XAxis 
            tickLabelAngle={-45}
            style={{
              text: { 
                fontSize: window.innerWidth < 640 ? '10px' : '12px', 
                fill: '#374151',
                fontWeight: '500'
              }
            }}
            tickPadding={5}
          />
          <YAxis 
            tickFormat={v => `${v}%`}
            style={{
              text: { 
                fontSize: window.innerWidth < 640 ? '10px' : '12px', 
                fill: '#374151' 
              }
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
              <div className="bg-white p-2 sm:p-3 border border-gray-200 rounded-lg shadow-lg">
                <p className="text-brand-dark-blue font-semibold text-xs sm:text-sm">{hoveredValue.x}</p>
                <p className="text-brand-dark-blue text-xs sm:text-sm">
                  <span className="font-medium">{hoveredValue.y}%</span>
                </p>
              </div>
            </Hint>
          )}
        </XYPlot>
      </div>
      
      <div className="mt-3 sm:mt-4 flex justify-center text-xs sm:text-sm">
        <DiscreteColorLegend
          items={[
            { title: 'Você investe 100%', color: colorRange[0] },
            { title: 'Sua equipe entrega 75%', color: colorRange[1] }
          ]}
          orientation="horizontal"
          className="flex gap-2 sm:gap-4 flex-wrap justify-center"
        />
      </div>
      
      <div className="mt-3 sm:mt-4 text-center">
        <div className="bg-red-50 border-l-4 border-red-500 p-3 sm:p-4 rounded-r">
          <p className="text-red-800 font-semibold text-xs sm:text-sm">
            🚨 Diferença de 25% = Prejuízo direto no seu resultado
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalaryDeliveryChart;
