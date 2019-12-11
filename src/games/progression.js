import { getRandomInt } from '../lib/functions';

const message = 'What number is missing in the progression?';

const roundsCount = 3;

const getRounds = () => {
  const maxNumber = 10;

  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    const start = getRandomInt(maxNumber);
    const step = getRandomInt(maxNumber);
    const missingMember = getRandomInt(maxNumber);
    let progressionString = missingMember === 1 ? '..' : start.toString();
    const missingValue = start + step * (missingMember - 1);

    for (let j = 2; j <= maxNumber; j += 1) {
      const currentMember = start + step * (j - 1);
      progressionString = j === missingMember ? `${progressionString} ..` : `${progressionString} ${currentMember.toString()}`;
    }

    rounds[i] = {
      question: progressionString,
      answer: missingValue.toString(),
    };
  }

  return rounds;
};

export { message, roundsCount, getRounds };
