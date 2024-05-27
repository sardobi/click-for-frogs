function playFrogAudio(frogNumber) {
    frogAudio = new Audio(browser.runtime.getURL(`sounds/frogge.mp3`));

    // Pitch-bend audio based on the frog number.
    //
    // The audio file matches frog 2.
    frogAudio.preservesPitch = false;
    frogAudio.playbackRate = 1 * (1.09 ** (frogNumber - 2));
    frogAudio.play();
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

    frogNumber = e.target.id;
    playFrogAudio(frogNumber);
});

/**
 * Listen for keypresses to allow the frogs to be played with 1-8
 */
document.addEventListener("keydown", (e) => {
    // Only play for 1-8
    switch (e.key) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
            break;
        default:
            return;
    }

    frogNumber = e.key;
    playFrogAudio(frogNumber);
})