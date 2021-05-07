import {Stairs} from './stairs';

class App{
    public start(){

        let stairs = new Stairs();

        console.log("Number of ways for 2 steps is " + stairs.climbingStairs(2));
        console.log("Number of ways for 3 steps is " + stairs.climbingStairs(3));
        console.log("Number of ways for 4 steps is " + stairs.climbingStairs(4));
        console.log("Error case result for -1:" + stairs.climbingStairs(-1));
        
    }
}

const app = new App();
app.start()