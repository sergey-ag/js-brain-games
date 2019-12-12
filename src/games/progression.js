import { getRandomInt } from '../lib/functions';

const message = 'What number is missing in the progression?';

const roundsCount = 3;

const getProgressionString = (start, step, missingMember, count) => {
  let progressionString = missingMember === 1 ? '..' : start.toString();

  for (let i = 2; i <= count; i += 1) {
    const currentMember = start + step * (i - 1);
    progressionString = i === missingMember ? `${progressionString} ..` : `${progressionString} ${currentMember.toString()}`;
  }
  return progressionString;
};

const getRounds = () => {
  const maxNumber = 10;

  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const start = getRandomInt(maxNumber);
    const step = getRandomInt(maxNumber);
    const missingMember = getRandomInt(maxNumber);

    const missingValue = start + step * (missingMember - 1);

    rounds[i] = {
      question: getProgressionString(start, step, missingMember, maxNumber),
      answer: missingValue.toString(),
    };
  }

  return rounds;
};

export { message, roundsCount, getRounds };
