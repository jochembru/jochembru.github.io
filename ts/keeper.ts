class Keeper extends GameItem {
    // Attributes

    // Constructor

    constructor(name: string, xPosition: number = 0, yPosition: number = 0) {
        super(name, xPosition, yPosition);
    }
    // Methods

    // Make the three directions the keeper can dive to
    public leftDive(xPosition: number): void {
        this._xPos -= xPosition;
        this._element.classList.add("diving");
    }

    public rightDive(xPosition: number): void {
        this._xPos += xPosition;
        this._element.classList.add("diving");
    }

    public middleDive(xPosition: number): void {
        this.xPos = 0;
    } 

    public randomCorner() {
            
    }
    public update() {
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
}
}