export const calcPaybackPeriod = (cost, savings) => {
  if (typeof cost !== 'number' || typeof savings !== 'number') return;

  const result = cost/savings;

  return result;
}

// needs improvement
export const convertToYearsMonths = (num) => {
  if (typeof num!== 'number' || !num) return;

  const years = Math.floor((num * 100) / 100);
  const months = Math.floor((num - years) * 12);
  const days = Math.floor(365 * (num - years - months / 12));

  if (years > 0 && months > 0) {
    return `${years} years and ${months} months`;
  } else if (years > 0 && months === 0) {
    return `${years} years`;
  } else if (years === 0 && months > 0) {
    return `${months} months`;
  } else {
    return `${days} days`; 
  }
}

export const formatCurrency = (amount) => {
  if (!amount) return console.log('no amount provided');

  return new Intl.NumberFormat('en-IN').format(amount);
}
