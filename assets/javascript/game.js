

var songsList = ["AllThat", "InspectorGadget", "FamilyMatters", "FullHouse", "Rugrats", "TheMagicSchoolBus", "BoyMeetsWorld",
    "SavedByTheBell", "Recess", "Animaniacs", "TheFreshPrinceofBelAir", "SisterSister", "ThePowerpuffGirls",
    "Arthur", "HeyArnold", "DawsonCreek", "DexterLaboratory", "Pokemon", "Friends", "Blossom", "SailorMoon", "AngryBeavers",
    "Doug", "SmartGuy", "TheXFiles"];

var answerArray = [];
var numgGuess = 0;
var word = ""

function setWord() {
    word = songsList[Math.floor(Math.random() * songsList.length)];

    //var answerList=""
    numgGuess = word.length * 2;
    var newDiv = ""
    var list = document.getElementById("guess-word")

    for (var i = 0; i < word.length; i++) {
        answerArray[i] = word[i];
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

function checkGuess(){

    
}

setWord();

document.onkeyup = function (event) {
    alert(event.which)
    alert(event.key)
    var char=event.key

    if (/[a-zA-Z]/i.test(char) && char.length==1){
        alert("char typed")


    }
    
}


