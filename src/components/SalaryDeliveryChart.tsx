
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { mes: 'Set', resultado: 66.94 },
  { mes: 'Out', resultado: 68.96 },
  { mes: 'Nov', resultado: 79.17 },
  { mes: 'Dez', resultado: 81.4 },
  { mes: 'Jan', resultado: 90.59 },
  { mes: 'Fev', resultado: 96.41 }
];

const SalaryDeliveryChart = () => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 sm:p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-brand-dark-blue font-semibold text-xs sm:text-sm">{`${label}`}</p>
          <p className="text-brand-dark-blue text-xs sm:text-sm">
            <span className="font-medium">{`${payload[0].value.toFixed(1)}%`}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-2xl">
      <div className="mb-4 sm:mb-6 text-center">
        <h3 className="text-lg sm:text-xl font-bold text-brand-dark-blue mb-2">
          Resultado Tarefas
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm">
          Evolução dos resultados mensais
        </p>
      </div>
      
      <div className="h-64 sm:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="mes" 
              tick={{ fontSize: 12, fill: '#374151' }}
              axisLine={{ stroke: '#d1d5db' }}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: '#374151' }}
              axisLine={{ stroke: '#d1d5db' }}
              tickFormatter={(value) => `${value}%`}
              domain={[60, 100]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="resultado"
              stroke="#2563eb"
              strokeWidth={3}
              dot={{ fill: '#2563eb', strokeWidth: 2, r: 6 }}
              activeDot={{ r: 8, stroke: '#2563eb', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-3 sm:mt-4 text-center">
        <div className="bg-green-50 border-l-4 border-green-500 p-3 sm:p-4 rounded-r">
          <p className="text-green-800 font-semibold text-xs sm:text-sm">
            📈 Crescimento de 29.47% em 6 meses - Resultados comprovados!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalaryDeliveryChart;
