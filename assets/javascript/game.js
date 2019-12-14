

var songsList = ["AllThat", "InspectorGadget", "FamilyMatters", "FullHouse", "Rugrats", "TheMagicSchoolBus", "BoyMeetsWorld",
    "SavedByTheBell", "Recess", "Animaniacs", "TheFreshPrinceofBelAir", "SisterSister", "ThePowerpuffGirls",
    "Arthur", "HeyArnold", "DawsonCreek", "DexterLaboratory", "Pokemon", "Friends", "Blossom", "SailorMoon", "AngryBeavers",
    "Doug", "SmartGuy", "TheXFiles"];

var answerArray = []
var numgGuess = 0
var word = ""
var wordGuessed = []
var correctWordGuessed = []

function setWord() {
    word = songsList[Math.floor(Math.random() * songsList.length)];
    console.log(word)
    //var answerList=""
    numgGuess = word.length + 3;
    var newDiv = ""
    var list = document.getElementById("guess-word")

    for (var i = 0; i < word.length; i++) {
        answerArray[i] = word[i].toUpperCase();
        newDiv = newDiv + "<li id=data-pos" + i + " class=letter></li>"
    }
    //console.log(newDiv)
    list.innerHTML = newDiv;

    var newDivP = document.createElement("p");
    newDivP.textContent = numgGuess
    newDivP.setAttribute("id", "remain-guess");
    document.getElementById("number-guess").appendChild(newDivP);
    //newDiv.textContent=answerList
    //newDiv.setAttribute("id","guess-word-string")
    //document.getElementById("guess-word").appendChild(newDiv);
}

function checkGuess(character) {
    if (!wordGuessed.includes(character) && !correctWordGuessed.includes(character)) {
        //alert("in top loop")
        if (answerArray.includes(character)) {
            //alert("in if loop")
            for (i = 0; i < answerArray.length; i++) {
                if (answerArray[i] == character) {
                    --numgGuess
                    document.getElementById("data-pos" + i).textContent = character
                    correctWordGuessed.push(character)
                    document.getElementById("remain-guess").textContent = numgGuess

                }
            }
        }
        else {
            //alert("in else loop")
            var newDiv = document.createElement("li")
            newDiv.setAttribute("class", "letter")
            newDiv.textContent = character
            var list = document.getElementById("letter-guessed")
            list.appendChild(newDiv)
            wordGuessed.push(character)
            --numgGuess
            document.getElementById("remain-guess").textContent = numgGuess
        }
    }
}

setWord();

document.onkeyup = function (event) {
    //alert(event.which)
    //alert(event.key)
    var character = event.key.toUpperCase()
    if (/[a-zA-Z]/i.test(character) && character.length == 1) {
        //alert("char typed")
        checkGuess(character)

    }

}


