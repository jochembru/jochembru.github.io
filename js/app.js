let app;
(function () {
    let init = function () {
        app = new Game();
    };
    window.addEventListener('load', init);
})();
class Ball extends GameItem {
}
class Game {
    constructor() {
    }
    draw() {
    }
    update() {
    }
    KeyDownHandler(e) {
    }
}
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
    draw() {
    }
    replace() {
    }
    update() {
    }
}
class Keeper extends GameItem {
    move() {
    }
    randomCorner() {
    }
}
class Player extends GameItem {
    move() {
    }
    shoot() {
    }
}
class Scoreboard extends GameItem {
    update() {
    }
    addScoreP() {
    }
    addScoreGK() {
    }
}
//# sourceMappingURL=app.js.map