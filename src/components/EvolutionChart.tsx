import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Set', value: 66.94 },
  { month: 'Out', value: 68.96 },
  { month: 'Nov', value: 79.17 },
  { month: 'Dez', value: 81.4 },
  { month: 'Jan', value: 90.59 },
  { month: 'Fev', value: 96.41 }
];

const EvolutionChart = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg border">
      <div className="mb-4 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-brand-dark-blue mb-2">
          Evolução dos Resultados
        </h3>
        <p className="text-gray-600 text-sm">
          Progresso mensal ao longo de 6 meses
        </p>
      </div>
      
      <div className="h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12, fill: '#666' }}
              axisLine={{ stroke: '#ddd' }}
            />
            <YAxis 
              domain={['dataMin - 5', 'dataMax + 5']}
              tick={{ fontSize: 12, fill: '#666' }}
              axisLine={{ stroke: '#ddd' }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px'
              }}
              formatter={(value: number) => [`${value}%`, 'Performance']}
              labelStyle={{ color: '#333', fontWeight: 'bold' }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#16A34A" 
              strokeWidth={3}
              dot={{ fill: '#16A34A', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: '#16A34A', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-center">
        <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-r">
          <p className="text-green-800 font-semibold text-sm">
            📈 Crescimento de 29.47% em 6 meses
          </p>
        </div>
      </div>
    </div>
  );
};

export default EvolutionChart;