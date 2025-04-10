let body = document.body;
let showMessageNow = document.getElementById("message");
let title = document.getElementById("title");

const clearMoods = () => 
{
    body.classList.remove("happy", "sad", "mad", "surprise");
};

const setMood = (moodName, moodClass, callback) => 
{
    clearMoods();
    body.classList.add(moodClass);
    callback(moodName);
};

const showMessage = (mood) =>
{
    let moodImage = "";

    switch(mood)
    {
        case 'Happy':
            moodImage = "yippee-cheer.gif";
            break;
            
        case 'Sad':
            moodImage = "sad-cat.jpg";
             break;

        case 'Mad':
            moodImage = "mad-cat.jpg";
            break;
        
        case "Surprise":
            moodImage = "shocked-surprised.gif";
            break;
    }

    if(mood == 'Clear')
    {
        showMessageNow.textContent = ``;
    }

    else
    {
        showMessageNow.innerHTML = `You are feeling ${mood}!<br>
        <img src = "${moodImage}" alt = "${mood}" width = "300px"></img>`;

        if(mood == 'Happy')
            title.style.color = "white";

        else
            title.style.color = "#ffc93c";
    }
   
};

happyButton = document.getElementById("happbtn").addEventListener("click", () => setMood("Happy", "happy", showMessage));
sadButton = document.getElementById("sadbtn").addEventListener("click", () => setMood("Sad", "sad", showMessage));
madButton = document.getElementById("madbtn").addEventListener("click", () => setMood("Mad", "mad", showMessage));
surpriseButton = document.getElementById("surpbtn").addEventListener("click", () => setMood("Surprise", "surprise", showMessage));
clearButton = document.getElementById("clearbtn").addEventListener("click", () => setMood("Clear", "clear", showMessage));