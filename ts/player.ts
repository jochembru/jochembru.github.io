class Player extends GameItem {
    // Attributes

    // Constructor
    constructor(name: string, xPosition: number = 0, yPosition: number = 0) {
        super(name, xPosition, yPosition);
    }
    // Methods

    /**
     * Description.
     */

    // public resetMethodP() {
    //     let pRect = document.getElementById("player").getBoundingClientRect();
    //     if(pRect.left < 700) {
    //         console.log(this._name + ' left')
    //         this._xPos = 0;
    //     }
    //     else if (pRect.left > 950) {
    //         console.log("Player right");
    //         this._xPos = 0;
    //     }
    //     else {
    //         console.log("Player middle");
    //         this._xPos = 0;
    //     }
    // }

}