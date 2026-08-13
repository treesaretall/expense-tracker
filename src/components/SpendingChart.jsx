import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function SpendingChart({ transactions }) {
  // Filter only expenses and aggregate by category
  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, transaction) => {
      const category = transaction.category;
      if (!acc[category]) {
        acc[category] = 0;
      }
      acc[category] += transaction.amount;
      return acc;
    }, {});

  // Convert to array format for Recharts
  const chartData = Object.entries(expensesByCategory)
    .map(([category, amount]) => ({
      category: category.charAt(0).toUpperCase() + category.slice(1),
      amount: amount
    }))
    .sort((a, b) => b.amount - a.amount); // Sort by amount descending

  // Debug logging
  console.log('Chart Data:', chartData);

  // Return nothing if no expenses
  if (chartData.length === 0) {
    return (
      <div className="spending-chart">
        <h2>Spending by Category</h2>
        <p style={{ color: '#52514e', textAlign: 'center', padding: '2rem' }}>
          No expenses to display
        </p>
      </div>
    );
  }

  // Custom tooltip following dataviz guidelines
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: '#fcfcfb',
          border: '1px solid #e1e0d9',
          borderRadius: '4px',
          padding: '8px 12px',
          boxShadow: '0 2px 8px rgba(11,11,11,0.1)'
        }}>
          <p style={{
            margin: 0,
            fontSize: '14px',
            color: '#0b0b0b',
            fontWeight: '600'
          }}>
            ${payload[0].value.toFixed(2)}
          </p>
          <p style={{
            margin: '4px 0 0 0',
            fontSize: '12px',
            color: '#52514e'
          }}>
            {payload[0].payload.category}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="spending-chart">
      <h2>Spending by Category</h2>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 20, left: 10, bottom: 60 }}
          >
            <XAxis
              dataKey="category"
              stroke="#898781"
              tick={{ fill: '#0b0b0b', fontSize: 12 }}
              axisLine={{ stroke: '#c3c2b7', strokeWidth: 1 }}
              tickLine={false}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              stroke="#898781"
              tick={{ fill: '#52514e', fontSize: 12 }}
              axisLine={{ stroke: '#c3c2b7', strokeWidth: 1 }}
              tickLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: 'rgba(42, 120, 214, 0.1)' }}
            />
            <Bar
              dataKey="amount"
              fill="#2a78d6"
              radius={[4, 4, 0, 0]}
              maxBarSize={24}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default SpendingChart;
