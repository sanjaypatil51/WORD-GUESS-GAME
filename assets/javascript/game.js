

var songsList = ["AllThat", "InspectorGadget", "FamilyMatters", "FullHouse", "Rugrats", "TheMagicSchoolBus", "BoyMeetsWorld",
    "SavedByTheBell", "Recess", "Animaniacs", "TheFreshPrinceofBel-Air", "SisterSister", "ThePowerpuffGirls",
    "Arthur", "HeyArnold", "DawsonCreek", "DexterLaboratory", "Pokemon", "Friends", "Blossom", "SailorMoon", "AngryBeavers",
    "Doug", "SmartGuy", "TheXFiles"];

function setWord(){
    var word = songsList[Math.floor(Math.random() * songsList.length)];
    var answerArray = [];
    var answerList=""
    var newDiv=document.createElement("div")
    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
        answerList=answerList+"  "+answerArray[i]
    }
    
    newDiv.textContent=answerList
    newDiv.setAttribute("id","guess-word-string")
    document.getElementById("guess-word").appendChild(newDiv);
}

setWord();


