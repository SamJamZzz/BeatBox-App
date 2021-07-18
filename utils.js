/**
 * Beat class that keeps track of playing the audio
 */
class Beat {
    constructor(audioSrc) {
        this.audio = new Audio(audioSrc);
    }

    play = () => {
        this.audio.currentTime = 0;
        this.audio.play();
    }
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, keyCode){
        this.color = color;
        this.keyCode = keyCode;
        this.elem = document.getElementById(keyCode);
        this.setButtonColorInHTML();
        this.setATransitionEndListener();
    }

    /**
     * Set the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.elem.style.borderColor = this.color;
    }

    /**
     * Select function to set the background color and boxShadow
     */
    select = () => {
        this.elem.style.backgroundColor = this.color;
        this.elem.style.boxShadow = `0px 0px 17px 0px ${this.color}`;
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.elem.style.backgroundColor = 'transparent';
        this.elem.style.boxShadow = 'none';
    }

    setATransitionEndListener = () => {
        this.elem.addEventListener('transitionend', () => {
            this.deselect();
        })
    }
}