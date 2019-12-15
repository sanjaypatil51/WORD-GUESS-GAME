

var songsList = ["AllThat", "InspectorGadget", "FamilyMatters", "FullHouse", "Rugrats", "BoyMeetsWorld",
    "SavedByTheBell", "Recess", "Animaniacs",  "SisterSister", "Arthur", "HeyArnold", "DawsonCreek",  "Pokemon", 
    "Friends", "Blossom", "SailorMoon", "AngryBeavers",
    "Doug", "SmartGuy", "TheXFiles"];

 var songVideo ={
    AllTha: '<iframe src="https://www.youtube.com/embed/BSDg2oSazNc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    InspectorGadge: '<iframe src="https://www.youtube.com/embed/e-JHfXVlkik" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    FamilyMatters:'<iframe src="https://www.youtube.com/embed/kYvNiKwWvhk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    FullHouse:'<iframe src="https://www.youtube.com/embed/2ZNFaxyKp_Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    Rugrat:'<iframe  src="https://www.youtube.com/embed/1Zch-CGnH9c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    BoyMeetsWorl:'<iframe  src="https://www.youtube.com/embed/nOpgKz9y9fA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    SavedByTheBell:'<iframe src="https://www.youtube.com/embed/rgqPmmmycIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    Recess:'<iframe src="https://www.youtube.com/embed/jvRlyA3uUW0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    Animaniacs:'<iframe  src="https://www.youtube.com/embed/CWnWwN1z_UM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    SisterSiste:'<iframe src="https://www.youtube.com/embed/T4JcOZJi5JQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    Arthur:'<iframe src="https://www.youtube.com/embed/7zkX6kfnWbk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    HeyArnold:'<iframe src="https://www.youtube.com/embed/vUsnJ9jlwns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    DawsonCreek:'<iframe  src="https://www.youtube.com/embed/Htv9WDItIgA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    Pokemon:'<iframe src="https://www.youtube.com/embed/JuYeHPFR3f0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    Friends:'<iframe  src="https://www.youtube.com/embed/Niu9Zmrx0p8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    Blossom:'<iframe  src="https://www.youtube.com/embed/Y4l0BS3RPvc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    SailorMo:'<iframe  src="https://www.youtube.com/embed/X6_RZhh44NY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    AngryBeavers:'<iframe  src="https://www.youtube.com/embed/geRR7JF-3FI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    Doug:'<iframe src="https://www.youtube.com/embed/JR5zFiIxqSs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    SmartGu:'<iframe  src="https://www.youtube.com/embed/sf0goBbPQoo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    TheXFiles:'<iframe src="https://www.youtube.com/embed/m7yjRxZIUvQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


 }   

var answerArray = []
var numGuess = 0
var word = ""
var wordGuessed = []
var correctWordGuessed = []
var result = null
var won_score=0
var lost_score=0

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

    var newDivP = document.createElement("li");
    newDivP.textContent = numGuess
    newDivP.setAttribute("id", "remain-guess");
    document.getElementById("number-guess-id").appendChild(newDivP);
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
        document.getElementById("result-id").appendChild(newDiv);
        result = "Won"       
        //console.log(numGuess);
        won_score++
        document.getElementById("won-score").textContent=won_score
        v_link=songVideo[word]
        document.getElementById("embed-video").innerHTML=v_link
        console.log(v_link)
        alert("You Won")


    }
    else if (result == null && numGuess == 0) {
        var newDiv = document.createElement("p")
        newDiv.textContent = "You Lost, correct word is:"+ word+". Try agian by pressing Rest Button"        
        newDiv.setAttribute("id", "result-set");
        document.getElementById("result-id").appendChild(newDiv);
        result = "Lost"        
        lost_score++
        document.getElementById("lost-score").textContent=lost_score
        v_link=songVideo[word]
        document.getElementById("embed-video").innerHTML=v_link
        alert("You Lost, correct word is:"+ word+". Try agian by pressing Rest Button")

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
    while (myNode.childNodes.length) {
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
    //deleteChild("guess-word");
    deleteChild("number-guess-id")
    deleteChild("letter-guessed")
    deleteChild("result-id")
    deleteChild("embed-video")
    setWord()



};
setWord();