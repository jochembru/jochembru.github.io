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
        this._element.classList.add("moving");
    }
    right(xPosition) {
        this._xPos += xPosition;
        this._element.classList.add("moving");
    }
}
class Ball extends GameItem {
    constructor(name, xPosition = 0, yPosition = 0) {
        super(name, xPosition, yPosition);
    }
    shoot(yPosition) {
        this._yPos -= yPosition;
        this._element.classList.add("shooting");
    }
}
class Game {
    constructor() {
        this._element = document.getElementById('container');
        this.keyDownHandler = (e) => {
            if (e.keyCode === 37) {
                this._player.left(330);
                this._ball.left(330);
            }
            else if (e.keyCode === 39) {
                this._player.right(330);
                this._ball.right(330);
            }
            else if (e.keyCode === 32) {
                this._ball.shoot(260);
                this._keeper.randomCorner();
            }
            this.update();
        };
        this._keeper = new Keeper("GKPos1", 0, 540);
        this._scoreboard = new Scoreboard('scoreboard');
        this._ball = new Ball('ball', 110, 620);
        this._player = new Player('player', 0, 280);
        window.addEventListener('keydown', this.keyDownHandler);
        this.draw();
    }
    collision() {
        const gkRect = document.getElementById("GKPos1").getBoundingClientRect();
        const bRect = document.getElementById("ball").getBoundingClientRect();
        if (bRect.left - gkRect.left < 200 && bRect.left - gkRect.left > 0 && bRect.top - gkRect.top === 111) {
            console.log("SAVE!");
        }
        else {
            console.log("GOAL!");
        }
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
        this.collision();
    }
}
class Keeper extends GameItem {
    constructor(name, xPosition = 0, yPosition = 0) {
        super(name, xPosition, yPosition);
    }
    leftDive(xPosition) {
        this._xPos -= xPosition;
        this._element.classList.add("diving");
    }
    rightDive(xPosition) {
        this._xPos += xPosition;
        this._element.classList.add("diving");
    }
    midDive(xPosition) {
        this.xPos = 0;
    }
    randomCorner() {
        let rn = Math.floor((Math.random() * 3));
        console.log("Random number: " + rn);
        if (rn === 0) {
            this.leftDive(250);
        }
        else if (rn === 1) {
            this.rightDive(250);
        }
        else {
            this.midDive(0);
        }
    }
}
class Player extends GameItem {
    constructor(name, xPosition = 0, yPosition = 0) {
        super(name, xPosition, yPosition);
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