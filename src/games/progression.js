import getRandomInt from '../lib/functions';

const message = 'What number is missing in the progression?';

const maxNumber = 10;

const getProgression = (start, step, count = 10) => {
  const progression = [];
  for (let i = 0; i < count; i += 1) {
    progression[i] = start + step * i;
  }
  return progression;
};

const game = () => {
  const start = getRandomInt(maxNumber);
  const step = getRandomInt(maxNumber);
  const progression = getProgression(start, step);
  const missingMember = getRandomInt(maxNumber - 1);
  const missingValue = progression[missingMember];

  progression[missingMember] = '..';

  return {
    question: progression.join(' '),
    answer: missingValue.toString(),
  };
};

export { message, game };
