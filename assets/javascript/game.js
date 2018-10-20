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

//Picks a random index number from the animal object 
let randomWord = [Math.floor(Math.random() * animals.length)];

//is assigned the random animal.index 
let currentAnimal = animals[randomWord];

let usedAnimals = [];

//let userWord = [];

let wrongGuesses = [];

let wrongLetters = [];
let correctLetters = [];

let wins = 0;

let losses = 0;

// let userGuess = [];

let guessCount = 9;
document.getElementById("guessCount").innerHTML = guessCount;

//the property length from the animal object
let underscoreLength = [];

//the word length from the species 
let wordLength = () => {
    for (let i = 0; i < currentAnimal.species.length; i++) {
        underscoreLength.push('_');
        
        
    }
    return underscoreLength;
};

//Shows the number of underscores for the word
console.log(wordLength());

//Pushes the used animals to an arry
usedAnimals.push(animals.splice(randomWord, 1));
console.log(usedAnimals);

//Assigns the current word
let currentWord = Array.from(currentAnimal.species);
console.log(currentWord);






//Pushes the number of underscore to the html page.
document.getElementById("underscore").innerHTML = underscoreLength.join(' ');


//This keeps track of the users key selection
        // document.addEventListener('keypress', (event) => {
        //     let keyWord = String.fromCharCode(event.keyCode);
        //     console.log(keyWord)
        //     userGuesses.push(keyWord);

        //         if (currentWord.indexOf(userGuesses))

            
        // });

document.onkeydown = function(keyPress) {

    if (keyPress.keyCode >= 65 && keyPress.keyCode <= 90){
        let userGuess = keyPress.key.toLowerCase();
        console.log(userGuess);
        console.log(currentWord);

        
        if (currentWord.includes(userGuess)) {
            

            for (let i = 0; i < currentWord.length; i++) {

                if (userGuess === currentWord[i]) {
                    underscoreLength[i] = userGuess;
                    document.getElementById("underscore").innerHTML = underscoreLength.join(" ");
                    correctLetters.push(userGuess);
                    console.log(correctLetters)
                }
            }    
        }
        else if (wrongGuesses.indexOf(userGuess) < 0) {
                wrongLetters.push(guessCount);
                document.getElementById("guessCount").innerHTML = guessCount.join(" ");
                guessCount--;
                console.log(guessCount);
        }
        
        // {
        //     wrongGuesses.indexOf(userGuess) <0;
        //     document.getElementById("guessCount").innerHTML = guessCount.join('wrongGuesses');
        //     wrongLetters.push()
        //     ;

        // }
    }
};

