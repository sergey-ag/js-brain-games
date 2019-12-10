import { getRandomInt, gcd } from '../lib/functions';

const message = 'Find the greatest common divisor of given numbers.';

const roundsCount = 3;

const getRounds = () => {
  const maxNumber = 99;

  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number1 = getRandomInt(maxNumber);
    const number2 = getRandomInt(maxNumber);
    rounds[i] = {
      question: `${number1} ${number2}`,
      answer: gcd(number1, number2).toString(),
    };
  }

  return rounds;
};

export { message, roundsCount, getRounds };
