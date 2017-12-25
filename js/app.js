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
    update() {
        this._element.style.transform = `translate(${this._xPos}px, ${this._yPos}px)`;
    }
    left(xPosition) {
        this._xPos -= xPosition;
        this._element.classList.add("flying");
    }
    right(xPosition) {
        this._xPos += xPosition;
        this._element.classList.add("flying");
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
        this.keyDownHandler = (e) => {
            if (e.keyCode === 37) {
                this._player.left(500);
                this._ball.left(500);
                this._player.update();
                this._ball.update();
            }
            else if (e.keyCode === 39) {
                this._player.right(500);
                this._ball.right(500);
                this._player.update();
                this._ball.update();
            }
            else {
                console.log("Unknown key");
            }
        };
        this._keeper = new Keeper("GKPos1", 0, 540);
        this._scoreboard = new Scoreboard('scoreboard');
        this._ball = new Ball('ball', 42, 620);
        this._player = new Player('player', -20, 280);
        window.addEventListener('keydown', this.keyDownHandler);
        this.draw();
    }
    draw() {
        this._keeper.draw(this._element);
        this._ball.draw(this._element);
        this._player.draw(this._element);
        this._scoreboard.draw(this._element);
    }
    update() {
        this._player.update();
        this._ball.update();
        this._keeper.update();
        this._scoreboard.update();
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
    get scoreP() {
        return this._scoreP;
    }
    get scoreGK() {
        return this._scoreGK;
    }
    draw(container) {
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;
        const p = document.createElement("p");
        p.innerHTML = "Player: ";
        const gk = document.createElement("p");
        gk.innerHTML = "Keeper: ";
        const spanP = document.createElement("span");
        spanP.innerHTML = this._scoreP.toString();
        const spanGK = document.createElement("span");
        spanGK.innerHTML = this._scoreGK.toString();
        p.appendChild(spanP);
        this._element.appendChild(p);
        gk.appendChild(spanGK);
        this._element.appendChild(gk);
        container.appendChild(this._element);
    }
    update() {
        const scoreSpanP = this._element.childNodes[0].childNodes[1];
        scoreSpanP.innerHTML = this._scoreP.toString();
        const scoreSpanGK = this._element.childNodes[0].childNodes[1];
        scoreSpanGK.innerHTML = this._scoreGK.toString();
    }
    addScoreP() {
        this._scoreP++;
    }
    addScoreGK() {
        this._scoreGK++;
    }
}
//# sourceMappingURL=app.js.map