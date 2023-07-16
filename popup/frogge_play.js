/**
* Listen for hovers on the buttons, playing the corresponding frog note.
*/
document.addEventListener("mouseover", (e) => {
    /**
    * Given the name of a frog, get the corresponding note audio file.
    */
    function frogToAudioFile(frogName) {
        noteName = frogName.replace("Frog", "");
        return browser.runtime.getURL(`notes/${noteName}.mp3`);
    }

    if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
        // Ignore when mouseover is not on a button within <div id="popup-content">.
        return;
    }

    frogName = e.target.id;
    frogAudio = new Audio(frogToAudioFile(frogName));
    frogAudio.play();
});
