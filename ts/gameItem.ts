class GameItem {
    // Attributes
    protected _element: HTMLElement;
    protected _name: string;
    protected _xPos: number;
    protected _yPos: number;

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
    public draw(container: HTMLElement): void {
        // Create a div
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;

        // Create image
        const image = document.createElement('img');
        image.src = `./assets/images/${this._name}.png `;

        // Append elements
        this._element.appendChild(image);
        container.appendChild(this._element);
        console.log(this._name + " drawn");

    }
    // description
    // public replace() {
        
    // }

    // description
    public update() {
            this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
    }

    public left(xPosition: number): void {
        this._xPos -= xPosition;
        this._element.classList.add("flying");
    }

    public right(xPosition: number): void {
        this._xPos += xPosition;
        this._element.classList.add("flying");
    }
}