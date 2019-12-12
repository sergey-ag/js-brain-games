import { getRandomInt, isPrime } from '../lib/functions';

const message = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const roundsCount = 3;

const getRounds = () => {
  const maxNumber = 99;

  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomInt(maxNumber);
    rounds[i] = {
      question: `${number}`,
      answer: isPrime(number) ? 'yes' : 'no',
    };
  }

  return rounds;
};

export { message, roundsCount, getRounds };
