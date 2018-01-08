//this is my constant where game and events meet
let app: any;

(function () {
    /**
     * Run after dom is ready
     */
    let init = function () {
        app = new Game();
        // Message when you load the game. The controls etc.
        setTimeout( () => {
            console.log("Welkom alert");
            alert('Welkom bij deze vrije trappen game! Het doel van de game is om eerder dan de keeper vijf punten te halen. \n\nControls: \n- Beweeg door middel van de pijltjes toetsen. \n- Schiet door middel van de spatiebalk.\n \n Veel plezier!');
            }, 1000); // in ms 
    };

    window.addEventListener('load', init);
})();