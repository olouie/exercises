var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0

while (slaying) {
    if (youHit) {
        console.log("You've hit the dragon!");
        totalDamage += damageThisRound;
        if (totalDamage >= 4) {
            console.log("You've slayed the dragon!");
            slaying = false;
        }
    } else {
        console.log("You missed! The dragon has eaten you!");
        slaying = false;
    }
}