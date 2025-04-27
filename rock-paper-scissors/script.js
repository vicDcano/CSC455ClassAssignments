document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkmode-toggle");
    const backgroundBox = document.querySelector(".container");
    const scorebox= document.querySelector(".scoreboard");

    // Function to set the mode
    function setMode(isDarkMode) 
    {
        if (isDarkMode) 
        {
            document.body.style.backgroundColor = "var(--darkest-color)"; // Background color for dark mode 
            backgroundBox.style.backgroundColor = "rgb(80, 253, 123)"; // Adjust boxOne background
            scorebox.style["boxShadow"] = "0 4px 8px 0 rgba(247, 247, 247, 0.2), 0 6px 20px 0 rgba(247, 247, 247, 0.19)"; // Adjusting Boxshadow
           
        } 

        else 
        {
            document.body.style.backgroundColor = "var(--light-color);" // Background color for light mode
            backgroundBox.style.backgroundColor = "rgb(80, 253, 123)"; // Default boxOne background
            boxOne.style["boxShadow"] = "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
            
        }
    }

    // Load user preference from localStorage
    const isDarkMode = JSON.parse(localStorage.getItem("darkmode")) || false;
    toggle.checked = isDarkMode;
    setMode(isDarkMode);

    // Add event listener to toggle
    toggle.addEventListener("change", () => {
        const isChecked = toggle.checked;
        setMode(isChecked);
        localStorage.setItem("darkmode", isChecked); // Save preference to localStorage
    });
});
