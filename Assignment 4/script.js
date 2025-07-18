
function swapTheme() {
    // Get references to the app div and the button
    const appDiv = document.getElementById("app");
    const swapButton = document.getElementById("swap");

    // Toggle between day and night classes on the div and button
    if (appDiv.classList.contains("day")) {
        appDiv.classList.remove("day");
        appDiv.classList.add("night");

        swapButton.classList.remove("button_day");
        swapButton.classList.add("button_night");
    } else {
        appDiv.classList.remove("night");
        appDiv.classList.add("day");

        swapButton.classList.remove("button_night");
        swapButton.classList.add("button_day");
    }
}