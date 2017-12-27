/// <reference path="gameItem.ts" />

class ScoreboardGK extends GameItem {
    // Attributes
    private _scoreGK: number

    // Methods
    
    //constructor
    constructor(name: string) {
        super(name);
        this._scoreGK = 0;
    }

    // // Getters / setters

    /**
     * Get the score of the player
     */
    
    public get scoreGK(): number {
        return this._scoreGK;
    }

    // Methods

    /**
     * Draw the scoreboard
     * @param container - The name of the div where the scoreboard will be placed.
     * !! DIT NOG EVEN NAKIJKEN
     */
    public draw(container: HTMLElement): void {
        // Creating the div
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;

        // Creating the text
        const gk = document.createElement("p");
        gk.innerHTML = "Keeper: "

        // Creating the span

        const spanGK = document.createElement("span");
        spanGK.innerHTML = this._scoreGK.toString();

        // Append the elements
        
        gk.appendChild(spanGK);
        this._element.appendChild(gk);

        container.appendChild(this._element);
    }

    /**
     * Update the scoreboard
     */
    public update(): void {
        const scoreSpanGK = (<HTMLElement>this._element.childNodes[0].childNodes[1]);
        scoreSpanGK.innerHTML = this._scoreGK.toString();
    }

    /**
     * Add 1 to the score of the goalkeeper
     */

    public addScoreGK() {
        this._scoreGK+=1;
        if(this._scoreGK >= 5) {
            setTimeout( () => {
                alert('you lost');
            }, 1000); // in ms
        }
    }

    /**
     * There are still some bugs in the game. For example:
     * when you miss. Fixed it with an alert. After clicking
     * OK the game will restart.
     */
    public addScoreGKMiss() {
        this._scoreGK+=1;
        setTimeout( () => {
            alert("You missed, this means that you instantly lost! \nClick OK to restart the game.");
        }, 1000); // in ms
    }
}