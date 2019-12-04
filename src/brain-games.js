import readlineSync from 'readline-sync';

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export default () => {
  const message = 'Answer "yes" if the number is even, otherwise answer "no".';
  const rounds = 3;
  const maxNumber = 99;

  console.log('Welcome to the Brain Games!');
  console.log(message);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}\n`);

  const game = [];

  for (let i = 0; i < rounds; i += 1) {
    const number = getRandomInt(maxNumber);
    game[i] = {
      question: number,
      answer: number % 2 === 0 ? 'yes' : 'no',
    };
  }

  for (let i = 0; i < rounds; i += 1) {
    console.log(`Question: ${game[i].question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === game[i].answer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${game[i].answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
