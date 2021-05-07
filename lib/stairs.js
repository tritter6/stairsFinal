"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stairs = void 0;
var Stairs = /** @class */ (function () {
    function Stairs() {
    }
    Stairs.prototype.climbingStairs = function (totalSteps) {
        try {
            if (totalSteps < 0)
                throw new Error("ERROR: The total number of steps must be greater than or equal to zero.");
            return this.determinePossibleSteps(totalSteps);
        }
        catch (e) {
            console.log(e);
            return 0;
        }
    };
    //recursive function to work from top down for the number of stairs
    Stairs.prototype.determinePossibleSteps = function (steps) {
        if (steps === 1 || steps === 0) // only one step possible
            return 1;
        else if (steps === 2) //(1+1 and 2)
            return 2;
        else {
            //can take a eiter 1 or 2 stair steps max.
            return this.determinePossibleSteps(steps - 2) + this.determinePossibleSteps(steps - 1);
        }
    };
    return Stairs;
}());
exports.Stairs = Stairs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhaXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3N0YWlycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQTtJQUVJO0lBQWUsQ0FBQztJQUVULCtCQUFjLEdBQXJCLFVBQXNCLFVBQWtCO1FBRXBDLElBQ0E7WUFDQSxJQUFJLFVBQVUsR0FBRyxDQUFDO2dCQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMseUVBQXlFLENBQUMsQ0FBQztZQUU5RixPQUFPLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUMvQztRQUNELE9BQU8sQ0FBQyxFQUNSO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLE9BQU8sQ0FBQyxDQUFDO1NBQ1o7SUFFTCxDQUFDO0lBRUQsbUVBQW1FO0lBQzNELHVDQUFzQixHQUE5QixVQUFnQyxLQUFZO1FBRXhDLElBQUksS0FBSyxLQUFLLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFLHlCQUF5QjtZQUNyRCxPQUFPLENBQUMsQ0FBQzthQUVSLElBQUcsS0FBSyxLQUFLLENBQUMsRUFBRSxhQUFhO1lBQzlCLE9BQU8sQ0FBQyxDQUFDO2FBR2I7WUFDSSwwQ0FBMEM7WUFDMUMsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDMUY7SUFDTCxDQUFDO0lBRUwsYUFBQztBQUFELENBQUMsQUFyQ0QsSUFxQ0M7QUFyQ1ksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGFpcnNcclxue1xyXG4gICAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICAgIHB1YmxpYyBjbGltYmluZ1N0YWlycyh0b3RhbFN0ZXBzOiBudW1iZXIgKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIHRyeVxyXG4gICAgICAgIHtcclxuICAgICAgICBpZiAodG90YWxTdGVwcyA8IDApXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVSUk9SOiBUaGUgdG90YWwgbnVtYmVyIG9mIHN0ZXBzIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHplcm8uXCIpO1xyXG5cclxuICAgICAgICAgcmV0dXJuIHRoaXMuZGV0ZXJtaW5lUG9zc2libGVTdGVwcyh0b3RhbFN0ZXBzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vcmVjdXJzaXZlIGZ1bmN0aW9uIHRvIHdvcmsgZnJvbSB0b3AgZG93biBmb3IgdGhlIG51bWJlciBvZiBzdGFpcnNcclxuICAgIHByaXZhdGUgZGV0ZXJtaW5lUG9zc2libGVTdGVwcyAoc3RlcHM6bnVtYmVyKSA6IG51bWJlclxyXG4gICAge1xyXG4gICAgICAgIGlmIChzdGVwcyA9PT0gMSB8fCBzdGVwcyA9PT0gMCkgLy8gb25seSBvbmUgc3RlcCBwb3NzaWJsZVxyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuXHJcbiAgICAgICAgZWxzZSBpZihzdGVwcyA9PT0gMikgLy8oMSsxIGFuZCAyKVxyXG4gICAgICAgICAgICByZXR1cm4gMjtcclxuXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9jYW4gdGFrZSBhIGVpdGVyIDEgb3IgMiBzdGFpciBzdGVwcyBtYXguXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRldGVybWluZVBvc3NpYmxlU3RlcHMoc3RlcHMgLSAyKSArIHRoaXMuZGV0ZXJtaW5lUG9zc2libGVTdGVwcyhzdGVwcyAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59Il19