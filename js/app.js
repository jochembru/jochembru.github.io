let app;
(function () {
    let init = function () {
        app = new Game();
        setTimeout(() => {
            console.log("Welkom alert");
            alert('Welkom bij deze vrije trappen game! Het doel van de game is om eerder dan de keeper vijf punten te halen. \n\nControls: \n- Beweeg door middel van de pijltjes toetsen. \n- Schiet door middel van de spatiebalk.\n \n Veel plezier!');
        }, 1000);
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
    replaceItem() {
        setTimeout(() => {
            this._xPos = 0;
        }, 1000);
    }
}
class Ball extends GameItem {
    constructor(name, xPosition = 0, yPosition = 0) {
        super(name, xPosition, yPosition);
    }
    shoot(yPosition) {
        console.log("Shoot!");
        this._yPos -= yPosition;
        this._element.classList.remove("moving");
        this._element.classList.add("shooting");
    }
    replaceB() {
        setTimeout(() => {
            this._yPos += 300;
            this._xPos = 110;
            this._element.classList.remove("shooting");
            this._element.classList.add("moving");
        }, 1000);
    }
}
class Game {
    constructor() {
        this._element = document.getElementById('container');
        this.keyDownHandler = (e) => {
            if (e.keyCode === 37) {
                this._player.left(260);
                this._ball.left(260);
            }
            else if (e.keyCode === 39) {
                this._player.right(260);
                this._ball.right(260);
            }
            else if (e.keyCode === 32) {
                this._ball.shoot(300);
                this._keeper.randomCorner();
                this.saveOrGoal();
                this.replaceItem();
            }
            this.noGoalMessage();
            this.goalMessage();
            this.update();
        };
        this._keeper = new Keeper("goalkeeper", 0, 540);
        this._scoreboardP = new ScoreboardP('scoreboardP');
        this._scoreboardGK = new ScoreboardGK('scoreboardGK');
        this._ball = new Ball('ball', 110, 620);
        this._player = new GameItem('player', 0, 280);
        window.addEventListener('keyup', this.keyDownHandler);
        this.draw();
    }
    saveOrGoal() {
        setTimeout(() => {
            const gkRect = document.getElementById("goalkeeper").getBoundingClientRect();
            const bRect = document.getElementById("ball").getBoundingClientRect();
            setTimeout(() => {
                const sumRect = (gkRect.right * gkRect.left) / (bRect.right * bRect.left);
                if (sumRect < 1 && sumRect > 0.9 && bRect.top != 919) {
                    try {
                        console.log("Save!");
                        this._scoreboardGK.addScoreGK();
                        this._scoreboardGK.update();
                    }
                    catch (err) {
                        console.log("Error. Deze poging telde niet mee.");
                    }
                }
                else if (bRect.left < 500 || bRect.left > 1300 || bRect.top < 500) {
                    try {
                        console.log("Miss!");
                        this._scoreboardGK.addScoreGK();
                        this._scoreboardGK.update();
                    }
                    catch (err) {
                        console.log("Error. Deze poging telde niet mee.");
                    }
                }
                else {
                    try {
                        console.log("Goal!");
                        this._scoreboardP.addScoreP();
                        this._scoreboardP.update();
                    }
                    catch (err) {
                        console.log("Error. Deze poging telde niet mee.");
                    }
                }
            }, 800);
        }, 600);
    }
    draw() {
        this._keeper.draw(this._element);
        this._ball.draw(this._element);
        this._player.draw(this._element);
        this._scoreboardP.draw(this._element);
        this._scoreboardGK.draw(this._element);
    }
    update() {
        this._player.update();
        this._ball.update();
        this._keeper.update();
    }
    replaceItem() {
        this._player.replaceItem();
        this._keeper.replaceItem();
        this._ball.replaceB();
    }
    goalMessage() {
        if (this._scoreboardP.gm === null) {
            ;
        }
        else {
            this._scoreboardP.removeGoal();
        }
    }
    noGoalMessage() {
        if (this._scoreboardGK.ngm === null) {
            ;
        }
        else {
            this._scoreboardGK.removeNoGoal();
        }
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
class ScoreboardGK extends GameItem {
    constructor(name) {
        super(name);
        this._scoreGK = 0;
    }
    get scoreGK() {
        return this._scoreGK;
    }
    get ngm() {
        return document.getElementById("noGoalMessage");
    }
    draw(container) {
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;
        const gk = document.createElement("p");
        gk.innerHTML = "Keeper: ";
        const spanGK = document.createElement("span");
        spanGK.innerHTML = this._scoreGK.toString();
        gk.appendChild(spanGK);
        this._element.appendChild(gk);
        container.appendChild(this._element);
    }
    update() {
        const scoreSpanGK = this._element.childNodes[0].childNodes[1];
        scoreSpanGK.innerHTML = this._scoreGK.toString();
    }
    noGoal(container) {
        const saveDiv = document.createElement('div');
        saveDiv.className = ("noGoalMessage");
        saveDiv.id = ("noGoalMessage");
        const noGoal = document.createElement("p");
        noGoal.innerHTML = "NO GOAL!";
        const click = document.createElement("p");
        click.innerHTML = "Press ESC to continue.";
        saveDiv.appendChild(noGoal);
        saveDiv.appendChild(click);
        container.appendChild(saveDiv);
        console.log("no goal message");
    }
    removeNoGoal() {
        const ngm = document.getElementById("noGoalMessage");
        ngm.parentNode.removeChild(ngm);
    }
    missSound() {
        const misser = document.getElementById("audioMiss");
        misser.play();
    }
    lossSound() {
        const lossSound = document.getElementById("audioLoss");
        lossSound.play();
    }
    addScoreGK() {
        this._scoreGK += 1;
        if (this._scoreGK >= 5) {
            this.lossSound();
            setTimeout(() => {
                console.log("Keeper won");
                alert("Jammer, je hebt verloren! \nKlik op OK om het opnieuw te proberen!");
                location.reload();
            }, 1000);
        }
        this.missSound();
        const container = document.getElementById("container");
        this.noGoal(container);
    }
}
class ScoreboardP extends GameItem {
    constructor(name) {
        super(name);
        this._scoreP = 0;
    }
    get scoreP() {
        return this._scoreP;
    }
    get gm() {
        return document.getElementById("goalMessage");
    }
    draw(container) {
        this._element = document.createElement('div');
        this._element.className = this._name;
        this._element.id = this._name;
        const p = document.createElement("p");
        p.innerHTML = "Player: ";
        const spanP = document.createElement("span");
        spanP.innerHTML = this._scoreP.toString();
        p.appendChild(spanP);
        this._element.appendChild(p);
        container.appendChild(this._element);
    }
    update() {
        const scoreSpanP = this._element.childNodes[0].childNodes[1];
        scoreSpanP.innerHTML = this._scoreP.toString();
    }
    goal(container) {
        const goalDiv = document.createElement('div');
        goalDiv.className = ("goalMessage");
        goalDiv.id = ("goalMessage");
        const goal = document.createElement("p");
        goal.innerHTML = "GOAL!";
        const click = document.createElement("p");
        click.innerHTML = "Press ESC to continue.";
        goalDiv.appendChild(goal);
        goalDiv.appendChild(click);
        container.appendChild(goalDiv);
        console.log("Goal message");
    }
    removeGoal() {
        const rg = document.getElementById("goalMessage");
        rg.parentNode.removeChild(rg);
    }
    goalSound() {
        const goalSound = document.getElementById("audioGoal");
        goalSound.play();
    }
    winSound() {
        const winSound = document.getElementById("audioWin");
        winSound.play();
    }
    addScoreP() {
        this._scoreP += 1;
        if (this._scoreP >= 5) {
            this.winSound();
            setTimeout(() => {
                console.log("You won");
                alert("Gefeliciteerd, je hebt gewonnen!\nKlik op OK om je score te verbeteren!");
                location.reload();
            }, 1000);
        }
        this.goalSound();
        const container = document.getElementById("container");
        this.goal(container);
    }
}
//# sourceMappingURL=app.js.map