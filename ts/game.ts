class Game {
    // Attributes
    private _element: HTMLElement = document.getElementById('container');
    private _player: Player;
    private _keeper: Keeper;
    private _ball: Ball;
    private _scoreboard: Scoreboard;

    // Constructor
    constructor() {
        this._keeper = new Keeper("GKPos1", 0, 540);
        this._scoreboard = new Scoreboard('scoreboard'); 
        this._ball = new Ball('ball', 62, 620);
        this._player = new Player('player', 0, 280);

        // Three positions for player.

        // -450, -20 & 550
        
        window.addEventListener('keydown', this.keyDownHandler);

        this.draw();
    }

    

    // Methods

    // description
    public draw(): void {
        this._keeper.draw(this._element);
        this._ball.draw(this._element);
        this._player.draw(this._element);  
        this._scoreboard.draw(this._element);
    }

    // description
    public update() {
        this._player.update();
        this._ball.update();
        this._keeper.update();
        this._scoreboard.update();
    }
    
    // description
    public keyDownHandler = (e: KeyboardEvent): void => {
        // left arrow
        // player & ball 500px to left
        if(e.keyCode === 37) {
            this._player.left(330);
            this._player.update();

            this._ball.left(330);
            this._ball.update();
        }

        // right arrow
        // player & ball 500px to right
        else if(e.keyCode === 39) {
            this._player.right(330);
            this._player.update();
           
            this._ball.right(330); 
            this._ball.update();
        }

        else if(e.keyCode === 32) {
            this._ball.shoot(260);
            this._ball.update();

            // eventually 
            // this._keeper.randomCorner()

            // test
            this._keeper.rightDive(250);
            this._keeper.update();
        }

        else {
            console.log("Unknown key");
        }
    }
}
