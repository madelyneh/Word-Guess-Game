// Game object

const animals = [

    {
        species: "elephant",
        fact: "African Bush Elephants are the largest land animals in the world. Males can grow up to 13 feet tall at the shoulders, measure up to 30 feet from trunk to tail, and weigh up to 14,000 pounds.",
        image: "assets/images/elephant-animal.jpg"
    },
    {
        species: "lion",
        fact: "Unlike other cats, lions are very social animals. They live in groups, called prides, of around 30 lions.",
        image: "assets/images/lion-animal.jpg"
        
    },
    {
        species: "leopard",
        fact: "Leopards are nocturnal animals who prefer to live alone. They are very agile and good swimmers. They are able to leap more than 20 feet.",
        image: "assets/images/leopard-animal.jpg"
    },
    {
        species: "rhinoceros",
        fact: "Rhinoceroses are large, herbivorous mammals identified by their characteristic horned snouts. The word 'rhinoceros' comes from the Greek words 'rhino' (nose) and 'ceros' (horn).",
        image: "assets/images/rhino-animal.jpg"
        
    },
    {
        species: "hippopotamus",
        fact: "Hippos bask on the shoreline and secrete an oily red substance, which gave rise to the myth that they sweat blood. The liquid is actually a skin moistener and sunblock that may also provide protection against germs.",
        image: "assets/images/Hippo-animal.jpg"
    },
    {
        species: "cheetah",
        fact: "The cheetah is the world's fastest land animal. They can run at 70 mph for 20-30 seconds at a time. They can reach their top speed in just 3 seconds.",
        image: "assets/images/cheetah-animal.jpg"
        
    },
    {
        species: "wildebeest",
        fact: "Wildebeest are well known for their seasonal migration during the harsh dry months. 1.5 million wildebeest will travel between 500-1000 miles each migration in order to find food.",
        image: "assets/images/wildebeest-animal.jpg"
    },
    {
        species: "giraffe",
        fact: "Giraffes only need 5 to 30 minutes of sleep in a 24-hour period. They often achieve that in quick naps that may last only a minute or two at a time.",
        image: "assets/images/giraffes-animal.jpg"
        
    },
    {
        species: "zebra",
        fact: "Zebras run in zigzag patters when being chased by predators to make it more difficult for the predator to catch them. Each zebra's stripe pattern is as unique as a human's finger print.",
        image: "assets/images/zebra-animal.jpg"
    },
    {
        species: "crocodile",
        fact: "Africa's largest crocodile can reach a maximum size of about 20 feet and can weigh up to 1,650 pounds. Average sizes, though, are more in the range of 16 feet and 500 pounds.",
        image: "assets/images/crocodile-animal.jpg"
        
    }
];




//is assigned the random animal.index 
let currentAnimal = [];

//Pushes the used animals to an arry and removes them from the animal object
let usedAnimals = [];

let wrongGuesses = [];

let currentWord = [];

let wrongLetters = [];

let correctLetters = [];

let wins = 0;

let guessCount = '';
document.getElementById("guessCount").innerHTML = guessCount;

//the property length from the animal object
let underscoreLength = [];
 
let underscore = [];

let animalPicture = "";

let animalFacts = "";



//Sets the current word
function setAnimal() {

    //Picks a random index number from the animal object 
    let randomWord = [Math.floor(Math.random() * animals.length)];
    currentAnimal = animals[randomWord];
    currentWord = Array.from(currentAnimal.species);
    animalPicture = currentAnimal.image;
    animalFacts = currentAnimal.fact;
    underscoreLength = [];


    //the word length from the species 
    
    for (let i = 0; i < currentAnimal.species.length; i++) {
        underscoreLength.push('_');
        
         };

    //Pushes the number of underscore to the html page.
    document.getElementById("underscore").innerHTML = underscoreLength.join(" ");


    usedAnimals = animals.splice(randomWord, 1);

    console.log(underscoreLength);
    

};



//Resets the game
function setGame() {
    document.getElementById('underscore').innerHTML = " ";
    setAnimal();
    // usedAnimals = animals;
    // console.log(usedAnimals);
    // usedAnimals = [];
    guessCount = 9;
    document.getElementById("guessCount").innerHTML = guessCount;
    correctLetters = [];
    wrongGuesses = [];
    wrongLetters = [];
    document.getElementById('wrongLetters').innerHTML = wrongLetters.join(', ');
    userGuess = [];
    document.getElementById('animalpic').setAttribute("src", "../Word-Guess-Game/assets/images/lion-questionmark.jpeg");
    document.getElementById('facts').innerHTML = '';

};

setGame();



//Tracks the key strokes
document.onkeydown = function(keyPress) {

    if (keyPress.keyCode >= 65 && keyPress.keyCode <= 90){
        let userGuess = keyPress.key.toLowerCase();

        //If correct choice
        if (currentWord.includes(userGuess)) {
            

            for (let i = 0; i < currentWord.length; i++) {

                if (userGuess === currentWord[i]) {
                    underscoreLength[i] = userGuess;
                    document.getElementById("underscore").innerHTML = underscoreLength.join(" ");
                    correctLetters.push(userGuess);
                    console.log(underscoreLength);
                }
            }    
        }
        //If wrong choice
        else  {
            guessCount --; 
            document.getElementById('guessCount').innerHTML = guessCount;
            wrongLetters.push(userGuess);
            document.getElementById('wrongLetters').innerHTML = wrongLetters.join(', ');
        }
        
    }
};

document.onkeyup = function (keyPress) {

    if (underscoreLength.indexOf("_") <= -1) {
        wins ++;
        document.getElementById('wins').innerHTML = wins;
        document.getElementById('animalpic').setAttribute('src', animalPicture);
        document.getElementById('facts').innerHTML = animalFacts;
        setTimeout(setGame, 8000);

        if (wins === 10) {
            alert('YOU WIN! Congratulations!');
            
        }

    }
    else if (guessCount === 0) {
        alert('YOU LOSE. Better luck next time.');
        setTimeout(setGame, 1000);

    }

}

