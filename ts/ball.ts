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
     * Description
     */
    public replaceB() {
        let bRect = document.getElementById("ball").getBoundingClientRect();
        if(bRect.left < 700) {
            console.log(this._name + " left")
            this._yPos += 300;
            this._xPos = 110
        }
        else if (bRect.left > 950) {
            console.log(this._name + " right");
            this._yPos += 300;
            this._xPos = 110;
        }
        else {
            console.log(this._name + " middle");
            this._yPos += 300;
            this._xPos = 110;
        }
    }
}