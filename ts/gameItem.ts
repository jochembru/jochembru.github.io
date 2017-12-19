class GameItem {
    // Attributes
    private _element: HTMLElement;
    private _name: String;
    private _xPos: number;
    private _yPos: number;

    // Constructor
    constructor(name: string, xPosition: number = 0, yPosition: number = 0) {
        this._name = name
        this._xPos = xPosition;
        this._yPos = yPosition;
    }

    // Set the xPos
    public set xPos(xPosition: number) {
        this._xPos = xPosition;
    }

    // Set the yPos
    public set yPos(yPosition: number) {
        this._yPos = yPosition;
    }

    // Methods

    // description
    public draw() {

    }

    // description
    public replace() {
        
    }

    // description
    public update() {

    }

 
}