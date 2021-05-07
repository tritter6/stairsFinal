

export class Stairs
{
    constructor() {}

    public climbingStairs(totalSteps: number ) : number
    {
        try
        {
        if (totalSteps < 0)
            throw new Error("ERROR: The total number of steps must be greater than or equal to zero.");

         return this.determinePossibleSteps(totalSteps);
        }
        catch (e)
        {
            console.log(e);
            return 0;
        }
        
    }

    //recursive function to work from top down for the number of stairs
    private determinePossibleSteps (steps:number) : number
    {
        if (steps === 1 || steps === 0) // only one step possible
            return 1;

        else if(steps === 2) //(1+1 and 2)
            return 2;

        else
        {
            //can take a eiter 1 or 2 stair steps max.
            return this.determinePossibleSteps(steps - 2) + this.determinePossibleSteps(steps - 1);
        }
    }
    
}