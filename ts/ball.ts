/// <reference path="gameItem.ts" />

class Ball extends GameItem {

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
        console.log("Shoot!")
            this._yPos -= yPosition;
            this._element.classList.remove("moving");
            this._element.classList.add("shooting");
    }

    /**
     * Replacing the ball to begin position after pressing any key
     * (except spacebar)
     * Pressing spacebar will break the game..
     */
    public replaceB(): void {
        setTimeout( () => {
            this._yPos += 300;
            this._xPos = 110;
            this._element.classList.remove("shooting");
            this._element.classList.add("moving")
            }, 1000);

        }
    }