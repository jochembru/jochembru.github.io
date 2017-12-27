/// <reference path="gameItem.ts" />

class ScoreboardP extends GameItem {
    // Attributes
    private _scoreP: number

    // Methods
    
    //constructor
    constructor(name: string) {
        super(name);
        this._scoreP = 0;
    }

    // // Getters / setters

    /**
     * Get the score of the player
     */
    public get scoreP(): number {
        return this._scoreP;
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
        const p = document.createElement("p");
        p.innerHTML = "Player: ";


        // Creating the span
        const spanP = document.createElement("span");
        spanP.innerHTML = this._scoreP.toString();
        // Append the elements
        p.appendChild(spanP);
        this._element.appendChild(p);

        container.appendChild(this._element);
    }

    /**
     * Update the scoreboard
     */
    public update(): void {
        const scoreSpanP = (<HTMLElement>this._element.childNodes[0].childNodes[1]);
        scoreSpanP.innerHTML = this._scoreP.toString();
    }

    /**
     * Add 1 to the score of the player
     */

    /**
     * Add 1 to the score of the goalkeeper
     */
    public addScoreP() {
        this._scoreP+=1;
        if(this._scoreP >= 5) {
            setTimeout( () => {
                alert('you won');
            }, 1000);
            
        }
    }
}