import readlineSync from 'readline-sync';

import * as even from './games/even';
import * as calc from './games/calc';
import * as gcd from './games/gcd';
import * as progression from './games/progression';
import * as prime from './games/prime';

const gameMap = {
  even: {
    message: even.message,
    roundsCount: even.roundsCount,
    getRounds: even.getRounds,
  },
  calc: {
    message: calc.message,
    roundsCount: calc.roundsCount,
    getRounds: calc.getRounds,
  },
  gcd: {
    message: gcd.message,
    roundsCount: gcd.roundsCount,
    getRounds: gcd.getRounds,
  },
  progression: {
    message: progression.message,
    roundsCount: progression.roundsCount,
    getRounds: progression.getRounds,
  },
  prime: {
    message: prime.message,
    roundsCount: prime.roundsCount,
    getRounds: prime.getRounds,
  },
};

export default (gameName) => {
  const game = gameMap[gameName];

  console.log('Welcome to the Brain Games!');
  console.log(game.message);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}\n`);

  const rounds = game.getRounds();

  for (let i = 0; i < game.roundsCount; i += 1) {
    console.log(`Question: ${rounds[i].question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rounds[i].answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rounds[i].answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
