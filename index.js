var randomJoke = require('random-joke');

(async() => {
    
    console.log(await randomJoke.getRandomJoke());
    
})();
