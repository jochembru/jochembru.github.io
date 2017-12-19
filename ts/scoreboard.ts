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
    // description
    public update() {

    }

    // Score player
    public addScoreP() {

    }

    // Score Goalkeeper
    public addScoreGK() {

    }
}