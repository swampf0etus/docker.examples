import createPrompt from 'prompt-sync';

let prompt = createPrompt({sigint: true});

const main = () => {
  let name = prompt('Enter name: ');
  console.log(`Hello, ${name}!`);
}

main();