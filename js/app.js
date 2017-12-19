let app;
(function () {
    let init = function () {
        app = new Game();
    };
    window.addEventListener('load', init);
})();
class GameItem {
    constructor(name, xPosition = 0, yPosition = 0) {
        this._name = name;
        this._xPos = xPosition;
        this._yPos = yPosition;
    }
    set xPos(xPosition) {
        this._xPos = xPosition;
    }
    set yPos(yPosition) {
        this._yPos = yPosition;
    }
    draw(container) {
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
        const image = document.createElement('img');
        image.src = `./assets/images/${this._name}.png `;
        this._element.appendChild(image);
        container.appendChild(this._element);
        console.log(this._name + " drawn");
    }
    replace() {
    }
    update() {
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
    }
}
class Ball extends GameItem {
    constructor(name, xPosition = 0, yPosition = 0) {
        super(name, xPosition, yPosition);
    }
}
class Game {
    constructor() {
        this._element = document.getElementById('container');
        this._player = new Player('player', 0, 0);
        this._scoreboard = new Scoreboard('scoreboard');
        this._ball = new Ball('ball', 0, 200);
        window.addEventListener('keydown', this.keyDownHandler);
        this.draw();
    }
    draw() {
        this._player.draw(this._element);
        this._ball.draw(this._element);
    }
    update() {
        this._player.update();
        this._ball.update();
    }
    keyDownHandler(e) {
    }
}
class Keeper extends GameItem {
    constructor(name, xPosition = 0, yPosition = 0) {
        super(name, xPosition, yPosition);
    }
    move() {
    }
    randomCorner() {
    }
}
class Player extends GameItem {
    constructor(name, xPosition = 0, yPosition = 0) {
        super(name, xPosition, yPosition);
    }
    move() {
    }
    shoot() {
    }
}
class Scoreboard extends GameItem {
    constructor(name) {
        super(name);
        this._scoreP = 0;
        this._scoreGK = 0;
    }
    update() {
    }
    addScoreP() {
    }
    addScoreGK() {
    }
}
//# sourceMappingURL=app.js.map