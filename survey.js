const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (listen) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (favoriteMeal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (favoriteFood) => {
          rl.question("Which sport is your absolute favourite? ", (favoriteSport) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superPower) => {
              console.log(`${name} loves listening to ${listen} while ${activity}, devouring ${favoriteFood} for ${favoriteMeal}, prefers ${favoriteSport} over any other sport, and is amazing at ${superPower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});