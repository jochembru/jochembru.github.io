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
            alert('Welkom bij mijn spel. Het doel van het spel is om eerder dan de keeper vijf punten te halen. \n\nControls: \n- Beweeg door middel van de pijltjes toetsen. \n- Schiet door middel van de spatiebalk. \n- Gebruik vervolgens na het schieten het pijltje naar beneden om opnieuw te schieten. \n \n Veel plezier!');
            }, 1000); // in ms 
    };

    window.addEventListener('load', init);
})();