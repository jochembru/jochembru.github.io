class Player extends GameItem {
    // Attributes

    // Constructor
    constructor(name: string, xPosition: number = 0, yPosition: number = 0) {
        super(name, xPosition, yPosition);
    }
    // Methods

          /**
     * Als xpos van speler / keeper 'links' is, dan 260(x) terug + bal 300(y) terug
     * Als xpos van speler / keeper 'rechts' is, dan 260(x) terug + bal 300(y) terug
     * Als xpos van speler / keeper  midden is, dan alleen bal 300(y) terug
     */

    public resetMethodP() {
        let pRect = document.getElementById("player").getBoundingClientRect();

        if(pRect.left < 700) {
            console.log("Player left")
            this._xPos += 260;
        }
        else if (pRect.left > 950) {
            console.log("Player right");
            this._xPos -= 260;
        }
        else {
            console.log("Player middle");
        }
    }

}