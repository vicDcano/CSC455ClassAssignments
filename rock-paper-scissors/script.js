document.addEventListener("DOMContentLoaded", () => {
    //Decorating the document
    const toggle = document.getElementById("darkmode-toggle");
    const backgroundBox = document.querySelector(".container");
    const wordHeader = document.querySelector(".game-title");
    const scorebox= document.querySelector(".scoreboard");
    const par = document.querySelectorAll("p");
    const allButtons = document.querySelectorAll("button");

    // Function for light and dark mode
    function setMode(isDarkMode) 
    {

        if (isDarkMode) 
        {
            document.body.style.backgroundColor = "var(--darkest-color)"; // Background color for dark mode 
            backgroundBox.style.border = "5px solid var(--light-color)";
            wordHeader.style.color = "var(--light-color)";
            scorebox.style.backgroundColor = "var(--darkest-color)";
            scorebox.style.border = "5px dashed var(--darker-color)";

            //affecting every paragraph element
            par.forEach(paragraph => {
                paragraph.style.color = "var(--light-color)";
            })

            allButtons.forEach(button => {
                button.style.backgroundColor = "var(--darkest-color)";
                button.style.color = "var(--light-color)";
                button.style.boxShadow = "0 3px 5px 1px var(--light-color)";
            })

            scorebox.style["boxShadow"] = "0 3px 5px 1px var(--light-color)"; // Adjusting Boxshadow
        } 

        else 
        {
            document.body.style.backgroundColor = "var(--light-color)"; // Background color for light mode
            backgroundBox.style.border = "5px solid var(--darkest-color)";
            wordHeader.style.color = "var(--darkest-color)";
            scorebox.style.backgroundColor = "var(--light-color)";
            scorebox.style.border = "5px dashed var(--grey-color)";

            par.forEach(paragraph => {
                paragraph.style.color = "var(--darkest-color)";
            })

            allButtons.forEach(button => {
                button.style.backgroundColor = "var(--light-color)";
                button.style.color = "var(--darkest-color)";
                button.style.boxShadow = "0 3px 5px 1px var(--darker-color)";
            })

            scorebox.style["boxShadow"] = "0 3px 5px 1px var(--darkest-color)";
        }
    }

    // Load user preference from localStorage
    const isDarkMode = JSON.parse(localStorage.getItem("darkmode")) || false;
    toggle.checked = isDarkMode; // since it is a toggle but hidden
    setMode(isDarkMode);

    // Add event listener to toggle
    toggle.addEventListener("change", () => {
        const isChecked = toggle.checked;
        setMode(isChecked);
        localStorage.setItem("darkmode", isChecked); // Save preference to localStorage
    });

});

//controling the text and score
const resultText = document.querySelector(".result");
const pchoice = document.querySelector(".player-choice");
const comchoice = document.querySelector(".com-choice");
const winnerSelected = document.querySelector(".results");

const playerScore = document.querySelector(".p-number");
const comScore = document.querySelector(".c-number");

let compNum = 0;
let pNum = 0;

function getRandomNum()
{
    const min = Math.ceil(1);
    const max = Math.floor(3);

    //exclusiviley between 1-3
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// display and updates current score
function currentScores()
{
    playerScore.textContent = pNum;
    comScore.textContent = compNum;

    savingScores();
}

// This function helps store the score in storage memory
function savingScores()
{
    localStorage.setItem("scoresNum", JSON.stringify({player: pNum, computer: compNum}));
}

//console.log(getRandomNum()); //debugging

// Loads the scoreboard
document.addEventListener("DOMContentLoaded", () => {

    const storedScore = JSON.parse(localStorage.getItem("scoresNum"));

    if(storedScore != null)
    {
        pNum = storedScore.player;
        compNum = storedScore.computer;
    }

    currentScores();

});

function rockChoice()
{
    const compPick = getRandomNum()

    resultText.style.display = "flex";
    pchoice.textContent = "You chose:...  ROCK\n";

    switch (compPick)
    {
        case 1:
            comchoice.textContent = "Computer chose:... ROCK\n";
            winnerSelected.textContent = "Result:.. \nIT'S A TIE!!!!\n";

            break;

        case 2:
            comchoice.textContent = "Computer chose:... PAPER\n";
            winnerSelected.textContent = "Result:...\nYOU LOSE\n";

            compNum++;

            break;

        case 3:
            comchoice.textContent = "Computer chose:... SCISSORS\n";
            winnerSelected.textContent = "Result:..\nYOU WIN";

            pNum++;

            break;
    }

    currentScores(); // updates and saves the score
}

function paperChoice()
{
    const compPick = getRandomNum()

    resultText.style.display = "flex";
    pchoice.textContent = "You chose:...  PAPER\n";

    switch (compPick)
    {
        case 1:
            comchoice.textContent = "Computer chose:... ROCK\n";
            winnerSelected.textContent = "Result:..\nYOU WIN";

            pNum++;
            
            break;

        case 2:
            comchoice.textContent = "Computer chose:... PAPER\n";
            winnerSelected.textContent = "Result:.. \nIT'S A TIE!!!!\n";
            break;

        case 3:
            comchoice.textContent = "Computer chose:... SCISSORS\n";
            winnerSelected.textContent = "Result:...\nYOU LOSE\n";

            compNum++;
            
            break;
    }

    currentScores();

}

function scissorsChoice()
{
    const compPick = getRandomNum()

    resultText.style.display = "flex";
    pchoice.textContent = "You chose:...  SCISSORS\n";

    switch (compPick)
    {
        case 1:
            comchoice.textContent = "Computer chose:... ROCK\n";
            winnerSelected.textContent = "Result:...\nYOU LOSE\n";

            compNum++;
            
            break;

        case 2:
            comchoice.textContent = "Computer chose:... PAPER\n";
            winnerSelected.textContent = "Result:..\nYOU WIN";

            pNum++;

            break;

        case 3:
            comchoice.textContent = "Computer chose:... SCISSORS\n";
            winnerSelected.textContent = "Result:.. \nIT'S A TIE!!!!\n";
            
            break;
    }

    currentScores();

}

function resetScores()
{
    compNum = 0;
    pNum = 0;

    resultText.style.display = "none";

    currentScores();
}

