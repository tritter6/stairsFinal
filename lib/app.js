"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stairs_1 = require("./stairs");
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.start = function () {
        var stairs = new stairs_1.Stairs();
        console.log("Number of ways for 2 steps is " + stairs.climbingStairs(2));
        console.log("Number of ways for 3 steps is " + stairs.climbingStairs(3));
        console.log("Number of ways for 4 steps is " + stairs.climbingStairs(4));
        console.log("Error case result for -1:" + stairs.climbingStairs(-1));
    };
    return App;
}());
var app = new App();
app.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFnQztBQUVoQztJQUFBO0lBV0EsQ0FBQztJQVZVLG1CQUFLLEdBQVo7UUFFSSxJQUFJLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBRTFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFekUsQ0FBQztJQUNMLFVBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQUVELElBQU0sR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFDdEIsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTdGFpcnN9IGZyb20gJy4vc3RhaXJzJztcclxuXHJcbmNsYXNzIEFwcHtcclxuICAgIHB1YmxpYyBzdGFydCgpe1xyXG5cclxuICAgICAgICBsZXQgc3RhaXJzID0gbmV3IFN0YWlycygpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk51bWJlciBvZiB3YXlzIGZvciAyIHN0ZXBzIGlzIFwiICsgc3RhaXJzLmNsaW1iaW5nU3RhaXJzKDIpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk51bWJlciBvZiB3YXlzIGZvciAzIHN0ZXBzIGlzIFwiICsgc3RhaXJzLmNsaW1iaW5nU3RhaXJzKDMpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk51bWJlciBvZiB3YXlzIGZvciA0IHN0ZXBzIGlzIFwiICsgc3RhaXJzLmNsaW1iaW5nU3RhaXJzKDQpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNhc2UgcmVzdWx0IGZvciAtMTpcIiArIHN0YWlycy5jbGltYmluZ1N0YWlycygtMSkpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XHJcbmFwcC5zdGFydCgpIl19