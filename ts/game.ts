class Game {
    // Attributes
    private _element: HTMLElement = document.getElementById('container');
    private _player: GameItem;
    private _keeper: Keeper;
    private _ball: Ball;
    private _scoreboardP: ScoreboardP;
    private _scoreboardGK: ScoreboardGK;

    // Constructor
    constructor() {
        this._keeper = new Keeper("goalkeeper", 0, 540);
        this._scoreboardP = new ScoreboardP('scoreboardP'); 
        this._scoreboardGK = new ScoreboardGK('scoreboardGK');
        this._ball = new Ball('ball', 110, 620);
        this._player = new GameItem('player', 0, 280);

        window.addEventListener('keyup', this.keyDownHandler);

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
     * @function setTimeout 1 - This function is necessary. It waits until the
     * animation of the ball, keeper & player is done. 
     * @function setTimeout 2 - A new function. When a player shoots and see
     * that the goalkeeper is at the same direction where he wants to shoot. 
     * He can change his direction and it is a goal. Because of this function, 
     * it will count as a save.
     * 
     * @const gkRect - Get the rectangle of the goal keeper
     * @const bRect - Get the rectangle of the ball
     * @const sumRect - Sum to see if the ball is at the same direction as the keeper
     */
    public saveOrGoal (): void {
        setTimeout( () => {
            const gkRect = document.getElementById("goalkeeper").getBoundingClientRect();
            const bRect = document.getElementById("ball").getBoundingClientRect();

            // console.log(bRect);
        setTimeout( () => {
            const sumRect = (gkRect.right * gkRect.left) / (bRect.right * bRect.left);
            if(sumRect < 1 && sumRect > 0.9 && bRect.top != 919) {
                try {
                    console.log("Save!");
                    this._scoreboardGK.addScoreGK();
                    this._scoreboardGK.update();
                }
                catch(err) {
                    console.log("Error. Deze poging telde niet mee.")
                }
            } 
            else if (bRect.left < 500 || bRect.left > 1300 || bRect.top < 500) {
                try {
                    console.log("Miss!");
                    this._scoreboardGK.addScoreGK();
                    this._scoreboardGK.update();
                } 
                catch(err) {
                    console.log("Error. Deze poging telde niet mee.")
                    }
            }
            else {
                try {
                    console.log("Goal!");
                    this._scoreboardP.addScoreP();
                    this._scoreboardP.update();
                }
                catch(err) {
                    console.log("Error. Deze poging telde niet mee.")
                }
            }
        }, 800);
        }, 600);
    }

    /**
     * Method to draw all the game items
     */
    public draw(): void {
        this._keeper.draw(this._element);
        this._ball.draw(this._element);
        this._player.draw(this._element);  
        this._scoreboardP.draw(this._element);
        this._scoreboardGK.draw(this._element);
    }

    /**
     * Method to update all the game items
     */
    public update(): void {
        this._player.update();
        this._ball.update();
        this._keeper.update();
    }

    /**
     * Method to replace all the game items
     */
    public replaceItem(): void {
        this._player.replaceItem();
        this._keeper.replaceItem();
        this._ball.replaceB();
    }
    
    /**
     * Message that will appear after scoring
     */
    public goalMessage() {
        if (this._scoreboardP.gm === null) {
            ;
        } else {
            this._scoreboardP.removeGoal();
        }
    }
    
    /**
     * Message that will apear after not scoring
     * (miss or save)
     */

    public noGoalMessage() {
        if (this._scoreboardGK.ngm === null) {
            ;
        } else {
            this._scoreboardGK.removeNoGoal();
        }
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
            this.saveOrGoal();  
            this.replaceItem(); 
        }
        this.noGoalMessage();
        this.goalMessage();
        this.update();
     }
}