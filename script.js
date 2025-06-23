function trailingZeros(n) {
  let count = 0;
  for (let i = 5; i <= n; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

const input = prompt("Enter a non-negative integer up to 10000:");
const num = Number(input);

if (Number.isInteger(num) && num >= 0 && num <= 10000) {
  const zeros = trailingZeros(num);
  alert(`Trailing zeros in ${num}! is: ${zeros}`);
} else {
  alert("Invalid input! Please enter a non-negative integer up to 10000.");
}
