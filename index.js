// 1. Generate a random secret number
// 2. Declare a variable to hold the player's guess
// 3. Loop while the player's guess is not correct
// 3.1. Prompt for the player's guess
// 3.2. Convert the player's input into a number
// 3.3. If the guess is lower or higher than the secret 
//      number, print a message that informs the player as such
// 4. Print a message congratulating the player
// function guessTheNumber (){
// let secretNumber = Math.floor(Math.random() * 10)
// let playerGuess = prompt('Guess the number')
// playerGuess = parseInt(playerGuess)

// for(let i=0; i<=10; i++){
//   if( i === playerGuess && playerGuess < secretNumber ){
//     console.log(playerGuess)
//     console.log(secretNumber)
//     console.log("Your Guess is lower then secret number")
//   }else if( i === playerGuess && playerGuess > secretNumber){
//      console.log(playerGuess)
//     console.log(secretNumber)
//     console.log("Your Guess is higher then secret number")
//   }else if( i === playerGuess && playerGuess === secretNumber){
//      console.log(playerGuess)
//     console.log(secretNumber)
//     console.log("You guessed it! ")
// }
// }
// }

// guessTheNumber()
// let secretNumber = Math.floor(Math.random() * (10-1) +1)
//   let playerGuess = parseInt(prompt('Guess the number'))
// function guessTheNumberWhile() {
//   console.log(secretNumber)
//   while(playerGuess !== secretNumber){
//           console.log('Guess is not correct')
//           if(playerGuess > secretNumber){
//             console.log('too high')
//           }else if(playerGuess < secretNumber){
//             console.log('too low')
//           }
//        playerGuess = parseInt(prompt('Guess the number'))
//   }
//   if (playerGuess === secretNumber){
//     console.log('Congratulations!')
//   } 
// }
// guessTheNumberWhile()


const album1 = {
  title: 'Talking Heads',
  albumDetails: {
    released: new Date('September 16, 1977'),
    label: 'Sire',
    formats: ['LP']
  }
};

// Exercise 1:  Update the title property of album1 from 'Talking Heads' to 'Talking Heads - 77', then assign that property to a variable named title
album1.title = 'Talking Heads - 77';
const title = album1.title;



// Exercise 2: Assign the string 'Sire' from album1 to a variable named label
const label = album1.albumDetails.label;

const album2 = {
  title: 'More Songs About Buildings and Food',
  albumDetails: {
    released: new Date('July 14, 1978'),
    label: 'Sire',
    formats: ['LP', '8-track']
  }
};

const album3 = {
  title: 'Fear of Music',
  albumDetails: {
    released: 'August 3, 1979',
    label: 'Sire',
    formats: ['Cassette']
  }
};

// Exercise 3: Accessing the string 'LP' from album2's formats array, add it to the end of album3's formats array.
album3.albumDetails.formats.push(album2.albumDetails.formats[0]);



// Exercise 4:  Update the released property of album3 from a string into a Date object using that string
album3.albumDetails.released = new Date(album3.albumDetails.released)



const album4 = {
  title: 'Remain in Light',
  albumDetails: {
    released: new Date('October 8, 1980'),
    formats: ['Cassette', 'LP']
  }
};

// Exercise 5:  Add a property named label with the value 'Sire' to album4's albumDetails property
album4.albumDetails.label = 'Sire';



const album5 = {
  title: 'Little Creatures',
  albumDetails: {
    released: new Date('June 10, 1985'),
    labels: ['Sire', 'emi'],
    formats: ['CD', 'cassette', 'LP']
  }
};

// Exercise 6:  Update the value 'emi' within album5's labels array to 'EMI'
album5.albumDetails.labels[1]='EMI'



const album6 = {
  title: 'True Stories',
  albumDetails: {
    released: new Date('October 7, 1986'),
    labels: ['Sire', 'EMI'],
    formats: ['CD', 'cassette', 'LP']
  }
};

// Exercise 7:  Assign album6's formats array to a variable named formats
const formats = album6.albumDetails.formats;




const album7 = {
  title: 'Naked',
  albumDetails: {
    released: new Date('March 15, 1988'),
    labels: ['Sire', 'EMI'],
    formats: ['CD', 'cassette', 'LP']
  }
};

const talkingHeadsAlbums = [
  album1,
  album2,
  album3,
  album4,
  album5,
  album6,
  album7
];

// Exercise 8:  Using the talkingHeadsAlbums array, assign album5's labels property to a variable named labels
const labels = talkingHeadsAlbums[4].albumDetails.labels;



// Exercise 9:  Using the talkingHeadsAlbums array, assign album7's released property to album6's released property
talkingHeadsAlbums[5].albumDetails.released = talkingHeadsAlbums[6].albumDetails.released;



// Exercise 10:  Using the pre-defined variable named albumIdx below, assign the albumDetails object of the album located within the talkingHeadsAlbums array at the index represented by the value of albumIdx to a variable named albumDetails

let albumIdx = 4;
const albumDetails = talkingHeadsAlbums[albumIdx].albumDetails;



// console.log('Exercise 1:', title);

// console.log('Exercise 2:', label);

// console.log('Exercise 3:', album3.albumDetails.formats[1]);

// console.log('Exercise 4:', album3.albumDetails.released.toLocaleDateString());

// console.log('Exercise 5:', album4.albumDetails);

// console.log('Exercise 6:', album6.albumDetails.labels[1]);

// console.log('Exercise 7:', formats);

// console.log('Exercise 8:', labels);

// console.log('Exercise 9:', talkingHeadsAlbums[6].albumDetails.released.toLocaleDateString());

// console.log('Exercise 10:', albumDetails);


// const hero = {
//   name : 'Jack',
//   firepower: 10,
//   health: 30,
//   enemyAttack: (enemy)=>{
//     hero.health -= enemy.firepower
//     console.log(`${hero.health}`)
//   }
// }

// const badGuy = {
//   name : 'Voldemort',
//   firepower: 5,
//   health: 20,
//   enemyAttack: (enemy)=>{
//     badGuy.health -= enemy.firepower
//     console.log(`${badGuy.health}`)
//   }
// }

// badGuy.enemyAttack(hero)


let randomNum = (max, min) => {
 return Math.floor(Math.random() * (max - min + 1) +min);
};

//Array of alien ships(objects)? with properties: hull, firepower, accuracy.

let alienShip1 = {
  hull: randomNum(6, 3),
  firepower: randomNum(4, 2),
  accuracy: Math.random() * (.8 - .6) +.6,
}

let alienShip2 = {
  hull: randomNum(6, 3),
  firepower: randomNum(4, 2),
  accuracy: Math.random() * (.8 - .6) +.6,
}

let alienShip3 = {
  hull: randomNum(6, 3),
  firepower: randomNum(4, 2),
  accuracy: Math.random() * (.8 - .6) +.6,
}

let alienShip4 = {
  hull: randomNum(6, 3),
  firepower: randomNum(4, 2),
  accuracy: Math.random() * (.8 - .6) +.6,
}

let alienShip5 = {
  hull: randomNum(6, 3),
  firepower: randomNum(4, 2),
  accuracy: Math.random() * (.8 - .6) +.6,
}

let alienShip6 = {
  hull: randomNum(6, 3),
  firepower: randomNum(4, 2),
  accuracy: Math.random() * (.8 - .6) +.6,
}



//playerShip: object with properties: hull, firepower, accuracy
let playerShip = {
  hull: 200,
  firepower: 20,
  accuracy: .99,
}

//Introduction
// const userName = prompt('What is your name?');


// //Alien Attacks
// let takeDamage = (shipNumber) => {
//   if (Math.random() < shipNumber.accuracy && playerShip.hull > 0) {
//     playerShip.hull = playerShip.hull - shipNumber.firepower;
//     console.log(`You have been hit! We have ${playerShip.hull} health`);
//     encounter();
//   } else if (playerShip.hull < 0) {
//     console.log(`We got destroyed, Captain!!!!`)
//     return;
//   }
//     else {
//     console.log(`Looks like they missed, Captain!`);
//     encounter();
//   }
// }
// //Dealing with multiple Alien Ships, iterating through multiple ships
// //iterate through array of different ships
// let newShip = () => {
//   for (let i = 0; i < alienArr.length; i++) {
//     console.log(`There is still ${alienArr.length} ships`);
//     attack(alienArr[i]);
//   }
// };

// //Attack Function
// let attack = (shipNumber) => {
//   if (Math.random() < playerShip.accuracy && shipNumber.hull > 0){
//     console.log(`Nice shot! They have ${shipNumber.hull} health`);
//     shipNumber.hull = shipNumber.hull - playerShip.firepower;
//     takeDamage(shipNumber);
//   } else if (shipNumber.hull <= 0) {
//     console.log(`They got wrecked!`);
//     alienArr.shift();
//     newShip();
   
   
//   } else {
//     console.log(`We missed, Captain!`);
//     takeDamage(shipNumber);
//   }
// };

// //retreat Function
// let retreat = () => {
//   playerShip.hull = playerShip.hull + 5;
//   console.log(`You safely retreated and fixed up your ship! ${playerShip.hull}`)
//   encounter();
// };


// //Encounter Function and User Choice Comparison:
// let encounter = () => {

//   let userChoice = prompt('Do you want to attack or retreat?');
//   console.log(`\n`);
//   userChoice = userChoice.toLowerCase();
//   if (userChoice === 'attack') {
//     attack(alienArr[0]);

//   } else if (userChoice === 'retreat') {
//     retreat();
//   } else {
//     console.log('Not sure if I understand, Captain!');
//     //removed this 
//   } return;
// }


// let intro = () => {
//   console.log(`Welcome aboard the USS Schwarzenegger, Captain ${userName}. Good timing! It looks like there's an alien ship headed in your direction, Captain ${userName}! What should we do? \n`);
//   encounter()
//   if (alienArr.length === 0 ) {
//     console.log('NO MORE SHIPS')
//     return
//   } 
// }


// intro()












const alienArr = [
  alienShip1,
  alienShip2, 
  alienShip3,
  alienShip4,
  alienShip5,
  alienShip6,
];

let opponentChoice = Number(prompt('Choose your enemy 1/2/3/4/5/6'))

console.log(alienArr[opponentChoice - 1])