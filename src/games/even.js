const message = 'Answer "yes" if the number is even, otherwise answer "no".';

const roundsCount = 3;

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const getRounds = () => {
  const maxNumber = 99;

  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const number = getRandomInt(maxNumber);
    rounds[i] = {
      question: number,
      answer: number % 2 === 0 ? 'yes' : 'no',
    };
  }

  return rounds;
};

export { message, roundsCount, getRounds };
