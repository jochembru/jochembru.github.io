/// <reference path="gameItem.ts" />

class Scoreboard extends GameItem {
    // Attributes
    private _scoreP: number;
    private _scoreGK: number;

    // Methods
    
    //constructor
    constructor(name: string) {
        super(name);
        this._scoreP = 0;
        this._scoreGK = 0;
    }

    // Getters / setters
    public get scoreP(): number {
        return this._scoreP;
    }

    public get scoreGK(): number {
        return this._scoreGK;
    }


    //other methods
    public draw(container: HTMLElement): void {
        // Creating the div
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;

        // Creating the text
        const p = document.createElement("p");
        p.innerHTML = "Player: ";

        const gk = document.createElement("p");
        gk.innerHTML = "Keeper: ";

        // Creating the span
        const spanP = document.createElement("span");
        spanP.innerHTML = this._scoreP.toString();

        const spanGK = document.createElement("span");
        spanGK.innerHTML = this._scoreGK.toString();

        // Append the elements
        p.appendChild(spanP);
        this._element.appendChild(p);

        gk.appendChild(spanGK);
        this._element.appendChild(gk);
        
        container.appendChild(this._element);
    }

    public update(): void {
        const scoreSpanP = (<HTMLElement>this._element.childNodes[0].childNodes[1]);
        scoreSpanP.innerHTML = this._scoreP.toString();
        
        const scoreSpanGK = (<HTMLElement>this._element.childNodes[0].childNodes[1]);
        scoreSpanGK.innerHTML = this._scoreGK.toString();
    }

    
    public addScoreP() {
        this._scoreP++;
    }

    public addScoreGK() {
        this._scoreGK++;
    }
}