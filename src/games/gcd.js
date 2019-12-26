import getRandomInt from '../lib/functions';

const message = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => (num1 === num2
  ? num1
  : gcd(Math.min(num1, num2), Math.abs(num1 - num2))
);

const maxNumber = 99;

const game = () => {
  const number1 = getRandomInt(maxNumber);
  const number2 = getRandomInt(maxNumber);
  return {
    question: `${number1} ${number2}`,
    answer: gcd(number1, number2).toString(),
  };
};

export { message, game };
