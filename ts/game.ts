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
        this._ball = new Ball('ball', 110, 620);
        this._player = new Player('player', 0, 280);

        window.addEventListener('keydown', this.keyDownHandler);

        this.draw();


    }

    // Methods


    /**
     * See if it is a goal or not.
     * 
     * If statement:
     * If the ball is at the same direction as the goal keeper,
     * the answer of sumRect will be approximately 0.93. 
     * 0.93 is less than 1 and more than 0.9. When the player 
     * hasn't shoot yet, the 'top' of the ball rectangle will be
     * at a y-position of 919. 
     * 
     * @const delay - The amount of ms it waits
     * 
     *  @function setTimeout - This function is necessary. It waits until the
     * animation of the ball, keeper & player is done. 
     * 
     * @const gkRect - Get the rectangle of the goal keeper
     * @const bRect - Get the rectangle of the ball
     * @const sumRect - Sum to see if the ball is at the same direction as the keeper
     */
    public saveOrGoal () {
        const delay: number = 1500; // Time in ms
        setTimeout(function() {

            const gkRect = document.getElementById("GKPos1").getBoundingClientRect();
            const bRect = document.getElementById("ball").getBoundingClientRect();
    
            const sumRect = (gkRect.right * gkRect.left) / (bRect.right * bRect.left);
    
            if(sumRect < 1 && sumRect > 0.9 && bRect.top != 919) {
                console.log("Save!");
            } 
            else if (bRect.top === 919) {
                console.log("Choosing position..");
            } 
            else {
                console.log("Goal!");
            }

        }, delay);
    }


    /**
     * Method to draw all the game items
     */
    public draw(): void {
        this._keeper.draw(this._element);
        this._ball.draw(this._element);
        this._player.draw(this._element);  
        this._scoreboard.draw(this._element);
    }

    /**
     * Method to update all the game items
     */
    public update1() {
        this._player.update();
        this._ball.update();
        this._keeper.update();
        this._scoreboard.update();
        this.saveOrGoal();
    }
    
    public update2() {
        this._player.update();
        this._ball.update();
    }

    /**
     * Events
     * - Keycode 37 --> left arrow
     * - Keycode 39 --> right arrow
     * - Keycode 32 --> spacebar
     * 
     * The value between the parentheses
     * is the amount of pixels.
     */
    public keyDownHandler = (e: KeyboardEvent): void => {
        if(e.keyCode === 37) {
            this._player.left(260);
            this._ball.left(260);
        } 
        else if(e.keyCode === 39) {
            this._player.right(260);
            this._ball.right(260);   
        } 
        else if(e.keyCode === 32) {
            this._ball.shoot(300);
            this._keeper.randomCorner(); 
            this.update1();          
        }
        this.update2();
     }

}

/**
 * Delay code:
*       const delay: number = 1000; // Time in ms
        setTimeout(function() {
            console.log("test"); // Your code
        }, delay);
 */