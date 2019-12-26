import readlineSync from 'readline-sync';

import * as even from './games/even';
import * as calc from './games/calc';
import * as gcd from './games/gcd';
import * as progression from './games/progression';
import * as prime from './games/prime';

const roundsCount = 3;

const run = (message, game) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const data = game();
    console.log(`Question: ${data.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === data.answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${data.answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

const brainEven = () => run(even.message, even.game);

const brainCalc = () => run(calc.message, calc.game);

const brainGcd = () => run(gcd.message, gcd.game);

const brainProgression = () => run(progression.message, progression.game);

const brainPrime = () => run(prime.message, prime.game);

export {
  brainEven, brainCalc, brainGcd, brainProgression, brainPrime,
};
