import { getRandomInt } from '../lib/functions';

const message = 'What is the result of the expression?';

const roundsCount = 3;

const operations = [
  {
    char: '+',
    action: (num1, num2) => num1 + num2,
  },
  {
    char: '-',
    action: (num1, num2) => num1 - num2,
  },
  {
    char: '*',
    action: (num1, num2) => num1 * num2,
  },
];

const getRounds = () => {
  const maxNumber = 99;

  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const operation = operations[getRandomInt(operations.length)];
    const number1 = getRandomInt(maxNumber);
    const number2 = getRandomInt(maxNumber);
    rounds[i] = {
      question: `${number1} ${operation.char} ${number2}`,
      answer: operation.action(number1, number2).toString(),
    };
  }

  return rounds;
};

export { message, roundsCount, getRounds };
