document.getElementById('checkPi').addEventListener('click', function() {
    const correctPi = "3.14159";
    let userInput = document.getElementById('piInput').value;
    
    if (userInput === correctPi) {
        document.getElementById('result').innerText = "Σωστό!";
        document.getElementById('result').style.color = "green";
    } else {
        document.getElementById('result').innerText = "Λάθος! Προσπάθησε ξανά.";
        document.getElementById('result').style.color = "red";
    }
});
