const getRandomInt = (max) => Math.floor(Math.random() * (max)) + 1;

const gcd = (num1, num2) => (num1 === num2
  ? num1
  : gcd(Math.min(num1, num2), Math.abs(num1 - num2))
);

export { getRandomInt, gcd };
