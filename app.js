function flipCoin() {
    // Generate a random number: 0 or 1
    var result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    
    // Display the result in the result div
    document.getElementById('result').innerText = result;
}