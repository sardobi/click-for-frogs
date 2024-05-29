frogSpritesPath = "../icons/buttons"

frogSpritesGrounded = {
    1: frogSpritesPath + "/frogge-green.png",
    2: frogSpritesPath + "/frogge-red.png",
    3: frogSpritesPath + "/frogge-pink.png",
    4: frogSpritesPath + "/frogge-yellow.png",
    5: frogSpritesPath + "/frogge-green.png",
    6: frogSpritesPath + "/frogge-red.png",
    7: frogSpritesPath + "/frogge-pink.png",
    8: frogSpritesPath + "/frogge-yellow.png",
}

frogSpritesHopping = {
    1: frogSpritesPath + "/frogge-green-hop.png",
    2: frogSpritesPath + "/frogge-red-hop.png",
    3: frogSpritesPath + "/frogge-pink-hop.png",
    4: frogSpritesPath + "/frogge-yellow-hop.png",
    5: frogSpritesPath + "/frogge-green-hop.png",
    6: frogSpritesPath + "/frogge-red-hop.png",
    7: frogSpritesPath + "/frogge-pink-hop.png",
    8: frogSpritesPath + "/frogge-yellow-hop.png",
}

function frogRibbits(frogNumber) {
    playFrogAudio(frogNumber);

    frogHops(frogNumber);
}

function playFrogAudio(frogNumber) {
    frogAudio = new Audio(browser.runtime.getURL(`sounds/frogge.mp3`));

    // Pitch-bend audio based on the frog number.
    //
    // The audio file matches frog 2.
    frogAudio.preservesPitch = false;
    frogAudio.playbackRate = 1 * (1.09 ** (frogNumber - 2));
    frogAudio.play();
}

function frogHops(frogNumber) {
    // Get the button with the corresponding frog number
    const button = document.getElementById(frogNumber);

    // Change the background image to the hopping frog image
    button.style.backgroundImage = 'url(' + frogSpritesHopping[frogNumber] + ')';

    // Reset the image back to the original after a delay to simulate the frog "landing"
    setTimeout(() => {
        button.style.backgroundImage = 'url(' + frogSpritesGrounded[frogNumber] + ')';
    }, 200);

}

// Style the buttons with the corresponding frog images.
document.querySelectorAll('.frog-button').forEach(button => {
    frogNumber = button.id;
    button.style.backgroundImage = 'url(' + frogSpritesGrounded[frogNumber] + ')';
});

// Listen for hovers on the buttons, playing the corresponding frog note.
document.addEventListener("mouseover", (e) => {
    if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
        // Ignore when mouseover is not on a button within <div id="popup-content">.
        return;
    }

    frogNumber = e.target.id;
    frogRibbits(frogNumber);
});

// Listen for keypresses to allow the frogs to be played with 1-8.
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
    frogRibbits(frogNumber);
})