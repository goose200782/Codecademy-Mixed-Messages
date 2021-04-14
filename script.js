const randomNum = num => {
    return Math.floor(Math.random() * num)
}
 
const inspiration = {
    spiritAnimal: ['Dragon 🐉', 'Tiger 🐅 ', 'Horse 🐎', 'Dog 🐕', 'Rabbit 🐇', 'Monkey 🐒', 'Snake 🐍', 'Rat 🐀', 'Rooster 🐓', 'Pig 🐖', 'Goat 🐐'], 
    mood: ['Stressed', 'Fearful', 'Nervous', 'Normal', 'Relaxed', 'Calm', 'Cool', 'Loving', 'Romantic', 'Passionate', 'Very Happy'],
    quote: [
        '"Success is not final, failure is not fatal: it is the COURAGE TO CONTINUE that counts".  - Winston Churchill',
        '"What you get by achieving your goals is not as important as what you become by achieving your goals."  - Zig Ziglar',
        '"Seeds burst from the inside out in a self-destructive ritual of new life."  - David Goggins',
        `"A warrior is a guy that goes, 'I'm here again today. I'll be here again tomorrow and the next day.' It's a person who puts no limit on what is possible"  - David Goggins`,
        `"Believe you can and you're halfway there."  - Theodore Roosevelt`,
        `"I can't change the direction of the wind, but I can adjust my sails to always reach my destination."  - Jimmy Dean`,
        `"Life is like riding a bicycle. To keep your BALANCE, you must keep moving."  - Albert Einstein`,
        `"Limit your 'always' and your 'nevers'."  - Amy Poehler`,
        `"Nothing is IMPOSSIBLE. The word itself says 'I'M POSSIBLE!'"  - Audrey Hepburn`,
        `"It is never too late to be what you might have been."  - George Eliot`,
        `"With the right kind of coaching and determination you can accomplish ANYTHING."  - Reese Witherspoon`,
        `"If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely."  - Roald Dahl`,
        `"Walk away from ANYTHING or ANYONE who takes away from your JOY. Life is too short to put up with fools."  - Unknown`
]
}

const dailyMessage = {};

const generateInspiration = () => {
    for(let property in inspiration){
        let index = randomNum(inspiration[property].length)
  
    // use the object's properties to customize the message being added to dailyMessage 
    switch(property) {
      case 'spiritAnimal':
        dailyMessage[property] = `Your spirit animal today is a ${inspiration[property][index]}.`;
        break;
      case 'mood':
        dailyMessage[property] = `Your mood today is "${inspiration[property][index]}".`;
        break;
      case 'quote':
        dailyMessage[property] = `Inspirational quote: ${inspiration[property][index]}.`;
        break;
      default:
        dailyMessage = {error: "no info"};
    }
    
    }
    format();
    
}

function format() {
    for(let property in dailyMessage){
        document.querySelector(`.${property}`).textContent = dailyMessage[property];
    }
    // document.querySelector('.spiritAnimal').textContent = dailyMessage.spiritAnimal;
    // document.querySelector('.spiritAnimal').textContent = dailyMessage.spiritAnimal;
  }
  
  generateInspiration();