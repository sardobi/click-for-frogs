/**
* Given the name of a frog, get the corresponding note audio file.
*/
function frogToAudioFile(frogName) {
    noteName = frogName.replace("Frog", "");
    return browser.runtime.getURL(`notes/${noteName}.mp3`);
}

// Style the buttons with the corresponding frog images.
document.querySelectorAll('.frog-button').forEach(button => {
    button.style.setProperty('--img-src', 'url(' + button.dataset.imgSrc + ')');
});

/**
* Listen for hovers on the buttons, playing the corresponding frog note.
*/
document.addEventListener("mouseover", (e) => {
    if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
        // Ignore when mouseover is not on a button within <div id="popup-content">.
        return;
    }

    frogName = e.target.id;
    frogAudio = new Audio(frogToAudioFile(frogName));
    frogAudio.play();
});

/**
 * Listen for keypresses to allow the frogs to be played with 1-8
 */
document.addEventListener("keydown", (e) => {
    function frogName() {
        switch (e.key) {
            case "1": return "FrogCLow";
            case "2": return "FrogD";
            case "3": return "FrogE";
            case "4": return "FrogF";
            case "5": return "FrogG";
            case "6": return "FrogA";
            case "7": return "FrogB";
            case "8": return "FrogCHigh";
        }
    };

    frogName = frogName();
    frogAudio = new Audio(frogToAudioFile(frogName));
    frogAudio.play();
})