import getRandomInt from '../lib/functions';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return false;
  const iter = (divisor) => {
    if (divisor === 1) return true;
    if (num % divisor === 0) return false;
    return iter(divisor - 1);
  };
  return iter(Math.floor(Math.sqrt(num)));
};

const maxNumber = 99;

const game = () => {
  const number = getRandomInt(1, maxNumber);
  return {
    question: `${number}`,
    answer: isPrime(number) ? 'yes' : 'no',
  };
};

export { message, game };
