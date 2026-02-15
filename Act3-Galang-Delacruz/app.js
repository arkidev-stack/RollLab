const dice = document.getElementById("dice");
const diceFaces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

dice.addEventListener("click", rollDice);

function rollDice() {

    let rollCount = 0;
    const maxRolls = 15;

    const rolling = setInterval(() => {

        let randomIndex = Math.floor(Math.random() * 6);
        dice.textContent = diceFaces[randomIndex];
        dice.style.transform = `rotate(${rollCount * 25}deg)`;

        rollCount++;

        if (rollCount >= maxRolls) {
            clearInterval(rolling);

            let finalIndex = Math.floor(Math.random() * 6);
            dice.textContent = diceFaces[finalIndex];

            changeBackground(finalIndex + 1);

            dice.style.transform = "rotate(0deg)";
        }

    }, 100);
}

function changeBackground(number) {

    const colors = {
        1: "#FF6B6B",
        2: "#4ECDC4",
        3: "#FFD93D",
        4: "#6C5CE7",
        5: "#00B894",
        6: "#FF9F1C"
    };

    document.body.style.background = colors[number];
}
