import getRandomInt from '../lib/functions';

const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const maxNumber = 99;

const game = () => {
  const number = getRandomInt(maxNumber);
  return {
    question: number,
    answer: isEven(number) ? 'yes' : 'no',
  };
};

export { message, game };
