/// <reference path="gameItem.ts" />

class ScoreboardGK extends GameItem {
    // Attributes
    private _scoreGK: number
    
    //constructor
    constructor(name: string) {
        super(name);
        this._scoreGK = 0;
    }

    // Getters / setters

    /**
     * Get the score of the player
     */
    
    public get scoreGK(): number {
        return this._scoreGK;
    }
    public get ngm(): HTMLElement {
        return document.getElementById("noGoalMessage");
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

    public noGoal(container: HTMLElement): void {
        const saveDiv = document.createElement('div');
        saveDiv.className = ("noGoalMessage");
        saveDiv.id = ("noGoalMessage");

        const noGoal = document.createElement("p");
        noGoal.innerHTML = "NO GOAL!";

        const click = document.createElement("p");
        click.innerHTML = "Click on any key to continue."

        saveDiv.appendChild(noGoal);
        saveDiv.appendChild(click);
        container.appendChild(saveDiv);

        console.log("no goal message");
    }

    public removeNoGoal() {
        const ngm = document.getElementById("noGoalMessage");
        ngm.parentNode.removeChild(ngm);
    }

    // Kan nog iets harder
    public lossSound() {
        const lossSound = document.getElementById("audioLoss");
        lossSound.play();
    }

    public missSound() {
        const missSound = document.getElementById("audioMiss");
        missSound.play();
    }

    /**
     * Add 1 to the score of the goalkeeper
     */

    public addScoreGK(): void {
        this._scoreGK+=1;
        if(this._scoreGK >= 5) {
            this.lossSound();
            setTimeout( () => {
                console.log("Keeper won")
                alert("Jammer, je hebt verloren! \nKlik op OK om het opnieuw te proberen!");
                location.reload();
            }, 1000);
        }
        this.missSound();
        const container = document.getElementById("container");
        this.noGoal(container);
    }
}