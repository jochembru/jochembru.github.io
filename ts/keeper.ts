class Keeper extends GameItem {

    // Constructor
    constructor(name: string, xPosition: number = 0, yPosition: number = 0) {
        super(name, xPosition, yPosition);
    }

    // Methods

    /**
     * Make the three directions the keeper can dive to
     * @param xPosition - The amount of pixels it will change horizontally
     */
    private leftDive(xPosition: number): void {
        this._xPos -= xPosition;
        this._element.classList.add("diving");
    }

    private rightDive(xPosition: number): void {
        this._xPos += xPosition;
        this._element.classList.add("diving");
    }

    private midDive(xPosition: number): void {
        this.xPos = 0;
    } 

    /**
     * The keeper will dive in a random corner
     * @var rn - Random number between 0 and 2
     */
    public randomCorner(): void {
        let rn = Math.floor((Math.random() * 3));
        console.log("Random number: " + rn);

        if(rn === 0) {
            this.leftDive(250);
        } else if(rn === 1) {
            this.rightDive(250)
        } else {
            this.midDive(0);
        }
    }

}
