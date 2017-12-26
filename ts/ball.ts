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
}