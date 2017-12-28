class GameItem {
    // Attributes
    protected _element: HTMLElement;
    protected _name: string;
    protected _xPos: number;
    protected _yPos: number;

    // Constructor

    /**
     * Constructor to create the GameItem
     * @param name - The name of the item
     * @param xPosition - The position horizontally
     * @param yPosition - The position vertically
     */
    constructor(name: string, xPosition: number = 0, yPosition: number = 0) {
        this._name = name
        this._xPos = xPosition;
        this._yPos = yPosition;
    }

    /**
     * Set the x and y position of the game items
     */
    public set xPos(xPosition: number) {
        this._xPos = xPosition;
    }
    public set yPos(yPosition: number) {
        this._yPos = yPosition;
    }

    // Methods

    /**
     * Method to draw all the game items
     * @param container - Name of the div
     */
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

    /**
     * Method to update all the game items
     */
    public update(): void {
            this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
    }

    /**
     * Move a game item to the left or right
     * @param xPosition - The amount of pixels it will change horizontally
     * @param yPosition - The amount of pixels it will change vertically
     */
    public left(xPosition: number): void {
        this._xPos -= xPosition;
        this._element.classList.add("moving");
    }
    
    public right(xPosition: number): void {
        this._xPos += xPosition;
        this._element.classList.add("moving");
    }

    public replaceItem(): void {
        setTimeout( () => {
        this._xPos = 0;
        }, 2000);
}
}