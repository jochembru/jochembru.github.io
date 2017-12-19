class Game {
    // Attributes
    private _element: HTMLElement;
    private _player: Player;
    private _keeper: Keeper;
    private _ball: Ball;
    private _scoreboard: Scoreboard;

    // Constructor
    constructor() {
        this._player = new Player('player', 0, 0);
        this._scoreboard = new Scoreboard('scoreboard'); 
        this._ball = new Ball('ball', 0, 200);


        this.draw();
    }

    

    // Methods

    // description
    public draw(): void {
        this._player.draw(this._element);
        this._scoreboard.draw(this._element);
      }
    // description
    public update() {
        this._player.update();
        this._scoreboard.update();
    }
    
    // description
    public KeyDownHandler(e: KeyboardEvent) {

    }
}
