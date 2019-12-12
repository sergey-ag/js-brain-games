const getRandomInt = (max) => Math.floor(Math.random() * (max)) + 1;

const gcd = (num1, num2) => (num1 === num2
  ? num1
  : gcd(Math.min(num1, num2), Math.abs(num1 - num2))
);

const isPrime = (num) => {
  if (num === 1) return false;
  const iter = (divisor) => {
    if (divisor === 1) return true;
    if (num % divisor === 0) return false;
    return iter(divisor - 1);
  };
  return iter(Math.floor(Math.sqrt(num)));
};

export { getRandomInt, gcd, isPrime };
