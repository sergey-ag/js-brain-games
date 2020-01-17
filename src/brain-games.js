import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (message, getData) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const name = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${name}\n`);

  for (let i = 0; i < roundsCount; i += 1) {
    const data = getData();
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
