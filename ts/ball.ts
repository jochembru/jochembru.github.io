/// <reference path="gameItem.ts" />

class Ball extends GameItem {
    // Attributes

    // Constructor
    constructor(name: string, xPosition: number = 0, yPosition: number = 0) {
        super(name, xPosition, yPosition);
    }
    // Methods

    /**
     * Moving the ball when the player shoots
     * @param yPosition - The y position of the ball (in the goal)
     */
    public shoot(yPosition: number) : void {
        this._yPos -= yPosition;
        this._element.classList.add("shooting");
    }

        /**
     * Als xpos van speler / keeper 'links' is, dan 260(x) terug + bal 300(y) terug
     * Als xpos van speler / keeper 'rechts' is, dan 260(x) terug + bal 300(y) terug
     * Als xpos van speler / keeper  midden is, dan alleen bal 300(y) terug
     */

    public resetMethodB() {
        let bRect = document.getElementById("ball").getBoundingClientRect();
        if(bRect.left < 700) {
            console.log("Ball left")
            this._yPos += 300;
            this._xPos += 260;
        }
        else if (bRect.left > 950) {
            console.log("Ball right");
            this._yPos += 300;
            this._xPos -= 260;
        }
        else {
            console.log("Ball middle");
            this._yPos += 300;
        }
    }
}