function startGame()
{
    let answer = Math.floor(Math.random() * 10 +1);
    let maxAttempts = 3;
    var found = false;

    for(i = 1; i <= maxAttempts; i++)
    {
        let userGuess = prompt("Attempt " + i + ": Guess a number between 1 and 10!");
        userGuess = Number(userGuess);

        if(userGuess == answer)
        {
            alert("Congratulations! You win!!");
            found = true;
            break;
        }

        else if(userGuess > answer)
        {
            alert("Too high!!");
        }

        else if(userGuess = answer)
        {
            alert("Too low!!");
        }
    }

    if(found == false)
    {
        alert("Game Over! The answer is " + answer);
    }

    else
    {
        alert("Game Over! Thanks for playing");
    }
}