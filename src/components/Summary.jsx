function Summary({ transactions }) {
  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpenses = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpenses;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="summary">
      <div className="summary-card">
        <h3>Total Income</h3>
        <div className="income-amount">{formatCurrency(totalIncome)}</div>
        <p>Money earned</p>
      </div>
      <div className="summary-card">
        <h3>Total Expenses</h3>
        <div className="expense-amount">{formatCurrency(totalExpenses)}</div>
        <p>Money spent</p>
      </div>
      <div className="summary-card">
        <h3>Net Balance</h3>
        <div className="balance-amount">{formatCurrency(balance)}</div>
        <p>Available funds</p>
      </div>
    </div>
  );
}

export default Summary;
