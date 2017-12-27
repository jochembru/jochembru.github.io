class Keeper extends GameItem {
    // Attributes

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
     * @var rn - Random number between 0 and 9
     */
    public randomCorner() {
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

            /**
     * Als xpos van speler / keeper 'links' is, dan 260(x) terug + bal 300(y) terug
     * Als xpos van speler / keeper 'rechts' is, dan 260(x) terug + bal 300(y) terug
     * Als xpos van speler / keeper  midden is, dan alleen bal 300(y) terug
     */

    // public resetMethodK() {
    //     let gkRect = document.getElementById("GKPos1").getBoundingClientRect();

    //     if(gkRect.left < 700) {
    //         console.log("Keeper left")
    //         this._xPos = 0;
    //     }
    //     else if (gkRect.left > 950) {
    //         console.log("Keeper right");
    //         this._xPos = 0;
    //     }
    //     else  {
    //         console.log("Keeper middle");
    //         this._xPos = 0;
    //     }
    // }
}
