/// <reference path="gameItem.ts" />

class ScoreboardP extends GameItem {
    // Attributes
    private _scoreP: number

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

    public get rg(): HTMLElement {
        return document.getElementById("goalMessage");
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

    public goal(container: HTMLElement): void {
        const goalDiv = document.createElement('div');
        goalDiv.className = ("goalMessage");
        goalDiv.id = ("goalMessage");

        const goal = document.createElement("p");
        goal.innerHTML = "GOAL!";

        const click = document.createElement("p");
        click.innerHTML = "Press any key to continue."

        goalDiv.appendChild(goal);
        goalDiv.appendChild(click);
        container.appendChild(goalDiv);

        console.log("Goal message");

    }

    public removeGoal() {
        const rg = document.getElementById("goalMessage");
        rg.parentNode.removeChild(rg);
    }

    public winSound() {
        const winSound = document.getElementById("audioWin");
        winSound.play();
    }
    public goalSound() {
        const goalSound = document.getElementById("audioGoal");
        goalSound.play();
    }


    /**
     * Add 1 to the score of the player
     */
    public addScoreP(): void {
        this._scoreP+=1;
        if(this._scoreP >= 5) {
            this.winSound();
            setTimeout( () => {
                console.log("You won");
                alert("Gefeliciteerd, je hebt gewonnen!\nKlik op OK om je score te verbeteren!");
                location.reload();
            }, 1000);
        }
        const container = document.getElementById("container");
        this.goal(container);
        this.goalSound();
    }
}