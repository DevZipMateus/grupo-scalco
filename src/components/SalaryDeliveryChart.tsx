
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  {
    category: 'Salário Pago',
    value: 100,
    color: '#DC2626' // red-600
  },
  {
    category: 'Entrega Real',
    value: 75,
    color: '#F59E0B' // amber-500
  }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="text-brand-dark-blue font-semibold">{label}</p>
        <p className="text-brand-dark-blue">
          <span className="font-medium">{payload[0].value}%</span>
        </p>
      </div>
    );
  }
  return null;
};

const SalaryDeliveryChart = () => {
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
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
          }}
          barCategoryGap="20%"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis 
            dataKey="category" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#374151' }}
            interval={0}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            domain={[0, 110]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#374151' }}
            tickFormatter={(value) => `${value}%`}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="value" 
            radius={[4, 4, 0, 0]}
            maxBarSize={80}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      <div className="mt-4 flex justify-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-600 rounded"></div>
          <span className="text-gray-700">Você investe 100%</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-amber-500 rounded"></div>
          <span className="text-gray-700">Sua equipe entrega 75%</span>
        </div>
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
