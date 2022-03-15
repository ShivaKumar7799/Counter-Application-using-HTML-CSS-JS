function Counter(name,playerId){
        let counter = 0;
        function increment(){
                counter++;
                document.getElementById(playerId).innerHTML = counter;
        }
        function decrement(){
                counter--;
                document.getElementById(playerId).innerHTML = counter;
        }
        function reset(){
                counter = 0;
                document.getElementById(playerId).innerHTML = counter;
        }
        return {
                increment: increment,
                decrement: decrement,
                reset : reset
        }
}

let player1= Counter(player1Id,"player1Id");
let player2 = Counter("Player2","player2Id");


