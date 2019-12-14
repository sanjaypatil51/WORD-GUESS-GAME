

var songsList = ["AllThat", "InspectorGadget", "FamilyMatters", "FullHouse", "Rugrats", "TheMagicSchoolBus", "BoyMeetsWorld",
    "SavedByTheBell", "Recess", "Animaniacs", "TheFreshPrinceofBelAir", "SisterSister", "ThePowerpuffGirls",
    "Arthur", "HeyArnold", "DawsonCreek", "DexterLaboratory", "Pokemon", "Friends", "Blossom", "SailorMoon", "AngryBeavers",
    "Doug", "SmartGuy", "TheXFiles"];

var answerArray = []
var numGuess = 0
var word = ""
var wordGuessed = []
var correctWordGuessed = []
var result = null

function setWord() {
    word = songsList[Math.floor(Math.random() * songsList.length)];
    console.log(word)
    //var answerList=""
    numGuess = word.length+3;
    var newDiv = ""
    var list = document.getElementById("guess-word")

    for (var i = 0; i < word.length; i++) {
        answerArray[i] = word[i].toUpperCase();
        newDiv = newDiv + "<li id=data-pos" + i + " class=letter></li>"
    }
    //console.log(newDiv)
    list.innerHTML = newDiv;

    var newDivP = document.createElement("p");
    newDivP.textContent = numGuess
    newDivP.setAttribute("id", "remain-guess");
    document.getElementById("number-guess").appendChild(newDivP);
    //newDiv.textContent=answerList
    //newDiv.setAttribute("id","guess-word-string")
    //document.getElementById("guess-word").appendChild(newDiv);
}

function setResult() {

    if (result == null && correctWordGuessed.length == answerArray.length) {
        numGuess = 0
        document.getElementById("remain-guess").textContent = numGuess
        var newDiv = document.createElement("p")
        newDiv.textContent = "You Won"
        newDiv.setAttribute("id", "result-set");
        document.getElementById("result").appendChild(newDiv);
        result = "Won"
        console.log(numGuess);


    }
    else if (result == null && numGuess == 0) {
        var newDiv = document.createElement("p")
        newDivP.textContent = "You Lost"
        newDivP.setAttribute("id", "result-set");
        document.getElementById("result").appendChild(newDivP);
        result = "Lost"

    }
}

function checkGuess(character) {
    console.log("test: "+numGuess)
    if (numGuess !== 0) {
        //alert("in top loop")        
        if (answerArray.includes(character) && !correctWordGuessed.includes(character)) {
            //alert("in if loop")
            for (i = 0; i < answerArray.length; i++) {
                if (answerArray[i] == character) {
                    --numGuess
                    document.getElementById("data-pos" + i).textContent = character
                    correctWordGuessed.push(character)
                    document.getElementById("remain-guess").textContent = numGuess

                }
            }


        }
        else if (!correctWordGuessed.includes(character) && !wordGuessed.includes(character)) {
            //alert("in else loop")
            var newDiv = document.createElement("li")
            newDiv.setAttribute("class", "letter")
            newDiv.textContent = character
            var list = document.getElementById("letter-guessed")
            list.appendChild(newDiv)
            wordGuessed.push(character)
            --numGuess
            document.getElementById("remain-guess").textContent = numGuess
        }
    }

    

}



function deleteChild(elementId) {

    myNode = document.getElementById(elementId);
    //alert(myNode.firstChild)
    while (myNode.childNodes.length >1) {
        myNode.removeChild(myNode.lastChild);
    }
}



document.onkeyup = function (event) {
    //alert(event.which)
    //alert(event.key)
    var character = event.key.toUpperCase()
    //alert(character)
    if (/[a-zA-Z]/i.test(character) && character.length == 1) {
        //alert("char typed")
        checkGuess(character)
        setResult()

    }
    else {
        alert("You Enter " + character + ". Only Charcater Allowed")
    }


}


document.getElementById("rest-btn").onclick = function () {
    answerArray = []
    numGuess = 0
    word = ""
    wordGuessed = []
    correctWordGuessed = []
    result = null
    deleteChild("guess-word");
    deleteChild("number-guess")
    deleteChild("letter-guessed")
    deleteChild("result")
    setWord()



};
setWord();