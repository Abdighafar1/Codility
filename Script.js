function solution(A, D) {
  let balance = 0;
  const monthlyPayments = {};
  const monthlyCost = {};

  for (let i = 0; i < A.length; i++) {
    const amount = A[i];
    const date = D[i];

    balance += amount;

    const month = date.slice(0, 7);

    if (amount < 0) {
      monthlyCardPayments[month] = (monthlyCardPayments[month] || 0) + 1;
      monthlyCardCost[month] = (monthlyCardCost[month] || 0) + Math.abs(amount);
    }
  }

  for (const month in monthlyPayments) {
    const payments = monthlyPayments[month];
    const cost = monthlyCost[month];

    if (payments < 3 && cost < 100) {
      balance -= 5;
    }
  }

  return balance;
}
